"use client"

import { useEffect, useState, useRef } from 'react'
import { List, Compass, Backpack, Map, ChevronDown } from 'lucide-react'
import { GearItem } from '@/lib/cmsProvider'

interface TOCItem {
  id: string
  title: string
  level: 'section' | 'h1' | 'h2' | 'h3'
  icon?: React.ComponentType<{ className?: string }>
  order: number
  children?: TOCItem[]
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
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

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

      // 2. Scan for H1/H2/H3 headings in content
      const headings = document.querySelectorAll('.adventure-content h1, .adventure-content h2, .adventure-content h3')
      let lastH1: TOCItem | null = null
      let lastH2: TOCItem | null = null
      
      headings.forEach((heading, index) => {
        const tagName = heading.tagName.toLowerCase()
        const level = tagName as 'h1' | 'h2' | 'h3'
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

        if (level === 'h1') {
          const h1Item: TOCItem = {
            id: heading.id,
            title: text,
            level,
            order: 1000 + index,
            children: []
          }
          lastH1 = h1Item
          lastH2 = null
          foundHeadings.push(h1Item)
        } else if (level === 'h2') {
          const h2Item: TOCItem = {
            id: heading.id,
            title: text,
            level,
            order: 1000 + index,
            children: []
          }
          
          if (lastH1 && lastH1.children) {
            lastH1.children.push(h2Item)
          } else {
            foundHeadings.push(h2Item)
          }
          lastH2 = h2Item
        } else if (level === 'h3') {
          const h3Item: TOCItem = {
            id: heading.id,
            title: text,
            level,
            order: 1000 + index
          }
          
          if (lastH2 && lastH2.children) {
            lastH2.children.push(h3Item)
          } else {
            foundHeadings.push(h3Item)
          }
        }
      })

      // 3. Combine and sort all items
      const allItems = [...foundSections, ...foundHeadings]
        .sort((a, b) => a.order - b.order)

      setTocItems(allItems)
    }, 100)
  }, [tripReport])

  // Check if nav needs scroll indicator
  useEffect(() => {
    const checkScrollable = () => {
      if (navRef.current) {
        const { scrollHeight, clientHeight } = navRef.current
        setShowScrollIndicator(scrollHeight > clientHeight)
      }
    }

    checkScrollable()
    window.addEventListener('resize', checkScrollable)
    return () => window.removeEventListener('resize', checkScrollable)
  }, [tocItems])

  // Set up intersection observer
  useEffect(() => {
    if (tocItems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (userClicked) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-10% 0px -70% 0px' }
    )

    // Observe all elements recursively
    const observeItems = (items: TOCItem[]) => {
      items.forEach(item => {
        const element = document.getElementById(item.id)
        if (element) observer.observe(element)
        
        if (item.children) {
          observeItems(item.children)
        }
      })
    }
    observeItems(tocItems)

    return () => observer.disconnect()
  }, [tocItems, userClicked])

  // Auto-scroll TOC to show active section
  useEffect(() => {
    if (!activeId || userClicked) return

    // Find the active button in the TOC
    const activeButton = navRef.current?.querySelector(`button[data-toc-id="${activeId}"]`)
    if (activeButton && navRef.current) {
      // Scroll the active item into view within the TOC
      const navRect = navRef.current.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      
      // Check if button is outside visible area
      if (buttonRect.top < navRect.top || buttonRect.bottom > navRect.bottom) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
      }
    }
  }, [activeId, userClicked])

  const scrollToSection = (id: string) => {
    setUserClicked(true)
    setActiveId(id)

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      setTimeout(() => {
        setUserClicked(false)
      }, 800)
    }
  }

  const renderTOCItems = (items: TOCItem[], depth = 0) => {
    return items.map((item) => {
      const isActive = activeId === item.id
      const IconComponent = item.icon
      const hasChildren = item.children && item.children.length > 0

      return (
        <div key={item.id}>
          <button
            data-toc-id={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition-all duration-200
              ${isActive
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-l-2 border-green-500 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }
              ${item.level === 'h3' ? 'ml-4' : ''}
              ${item.level === 'h2' ? 'ml-2' : ''}
              ${depth === 1 ? 'ml-2' : ''}
              ${depth === 2 ? 'ml-4' : ''}
            `}
          >
            {IconComponent && item.level === 'section' && (
              <IconComponent className="h-3 w-3 flex-shrink-0" />
            )}
            
            <span className="truncate leading-relaxed">
              {item.title}
            </span>
          </button>

          {hasChildren && (
            <div>
              {renderTOCItems(item.children!, depth + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  if (tocItems.length <= 2) return null

  return (
    <div className="hidden xl:block fixed right-0.5 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-56 relative">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          <List className="h-4 w-4 text-green-600" />
          <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
            Contents
          </span>
        </div>

        <nav 
          ref={navRef}
          className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin"
        >
          {renderTOCItems(tocItems)}
        </nav>

        {/* Scroll indicator at bottom */}
        {showScrollIndicator && (
          <div className="absolute bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none flex items-end justify-center pb-1">
            <ChevronDown className="h-3 w-3 text-gray-400 animate-bounce" />
          </div>
        )}
      </div>
    </div>
  )
}