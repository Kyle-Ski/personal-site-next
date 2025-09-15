"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import {
    Star,
    Calendar,
    DollarSign,
    Weight,
    Package,
    CheckCircle,
    XCircle,
    ExternalLink,
    ArrowLeft,
    Clock,
    MapPin,
    Award
} from "lucide-react"
import { PortableText } from '@portabletext/react'
import { GearReview } from "@/lib/cmsProvider"
import styles from '@/styles/GearReviewDetail.module.css'
import EnhancedImageGallery from "./EnhancedImageGallery"
import SocialShare from "../SocialShare"
import { portableTextComponents } from "@/utils/portableTextComponents"

interface GearReviewDetailProps {
    review: GearReview
}

// Utility function to create unified tags with consistent formatting
const createUnifiedTags = (review: GearReview) => {
    const categoryActivityTags: Array<{ text: string; original: string }> = []
    const seasonTags: Array<{ text: string; original: string }> = []

    // Add categories
    if (review.gearCategories?.length > 0) {
        review.gearCategories.forEach(category => {
            categoryActivityTags.push({
                text: category.title,
                original: category.title
            })
        })
    }

    // Add activities
    if (review.activities && review.activities?.length > 0) {
        review.activities.forEach(activity => {
            categoryActivityTags.push({
                text: activity.replace('-', ' '),
                original: activity
            })
        })
    }

    // Add seasons
    if (review.seasons && review.seasons?.length > 0) {
        review.seasons.forEach(season => {
            seasonTags.push({
                text: season,
                original: season
            })
        })
    }

    // Remove duplicates and normalize capitalization for each group
    const uniqueCategoryActivityTags = categoryActivityTags
        .filter((tag, index, self) => {
            const normalizedText = tag.text.toLowerCase().trim()
            return index === self.findIndex(t => t.text.toLowerCase().trim() === normalizedText)
        })
        .map(tag => ({
            ...tag,
            text: tag.text.charAt(0).toUpperCase() + tag.text.slice(1).toLowerCase() // Title case
        }))
        .sort((a, b) => a.text.localeCompare(b.text))

    const uniqueSeasonTags = seasonTags
        .filter((tag, index, self) => {
            const normalizedText = tag.text.toLowerCase().trim()
            return index === self.findIndex(t => t.text.toLowerCase().trim() === normalizedText)
        })
        .map(tag => ({
            ...tag,
            text: tag.text.charAt(0).toUpperCase() + tag.text.slice(1).toLowerCase() // Title case
        }))
        .sort((a, b) => a.text.localeCompare(b.text))

    return {
        categoryActivityTags: uniqueCategoryActivityTags,
        seasonTags: uniqueSeasonTags
    }
}

// Unified tags component
const UnifiedTagsSection = ({ review }: { review: GearReview }) => {
    const { categoryActivityTags, seasonTags } = createUnifiedTags(review)

    if (categoryActivityTags.length === 0 && seasonTags.length === 0) return null

    return (
        <div className={styles.tagsSection}>
            {/* Categories & Activities */}
            {categoryActivityTags.length > 0 && (
                <div className={styles.tagGroup}>
                    <h4>Categories & Activities</h4>
                    <div className={styles.tags}>
                        {categoryActivityTags.map((tag, index) => (
                            <span
                                key={`category-activity-${tag.original}-${index}`}
                                className={`${styles.tag} ${styles.category}`}
                            >
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Seasons */}
            {seasonTags.length > 0 && (
                <div className={styles.tagGroup}>
                    <h4>Seasons</h4>
                    <div className={styles.tags}>
                        {seasonTags.map((tag, index) => (
                            <span
                                key={`season-${tag.original}-${index}`}
                                className={`${styles.tag} ${styles.season}`}
                            >
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default function GearReviewDetail({ review }: GearReviewDetailProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [loadingImageIndex, setLoadingImageIndex] = useState<number | null>(null)
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))
    const [isModalOpen, setIsModalOpen] = useState(false)

    const renderStars = (rating: number, size: 'small' | 'medium' | 'large' = 'medium') => {
        const starSize = size === 'small' ? 14 : size === 'medium' ? 18 : 24
        return (
            <div className={`${styles.starRating} ${styles[size]}`}>
                {[1, 2, 3, 4, 5].map(star => (
                    <Star
                        key={star}
                        size={starSize}
                        className={star <= rating ? styles.starFilled : styles.starEmpty}
                    />
                ))}
                <span className={styles.ratingText}>({rating}/5)</span>
            </div>
        )
    }

    const optimizeImageUrl = (url: string, width = 600) => {
        if (url.includes('cdn.sanity.io')) {
            return `${url}?w=${width}&auto=format&q=75`
        }
        return url
    }

    const handleImageSelect = (index: number) => {
        if (index === selectedImageIndex) return

        setLoadingImageIndex(index)

        // Only update selection after image is loaded
        if (loadedImages.has(index)) {
            setSelectedImageIndex(index)
            setLoadingImageIndex(null)
        } else {
            // Preload the image
            const img = new window.Image()
            img.src = optimizeImageUrl(allImages[index].url)
            img.onload = () => {
                setLoadedImages(prev => new Set(prev).add(index))
                setSelectedImageIndex(index)
                setLoadingImageIndex(null)
            }
            img.onerror = () => {
                // Fallback after timeout
                setTimeout(() => {
                    setSelectedImageIndex(index)
                    setLoadingImageIndex(null)
                }, 1000)
            }
        }
    }

    const getRatingColor = (rating: number) => {
        if (rating >= 4) return styles.ratingExcellent
        if (rating >= 3) return styles.ratingGood
        if (rating >= 2) return styles.ratingFair
        return styles.ratingPoor
    }

    const formatTimeUsed = (timeUsed: string) => {
        const timeMap: Record<string, string> = {
            '<1-month': 'Less than 1 month',
            '1-6-months': '1-6 months',
            '6-12-months': '6 months - 1 year',
            '1-2-years': '1-2 years',
            '2+-years': '2+ years'
        }
        return timeMap[timeUsed] || timeUsed
    }

    // Get all images including main image and gallery
    const allImages = [
        { url: review.mainImage, alt: review.gearName, caption: 'Main product image' },
        ...(review.gallery || []).map(img => ({
            url: img.asset.url,
            alt: img.alt || review.gearName,
            caption: img.caption || ''
        }))
    ].filter(img => img.url)

    useEffect(() => {
        const preloadImage = (index: number) => {
            if (index >= 0 && index < allImages.length && !loadedImages.has(index)) {
                const img = new window.Image()
                img.src = optimizeImageUrl(allImages[index].url)
                img.onload = () => {
                    setLoadedImages(prev => new Set(prev).add(index))
                }
            }
        }

        // Preload current, next, and previous images
        preloadImage(selectedImageIndex)
        preloadImage(selectedImageIndex + 1)
        preloadImage(selectedImageIndex - 1)
    }, [selectedImageIndex, allImages, loadedImages])

    const getRatingColorClasses = (rating: any) => {
        if (rating >= 4) return 'bg-green-600'; // Excellent
        if (rating >= 3) return 'bg-lime-600';  // Good  
        if (rating >= 2) return 'bg-yellow-500'; // Fair
        return 'bg-red-600'; // Poor
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Back Navigation */}
                <div className={styles.backNav}>
                    <Link href="/gear/reviews" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        Back to Gear Reviews
                    </Link>
                </div>

                {/* Header Section */}
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <div className={styles.brandInfo}>
                            <span className={styles.brand}>{review.brand}</span>
                            {review.model && <span className={styles.model}>{review.model}</span>}
                        </div>
                        <h1 className={styles.gearName}>{review.gearName}</h1>
                        <h2 className={styles.reviewTitle}>{review.title}</h2>

                        <div className={styles.headerMeta}>
                            {renderStars(review.overallRating, 'large')}
                            <div className={styles.metaInfo}>
                                <div className={styles.metaItem}>
                                    <Calendar size={16} />
                                    <span>{format(new Date(review.publishedAt), 'MMMM d, yyyy')}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span>By {review.author.name}</span>
                                </div>
                                {review.price && (
                                    <div className={styles.metaItem}>
                                        <span className={styles.price}>${review.price}</span>
                                    </div>
                                )}
                            </div>
                            <SocialShare
                                url={`https://kyle.czajkowski.tech/gear/reviews/${review.slug}`}
                                title={`${review.brand} ${review.gearName} Review`}
                                variant="buttons"
                            />
                        </div>
                    </div>
                </header>

                <div className={styles.mainContent}>
                    {/* Left Column - Images and Quick Info */}
                    <div className={styles.leftColumn}>
                        {/* Image Gallery */}
                        {allImages.length > 0 && (
                            <div className={styles.imageGallery}>
                                {/* Main Image with Expand Button */}
                                <div className={styles.mainImageContainer}>
                                    <div
                                        className={styles.imageWrapper}
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <Image
                                            src={optimizeImageUrl(allImages[selectedImageIndex].url)}
                                            alt={allImages[selectedImageIndex].alt}
                                            width={600}
                                            height={400}
                                            className={styles.mainImage}
                                            priority={selectedImageIndex === 0}
                                        />

                                        {/* Expand Button Pill */}
                                        <button
                                            className={styles.expandButton}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setIsModalOpen(true)
                                            }}
                                            aria-label="Expand image"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                                            </svg>
                                            Expand
                                        </button>
                                    </div>

                                    {allImages[selectedImageIndex].caption && (
                                        <p className={styles.imageCaption}>
                                            {allImages[selectedImageIndex].caption}
                                        </p>
                                    )}
                                </div>

                                <EnhancedImageGallery
                                    allImages={allImages}
                                    selectedImageIndex={selectedImageIndex}
                                    handleImageSelect={handleImageSelect}
                                    isModalOpen={isModalOpen}
                                    setIsModalOpen={setIsModalOpen}
                                    optimizeImageUrl={optimizeImageUrl}
                                    gearName={review.gearName}
                                />
                            </div>
                        )}

                        {/* Quick Info Card */}
                        <div className={styles.quickInfo}>
                            <h3 className={styles.quickInfoTitle}>Quick Info</h3>
                            <div className={styles.quickInfoGrid}>
                                <div className={styles.quickInfoItem}>
                                    <Award size={16} />
                                    <span>Overall Rating</span>
                                    <strong>{review.overallRating}/5</strong>
                                </div>

                                {review.timeUsed && (
                                    <div className={styles.quickInfoItem}>
                                        <Clock size={16} />
                                        <span>Time Tested</span>
                                        <strong>{formatTimeUsed(review.timeUsed)}</strong>
                                    </div>
                                )}

                                {review.specifications?.weight && (
                                    <div className={styles.quickInfoItem}>
                                        <Weight size={16} />
                                        <span>Weight</span>
                                        <strong>{review.specifications.weight}</strong>
                                    </div>
                                )}

                                {review.price && (
                                    <div className={styles.quickInfoItem}>
                                        <DollarSign size={16} />
                                        <span>Price</span>
                                        <strong>${review.price}</strong>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Unified Tags Section */}
                        <UnifiedTagsSection review={review} />
                    </div>

                    {/* Right Column - Review Content */}
                    <div className={styles.rightColumn}>
                        {/* Summary */}
                        {review.excerpt && (
                            <div className={styles.summary}>
                                <h3>Summary</h3>
                                <p className={styles.summaryText}>{review.excerpt}</p>
                            </div>
                        )}

                        {/* Pros and Cons */}
                        {(review.pros?.length || review.cons?.length) && (
                            <div className={styles.prosConsSection}>
                                <h3>Pros & Cons</h3>
                                <div className={styles.prosCons}>
                                    {review.pros && review.pros.length > 0 && (
                                        <div className={styles.pros}>
                                            <h4 className={styles.prosTitle}>
                                                <CheckCircle size={18} />
                                                Pros
                                            </h4>
                                            <ul className={styles.prosList}>
                                                {review.pros.map((pro, index) => (
                                                    <li key={index}>{pro}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {review.cons && review.cons.length > 0 && (
                                        <div className={styles.cons}>
                                            <h4 className={styles.consTitle}>
                                                <XCircle size={18} />
                                                Cons
                                            </h4>
                                            <ul className={styles.consList}>
                                                {review.cons.map((con, index) => (
                                                    <li key={index}>{con}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Detailed Ratings */}
                        {review.detailedRatings && (
                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                    Detailed Ratings
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {review.detailedRatings.durability && (
                                        <div className="flex items-center gap-4">
                                            <span className="w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm">
                                                Durability
                                            </span>
                                            <div className="flex-1 flex items-center gap-3">
                                                <div className="flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.durability)}`}
                                                        style={{ width: `${(review.detailedRatings.durability / 5) * 100}%` }}
                                                    />
                                                </div>
                                                <span className={`text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.durability)}`}>
                                                    {review.detailedRatings.durability}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {review.detailedRatings.comfort && (
                                        <div className="flex items-center gap-4">
                                            <span className="w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm">
                                                Comfort
                                            </span>
                                            <div className="flex-1 flex items-center gap-3">
                                                <div className="flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.comfort)}`}
                                                        style={{ width: `${(review.detailedRatings.comfort / 5) * 100}%` }}
                                                    />
                                                </div>
                                                <span className={`text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.comfort)}`}>
                                                    {review.detailedRatings.comfort}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {review.detailedRatings.performance && (
                                        <div className="flex items-center gap-4">
                                            <span className="w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm">
                                                Performance
                                            </span>
                                            <div className="flex-1 flex items-center gap-3">
                                                <div className="flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.performance)}`}
                                                        style={{ width: `${(review.detailedRatings.performance / 5) * 100}%` }}
                                                    />
                                                </div>
                                                <span className={`text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.performance)}`}>
                                                    {review.detailedRatings.performance}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {review.detailedRatings.valueForMoney && (
                                        <div className="flex items-center gap-4">
                                            <span className="w-28 md:w-32 flex-shrink-0 font-medium text-gray-900 dark:text-gray-100 text-sm">
                                                Value for Money
                                            </span>
                                            <div className="flex-1 flex items-center gap-3">
                                                <div className="flex-1 h-4 md:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-300 ease-out ${getRatingColorClasses(review.detailedRatings.valueForMoney)}`}
                                                        style={{ width: `${(review.detailedRatings.valueForMoney / 5) * 100}%` }}
                                                    />
                                                </div>
                                                <span className={`text-xs font-bold text-white min-w-[2.5rem] text-center px-2 py-1 rounded-full ${getRatingColorClasses(review.detailedRatings.valueForMoney)}`}>
                                                    {review.detailedRatings.valueForMoney}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Testing Conditions */}
                        {review.testingConditions && (
                            <div className={styles.testingConditions}>
                                <h3>
                                    <MapPin size={18} />
                                    Testing Conditions
                                </h3>
                                <p>{review.testingConditions}</p>
                            </div>
                        )}

                        {/* Full Review Content */}
                        {review.body && (
                            <div className={styles.reviewContent}>
                                <h3>Detailed Review</h3>
                                <div className={styles.portableText}>
                                   <PortableText
                                        value={review.body}
                                        components={portableTextComponents}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Technical Specifications */}
                        {review.specifications && (
                            <div className={styles.specifications}>
                                <h3>
                                    <Package size={18} />
                                    Technical Specifications
                                </h3>
                                <div className={styles.specsGrid}>
                                    {review.specifications.weight && (
                                        <div className={styles.specItem}>
                                            <span className={styles.specLabel}>Weight</span>
                                            <span className={styles.specValue}>{review.specifications.weight}</span>
                                        </div>
                                    )}

                                    {review.specifications.dimensions && (
                                        <div className={styles.specItem}>
                                            <span className={styles.specLabel}>Dimensions</span>
                                            <span className={styles.specValue}>{review.specifications.dimensions}</span>
                                        </div>
                                    )}

                                    {review.specifications.materials && review.specifications.materials.length > 0 && (
                                        <div className={styles.specItem}>
                                            <span className={styles.specLabel}>Materials</span>
                                            <span className={styles.specValue}>
                                                {review.specifications.materials.join(', ')}
                                            </span>
                                        </div>
                                    )}

                                    {review.specifications.features && review.specifications.features.length > 0 && (
                                        <div className={styles.specItem}>
                                            <span className={styles.specLabel}>Key Features</span>
                                            <ul className={styles.featuresList}>
                                                {review.specifications.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Purchase Links */}
                        {review.purchaseLinks && review.purchaseLinks.length > 0 && (
                            <div className={styles.purchaseLinks}>
                                <h3>Where to Buy</h3>
                                <div className={styles.retailerGrid}>
                                    {review.purchaseLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.retailerLink}
                                        >
                                            <div className={styles.retailerInfo}>
                                                <span className={styles.retailerName}>{link.retailer}</span>
                                                {link.currentPrice && (
                                                    <span className={styles.retailerPrice}>${link.currentPrice}</span>
                                                )}
                                            </div>
                                            <ExternalLink size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recommendations */}
                        <div className={styles.recommendations}>
                            {review.recommendedFor && (
                                <div className={styles.recommendedFor}>
                                    <h4>Recommended For</h4>
                                    <p>{review.recommendedFor}</p>
                                </div>
                            )}

                            {review.alternatives && (
                                <div className={styles.alternatives}>
                                    <h4>Alternatives to Consider</h4>
                                    <p>{review.alternatives}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}