"use client"

import { useEffect, useState, useCallback, useRef } from 'react'
import { Mountain, MapPin, Calendar, Trophy, TrendingUp, ArrowUp, Map, Heart } from 'lucide-react'
import Skeleton from '@/components/ui/skeleton'
import Counter from '@/components/ui/counter'

interface AdventureHeroProps {
    title?: string
    subtitle?: string
    backgroundImage?: string
    mainText1?: string
    mainText2?: string
    mobileImagePosition?: 'left' | 'center' | 'right'
    stats?: {
        label: string
        value: string
        iconName: string
    }[]
}

// Get optimized path base for static images, null for Sanity CMS URLs
const getOptimizedBase = (baseSrc: string): string | null => {
    if (baseSrc.includes('cdn.sanity.io')) return null;
    const pathParts = baseSrc.split('.');
    if (pathParts.length < 2) return null;
    const baseName = pathParts.slice(0, -1).join('.').replace('/', '');
    return `/optimized/${baseName}`;
}

const AdventureHero = ({
    backgroundImage = "/mountain-trail.JPG",
    stats,
    mainText1 = "Field Reports &",
    mainText2 = "Mountain Intel",
    mobileImagePosition = 'center'
}: AdventureHeroProps) => {
    const [offset, setOffset] = useState<number>(0)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [showOptimized, setShowOptimized] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)
    const imgRef = useRef<HTMLImageElement | null>(null)

    const optimizedBase = getOptimizedBase(backgroundImage)
    const currentSrc = showOptimized && optimizedBase ? optimizedBase : backgroundImage

    // Skip loading state if image is already cached
    useEffect(() => {
        if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
            setImageLoaded(true)
        }
    }, [backgroundImage])

    // Only show the skeleton placeholder after 200ms — prevents flicker on cached/fast loads
    useEffect(() => {
        if (imageLoaded || imageError) {
            setShowSpinner(false)
            return
        }
        const t = setTimeout(() => setShowSpinner(true), 200)
        return () => clearTimeout(t)
    }, [imageLoaded, imageError])

    // Generate mobile position class
    const getMobilePositionClass = () => {
        switch (mobileImagePosition) {
            case 'left':
                return 'object-left'
            case 'right':
                return 'object-right'
            case 'center':
            default:
                return 'object-center'
        }
    }

    // Optimized scroll handler
    const handleScroll = useCallback(() => {
        setOffset(window.pageYOffset)
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let ticking = false
            const throttledScroll = () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        handleScroll()
                        ticking = false
                    })
                    ticking = true
                }
            }

            window.addEventListener('scroll', throttledScroll, { passive: true })
            return () => window.removeEventListener('scroll', throttledScroll)
        }
    }, [handleScroll])

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true)
    }, [])

    const handleImageError = useCallback(() => {
        if (optimizedBase && showOptimized) {
            setShowOptimized(false)
        } else {
            setImageError(true)
        }
    }, [optimizedBase, showOptimized])

    const iconMap: Record<string, React.ComponentType<any>> = {
        'Mountain': Mountain,
        'MapPin': MapPin,
        'Calendar': Calendar,
        'Trophy': Trophy,
        'TrendingUp': TrendingUp,
        'ArrowUp': ArrowUp,
        'Map': Map,
        'Heart': Heart
    }

    const imgStyle = {
        position: 'absolute' as const,
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        transform: `translateY(${offset * 0.5}px)`,
        opacity: imageLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
    }

    const imgClass = `sm:object-center ${getMobilePositionClass()}`

    // Scroll-darkening: overlay opacity grows as user scrolls so text stays readable
    const overlayOpacity = Math.min(0.4 + offset / 800, 0.75)

    return (
        <section className="relative px-4 overflow-hidden h-[80vh] flex items-center pt-20">
            {/* Loading State (skeleton, only after 200ms to avoid flicker) */}
            {!imageLoaded && !imageError && showSpinner && (
                <Skeleton className="absolute inset-0 z-20 rounded-none" />
            )}

            {/* Error State */}
            {imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center text-white">
                        <Mountain className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                        <p className="text-sm font-medium text-slate-300">Adventure awaits</p>
                    </div>
                </div>
            )}

            {/* Responsive Background Image */}
            <div className="absolute inset-0">
                {optimizedBase && showOptimized ? (
                    <picture>
                        <source
                            srcSet={`${optimizedBase}-mobile.avif 640w, ${optimizedBase}-tablet.avif 1024w, ${optimizedBase}-hero.avif 2880w`}
                            sizes="100vw"
                            type="image/avif"
                        />
                        <source
                            srcSet={`${optimizedBase}-mobile.webp 640w, ${optimizedBase}-tablet.webp 1024w, ${optimizedBase}-hero.webp 2880w`}
                            sizes="100vw"
                            type="image/webp"
                        />
                        <source
                            srcSet={`${optimizedBase}-mobile.jpg 640w, ${optimizedBase}-tablet.jpg 1024w, ${optimizedBase}-hero.jpg 2880w`}
                            sizes="100vw"
                            type="image/jpeg"
                        />
                        <img
                            ref={imgRef}
                            src={`${optimizedBase}-hero.jpg`}
                            alt="Mountain trail adventure scene"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={imgStyle}
                            className={imgClass}
                        />
                    </picture>
                ) : (
                    <img
                        ref={imgRef}
                        src={backgroundImage}
                        alt="Mountain trail adventure scene"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={imgStyle}
                        className={imgClass}
                    />
                )}

                <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity * 0.5}), transparent 30%, rgba(0,0,0,${overlayOpacity}))`,
                    }}
                />
            </div>

            {/* Content */}
            <div className={`container mx-auto text-center relative z-10 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                }`}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        {mainText1}
                        <span className="block text-amber-400" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                            {mainText2}
                        </span>
                    </h1>

                    {/* Glassmorphism Stats Grid - Exact replica of GearReviewsHero */}
                    {stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat, index) => {
                                const IconComponent = iconMap[stat.iconName] || Mountain

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >
                                        {/* Etched Glass Effect Container */}
                                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-lg hover:from-white/20 hover:to-white/10">

                                            {/* Subtle inner glow effect */}
                                            <div className="absolute inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div className="flex justify-center mb-4">
                                                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                                        <IconComponent size={24} className="text-amber-400" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))' }} />
                                                    </div>
                                                </div>

                                                {/* Value */}
                                                <div className="text-2xl font-bold text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                                    <AnimatedStatValue value={stat.value} />
                                                </div>

                                                {/* Label */}
                                                <div className="text-white/80 text-sm font-medium" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.7)' }}>
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}

export default AdventureHero

/**
 * Parses a stat value like "75+", "5.0", "1,234", "100%" and animates the
 * numeric portion. Falls back to plain text if no number can be parsed.
 */
function AnimatedStatValue({ value }: { value: string }) {
    // Match leading optional non-digits (prefix like "$"), digits with optional comma/decimal, then trailing chars (suffix like "+", "%", "k")
    const match = value.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/)
    if (!match) {
        return <>{value}</>
    }
    const [, prefix, numStr, suffix] = match
    const cleaned = numStr.replace(/,/g, '')
    const num = parseFloat(cleaned)
    if (Number.isNaN(num)) return <>{value}</>
    const decimals = cleaned.includes('.') ? cleaned.split('.')[1].length : 0
    return <Counter to={num} prefix={prefix} suffix={suffix} decimals={decimals} />
}