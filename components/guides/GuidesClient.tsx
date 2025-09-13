"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { Search, Filter, X, Mountain, MapPin, BookOpen, Target, Compass } from "lucide-react"
import { TripReport } from "@/lib/cmsProvider"
import GuideCard from "@/components/adventure/GuideCard"
import AdventureHero from "@/components/adventure/AdventureHero"
import { AdventureNav } from "@/components/navigation/AdventureNav"
import styles from '@/styles/GearReviews.module.css'
import RSSSubscribe from "../RSSSubscribe"

// Guide type mapping for display and filtering
const GUIDE_TYPES = {
    'route': 'Route Guides',
    'gear': 'Gear Guides',
    'planning': 'Planning Guides',
    'skills': 'Skills Guides',
    'conditions': 'Conditions Reports'
} as const

type GuideTypeKey = keyof typeof GUIDE_TYPES

// Interface for Guide data
export interface GuideContent extends TripReport {
    guideType?: GuideTypeKey
    contentType?: string
    seasons?: string[]
    recommendedGear?: Array<{
        name: string
        category: string
        essential: boolean
        notes?: string
    }>
}

interface GuidesClientProps {
    guides: GuideContent[]
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

export default function GuidesClient({ guides }: GuidesClientProps) {
    // Search and filter state
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedGuideType, setSelectedGuideType] = useState<string>('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
    const [selectedActivity, setSelectedActivity] = useState<string>('')
    const [selectedSeason, setSelectedSeason] = useState<string>('')
    const [showFilters, setShowFilters] = useState(false)

    // Range filters (mainly for route guides)
    const [distanceRange, setDistanceRange] = useState<[number, number]>([0, 50])
    const [elevationRange, setElevationRange] = useState<[number, number]>([0, 15000])

    // Debounce search for performance
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    // Calculate ranges from data
    const { maxDistance, maxElevation } = useMemo(() => {
        const distances = guides.filter(g => g.distance).map(g => g.distance!)
        const elevations = guides.filter(g => g.elevationGain).map(g => g.elevationGain!)

        return {
            maxDistance: distances.length > 0 ? Math.max(...distances) : 50,
            maxElevation: elevations.length > 0 ? Math.max(...elevations) : 15000
        }
    }, [guides])

    // Initialize ranges when data loads
    useEffect(() => {
        setDistanceRange([0, maxDistance])
        setElevationRange([0, maxElevation])
    }, [maxDistance, maxElevation])

    // Filter guides based on current filters
    const filteredGuides = useMemo(() => {
        let filtered = guides

        // Guide type filter
        if (selectedGuideType) {
            filtered = filtered.filter(guide =>
                guide.guideType === selectedGuideType ||
                guide.contentType?.includes(selectedGuideType)
            )
        }

        // Difficulty filter
        if (selectedDifficulty) {
            filtered = filtered.filter(guide => guide.difficulty === selectedDifficulty)
        }

        // Activity filter
        if (selectedActivity) {
            filtered = filtered.filter(guide =>
                guide.activities?.some(activity =>
                    activity.toLowerCase().includes(selectedActivity.toLowerCase())
                )
            )
        }

        // Season filter
        if (selectedSeason) {
            filtered = filtered.filter(guide =>
                guide.seasons?.includes(selectedSeason)
            )
        }

        // Distance range filter (for route guides)
        if (distanceRange[0] > 0 || distanceRange[1] < maxDistance) {
            filtered = filtered.filter(guide => {
                if (!guide.distance) return true // Include guides without distance
                return guide.distance >= distanceRange[0] && guide.distance <= distanceRange[1]
            })
        }

        // Elevation range filter (for route guides)
        if (elevationRange[0] > 0 || elevationRange[1] < maxElevation) {
            filtered = filtered.filter(guide => {
                if (!guide.elevationGain) return true // Include guides without elevation
                return guide.elevationGain >= elevationRange[0] && guide.elevationGain <= elevationRange[1]
            })
        }

        // Search filter - check multiple fields
        if (debouncedSearchTerm) {
            const searchLower = debouncedSearchTerm.toLowerCase()
            filtered = filtered.filter(guide =>
                guide.title.toLowerCase().includes(searchLower) ||
                guide.excerpt?.toLowerCase().includes(searchLower) ||
                guide.location?.toLowerCase().includes(searchLower) ||
                guide.activities?.some(activity => activity.toLowerCase().includes(searchLower)) ||
                guide.recommendedGear?.some(gear =>
                    gear.name.toLowerCase().includes(searchLower) ||
                    gear.category.toLowerCase().includes(searchLower)
                )
            )
        }

        return filtered
    }, [
        guides,
        debouncedSearchTerm,
        selectedGuideType,
        selectedDifficulty,
        selectedActivity,
        selectedSeason,
        distanceRange,
        elevationRange,
        maxDistance,
        maxElevation
    ])

    // Get available filter options from data
    const getAvailableGuideTypes = useCallback(() => {
        const typesInData = new Set<GuideTypeKey>()
        guides.forEach(guide => {
            if (guide.guideType && guide.guideType in GUIDE_TYPES) {
                typesInData.add(guide.guideType)
            }
            // Also check contentType for compatibility
            if (guide.contentType) {
                const type = guide.contentType.replace('-guide', '') as GuideTypeKey
                if (type in GUIDE_TYPES) {
                    typesInData.add(type)
                }
            }
        })
        return Array.from(typesInData).sort()
    }, [guides])

    const getAvailableActivities = useCallback(() => {
        const activities = new Set<string>()
        guides.forEach(guide => {
            guide.activities?.forEach(activity => activities.add(activity))
        })
        return Array.from(activities).sort()
    }, [guides])

    const getAvailableSeasons = useCallback(() => {
        const seasons = new Set<string>()
        guides.forEach(guide => {
            guide.seasons?.forEach(season => seasons.add(season))
        })
        return Array.from(seasons).sort()
    }, [guides])

    const getAvailableDifficulties = useCallback(() => {
        const difficulties = new Set<string>()
        guides.forEach(guide => {
            if (guide.difficulty) difficulties.add(guide.difficulty)
        })
        return Array.from(difficulties).sort((a, b) => {
            const order = ['easy', 'moderate', 'difficult', 'expert']
            return order.indexOf(a) - order.indexOf(b)
        })
    }, [guides])

    // Clear all filters
    const clearFilters = () => {
        setSearchTerm('')
        setSelectedGuideType('')
        setSelectedDifficulty('')
        setSelectedActivity('')
        setSelectedSeason('')
        setDistanceRange([0, maxDistance])
        setElevationRange([0, maxElevation])
    }

    // Count active filters
    const activeFiltersCount = [
        selectedGuideType,
        selectedDifficulty,
        selectedActivity,
        selectedSeason,
        distanceRange[0] > 0 || distanceRange[1] < maxDistance ? 'distance' : null,
        elevationRange[0] > 0 || elevationRange[1] < maxElevation ? 'elevation' : null
    ].filter(Boolean).length

    // Calculate guide type counts for hero stats
    const guideTypeCounts = guides.reduce((acc, guide) => {
        const type = guide.guideType || guide.contentType || 'guide'
        acc[type] = (acc[type] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    return (
        <div className="min-h-screen mt-16">
            {/* Hero Section */}
            <AdventureHero
                backgroundImage="/guide-hero.jpg"
                mainText1="Adventure"
                mainText2="Guides"
            />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Adventure Guides</h1>
                        <p className={styles.subtitle}>
                            Comprehensive resources for planning your next adventure
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
                                    placeholder="Search guides..."
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

                            <RSSSubscribe variant="compact" />
                        </div>

                        {/* Filter Panel */}
                        {showFilters && (
                            <div className={styles.filterPanel}>
                                {/* Guide Type Filter */}
                                <div className={styles.filterGroup}>
                                    <h3 className={styles.filterGroupTitle}>Guide Type</h3>
                                    <div className={styles.filterButtons}>
                                        {getAvailableGuideTypes().map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setSelectedGuideType(
                                                    selectedGuideType === type ? '' : type
                                                )}
                                                className={`${styles.filterButton} ${selectedGuideType === type ? styles.active : ''
                                                    }`}
                                            >
                                                {GUIDE_TYPES[type]}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Difficulty Filter */}
                                {getAvailableDifficulties().length > 0 && (
                                    <div className={styles.filterGroup}>
                                        <h3 className={styles.filterGroupTitle}>Difficulty</h3>
                                        <div className={styles.filterButtons}>
                                            {getAvailableDifficulties().map(difficulty => (
                                                <button
                                                    key={difficulty}
                                                    onClick={() => setSelectedDifficulty(
                                                        selectedDifficulty === difficulty ? '' : difficulty
                                                    )}
                                                    className={`${styles.filterButton} ${selectedDifficulty === difficulty ? styles.active : ''
                                                        }`}
                                                >
                                                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Activity Filter */}
                                {getAvailableActivities().length > 0 && (
                                    <div className={styles.filterGroup}>
                                        <h3 className={styles.filterGroupTitle}>Activity</h3>
                                        <div className={styles.filterButtons}>
                                            {getAvailableActivities().map(activity => (
                                                <button
                                                    key={activity}
                                                    onClick={() => setSelectedActivity(
                                                        selectedActivity === activity ? '' : activity
                                                    )}
                                                    className={`${styles.filterButton} ${selectedActivity === activity ? styles.active : ''
                                                        }`}
                                                >
                                                    {activity.charAt(0).toUpperCase() + activity.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Season Filter */}
                                {getAvailableSeasons().length > 0 && (
                                    <div className={styles.filterGroup}>
                                        <h3 className={styles.filterGroupTitle}>Best Season</h3>
                                        <div className={styles.filterButtons}>
                                            {getAvailableSeasons().map(season => (
                                                <button
                                                    key={season}
                                                    onClick={() => setSelectedSeason(
                                                        selectedSeason === season ? '' : season
                                                    )}
                                                    className={`${styles.filterButton} ${selectedSeason === season ? styles.active : ''
                                                        }`}
                                                >
                                                    {season.charAt(0).toUpperCase() + season.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Range Filters (only show if there are route guides with distance/elevation) */}
                                {guides.some(g => g.distance || g.elevationGain) && (
                                    <>
                                        {/* Distance Range */}
                                        {guides.some(g => g.distance) && (
                                            <div className={styles.filterGroup}>
                                                <h3 className={styles.filterGroupTitle}>
                                                    Distance: {distanceRange[0]} - {distanceRange[1]} miles
                                                </h3>
                                                <div className={styles.rangeSlider}>
                                                    <input
                                                        type="range"
                                                        min={0}
                                                        max={maxDistance}
                                                        value={distanceRange[0]}
                                                        onChange={(e) => setDistanceRange([
                                                            parseInt(e.target.value),
                                                            distanceRange[1]
                                                        ])}
                                                        className={styles.rangeInput}
                                                    />
                                                    <input
                                                        type="range"
                                                        min={0}
                                                        max={maxDistance}
                                                        value={distanceRange[1]}
                                                        onChange={(e) => setDistanceRange([
                                                            distanceRange[0],
                                                            parseInt(e.target.value)
                                                        ])}
                                                        className={styles.rangeInput}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Elevation Range */}
                                        {guides.some(g => g.elevationGain) && (
                                            <div className={styles.filterGroup}>
                                                <h3 className={styles.filterGroupTitle}>
                                                    Elevation Gain: {elevationRange[0]} - {elevationRange[1]} ft
                                                </h3>
                                                <div className={styles.rangeSlider}>
                                                    <input
                                                        type="range"
                                                        min={0}
                                                        max={maxElevation}
                                                        step={100}
                                                        value={elevationRange[0]}
                                                        onChange={(e) => setElevationRange([
                                                            parseInt(e.target.value),
                                                            elevationRange[1]
                                                        ])}
                                                        className={styles.rangeInput}
                                                    />
                                                    <input
                                                        type="range"
                                                        min={0}
                                                        max={maxElevation}
                                                        step={100}
                                                        value={elevationRange[1]}
                                                        onChange={(e) => setElevationRange([
                                                            elevationRange[0],
                                                            parseInt(e.target.value)
                                                        ])}
                                                        className={styles.rangeInput}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

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
                        {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
                        {selectedGuideType && ` (${GUIDE_TYPES[selectedGuideType as GuideTypeKey]})`}
                        {selectedDifficulty && ` with ${selectedDifficulty} difficulty`}
                        {selectedActivity && ` for ${selectedActivity}`}
                    </div>

                    {/* Guides Grid */}
                    {filteredGuides && filteredGuides.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
                            {filteredGuides.map(guide => (
                                <GuideCard key={guide._id} guide={guide} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noResults}>
                            <p className={styles.noResultsText}>No guides found matching your criteria.</p>
                            {activeFiltersCount > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className={styles.noResultsAction}
                                >
                                    Clear filters to see all guides
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <AdventureNav currentPage="guides" />
        </div>
    )
}