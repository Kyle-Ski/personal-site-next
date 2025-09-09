"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { format } from "date-fns"
import Link from "next/link"
import { Search, Filter, X, Calendar, User } from "lucide-react"
import { PortableTextBlock } from "@portabletext/types"
import styles from '@/styles/BlogFiltering.module.css'
import AdventureHero from "../adventure/AdventureHero"
import RSSSubscribe from "../RSSSubscribe"

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

interface BlogPageClientProps {
    posts: Post[]
    techOnly?: boolean
}

export default function BlogPageClient({ posts, techOnly = false }: BlogPageClientProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [showFilters, setShowFilters] = useState(false)

    const filteredPosts = useMemo(() => {
        let filtered = posts

        // Category filter
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
    }, [posts, searchTerm, selectedCategory])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('')
    }

    const getAvailableCategories = () => {
        // Get all unique tech category titles
        const availableCategories = posts.flatMap(post => post.categories)
        const uniqueCategories = availableCategories.filter((cat, index, self) =>
            index === self.findIndex(c => c.title === cat.title)
        )
        return uniqueCategories.map(cat => cat.title)
    }

    const activeFiltersCount = [selectedCategory].filter(Boolean).length

    return (
        <div style={{ marginTop: '4rem' }}>
            <AdventureHero
                backgroundImage="/longs.jpg"
                mainText1={techOnly ? "Tech Blog" : "Blog Posts"}
                mainText2={techOnly ? "Code, tutorials, and development insights" : "Code, mountains, and everything in between"}
            />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>{techOnly ? "Tech Blog" : "Blog Posts"}</h1>
                        {techOnly && (
                            <p className={styles.subtitle}>
                                Web development tutorials, programming insights, and tech deep-dives
                            </p>
                        )}
                    </div>

                    {/* Controls */}
                    <div className={styles.controlsWrapper}>
                        {/* Search and Filter Toggle */}
                        <div className={styles.controlBar}>
                            <div className={styles.searchWrapper}>
                                <Search size={20} className={styles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder={techOnly ? "Search tech posts..." : "Search posts..."}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={styles.searchInput}
                                />
                            </div>

                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`${styles.filterToggle} ${showFilters || activeFiltersCount > 0 ? styles.active : ''}`}
                            >
                                <Filter size={18} />
                                <span>Filters</span>
                                {activeFiltersCount > 0 && (
                                    <span className={styles.filterBadge}>
                                        {activeFiltersCount}
                                    </span>
                                )}
                            </button>
                            <RSSSubscribe variant="compact" />
                        </div>

                        {/* Simplified Filter Panel */}
                        {showFilters && (
                            <div className={styles.filterPanel}>
                                {/* Category Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Categories</h3>
                                    <div className={styles.filterButtons}>
                                        {getAvailableCategories().map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(
                                                    selectedCategory === category ? '' : category
                                                )}
                                                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                                            >
                                                {category}
                                            </button>
                                        ))}
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
                        {selectedCategory && ` in "${selectedCategory}"`}
                    </div>

                    {/* Posts Grid - Keep existing grid structure */}
                    {filteredPosts && filteredPosts.length > 0 ? (
                        <div className={styles.postsGrid}>
                            {filteredPosts.map((post) => (
                                <article key={post._id} className={styles.postCard}>
                                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                                        {/* Keep existing post card structure */}
                                        {post.mainImage && (
                                            <div className={styles.postImageWrapper}>
                                                <Image
                                                    src={post.mainImage}
                                                    alt={post.title}
                                                    width={400}
                                                    height={200}
                                                    className={styles.postImage}
                                                />
                                            </div>
                                        )}

                                        <div className={styles.postContent}>
                                            <div className={styles.postMeta}>
                                                <span className={styles.postDate}>
                                                    <Calendar size={14} />
                                                    {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                                                </span>
                                                {post.author && (
                                                    <span className={styles.postAuthor}>
                                                        <User size={14} />
                                                        {post.author.name}
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className={styles.postTitle}>{post.title}</h2>

                                            {post.excerpt && (
                                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                                            )}

                                            {/* Tech Categories */}
                                            {post.categories && post.categories.length > 0 && (
                                                <div className={styles.postCategories}>
                                                    {post.categories
                                                        .filter(cat => !cat.isOutdoor)
                                                        .slice(0, 3)
                                                        .map((category) => (
                                                            <span
                                                                key={category._id}
                                                                className={`${styles.categoryBadge} ${styles.tech}`}
                                                            >
                                                                {category.title}
                                                            </span>
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                </article>
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