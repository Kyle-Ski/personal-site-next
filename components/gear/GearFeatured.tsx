"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Weight, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GearItem } from '@/utils/notionGear'
import styles from '@/styles/GearFeatured.module.css'

interface GearFeaturedProps {
  items: GearItem[]
}

const GearFeatured = ({ items }: GearFeaturedProps) => {
  const getCategoryEmoji = (category: string) => {
    const emojiMap: { [key: string]: string } = {
      '🎿 Ski Gear': '🎿',
      '❄️ Winter Gear': '❄️',
      '🎒 Backpacking Gear': '🎒',
      '☀️ Summer Gear': '☀️',
      '🏔 Climbing Gear': '🏔',
      '🧦 Layers': '🧦',
      '🔥 Cooking Tools': '🔥',
      '⛑ Safety Gear': '⛑',
      '🧳 Pack': '🧳',
    }
    return emojiMap[category] || '🎯'
  }

  return (
    <div className={styles.featuredGrid}>
      {items.map((item) => (
        <Card key={item.id} className={styles.featuredCard}>
          <div className={styles.imageWrapper}>
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={200}
                height={200}
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span>{getCategoryEmoji(item.category)}</span>
              </div>
            )}
            <div className={styles.categoryBadge}>
              {getCategoryEmoji(item.category)} {item.category.replace(/[🎿❄️🎒☀️🏔🧦🔥⛑🧳] /, '')}
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
      ))}
    </div>
  )
}

export default GearFeatured