'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Backpack, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TripReportGearItem } from '@/lib/cmsProvider'
import { createGearSlug } from '@/lib/gearUrlUtils'


// Category definitions with emojis
const GEAR_CATEGORIES = {
    shelter: { emoji: '⛺', title: 'Shelter & Sleep System' },
    clothing: { emoji: '👕', title: 'Clothing & Layers' },
    navigation: { emoji: '🧭', title: 'Navigation & Safety' },
    food: { emoji: '🍳', title: 'Food & Cooking' },
    water: { emoji: '💧', title: 'Water & Hydration' },
    pack: { emoji: '🎒', title: 'Pack & Organization' },
    tools: { emoji: '🔧', title: 'Tools & Repair' },
    other: { emoji: '📦', title: 'Other Gear' }
} as const

interface GearUsedSectionProps {
    gearUsed?: TripReportGearItem[]
    availableGearSlugs: Set<string>
}

export function GearUsedSection({ gearUsed, availableGearSlugs }: GearUsedSectionProps) {
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

    if (!gearUsed || gearUsed.length === 0) {
        return null
    }

    // Process gear items and group by category
    const processedGear = gearUsed.reduce((acc, item) => {
        const category = item.category || 'other'
            if (!acc[category]) acc[category] = []
            acc[category].push(item)
        return acc
    }, {} as Record<string, TripReportGearItem[]>)

    // Filter out empty categories and sort
    const categoriesWithGear = Object.entries(processedGear)
        .filter(([_, items]) => items.length > 0)
        .sort(([a], [b]) => {
            // Sort by predefined category order, with 'other' at the end
            const categoryOrder = Object.keys(GEAR_CATEGORIES)
            const aIndex = categoryOrder.indexOf(a)
            const bIndex = categoryOrder.indexOf(b)
            if (aIndex === -1) return 1
            if (bIndex === -1) return -1
            return aIndex - bIndex
        })

    const toggleCategory = (categoryKey: string) => {
        const newExpanded = new Set(expandedCategories)
        if (newExpanded.has(categoryKey)) {
            newExpanded.delete(categoryKey)
        } else {
            newExpanded.add(categoryKey)
        }
        setExpandedCategories(newExpanded)
    }

    if (categoriesWithGear.length === 0) {
        return null
    }

    return (
        <Card id="gear-used" className="adventure-card mb-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Backpack className="h-5 w-5 text-green-600" />
                    Essential Gear Used
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {categoriesWithGear.map(([categoryKey, items]) => {
                    const category = GEAR_CATEGORIES[categoryKey as keyof typeof GEAR_CATEGORIES] || GEAR_CATEGORIES.other
                    const isExpanded = expandedCategories.has(categoryKey)

                    return (
                        <div key={categoryKey} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                            {/* Category Header - Clickable */}
                            <button
                                onClick={() => toggleCategory(categoryKey)}
                                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded-lg"
                                aria-expanded={isExpanded}
                                aria-controls={`gear-category-${categoryKey}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{category.emoji}</span>
                                    <span className="font-medium text-left">
                                        {category.title}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        ({items.length} item{items.length !== 1 ? 's' : ''})
                                    </span>
                                </div>
                                {isExpanded ? (
                                    <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                ) : (
                                    <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                )}
                            </button>

                            {/* Category Content - Expandable */}
                            {isExpanded && (
                                <div
                                    id={`gear-category-${categoryKey}`}
                                    className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                                        {items.map((item, index) => {
                                            const slug = createGearSlug(item.name || '')
                                            const slugExists = !!slug && availableGearSlugs.has(slug)
                                            const gearHref = slugExists ? `/gear?item=${slug}` : null

                                            const cardContent = (
                                                <>
                                                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                                                        {item.name}
                                                    </div>
                                                    {item.description && (
                                                        <div className="text-sm text-muted-foreground mt-1">
                                                            {item.description}
                                                        </div>
                                                    )}
                                                    {gearHref && (
                                                        <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-text-secondary)] absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                    )}
                                                </>
                                            )

                                            const linkedClasses = "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[var(--color-text-accent)] transition-colors relative block group"

                                            const plainClasses = "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"

                                            return gearHref ? (
                                                <Link
                                                    key={`${categoryKey}-${index}`}
                                                    href={gearHref}
                                                    className={linkedClasses}
                                                >
                                                    {cardContent}
                                                </Link>
                                            ) : (
                                                <div
                                                    key={`${categoryKey}-${index}`}
                                                    className={plainClasses}
                                                >
                                                    {cardContent}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}

                {/* Expand/Collapse All Controls */}
                {categoriesWithGear.length > 1 && (
                    <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={() => setExpandedCategories(new Set(categoriesWithGear.map(([key]) => key)))}
                            className="text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                        >
                            Expand All
                        </button>
                        <span className="text-xs text-muted-foreground">•</span>
                        <button
                            onClick={() => setExpandedCategories(new Set())}
                            className="text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                        >
                            Collapse All
                        </button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}