"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Weight, DollarSign, Star, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GearItem } from '@/lib/cmsProvider'
import { hasReview, getReviewUrl } from '@/lib/gearUrlUtils' // Add these imports
import styles from '@/styles/GearFeatured.module.css'
import { getGearCardImageSizes, isNotionImage } from '@/utils/imageHelpers'

interface GearFeaturedProps {
    items: GearItem[]
}

// Review badge component
const FeaturedGearReviewBadge = ({ reviewLink }: { reviewLink: string }) => {
    return (
        <Link
            href={getReviewUrl(reviewLink)}
            className="!inline-flex !items-center gap-1 !h-6 mb-3 !leading-none rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-300 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-700 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50"
        >
            <Star size={12} className="fill-current" />
            <span>Review</span>
            <ExternalLink size={10} />
        </Link>
    )
}

const GearFeatured = ({ items }: GearFeaturedProps) => {
    const emojiMap: { [key: string]: string } = {
        'Ski Gear': '🎿',
        'Winter Gear': '❄️',
        'Backpacking Gear': '🎒',
        'Summer Gear': '☀️',
        'Climbing Gear': '🏔',
        'Layers': '🧦',
        'Cooking Tools': '🔥',
        'Safety Gear': '⛑',
        'Pack': '🧳',
    };

    const getCategoryEmoji = (category: string) => emojiMap[category] || '⭐️';

    return (
        <div className={styles.featuredGrid}>
            {items.map((item) => {
                return (
                    <Card key={item.id} className={styles.featuredCard}>
                        <div className={styles.imageWrapper}>
                            {item.imageUrl ? (
                                <Image
                                    src={item.imageUrl}
                                    alt={`${item.brand} ${item.title}` || item.title}
                                    width={200}
                                    height={200}
                                    sizes={getGearCardImageSizes()}
                                    loading="lazy"
                                    placeholder="empty"
                                    onError={(e) => {
                                        console.error('Featured gear image failed to load:', item.imageUrl)
                                        e.currentTarget.style.display = 'none';
                                    }}
                                    className={styles.image}
                                    unoptimized={isNotionImage(item.imageUrl)}
                                />
                            ) : (
                                <div className={styles.imagePlaceholder}>
                                    <span>{getCategoryEmoji(item.category)}</span>
                                </div>
                            )}
                            <div className={styles.categoryBadge}>
                                {getCategoryEmoji(item.category)} {item.category}
                            </div>
                        </div>

                        <CardContent className={styles.content}>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemProduct}>{item.product}</p>

                            {/* Brand and Review badges row */}
                            <div className="flex items-center gap-2 flex-wrap">
                                {item.brand && (
                                    <Badge variant="outline" className={styles.brandBadge}>
                                        {item.brand}
                                    </Badge>
                                )}
                            </div>

                            {/* Review Badge */}
                            {hasReview(item) && (
                                <FeaturedGearReviewBadge reviewLink={item.reviewLink!} />
                            )}
                            <div className={styles.specs}>
                                {item.weight_oz && (
                                    <div className={styles.spec}>
                                        <Weight size={14} />
                                        <span>{item.weight_oz} oz</span>
                                    </div>
                                )}
                                {item.cost && (
                                    <div className={styles.spec}>
                                        <DollarSign size={14} />
                                        <span>${item.cost}</span>
                                    </div>
                                )}
                            </div>

                            {item.packLists.length > 0 && (
                                <div className={styles.packLists}>
                                    <p className={styles.packListLabel}>Used in:</p>
                                    <div className={styles.packListTags}>
                                        {item.packLists.slice(0, 2).map((list, index) => (
                                            <span key={index} className={styles.packListTag}>
                                                {list}
                                            </span>
                                        ))}
                                        {item.packLists.length > 2 && (
                                            <span className={styles.packListTag}>
                                                +{item.packLists.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-2 mt-4">
                                {item.url && (
                                    <Link
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        <span>View Product</span>
                                        <ExternalLink size={14} />
                                    </Link>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default GearFeatured