"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import Link from "next/link"
import { Search, Filter, X, Mountain, Code, Calendar } from "lucide-react"
import { PortableTextBlock } from "@portabletext/types"

export interface Author {
    _id: string
    name: string
    image: string
}

export interface Post {
    _id: string
    publishedAt: string
    title: string
    slug: string
    excerpt: string
    mainImage: string
    categories: string[]
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
        categories: [
            'Trail Running',
            'Backpacking', 
            '14ers & Peaks',
            'Backcountry Skiing',
            'Hiking',
            'Trip Reports',
            'Gear Reviews',
            'Route Beta',
            'Winter Adventures',
            'Safety & Techniques'
        ]
    },
    tech: {
        name: 'Technology & Development',
        icon: Code,
        color: 'blue',
        categories: [
            'React',
            'TypeScript',
            'Node.js',
            'Web Development',
            'API Development',
            'DevOps',
            'Tech Tutorials',
            'Project Updates'
        ]
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

        // Group filter
        if (selectedGroup !== 'all') {
            const groupCategories = CATEGORY_GROUPS[selectedGroup].categories
            filtered = filtered.filter(post => 
                post.categories.some(cat => groupCategories.includes(cat))
            )
        }

        // Category filter
        if (selectedCategory) {
            filtered = filtered.filter(post => 
                post.categories.includes(selectedCategory)
            )
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.categories.some(cat => 
                    cat.toLowerCase().includes(searchTerm.toLowerCase())
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
        if (selectedGroup === 'all') {
            return Array.from(new Set(posts.flatMap(post => post.categories)))
        }
        return CATEGORY_GROUPS[selectedGroup].categories.filter(cat =>
            posts.some(post => post.categories.includes(cat))
        )
    }

    const getCategoryBadgeVariant = (category: string) => {
        if (CATEGORY_GROUPS.outdoor.categories.includes(category)) {
            return 'outline' // Will be styled with green accent
        }
        return 'secondary'
    }

    const activeFiltersCount = [selectedCategory, selectedGroup !== 'all' ? selectedGroup : null].filter(Boolean).length

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
                    <p className="text-muted-foreground">Code, mountains, and everything in between</p>
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4">
                    {/* Search and Filter Toggle */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="relative flex-1 max-w-md">
                            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                                showFilters || activeFiltersCount > 0
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'bg-background border-border hover:bg-accent'
                            }`}
                        >
                            <Filter size={18} />
                            <span>Filters</span>
                            {activeFiltersCount > 0 && (
                                <span className="bg-background text-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Filter Panel */}
                    {showFilters && (
                        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                            {/* Content Type Filter */}
                            <div>
                                <h3 className="font-medium mb-3">Content Type</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setSelectedGroup('all')}
                                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                            selectedGroup === 'all'
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-secondary text-secondary-foreground hover:bg-accent'
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
                                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
                                                    selectedGroup === key
                                                        ? key === 'outdoor' 
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                                        : 'bg-secondary text-secondary-foreground hover:bg-accent'
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
                            <div>
                                <h3 className="font-medium mb-3">Categories</h3>
                                <div className="flex flex-wrap gap-2">
                                    {getAvailableCategories().map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(
                                                selectedCategory === category ? '' : category
                                            )}
                                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                                selectedCategory === category
                                                    ? CATEGORY_GROUPS.outdoor.categories.includes(category)
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Clear Filters */}
                            {activeFiltersCount > 0 && (
                                <div className="pt-2 border-t border-border">
                                    <button
                                        onClick={clearFilters}
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        <X size={16} />
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="text-sm text-muted-foreground">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                    {selectedGroup !== 'all' && ` in ${CATEGORY_GROUPS[selectedGroup].name}`}
                    {selectedCategory && ` tagged with "${selectedCategory}"`}
                </div>

                {/* Posts Grid */}
                {filteredPosts && filteredPosts.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post._id}>
                                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 dark:hover:bg-gray-800/90 dark:bg-gray-800/50">
                                    {/* Post Image */}
                                    {post.mainImage && (
                                        <div className="aspect-video w-full overflow-hidden">
                                            <Image
                                                src={post.mainImage}
                                                alt={post.title}
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                                priority={false}
                                            />
                                        </div>
                                    )}
                                    
                                    <CardHeader className="pb-2">
                                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar size={14} />
                                            {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                                        </div>
                                    </CardHeader>
                                    
                                    <CardContent className="pt-0">
                                        {/* Categories */}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {post.categories.slice(0, 3).map((category) => (
                                                <Badge 
                                                    key={category} 
                                                    variant={getCategoryBadgeVariant(category)}
                                                    className={`text-xs ${
                                                        CATEGORY_GROUPS.outdoor.categories.includes(category)
                                                            ? 'border-green-200 text-green-800 dark:border-green-800 dark:text-green-200'
                                                            : ''
                                                    }`}
                                                >
                                                    {category}
                                                </Badge>
                                            ))}
                                            {post.categories.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{post.categories.length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                        
                                        {/* Excerpt */}
                                        {post.excerpt && (
                                            <CardDescription className="line-clamp-3">
                                                {post.excerpt}
                                            </CardDescription>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No posts found matching your criteria.</p>
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={clearFilters}
                                className="mt-2 text-primary hover:underline"
                            >
                                Clear filters to see all posts
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}