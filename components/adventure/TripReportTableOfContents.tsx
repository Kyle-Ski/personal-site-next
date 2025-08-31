"use client"

import { useEffect, useState } from 'react'
import { List, Compass, Backpack, BarChart, Map, BookOpen, AlertTriangle, CloudSnow, Wrench } from 'lucide-react'
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
  'conditions-report': {
    title: 'Current Conditions',
    icon: CloudSnow,
    order: 3
  },
  'gear-used': {
    title: 'Essential Gear Used',
    icon: Backpack,
    order: 4
  },
  'gear-recommendations': {
    title: 'Gear Recommendations',
    icon: Wrench,
    order: 5
  },
  'route-guide': {
    title: 'Route Guide',
    icon: Map,
    order: 6
  },
  'planning-guide': {
    title: 'Planning Guide',
    icon: BookOpen,
    order: 7
  },
  'skills-guide': {
    title: 'Skills Guide',
    icon: BookOpen,
    order: 8
  },
  'safety-considerations': {
    title: 'Safety Considerations',
    icon: AlertTriangle,
    order: 9
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
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update active state if user just clicked (give it time to settle)
        if (userClicked) return

        const intersectingEntries = entries.filter(entry => entry.isIntersecting)

        if (intersectingEntries.length > 0) {
          // Find the entry that's closest to the top of the viewport
          // This prevents the "next section" from being highlighted when we just scrolled to current
          const topMostEntry = intersectingEntries.reduce((closest, entry) => {
            const closestTop = closest.boundingClientRect.top
            const entryTop = entry.boundingClientRect.top

            // Prefer elements that are closer to the top of the viewport
            // But still within the visible area (positive top value, but small)
            if (entryTop >= 0 && entryTop < closestTop) {
              return entry
            }
            return closest
          })

          setActiveId(topMostEntry.target.id)
        }
      },
      {
        rootMargin: '-10% 0px -70% 0px', // More restrictive margins
        threshold: [0, 0.1, 0.2] // Multiple thresholds for better detection
      }
    )

    // Observe all sections and headings
    tocItems.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [tocItems, userClicked])

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
      // Set clicked state to temporarily disable intersection observer updates
      setUserClicked(true)
      setActiveId(id) // Immediately set the clicked item as active

      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Re-enable intersection observer after scroll animation completes
      setTimeout(() => {
        setUserClicked(false)
      }, 1000) // Give enough time for smooth scroll to complete
    }
  }

  if (tocItems.length <= 2) return null

  return (
    <div className="hidden xl:block fixed right-0.5 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs">
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