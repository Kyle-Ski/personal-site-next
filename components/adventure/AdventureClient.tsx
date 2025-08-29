"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { Search, Filter, X, Mountain, Calendar } from "lucide-react"
import { TripReport } from "@/lib/cmsProvider"
import TripReportCard from "@/components/adventure/TripReportCard"
import AdventureHero from "@/components/adventure/AdventureHero"
import { AdventureNav } from "@/components/navigation/AdventureNav"
import styles from '@/styles/GearReviews.module.css'

// Extend TripReport to include guides when implemented
export interface AdventureContent extends TripReport {
    contentType?: 'trip-report' | 'guide'  // For future guide support
}

interface AdventureStats {
    totalPeaks: number
    totalMiles: number
    totalElevationGain: number
    highestElevation: number
    completedThisYear: number
    latestAdventure?: string
    stravaActivities?: number
    tripReports: number
    duplicatesRemoved?: number
}

interface AdventureClientProps {
    adventures: AdventureContent[]
    stats: AdventureStats
}

// Debounce hook for search performance
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

export default function AdventureClient({ adventures, stats }: AdventureClientProps) {
    // Search and filter state
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedActivity, setSelectedActivity] = useState<string>('')
    const [selectedContentType, setSelectedContentType] = useState<string>('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
    const [showFilters, setShowFilters] = useState(false)

    // Range filters
    const [distanceRange, setDistanceRange] = useState<[number, number]>([0, 50])
    const [elevationRange, setElevationRange] = useState<[number, number]>([0, 15000])
    const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
        start: '',
        end: ''
    })

    // Debounce search for performance
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    // Calculate ranges from data
    const { maxDistance, maxElevation, minDate, maxDate } = useMemo(() => {
        const distances = adventures.filter(a => a.distance).map(a => a.distance!)
        const elevations = adventures.filter(a => a.elevation).map(a => a.elevation!)
        const dates = adventures.map(a => a.date || a.publishedAt)

        return {
            maxDistance: distances.length ? Math.max(...distances) : 50,
            maxElevation: elevations.length ? Math.max(...elevations) : 15000,
            minDate: dates.length ? Math.min(...dates.map(d => new Date(d).getTime())) : Date.now(),
            maxDate: dates.length ? Math.max(...dates.map(d => new Date(d).getTime())) : Date.now()
        }
    }, [adventures])

    // Update ranges when data changes
    useEffect(() => {
        setDistanceRange([0, maxDistance])
        setElevationRange([0, maxElevation])
    }, [maxDistance, maxElevation])

    // Filter logic with performance optimization
    const filteredAdventures = useMemo(() => {
        let filtered = adventures

        // Content type filter (for future guides)
        if (selectedContentType) {
            filtered = filtered.filter(adventure =>
                (adventure.contentType || 'trip-report') === selectedContentType
            )
        }

        // Activity filter
        if (selectedActivity) {
            filtered = filtered.filter(adventure =>
                adventure.activities?.includes(selectedActivity)
            )
        }

        // Difficulty filter
        if (selectedDifficulty) {
            filtered = filtered.filter(adventure =>
                adventure.difficulty === selectedDifficulty
            )
        }

        // Distance range filter
        filtered = filtered.filter(adventure => {
            if (!adventure.distance) return true // Include adventures without distance data
            return adventure.distance >= distanceRange[0] && adventure.distance <= distanceRange[1]
        })

        // Elevation range filter
        filtered = filtered.filter(adventure => {
            if (!adventure.elevation) return true // Include adventures without elevation data
            return adventure.elevation >= elevationRange[0] && adventure.elevation <= elevationRange[1]
        })

        // Date range filter
        if (dateRange.start || dateRange.end) {
            filtered = filtered.filter(adventure => {
                const adventureDate = new Date(adventure.date || adventure.publishedAt)
                const start = dateRange.start ? new Date(dateRange.start) : new Date(0)
                const end = dateRange.end ? new Date(dateRange.end) : new Date()

                return adventureDate >= start && adventureDate <= end
            })
        }

        // Search filter - check multiple fields
        if (debouncedSearchTerm) {
            const searchLower = debouncedSearchTerm.toLowerCase()
            filtered = filtered.filter(adventure =>
                adventure.title.toLowerCase().includes(searchLower) ||
                adventure.location?.toLowerCase().includes(searchLower) ||
                adventure.excerpt?.toLowerCase().includes(searchLower) ||
                adventure.routeNotes?.toLowerCase().includes(searchLower) ||
                adventure.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
                adventure.activities?.some(activity => activity.toLowerCase().includes(searchLower))
            )
        }

        return filtered
    }, [
        adventures,
        debouncedSearchTerm,
        selectedActivity,
        selectedContentType,
        selectedDifficulty,
        distanceRange,
        elevationRange,
        dateRange
    ])

    // Get available filter options
    const getAvailableActivities = useCallback(() => {
        const activities = new Set<string>()
        adventures.forEach(adventure => {
            adventure.activities?.forEach(activity => activities.add(activity))
        })
        return Array.from(activities).sort()
    }, [adventures])

    const getAvailableContentTypes = useCallback(() => {
        const types = new Set<string>()
        adventures.forEach(adventure => {
            types.add(adventure.contentType || 'trip-report')
        })
        return Array.from(types).sort()
    }, [adventures])

    const getAvailableDifficulties = useCallback(() => {
        const difficulties = new Set<string>()
        adventures.forEach(adventure => {
            if (adventure.difficulty) difficulties.add(adventure.difficulty)
        })
        return Array.from(difficulties).sort((a, b) => {
            const order = ['easy', 'moderate', 'difficult', 'expert']
            return order.indexOf(a) - order.indexOf(b)
        })
    }, [adventures])

    // Clear all filters
    const clearFilters = () => {
        setSearchTerm('')
        setSelectedActivity('')
        setSelectedContentType('')
        setSelectedDifficulty('')
        setDistanceRange([0, maxDistance])
        setElevationRange([0, maxElevation])
        setDateRange({ start: '', end: '' })
    }

    // Count active filters
    const activeFiltersCount = [
        selectedActivity,
        selectedContentType,
        selectedDifficulty,
        distanceRange[0] > 0 || distanceRange[1] < maxDistance ? 'distance' : null,
        elevationRange[0] > 0 || elevationRange[1] < maxElevation ? 'elevation' : null,
        dateRange.start || dateRange.end ? 'date' : null
    ].filter(Boolean).length

    // Build hero stats for AdventureHero
    const heroStats = [
        {
            label: 'Peaks Summited',
            value: stats.totalPeaks > 0 ? `${stats.totalPeaks}+` : 'Getting Started',
            iconName: 'Mountain'
        },
        {
            label: 'Miles Adventured',
            value: stats.totalMiles > 0 ? `${stats.totalMiles.toLocaleString()}+` : 'Counting...',
            iconName: 'MapPin'
        },
        {
            label: 'Elevation Gained',
            value: stats.totalElevationGain > 0 ? `${Math.round(stats.totalElevationGain / 1000).toLocaleString()}k ft` : 'Climbing...',
            iconName: 'ArrowUp'
        },
        {
            label: 'Highest Summit',
            value: '19,341 ft',
            iconName: 'TrendingUp'
        }
    ]

    return (
        <div className="adventure-page">
            {/* Hero Section */}
            <AdventureHero
                title="Adventures in the Great Outdoors"
                subtitle="Exploring as many peaks, trails, and backcountry lines as I can"
                backgroundImage="/mountain-trail.JPG"
                stats={heroStats}
            />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Header Section */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Adventure Reports</h1>
                        <p className={styles.subtitle}>
                            Detailed trip reports, route conditions, and trail intel from Colorado's peaks and beyond
                        </p>
                    </div>

                    {/* Controls */}
                    <div className={styles.controlsWrapper}>
                        {/* Search and Filter Toggle */}
                        <div className={styles.controlBar}>
                            <div className={styles.searchWrapper}>
                                <Search size={20} className={styles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search adventures, locations, or activities..."
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
                        </div>

                        {/* Filter Panel */}
                        {showFilters && (
                            <div className={styles.filterPanel}>
                                {/* Content Type Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Content Type</h3>
                                    <div className={styles.filterButtons}>
                                        {getAvailableContentTypes().map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedContentType(
                                                    selectedContentType === type ? '' : type
                                                )}
                                                className={`${styles.filterButton} ${selectedContentType === type ? styles.active : ''}`}
                                            >
                                                {type === 'trip-report' ? 'Trip Reports' :
                                                    type === 'guide' ? 'Guides' :
                                                        type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Activity Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Activity</h3>
                                    <div className={styles.filterButtons}>
                                        {getAvailableActivities().map(activity => (
                                            <button
                                                key={activity}
                                                onClick={() => setSelectedActivity(
                                                    selectedActivity === activity ? '' : activity
                                                )}
                                                className={`${styles.filterButton} ${selectedActivity === activity ? styles.active : ''}`}
                                            >
                                                {activity.charAt(0).toUpperCase() + activity.slice(1).replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Difficulty Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Difficulty</h3>
                                    <div className={styles.filterButtons}>
                                        {getAvailableDifficulties().map(difficulty => (
                                            <button
                                                key={difficulty}
                                                onClick={() => setSelectedDifficulty(
                                                    selectedDifficulty === difficulty ? '' : difficulty
                                                )}
                                                className={`${styles.filterButton} ${selectedDifficulty === difficulty ? styles.active : ''}`}
                                            >
                                                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Distance Range Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>
                                        Distance Range ({distanceRange[0]}-{distanceRange[1]} miles)
                                    </h3>
                                    <div className={styles.rangeContainer}>
                                        <input
                                            type="range"
                                            min="0"
                                            max={maxDistance}
                                            step="0.5"
                                            value={distanceRange[0]}
                                            onChange={(e) => setDistanceRange([Number(e.target.value), distanceRange[1]])}
                                            className={styles.rangeSlider}
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max={maxDistance}
                                            step="0.5"
                                            value={distanceRange[1]}
                                            onChange={(e) => setDistanceRange([distanceRange[0], Number(e.target.value)])}
                                            className={styles.rangeSlider}
                                        />
                                    </div>
                                </div>

                                {/* Elevation Range Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>
                                        Elevation Range ({elevationRange[0].toLocaleString()}-{elevationRange[1].toLocaleString()} ft)
                                    </h3>
                                    <div className={styles.rangeContainer}>
                                        <input
                                            type="range"
                                            min="0"
                                            max={maxElevation}
                                            step="100"
                                            value={elevationRange[0]}
                                            onChange={(e) => setElevationRange([Number(e.target.value), elevationRange[1]])}
                                            className={styles.rangeSlider}
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max={maxElevation}
                                            step="100"
                                            value={elevationRange[1]}
                                            onChange={(e) => setElevationRange([elevationRange[0], Number(e.target.value)])}
                                            className={styles.rangeSlider}
                                        />
                                    </div>
                                </div>

                                {/* Date Range Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Date Range</h3>
                                    <div className={styles.dateRangeContainer}>
                                        <div className={styles.dateInput}>
                                            <label>From:</label>
                                            <input
                                                type="date"
                                                value={dateRange.start}
                                                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                                                className={styles.dateField}
                                            />
                                        </div>
                                        <div className={styles.dateInput}>
                                            <label>To:</label>
                                            <input
                                                type="date"
                                                value={dateRange.end}
                                                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                                                className={styles.dateField}
                                            />
                                        </div>
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
                        {filteredAdventures.length} {filteredAdventures.length === 1 ? 'adventure' : 'adventures'}
                        {selectedActivity && ` for ${selectedActivity.replace('-', ' ')}`}
                        {selectedDifficulty && ` with ${selectedDifficulty} difficulty`}
                        {selectedContentType && ` (${selectedContentType.replace('-', ' ')})`}
                    </div>

                    {/* Adventures Grid */}
                    {filteredAdventures && filteredAdventures.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
                            {filteredAdventures.map(adventure => (
                                <TripReportCard key={adventure._id} trip={adventure} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noResults}>
                            <p className={styles.noResultsText}>No adventures found matching your criteria.</p>
                            {activeFiltersCount > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className={styles.noResultsAction}
                                >
                                    Clear filters to see all adventures
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <AdventureNav currentPage="adventures" />
        </div>
    )
}