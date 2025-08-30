"use client"

import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronUp, List, Compass, Backpack, X } from 'lucide-react'
import { GearItem } from '@/lib/cmsProvider'

interface TOCItem {
    id: string
    title: string
    level: 'section' | 'h2' | 'h3'
    icon?: React.ComponentType<{ className?: string }>
}

interface MobileTOCProps {
    // For adventure posts
    tripReport?: {
        routeNotes?: string
        gearUsed?: GearItem[]
        body?: any[]
    }
    // For blog posts
    content?: any[]
    // Content type to determine scanning strategy
    contentType?: 'adventure' | 'blog'
}

export function MobileTOC({ tripReport, content, contentType = 'adventure' }: MobileTOCProps) {
    const [tocItems, setTocItems] = useState<TOCItem[]>([])
    const [activeId, setActiveId] = useState<string>('')
    const [isExpanded, setIsExpanded] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [userClicked, setUserClicked] = useState(false)

    const expandedRef = useRef<HTMLDivElement>(null)
    const touchStartY = useRef<number>(0)

    // Build TOC items (reusing your existing logic)
    useEffect(() => {
        const items: TOCItem[] = []

        // Add predefined sections for adventure posts
        if (contentType === 'adventure' && tripReport) {
            if (tripReport.routeNotes) {
                items.push({
                    id: 'route-notes',
                    title: 'Route Notes & Navigation',
                    level: 'section',
                    icon: Compass
                })
            }

            if (tripReport.gearUsed && tripReport.gearUsed.length > 0) {
                items.push({
                    id: 'gear-used',
                    title: 'Essential Gear Used',
                    level: 'section',
                    icon: Backpack
                })
            }
        }

        // Scan for dynamic headings in content
        setTimeout(() => {
            const selector = contentType === 'adventure'
                ? '.adventure-content h2, .adventure-content h3'
                : '.prose h1, .prose h2, .prose h3'

            const headings = document.querySelectorAll(selector)
            const contentItems: TOCItem[] = []

            headings.forEach((heading, index) => {
                const level = heading.tagName.toLowerCase() as 'h2' | 'h3'
                const text = heading.textContent || `Section ${index + 1}`
                const id = heading.id || `heading-${index}`

                // Add ID to heading if it doesn't have one
                if (!heading.id) {
                    heading.id = id
                }

                contentItems.push({
                    id: heading.id,
                    title: text,
                    level
                })
            })

            setTocItems([...items, ...contentItems])
        }, 200)
    }, [tripReport, content, contentType])

    // Intersection Observer (reusing your logic)
    useEffect(() => {
        if (tocItems.length === 0 || userClicked) return

        const observer = new IntersectionObserver(
            (entries) => {
                const intersectingEntries = entries.filter(entry => entry.isIntersecting)

                if (intersectingEntries.length > 0) {
                    const topMostEntry = intersectingEntries.reduce((closest, entry) => {
                        const closestTop = closest.boundingClientRect.top
                        const entryTop = entry.boundingClientRect.top

                        if (entryTop >= 0 && entryTop < closestTop) {
                            return entry
                        }
                        return closest
                    })

                    setActiveId(topMostEntry.target.id)
                }
            },
            {
                rootMargin: '-10% 0px -70% 0px',
                threshold: [0, 0.1, 0.2]
            }
        )

        tocItems.forEach(item => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [tocItems, userClicked])

    // Show/hide TOC based on scroll position (after hero)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const heroHeight = window.innerHeight * 0.6 // Approximate hero height

            setIsVisible(scrollY > heroHeight)

            // Reset user clicked state on manual scroll
            if (userClicked) {
                const scrollTimeout = setTimeout(() => {
                    setUserClicked(false)
                }, 150)
                return () => clearTimeout(scrollTimeout)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [userClicked])

    // Navigation functions
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            setUserClicked(true)
            setActiveId(id)
            setIsExpanded(false) // Close expanded view

            const headerOffset = 80 // Account for mobile nav + TOC
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })

            setTimeout(() => setUserClicked(false), 1000)
        }
    }

    const getCurrentIndex = () => tocItems.findIndex(item => item.id === activeId)
    const getPreviousItem = () => {
        const currentIndex = getCurrentIndex()
        return currentIndex > 0 ? tocItems[currentIndex - 1] : null
    }
    const getNextItem = () => {
        const currentIndex = getCurrentIndex()
        return currentIndex < tocItems.length - 1 ? tocItems[currentIndex + 1] : null
    }
    const getCurrentItem = () => tocItems.find(item => item.id === activeId)

    // Touch gestures for closing expanded view
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndY = e.changedTouches[0].clientY
        const deltaY = touchStartY.current - touchEndY

        // Swipe up to close (deltaY > 50 means swipe up)
        if (deltaY > 50) {
            setIsExpanded(false)
        }
    }

    // Don't render if no items or not visible
    if (tocItems.length <= 1 || !isVisible) return null

    const currentItem = getCurrentItem()
    const previousItem = getPreviousItem()
    const nextItem = getNextItem()

    return (
        <>
            {/* Smart Breadcrumb Bar */}
            <div className={`fixed top-16 left-0 right-0 z-30 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                } md:hidden`}>
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 py-2">
                    <div className="flex items-center justify-between max-w-full">

                        {/* Previous Button */}
                        <button
                            onClick={() => previousItem && scrollToSection(previousItem.id)}
                            disabled={!previousItem}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${previousItem
                                    ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                    : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft size={14} />
                            <span className="hidden sm:inline truncate max-w-[80px]">
                                {previousItem?.title}
                            </span>
                        </button>

                        {/* Current Section (Tappable) */}
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="flex-1 mx-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full text-center"
                        >
                            <div className="flex items-center justify-center gap-2">
                                {currentItem?.icon && (
                                    <currentItem.icon className="h-3 w-3 text-green-600 dark:text-green-400" />
                                )}
                                <span className="font-medium text-sm text-green-700 dark:text-green-300 truncate">
                                    {currentItem?.title || 'Select Section'}
                                </span>
                                <List size={12} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                            </div>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={() => nextItem && scrollToSection(nextItem.id)}
                            disabled={!nextItem}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${nextItem
                                    ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                    : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                }`}
                        >
                            <span className="hidden sm:inline truncate max-w-[80px]">
                                {nextItem?.title}
                            </span>
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Expanded Vertical List */}
            {isExpanded && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsExpanded(false)}
                    />

                    {/* Expanded Content */}
                    <div
                        ref={expandedRef}
                        className="absolute top-16 left-4 right-4 bottom-20 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <div className="flex items-center gap-2">
                                <List className="h-4 w-4 text-green-600" />
                                <span className="font-medium text-sm">Table of Contents</span>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-2">
                            {tocItems.map((item, index) => {
                                const isActive = activeId === item.id
                                const IconComponent = item.icon

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left p-3 rounded-lg mb-1 transition-all duration-200 flex items-center gap-3 ${isActive
                                                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 shadow-sm'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {/* Icon */}
                                        {IconComponent && item.level === 'section' ? (
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                                                <IconComponent className="h-4 w-4 text-green-600 dark:text-green-400" />
                                            </div>
                                        ) : (
                                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                                                    }`} />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className={`font-medium text-sm ${item.level === 'h3' ? 'ml-4' : ''
                                                }`}>
                                                {item.title}
                                            </div>
                                            {isActive && (
                                                <div className="text-xs text-green-600 dark:text-green-400 mt-0.5">
                                                    Current section
                                                </div>
                                            )}
                                        </div>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <div className="flex-shrink-0 w-1 h-8 bg-green-500 rounded-full" />
                                        )}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Footer with swipe hint */}
                        <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                <ChevronUp size={12} />
                                <span>Swipe up to close</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}