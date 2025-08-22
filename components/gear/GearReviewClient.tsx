"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { format } from "date-fns"
import Link from "next/link"
import { Search, Filter, X, Star, Mountain, Tent, Compass } from "lucide-react"
import { GearReview } from "@/lib/cmsProvider"
import styles from '@/styles/GearReviews.module.css'

// Activity icons mapping
const ACTIVITY_ICONS = {
    hiking: Mountain,
    backpacking: Tent,
    climbing: Compass,
    mountaineering: Mountain,
    'trail-running': Mountain,
    camping: Tent,
    skiing: Mountain,
    snowboarding: Mountain,
}

interface GearReviewsClientProps {
    reviews: GearReview[]
}

export default function GearReviewsClient({ reviews }: GearReviewsClientProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedActivity, setSelectedActivity] = useState<string>('')
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [minRating, setMinRating] = useState<number>(0)
    const [showFilters, setShowFilters] = useState(false)

    const filteredReviews = useMemo(() => {
        let filtered = reviews

        // Activity filter
        if (selectedActivity) {
            filtered = filtered.filter(review =>
                review.activities?.includes(selectedActivity)
            )
        }

        // Category filter
        if (selectedCategory) {
            filtered = filtered.filter(review =>
                review.gearCategories.some(cat => cat.title === selectedCategory)
            )
        }

        // Rating filter
        if (minRating > 0) {
            filtered = filtered.filter(review =>
                review.overallRating >= minRating
            )
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(review =>
                review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                review.gearName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                review.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                review.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        return filtered
    }, [reviews, searchTerm, selectedActivity, selectedCategory, minRating])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedActivity('')
        setSelectedCategory('')
        setMinRating(0)
    }

    const getAvailableActivities = () => {
        const activities = new Set<string>()
        reviews.forEach(review => {
            review.activities?.forEach(activity => activities.add(activity))
        })
        return Array.from(activities).sort()
    }

    const getAvailableCategories = () => {
        const categories = new Set<string>()
        reviews.forEach(review => {
            review.gearCategories.forEach(cat => categories.add(cat.title))
        })
        return Array.from(categories).sort()
    }

    const renderStars = (rating: number) => {
        return (
            <div className={styles.starRating}>
                {[1, 2, 3, 4, 5].map(star => (
                    <Star
                        key={star}
                        size={16}
                        className={star <= rating ? styles.starFilled : styles.starEmpty}
                    />
                ))}
                <span className={styles.ratingText}>({rating}/5)</span>
            </div>
        )
    }

    const activeFiltersCount = [
        selectedActivity,
        selectedCategory,
        minRating > 0 ? minRating.toString() : null
    ].filter(Boolean).length

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Header Section */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Gear Reviews</h1>
                    <p className={styles.subtitle}>
                        In-depth reviews of outdoor gear, tested in real conditions
                    </p>
                </div>

                {/* Controls */}
                <div className={styles.controlsWrapper}>
                    {/* Search and Filter Toggle */}
                    <div className={styles.controlBar}>
                        <div className={styles.searchWrapper}>
                            <Search size={20} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search gear, brands, or reviews..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`${styles.filterToggle} ${showFilters || activeFiltersCount > 0 ? styles.active : ''
                                }`}
                        >
                            <Filter size={18} />
                            <span>Filters</span>
                            {activeFiltersCount > 0 && (
                                <span className={styles.filterBadge}>
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Filter Panel */}
                    {showFilters && (
                        <div className={styles.filterPanel}>
                            {/* Activity Filter */}
                            <div className={styles.filterGroup}>
                                <h3 className={styles.filterGroupTitle}>Activity</h3>
                                <div className={styles.filterButtons}>
                                    {getAvailableActivities().map(activity => (
                                        <button
                                            key={activity}
                                            onClick={() => setSelectedActivity(
                                                selectedActivity === activity ? '' : activity
                                            )}
                                            className={`${styles.filterButton} ${selectedActivity === activity ? styles.active : ''
                                                }`}
                                        >
                                            {activity.charAt(0).toUpperCase() + activity.slice(1).replace('-', ' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className={styles.filterGroup}>
                                <h3 className={styles.filterGroupTitle}>Category</h3>
                                <div className={styles.filterButtons}>
                                    {getAvailableCategories().map(category => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(
                                                selectedCategory === category ? '' : category
                                            )}
                                            className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className={styles.filterGroup}>
                                <h3 className={styles.filterGroupTitle}>Minimum Rating</h3>
                                <div className={styles.filterButtons}>
                                    {[0, 3, 4, 5].map(rating => (
                                        <button
                                            key={rating}
                                            onClick={() => setMinRating(rating)}
                                            className={`${styles.filterButton} ${minRating === rating ? styles.active : ''
                                                }`}
                                        >
                                            {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Clear Filters */}
                            {activeFiltersCount > 0 && (
                                <div className={styles.clearFilters}>
                                    <button onClick={clearFilters}>
                                        <X size={16} />
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className={styles.resultsCount}>
                    {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
                    {selectedActivity && ` for ${selectedActivity.replace('-', ' ')}`}
                    {selectedCategory && ` in ${selectedCategory}`}
                    {minRating > 0 && ` with ${minRating}+ star rating`}
                </div>

                {/* Reviews Grid */}
                {filteredReviews && filteredReviews.length > 0 ? (
                    <div className={styles.reviewsGrid}>
                        {filteredReviews.map((review) => (
                            <Link key={review._id} href={`/gear/reviews/${review.slug}`}>
                                <article className={styles.reviewCard}>
                                    {/* Product Image */}
                                    {review.mainImage && (
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={review.mainImage}
                                                alt={review.gearName}
                                                width={300}
                                                height={200}
                                                className={styles.reviewImage}
                                            />
                                            {/* Rating overlay */}
                                            <div className={styles.ratingOverlay}>
                                                {renderStars(review.overallRating)}
                                            </div>
                                        </div>
                                    )}

                                    <div className={styles.reviewContent}>
                                        {/* Brand and gear name */}
                                        <div className={styles.gearInfo}>
                                            <span className={styles.brand}>{review.brand}</span>
                                            <h2 className={styles.gearName}>{review.gearName}</h2>
                                        </div>

                                        {/* Review title */}
                                        <h3 className={styles.reviewTitle}>{review.title}</h3>

                                        {/* Categories and activities */}
                                        <div className={styles.tags}>
                                            {review.gearCategories.slice(0, 2).map(category => (
                                                <span
                                                    key={category._id}
                                                    className={`${styles.tag} ${styles.category}`}
                                                >
                                                    {category.title}
                                                </span>
                                            ))}
                                            {review.activities?.slice(0, 2).map(activity => (
                                                <span
                                                    key={activity}
                                                    className={`${styles.tag} ${styles.activity}`}
                                                >
                                                    {activity.replace('-', ' ')}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Excerpt */}
                                        {review.excerpt && (
                                            <p className={styles.excerpt}>
                                                {review.excerpt}
                                            </p>
                                        )}

                                        {/* Meta info */}
                                        <div className={styles.meta}>
                                            <time dateTime={review.publishedAt}>
                                                {format(new Date(review.publishedAt), 'MMM d, yyyy')}
                                            </time>
                                            <span>•</span>
                                            <span>{review.author.name}</span>
                                            {review.price && (
                                                <>
                                                    <span>•</span>
                                                    <span className={styles.price}>${review.price}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={styles.noResults}>
                        <p className={styles.noResultsText}>No gear reviews found matching your criteria.</p>
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={clearFilters}
                                className={styles.noResultsAction}
                            >
                                Clear filters to see all reviews
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}