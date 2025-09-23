"use client"

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, Filter, X, ExternalLink, Weight, Package, Eye, EyeOff, DollarSign, Share2, Star, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GearItem } from '@/lib/cmsProvider'
import { createGearSlug, buildGearUrl, parseGearFilters, findGearBySlug, getReviewUrl, hasReview } from '@/lib/gearUrlUtils'
import styles from '@/styles/GearGrid.module.css'
import { getGearCardImageSizes, isNotionImage } from '@/utils/imageHelpers'

interface GearGridProps {
  gear: GearItem[]
  categories: string[]
  brands: string[]
  packLists: string[]
}

// Simple review badge component
const GearReviewBadge = ({ reviewLink }: { reviewLink: string }) => {
  return (
    <Link
      href={getReviewUrl(reviewLink)}
      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors group"
    >
      <Star size={12} className="fill-current" />
      <span>Review</span>
      <ExternalLink size={10} />
    </Link>
  )
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
  const [toastMessage, setToastMessage] = useState('')
  const [showReviewedOnly, setShowReviewedOnly] = useState(false)


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
      setToastMessage(`Link copied for ${item.title}`)
      setTimeout(() => setToastMessage(''), 3000) // Hide toast after 3 seconds
    } catch (err) {
      console.error('Failed to copy link:', err)
      setToastMessage('Failed to copy link')
      setTimeout(() => setToastMessage(''), 3000)
    }
  }

  const filteredGear = useMemo(() => {
    let filtered = [...gear]

    // Filter by retired status
    if (!showRetired) {
      filtered = filtered.filter(item => !item.isRetired)
    }

    // Filter by reviewed items only
    if (showReviewedOnly) {
      const beforeCount = filtered.length
      filtered = filtered.filter(item => {
        const hasReviewResult = hasReview(item)
        return hasReviewResult
      })
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
  }, [gear, showReviewedOnly, searchTerm, selectedCategory, selectedBrand, selectedPackList, showRetired, sortBy])

  const clearFilters = () => {
    setSearchTerm('') // Clear search
    setSelectedCategory('')
    setSelectedBrand('')
    setSelectedPackList('')
    hasScrolledRef.current = false // Reset scroll flag when clearing filters
    setShowReviewedOnly(false)
    setShowRetired(false)
    router.push('/gear', { scroll: false })
  }

  const activeFiltersCount = [
    selectedCategory,
    selectedBrand,
    selectedPackList,
    showReviewedOnly ? 'reviewed' : null
  ].filter(Boolean).length

  // Development placeholder image
  const getImageSrc = (item: GearItem) => {
    if (process.env.NODE_ENV === 'development') {
      return '/gear-placeholder.svg'
    }
    return item.imageUrl
  }

  // Calculate review stats for display
  const reviewStats = useMemo(() => {
    const totalItems = gear.filter(item => showRetired || !item.isRetired).length
    const reviewedItems = gear.filter(item => 
      (showRetired || !item.isRetired) && hasReview(item)
    ).length
    
    return { totalItems, reviewedItems }
  }, [gear, showRetired])

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

          <button
            onClick={() => setShowReviewedOnly(!showReviewedOnly)}
            className={`${styles.retiredButton} ${showReviewedOnly ? styles.active : ''}`}
            title={`Show ${showReviewedOnly ? 'all items' : 'only reviewed items'}`}
          >
            <FileText size={18} />
            <span>{showReviewedOnly ? 'Show All' : 'Show Reviews'}</span>
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
        <p>
          Showing {filteredGear.length} items
          {showReviewedOnly && (
            <span className="text-green-600 dark:text-green-400 ml-2">
              (reviewed only)
            </span>
          )}
        </p>
      </div>

      {/* Gear Grid - Using your original structure */}
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
                    alt={`${item.brand} ${item.title}` || item.title}
                    width={200}
                    height={200}
                    sizes={getGearCardImageSizes()}
                    loading="lazy"
                    placeholder="empty"
                    onError={(e) => {
                      console.error('Gear image failed to load:', item.imageUrl)
                      e.currentTarget.style.display = 'none';
                    }}
                    className={styles.image}
                    // Add unoptimized flag for problematic Notion images as fallback
                    unoptimized={item.imageUrl ? isNotionImage(item.imageUrl) : undefined}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <Package size={40} />
                  </div>
                )}

                {item.isRetired && (
                  <div className={styles.retiredBadge}>Retired</div>
                )}
              </div>

              <CardContent className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemProduct}>{item.product}</p>

                {item.brand && (
                  <Badge variant="outline" className={styles.brandBadge}>
                    {item.brand}
                  </Badge>
                )}

                {/* Review Badge */}
                {hasReview(item) && (
                  <div className="mb-3">
                    <GearReviewBadge reviewLink={item.reviewLink!} />
                  </div>
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

                <div className={styles.linkContainer}>
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

                  <button
                    onClick={() => copyItemLink(item)}
                    className={styles.shareLink}
                    title="Copy link to this item"
                  >
                    <Share2 size={14} />
                    <span>Share</span>
                  </button>
                </div>
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

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          <div className={styles.toastContent}>
            <Share2 size={16} />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default GearGrid