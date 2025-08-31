"use client"

import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, List, Compass, Backpack, X, Map } from 'lucide-react'
import { GearItem } from '@/lib/cmsProvider'

interface TOCItem {
    id: string
    title: string
    level: 'section' | 'h2' | 'h3'
    icon?: React.ComponentType<{ className?: string }>
    order: number
}

interface MobileTOCProps {
    // For adventure posts
    tripReport?: {
        routeNotes?: string
        gearUsed?: GearItem[]
        body?: any[]
        gpxFile?: any
    }
    // For blog posts
    content?: any[]
    // Content type to determine scanning strategy
    contentType?: 'adventure' | 'blog'
}

// Same section registry as desktop TOC for consistency
// Only includes sections that actually exist in current trip reports
const SECTION_REGISTRY = {
    'route-data': {
        title: 'Route & Elevation',
        icon: Map,
        order: 1
    },
    'route-notes': {
        title: 'Route Notes & Navigation',
        icon: Compass,
        order: 2
    },
    'gear-used': {
        title: 'Essential Gear Used',
        icon: Backpack,
        order: 3
    }
} as const

export function MobileTOC({ tripReport, content, contentType = 'adventure' }: MobileTOCProps) {
    const [tocItems, setTocItems] = useState<TOCItem[]>([])
    const [activeId, setActiveId] = useState<string>('')
    const [isExpanded, setIsExpanded] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [userClicked, setUserClicked] = useState(false)

    const expandedRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Build TOC items using dynamic section registry
    useEffect(() => {
        // Scan the DOM for what sections actually exist
        setTimeout(() => {
            const foundSections: TOCItem[] = []
            const foundHeadings: TOCItem[] = []

            // 1. Scan for registered sections that exist in DOM
            Object.entries(SECTION_REGISTRY).forEach(([sectionId, sectionInfo]) => {
                const element = document.getElementById(sectionId)
                if (element) {
                    foundSections.push({
                        id: sectionId,
                        title: sectionInfo.title,
                        level: 'section',
                        icon: sectionInfo.icon,
                        order: sectionInfo.order
                    })
                }
            })

            // 2. Scan for H2/H3 headings in content
            const selector = contentType === 'adventure'
                ? '.adventure-content h2, .adventure-content h3'
                : '.prose h1, .prose h2, .prose h3'

            const headings = document.querySelectorAll(selector)
            headings.forEach((heading, index) => {
                const level = heading.tagName.toLowerCase() as 'h2' | 'h3'
                const text = heading.textContent || `Section ${index + 1}`
                const id = heading.id || `heading-${index}`

                // Skip headings that are already handled by registered sections
                const isRegisteredSection = Object.values(SECTION_REGISTRY).some(
                    section => section.title === text
                )

                if (isRegisteredSection) {
                    return
                }

                // Add ID to heading if it doesn't have one
                if (!heading.id) {
                    heading.id = id
                }

                foundHeadings.push({
                    id: heading.id,
                    title: text,
                    level,
                    order: 1000 + index // High number to put content headings after sections
                })
            })

            // 3. Combine and sort by order, then set state
            const allItems = [...foundSections, ...foundHeadings].sort((a, b) => a.order - b.order)
            setTocItems(allItems)
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

    // Scroll boundary prevention - this is the key fix!
    const handleScrollableTouch = (e: React.TouchEvent) => {
        const element = scrollRef.current
        if (!element) return

        const { scrollTop, scrollHeight, clientHeight } = element
        const atTop = scrollTop === 0
        const atBottom = scrollTop + clientHeight >= scrollHeight

        // Get touch details
        const touch = e.touches[0]
        const deltaY = touch.clientY - (element.dataset.touchStartY ? parseFloat(element.dataset.touchStartY) : touch.clientY)

        // Prevent bounce when:
        // - At top and scrolling up
        // - At bottom and scrolling down
        if ((atTop && deltaY > 0) || (atBottom && deltaY < 0)) {
            e.preventDefault()
        }

        // Store touch position for next event
        element.dataset.touchStartY = touch.clientY.toString()
    }

    // Close expanded view when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (expandedRef.current && !expandedRef.current.contains(event.target as Node)) {
                setIsExpanded(false)
            }
        }

        if (isExpanded) {
            document.addEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'hidden' // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'unset'
        }
    }, [isExpanded])

    // Don't show if no items
    if (tocItems.length <= 1) return null

    const currentItem = getCurrentItem()
    const previousItem = getPreviousItem()
    const nextItem = getNextItem()

    return (
        <>
            {/* Mobile TOC Bar */}
            {isVisible && !isExpanded && (
                <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 shadow-lg">
                    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                        {/* Previous Button */}
                        <button
                            onClick={() => previousItem && scrollToSection(previousItem.id)}
                            disabled={!previousItem}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors flex-shrink-0 ${previousItem
                                ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                }`}
                            title={previousItem?.title} // Tooltip for full title
                        >
                            <ChevronLeft size={14} />
                            <span className="hidden sm:inline truncate max-w-[60px]">
                                {previousItem?.title && previousItem.title.length > 12
                                    ? `${previousItem.title.substring(0, 12)}...`
                                    : previousItem?.title
                                }
                            </span>
                        </button>

                        {/* Current Section (Tappable) */}
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="flex-1 mx-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full text-center min-w-0"
                            title={currentItem?.title} // Tooltip for full title
                        >
                            <div className="flex items-center justify-center gap-2 min-w-0">
                                {currentItem?.icon && (
                                    <currentItem.icon className="h-3 w-3 text-green-600 dark:text-green-400 flex-shrink-0" />
                                )}
                                <span className="font-medium text-sm text-green-700 dark:text-green-300 truncate">
                                    {currentItem?.title && currentItem.title.length > 25
                                        ? `${currentItem.title.substring(0, 25)}...`
                                        : currentItem?.title || 'Select Section'
                                    }
                                </span>
                                <List size={12} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                            </div>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={() => nextItem && scrollToSection(nextItem.id)}
                            disabled={!nextItem}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors flex-shrink-0 ${nextItem
                                ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                }`}
                            title={nextItem?.title} // Tooltip for full title
                        >
                            <span className="hidden sm:inline truncate max-w-[60px]">
                                {nextItem?.title && nextItem.title.length > 12
                                    ? `${nextItem.title.substring(0, 12)}...`
                                    : nextItem?.title
                                }
                            </span>
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            )}

            {/* Expanded Mobile TOC */}
            {isExpanded && (
                <div className="xl:hidden fixed inset-0 z-50 bg-black/50 flex items-end">
                    <div
                        ref={expandedRef}
                        className="w-full bg-white dark:bg-gray-900 rounded-t-xl shadow-2xl max-h-[80vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
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

                        {/* Scrollable Content - This is the main fix */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-2 relative"
                            onTouchStart={handleScrollableTouch}
                            style={{
                                WebkitOverflowScrolling: 'touch',
                                overscrollBehavior: 'contain'
                            }}
                        >
                            {/* Visual scroll indicators for long content */}
                            {tocItems.length > 8 && (
                                <>
                                    {/* Top fade */}
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
                                    {/* Bottom fade */}
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
                                </>
                            )}

                            <div className="space-y-1">
                                {tocItems.map((item, index) => {
                                    const isActive = activeId === item.id
                                    const IconComponent = item.icon

                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${isActive
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
                                                    }`}
                                                    title={item.title} // Tooltip for full title
                                                >
                                                    {item.title.length > 45
                                                        ? `${item.title.substring(0, 45)}...`
                                                        : item.title
                                                    }
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}