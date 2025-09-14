"use client"

import { useEffect, useState } from 'react'
import { List, Compass, Backpack, Map } from 'lucide-react'
import { GearItem } from '@/lib/cmsProvider'

interface TOCItem {
  id: string
  title: string
  level: 'section' | 'h2' | 'h3'
  icon?: React.ComponentType<{ className?: string }>
  order: number
}

interface TripReportTOCProps {
  tripReport: {
    routeNotes?: string
    gpxFile?: {
      asset: {
        url: string;
        originalFilename?: string;
      }
    };
    gearUsed?: GearItem[];
    elevation?: number
    distance?: number
    elevationGain?: number
    body?: any[]
  }
}

// Section registry - maps section IDs to their display info and priority order
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

export function TripReportTableOfContents({ tripReport }: TripReportTOCProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [userClicked, setUserClicked] = useState(false)

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
      const headings = document.querySelectorAll('.adventure-content h2, .adventure-content h3')
      headings.forEach((heading, index) => {
        const level = heading.tagName.toLowerCase() as 'h2' | 'h3'
        const text = heading.textContent || `Heading ${index + 1}`
        const id = `heading-${index}`

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
    }, 100)
  }, [tripReport])

  useEffect(() => {
    const handleScroll = () => {
      // Don't update if user just clicked
      if (userClicked) return

      // Get all section elements with their positions
      const sections = tocItems.map(item => {
        const element = document.getElementById(item.id)
        if (!element) return null

        const rect = element.getBoundingClientRect()
        return {
          id: item.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          element
        }
      }).filter((section): section is NonNullable<typeof section> => section !== null)

      // Find the section that's currently most visible
      const viewportTop = window.scrollY + 100 // Account for header
      let activeSection = sections[0]?.id || ''

      for (const section of sections) {
        if (viewportTop >= section.top - 100) { // 100px before section starts
          activeSection = section.id
        } else {
          break
        }
      }

      if (activeSection !== activeId) {
        setActiveId(activeSection)
      }
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Set initial state

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [tocItems, activeId, userClicked])

  // Reset click state on manual scroll
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      // If user manually scrolls (not via TOC click), reset click state after a delay
      if (userClicked) {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setUserClicked(false)
        }, 150)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [userClicked])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Set clicked state to temporarily disable scroll listener
      setUserClicked(true)
      setActiveId(id) // Immediately set the clicked item as active

      // Use element.scrollIntoView for more reliable scrolling
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      // Re-enable scroll detection after animation completes
      setTimeout(() => {
        setUserClicked(false)
      }, 800) // Shorter timeout
    }
  }

  if (tocItems.length <= 2) return null

  return (
    <div className="hidden xl:block fixed right-0.5 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-56">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          <List className="h-4 w-4 text-green-600" />
          <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
            Contents
          </span>
        </div>

        <nav className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin">
          {tocItems.map((item) => {
            const isActive = activeId === item.id
            const IconComponent = item.icon

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition-all duration-200
                  ${isActive
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-l-2 border-green-500 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }
                  ${item.level === 'h3' ? 'ml-4' : ''}
                  ${item.level === 'h2' ? 'ml-2' : ''}
                `}
              >
                {IconComponent && item.level === 'section' && (
                  <IconComponent className="h-3 w-3 flex-shrink-0" />
                )}
                <span className="truncate leading-relaxed">
                  {item.title}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}