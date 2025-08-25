"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { format } from "date-fns"
import Link from "next/link"
import { Search, Filter, X, Mountain, Code, Calendar } from "lucide-react"
import { PortableTextBlock } from "@portabletext/types"
import styles from '@/styles/BlogFiltering.module.css'
import AdventureHero from "../adventure/AdventureHero"

export interface Author {
    _id: string
    name: string
    image: string
}

export interface Category {
    title: string
    color: string
    isOutdoor: boolean
    _id: string
}

export interface Post {
    _id: string
    publishedAt: string
    title: string
    slug: string
    excerpt: string
    mainImage: string
    categories: Category[] // Updated to use Category objects
    author: Author
    content: any[]
    body: PortableTextBlock[]
}

// Predefined category groups with icons and themes
const CATEGORY_GROUPS = {
    outdoor: {
        name: 'Adventure & Outdoors',
        icon: Mountain,
        color: 'green',
    },
    tech: {
        name: 'Technology & Development',
        icon: Code,
        color: 'blue',
    }
}

interface BlogPageClientProps {
    posts: Post[]
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [selectedGroup, setSelectedGroup] = useState<'all' | 'outdoor' | 'tech'>('all')
    const [showFilters, setShowFilters] = useState(false)

    const filteredPosts = useMemo(() => {
        let filtered = posts

        // Group filter - now using isOutdoor flag and color from CMS
        if (selectedGroup !== 'all') {
            filtered = filtered.filter(post => {
                if (selectedGroup === 'outdoor') {
                    return post.categories.some(cat => cat.isOutdoor === true)
                } else if (selectedGroup === 'tech') {
                    return post.categories.some(cat => cat.color === 'blue' && !cat.isOutdoor)
                }
                return true
            })
        }

        // Category filter - now using actual category titles from CMS
        if (selectedCategory) {
            filtered = filtered.filter(post =>
                post.categories.some(cat => cat.title === selectedCategory)
            )
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.categories.some(cat =>
                    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
        }

        return filtered
    }, [posts, searchTerm, selectedCategory, selectedGroup])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('')
        setSelectedGroup('all')
    }

    const getAvailableCategories = () => {
        let availableCategories: Category[] = []

        if (selectedGroup === 'all') {
            availableCategories = posts.flatMap(post => post.categories)
        } else if (selectedGroup === 'outdoor') {
            availableCategories = posts.flatMap(post =>
                post.categories.filter(cat => cat.isOutdoor === true)
            )
        } else if (selectedGroup === 'tech') {
            availableCategories = posts.flatMap(post =>
                post.categories.filter(cat => cat.color === 'blue' && !cat.isOutdoor)
            )
        }

        // Remove duplicates and return category titles
        const uniqueCategories = availableCategories.filter((cat, index, self) =>
            index === self.findIndex(c => c.title === cat.title)
        )

        return uniqueCategories.map(cat => cat.title)
    }

    const getCategoryClass = (category: Category) => {
        if (category.isOutdoor) {
            return 'outdoor'
        }
        return 'tech'
    }

    const activeFiltersCount = [selectedCategory, selectedGroup !== 'all' ? selectedGroup : null].filter(Boolean).length

    return (
        <div style={{marginTop: '4rem'}}>
            <AdventureHero
                backgroundImage="/longs.jpg"
                mainText1="Blog Posts"
                mainText2="Code, mountains, and everything in between"
            />
            
            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Blog Posts</h1>
                    </div>

                    {/* Controls */}
                    <div className={styles.controlsWrapper}>
                        {/* Search and Filter Toggle */}
                        <div className={styles.controlBar}>
                            <div className={styles.searchWrapper}>
                                <Search size={20} className={styles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search posts..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={styles.searchInput}
                                />
                            </div>

                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`${styles.filterToggle} ${showFilters || activeFiltersCount > 0 ? styles.active : ''
                                    }`}
                            >
                                <Filter size={18} />
                                <span>Filters</span>
                                {activeFiltersCount > 0 && (
                                    <span className={styles.filterBadge}>
                                        {activeFiltersCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Filter Panel */}
                        {showFilters && (
                            <div className={styles.filterPanel}>
                                {/* Content Type Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Content Type</h3>
                                    <div className={styles.filterButtons}>
                                        <button
                                            onClick={() => setSelectedGroup('all')}
                                            className={`${styles.filterButton} ${selectedGroup === 'all' ? styles.active : ''
                                                }`}
                                        >
                                            All Posts
                                        </button>
                                        {Object.entries(CATEGORY_GROUPS).map(([key, group]) => {
                                            const Icon = group.icon
                                            return (
                                                <button
                                                    key={key}
                                                    onClick={() => setSelectedGroup(key as 'outdoor' | 'tech')}
                                                    className={`${styles.filterButton} ${selectedGroup === key ? `${styles.active} ${styles[key]}` : ''
                                                        }`}
                                                >
                                                    <Icon size={14} />
                                                    {group.name}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Category Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Categories</h3>
                                    <div className={styles.filterButtons}>
                                        {getAvailableCategories().map((category) => {
                                            // Find the actual category object to determine its class
                                            const categoryObj = posts.flatMap(post => post.categories)
                                                .find(cat => cat.title === category)
                                            const categoryClass = categoryObj ? getCategoryClass(categoryObj) : 'tech'

                                            return (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(
                                                        selectedCategory === category ? '' : category
                                                    )}
                                                    className={`${styles.filterButton} ${selectedCategory === category
                                                        ? `${styles.active} ${styles[categoryClass]}`
                                                        : ''
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                {activeFiltersCount > 0 && (
                                    <div className={styles.clearFilters}>
                                        <button onClick={clearFilters}>
                                            <X size={16} />
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className={styles.resultsCount}>
                        {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                        {selectedGroup !== 'all' && ` in ${CATEGORY_GROUPS[selectedGroup].name}`}
                        {selectedCategory && ` tagged with "${selectedCategory}"`}
                    </div>

                    {/* Posts Grid */}
                    {filteredPosts && filteredPosts.length > 0 ? (
                        <div className={styles.postsGrid}>
                            {filteredPosts.map((post) => (
                                <Link key={post._id} href={`/blog/${post.slug}`}>
                                    <article className={styles.postCard}>
                                        {/* Post Image */}
                                        {post.mainImage && (
                                            <Image
                                                src={post.mainImage}
                                                alt={post.title}
                                                width={400}
                                                height={225}
                                                className={styles.postImage}
                                            />
                                        )}

                                        <div className={styles.postContent}>
                                            {/* Meta information */}
                                            <div className={styles.postMeta}>
                                                <Calendar size={14} />
                                                <time dateTime={post.publishedAt}>
                                                    {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                                                </time>
                                                {post.author && (
                                                    <>
                                                        <span>•</span>
                                                        <span>{post.author.name}</span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h2 className={styles.postTitle}>{post.title}</h2>

                                            {/* Categories */}
                                            <div className={styles.postCategories}>
                                                {post.categories.slice(0, 3).map((category) => (
                                                    <span
                                                        key={category._id}
                                                        className={`${styles.categoryBadge} ${styles[getCategoryClass(category)]}`}
                                                    >
                                                        {category.title}
                                                    </span>
                                                ))}
                                                {post.categories.length > 3 && (
                                                    <span className={styles.categoryBadge}>
                                                        +{post.categories.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Excerpt */}
                                            {post.excerpt && (
                                                <p className={styles.postExcerpt}>
                                                    {post.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noResults}>
                            <p className={styles.noResultsText}>No posts found matching your criteria.</p>
                            {activeFiltersCount > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className={styles.noResultsAction}
                                >
                                    Clear filters to see all posts
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}