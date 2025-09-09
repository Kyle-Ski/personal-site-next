"use client"

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, Filter, X, ExternalLink, Weight, Package, Eye, EyeOff, DollarSign, Share2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GearItem } from '@/utils/notionGear'
import { createGearSlug, buildGearUrl, parseGearFilters, findGearBySlug } from '@/lib/gearUrlUtils'
import styles from '@/styles/GearGrid.module.css'

interface GearGridProps {
  gear: GearItem[]
  categories: string[]
  brands: string[]
  packLists: string[]
}

const GearGrid = ({ gear, categories, brands, packLists }: GearGridProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const gearGridRef = useRef<HTMLDivElement | null>(null)
  const hasScrolledRef = useRef(false)

  // Parse initial state from URL
  const initialFilters = parseGearFilters(searchParams)
  
  const [searchTerm, setSearchTerm] = useState('') // Search stays local, not from URL
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.category)
  const [selectedBrand, setSelectedBrand] = useState(initialFilters.brand)
  const [selectedPackList, setSelectedPackList] = useState(initialFilters.packList)
  const [showRetired, setShowRetired] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | 'weight' | 'cost' | 'date'>('name')
  const [showFilters, setShowFilters] = useState(false)

  // Update URL when filters change (excluding search)
  const updateUrl = (newFilters: any) => {
    const url = buildGearUrl({
      category: newFilters.category || selectedCategory,
      brand: newFilters.brand || selectedBrand,
      packList: newFilters.packList || selectedPackList,
      // search is intentionally excluded from URL
    })
    router.push(url, { scroll: false })
  }

  // Scroll to gear grid when filters are applied
  const scrollToGearGrid = () => {
    if (gearGridRef.current) {
      const headerOffset = 100 // Adjust based on your header height
      const elementPosition = gearGridRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle filter changes with URL updates
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    updateUrl({ category })
    if (category) {
      hasScrolledRef.current = true
      scrollToGearGrid()
    }
  }

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand)
    updateUrl({ brand })
    if (brand) {
      hasScrolledRef.current = true
      scrollToGearGrid()
    }
  }

  const handlePackListChange = (packList: string) => {
    setSelectedPackList(packList)
    updateUrl({ packList })
    if (packList) {
      hasScrolledRef.current = true
      scrollToGearGrid()
    }
  }

  const handleSearchChange = (search: string) => {
    setSearchTerm(search) // Update search immediately, no URL updates or scrolling
  }

  // Scroll to item if specified in URL, or to gear grid if filters are present
  useEffect(() => {
    const itemSlug = searchParams.get('item')
    const hasFilters = selectedCategory || selectedBrand || selectedPackList // removed searchTerm
    
    if (itemSlug) {
      // Reset scroll flag for item-specific scrolling
      hasScrolledRef.current = false
      // Wait for the component to render, then scroll to specific item
      setTimeout(() => {
        const element = itemRefs.current[itemSlug]
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'
          })
          // Add a subtle highlight effect
          element.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.3)'
          setTimeout(() => {
            element.style.boxShadow = ''
          }, 2000)
        }
      }, 100)
    } else if (hasFilters && !hasScrolledRef.current) {
      // Only scroll to gear grid if we haven't already scrolled
      setTimeout(() => {
        scrollToGearGrid()
        hasScrolledRef.current = true
      }, 100)
    } else if (!hasFilters) {
      // Reset scroll flag when filters are cleared
      hasScrolledRef.current = false
    }
  }, [searchParams, gear, selectedCategory, selectedBrand, selectedPackList]) // removed searchTerm

  // Generate shareable link for specific item
  const getItemShareLink = (item: GearItem) => {
    const itemSlug = createGearSlug(item.title)
    const currentFilters = {
      category: selectedCategory,
      brand: selectedBrand,
      packList: selectedPackList,
      // search intentionally excluded from shareable links
    }
    return buildGearUrl(currentFilters, itemSlug)
  }

  // Copy link to clipboard
  const copyItemLink = async (item: GearItem) => {
    const url = `${window.location.origin}${getItemShareLink(item)}`
    try {
      await navigator.clipboard.writeText(url)
      // You could add a toast notification here
      console.log('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const filteredGear = useMemo(() => {
    let filtered = gear

    // Filter by retired status
    if (!showRetired) {
      filtered = filtered.filter(item => !item.isRetired)
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    // Brand filter
    if (selectedBrand) {
      filtered = filtered.filter(item => item.brand === selectedBrand)
    }

    // Pack list filter
    if (selectedPackList) {
      filtered = filtered.filter(item => item.packLists.includes(selectedPackList))
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'weight':
          return (b.weight_oz || 0) - (a.weight_oz || 0)
        case 'cost':
          return (b.cost || 0) - (a.cost || 0)
        case 'date':
          return new Date(b.acquiredOn || 0).getTime() - new Date(a.acquiredOn || 0).getTime()
        default:
          return a.title.localeCompare(b.title)
      }
    })

    return filtered
  }, [gear, searchTerm, selectedCategory, selectedBrand, selectedPackList, showRetired, sortBy])

  const clearFilters = () => {
    setSearchTerm('') // Clear search
    setSelectedCategory('')
    setSelectedBrand('')
    setSelectedPackList('')
    hasScrolledRef.current = false // Reset scroll flag when clearing filters
    router.push('/gear', { scroll: false })
  }

  const activeFiltersCount = [selectedCategory, selectedBrand, selectedPackList].filter(Boolean).length

  // Development placeholder image
  const getImageSrc = (item: GearItem) => {
    if (process.env.NODE_ENV === 'development') {
      return '/gear-placeholder.svg' 
    }
    return item.imageUrl
  }

  return (
    <div className={styles.container}>
      {/* Search and Filter Bar */}
      <div className={styles.controlBar}>
        <div className={styles.searchWrapper}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search gear..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.controls}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`${styles.filterButton} ${showFilters ? styles.active : ''}`}
          >
            <Filter size={18} />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className={styles.filterCount}>{activeFiltersCount}</span>
            )}
          </button>

          <button
            onClick={() => setShowRetired(!showRetired)}
            className={`${styles.retiredButton} ${showRetired ? styles.active : ''}`}
          >
            {showRetired ? <Eye size={18} /> : <EyeOff size={18} />}
            <span>{showRetired ? 'Hide' : 'Show'} Retired</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className={styles.sortSelect}
          >
            <option value="name">Sort: Name</option>
            <option value="weight">Sort: Weight</option>
            <option value="cost">Sort: Cost</option>
            <option value="date">Sort: Newest</option>
          </select>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className={styles.filtersPanel}>
          <div className={styles.filterGroup}>
            <label>Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => handleBrandChange(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Pack List</label>
            <select
              value={selectedPackList}
              onChange={(e) => handlePackListChange(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">All Pack Lists</option>
              {packLists.map(list => (
                <option key={list} value={list}>{list}</option>
              ))}
            </select>
          </div>

          {activeFiltersCount > 0 && (
            <button onClick={clearFilters} className={styles.clearButton}>
              <X size={16} />
              Clear Filters
            </button>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className={styles.resultsInfo}>
        <p>Showing {filteredGear.length} items</p>
      </div>

      {/* Gear Grid */}
      <div ref={gearGridRef} className={styles.gearGrid}>
        {filteredGear.map((item) => {
          const itemSlug = createGearSlug(item.title)
          return (
            <Card
              key={item.id}
              ref={(el) => { itemRefs.current[itemSlug] = el }}
              className={`${styles.gearCard} ${item.isRetired ? styles.retired : ''}`}
            >
              <div className={styles.imageWrapper}>
                {getImageSrc(item) ? (
                  <Image
                    src={getImageSrc(item)!}
                    alt={item.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <Package size={48} />
                  </div>
                )}
                
                {/* Share button */}
                <button
                  onClick={() => copyItemLink(item)}
                  className={styles.shareButton}
                  title="Copy link to this item"
                >
                  <Share2 size={16} />
                </button>
              </div>

              <CardContent className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemProduct}>{item.product}</p>

                {item.brand && (
                  <Badge variant="outline" className={styles.brandBadge}>
                    {item.brand}
                  </Badge>
                )}

                <div className={styles.metaInfo}>
                  {item.weight_oz && (
                    <div className={styles.metaItem}>
                      <Weight size={14} />
                      <span>{item.weight_oz} oz</span>
                    </div>
                  )}
                  {item.cost && (
                    <div className={styles.metaItem}>
                      <span>${item.cost}</span>
                    </div>
                  )}
                </div>

                {item.packLists.length > 0 && (
                  <div className={styles.packLists}>
                    {item.packLists.slice(0, 2).map(list => (
                      <span key={list} className={styles.packListTag}>
                        {list}
                      </span>
                    ))}
                    {item.packLists.length > 2 && (
                      <span className={styles.packListTag}>
                        +{item.packLists.length - 2}
                      </span>
                    )}
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

      {filteredGear.length === 0 && (
        <div className={styles.noResults}>
          <Package size={48} />
          <p>No gear found matching your filters</p>
          <button onClick={clearFilters} className={styles.clearButton}>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default GearGrid