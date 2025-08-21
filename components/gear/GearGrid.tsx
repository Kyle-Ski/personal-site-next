"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, X, ExternalLink, Weight, Package, Eye, EyeOff, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GearItem } from '@/utils/notionGear'
import styles from '@/styles/GearGrid.module.css'

interface GearGridProps {
  gear: GearItem[]
  categories: string[]
  brands: string[]
  packLists: string[]
}

const GearGrid = ({ gear, categories, brands, packLists }: GearGridProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [selectedPackList, setSelectedPackList] = useState<string>('')
  const [showRetired, setShowRetired] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | 'weight' | 'cost' | 'date'>('name')
  const [showFilters, setShowFilters] = useState(false)

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
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedBrand('')
    setSelectedPackList('')
  }

  const activeFiltersCount = [selectedCategory, selectedBrand, selectedPackList].filter(Boolean).length

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
            onChange={(e) => setSearchTerm(e.target.value)}
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
              onChange={(e) => setSelectedCategory(e.target.value)}
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
              onChange={(e) => setSelectedBrand(e.target.value)}
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
              onChange={(e) => setSelectedPackList(e.target.value)}
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
      <div className={styles.gearGrid}>
        {filteredGear.map((item) => (
          <Card
            key={item.id}
            className={`${styles.gearCard} ${item.isRetired ? styles.retired : ''}`}
          >
            <div className={styles.imageWrapper}>
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={200}
                  height={200}
                  loading="lazy"
                  placeholder="empty"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className={styles.image}
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