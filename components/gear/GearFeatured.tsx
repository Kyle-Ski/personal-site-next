"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Weight, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GearItem } from '@/utils/notionGear'
import styles from '@/styles/GearFeatured.module.css'
import { getGearCardImageSizes, isNotionImage } from '@/utils/imageHelpers'

interface GearFeaturedProps {
    items: GearItem[]
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
                                    // Add unoptimized flag for problematic Notion images as fallback
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

                            {item.brand && (
                                <Badge variant="outline" className={styles.brandBadge}>
                                    {item.brand}
                                </Badge>
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
                                        <span>{item.cost}</span>
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
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default GearFeatured