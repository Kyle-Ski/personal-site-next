"use client"

import { useState } from "react"
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
import { AdventureNav } from "../navigation/AdventureNav"

interface GearReviewDetailProps {
    review: GearReview
}

export default function GearReviewDetail({ review }: GearReviewDetailProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

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
                                        <DollarSign size={16} />
                                        <span className={styles.price}>${review.price}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                <div className={styles.mainContent}>
                    {/* Left Column - Images and Quick Info */}
                    <div className={styles.leftColumn}>
                        {/* Image Gallery */}
                        {allImages.length > 0 && (
                            <div className={styles.imageGallery}>
                                <div className={styles.mainImageContainer}>
                                    <Image
                                        src={allImages[selectedImageIndex].url}
                                        alt={allImages[selectedImageIndex].alt}
                                        width={600}
                                        height={400}
                                        className={styles.mainImage}
                                        priority
                                    />
                                    {allImages[selectedImageIndex].caption && (
                                        <p className={styles.imageCaption}>
                                            {allImages[selectedImageIndex].caption}
                                        </p>
                                    )}
                                </div>

                                {allImages.length > 1 && (
                                    <div className={styles.thumbnails}>
                                        {allImages.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImageIndex(index)}
                                                className={`${styles.thumbnail} ${index === selectedImageIndex ? styles.active : ''
                                                    }`}
                                            >
                                                <Image
                                                    src={image.url}
                                                    alt={image.alt}
                                                    width={80}
                                                    height={60}
                                                    className={styles.thumbnailImage}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
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

                        {/* Categories and Activities */}
                        <div className={styles.tagsSection}>
                            {review.gearCategories.length > 0 && (
                                <div className={styles.tagGroup}>
                                    <h4>Categories</h4>
                                    <div className={styles.tags}>
                                        {review.gearCategories.map(category => (
                                            <span key={category._id} className={`${styles.tag} ${styles.category}`}>
                                                {category.title}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {review.activities && review.activities.length > 0 && (
                                <div className={styles.tagGroup}>
                                    <h4>Activities</h4>
                                    <div className={styles.tags}>
                                        {review.activities.map(activity => (
                                            <span key={activity} className={`${styles.tag} ${styles.activity}`}>
                                                {activity.replace('-', ' ')}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {review.seasons && review.seasons.length > 0 && (
                                <div className={styles.tagGroup}>
                                    <h4>Seasons</h4>
                                    <div className={styles.tags}>
                                        {review.seasons.map(season => (
                                            <span key={season} className={`${styles.tag} ${styles.season}`}>
                                                {season}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
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
                            <div className={styles.detailedRatings}>
                                <h3>Detailed Ratings</h3>
                                <div className={styles.ratingsGrid}>
                                    {review.detailedRatings.durability && (
                                        <div className={styles.ratingItem}>
                                            <span>Durability</span>
                                            <div className={styles.ratingBar}>
                                                <div
                                                    className={`${styles.ratingFill} ${getRatingColor(review.detailedRatings.durability)}`}
                                                    style={{ width: `${(review.detailedRatings.durability / 5) * 100}%` }}
                                                />
                                                <span className={styles.ratingValue}>
                                                    {review.detailedRatings.durability}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {review.detailedRatings.comfort && (
                                        <div className={styles.ratingItem}>
                                            <span>Comfort</span>
                                            <div className={styles.ratingBar}>
                                                <div
                                                    className={`${styles.ratingFill} ${getRatingColor(review.detailedRatings.comfort)}`}
                                                    style={{ width: `${(review.detailedRatings.comfort / 5) * 100}%` }}
                                                />
                                                <span className={styles.ratingValue}>
                                                    {review.detailedRatings.comfort}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {review.detailedRatings.performance && (
                                        <div className={styles.ratingItem}>
                                            <span>Performance</span>
                                            <div className={styles.ratingBar}>
                                                <div
                                                    className={`${styles.ratingFill} ${getRatingColor(review.detailedRatings.performance)}`}
                                                    style={{ width: `${(review.detailedRatings.performance / 5) * 100}%` }}
                                                />
                                                <span className={styles.ratingValue}>
                                                    {review.detailedRatings.performance}/5
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {review.detailedRatings.valueForMoney && (
                                        <div className={styles.ratingItem}>
                                            <span>Value for Money</span>
                                            <div className={styles.ratingBar}>
                                                <div
                                                    className={`${styles.ratingFill} ${getRatingColor(review.detailedRatings.valueForMoney)}`}
                                                    style={{ width: `${(review.detailedRatings.valueForMoney / 5) * 100}%` }}
                                                />
                                                <span className={styles.ratingValue}>
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
                                    <PortableText value={review.body} />
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
            <AdventureNav currentPage="gear-reviews" />
        </div>
    )
}