"use client"

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Mountain, MapPin, Calendar, Trophy, TrendingUp, ArrowUp, Map, Heart, Loader2 } from 'lucide-react'
import { imgStrToBase64, shimmer } from '@/utils/imageHelpers'

interface AdventureHeroProps {
    title?: string
    subtitle?: string
    backgroundImage?: string
    mainText1?: string
    mainText2?: string
    stats?: {
        label: string
        value: string
        iconName: string
    }[]
}

// Smart image source selection based on device capabilities
const getOptimalImageSrc = (baseSrc: string): string => {
    return baseSrc
    // Remove extension to work with optimized versions
    const pathParts = baseSrc.split('.');
    const baseName = pathParts.slice(0, -1).join('.');

    // Check if we have optimized versions
    const optimizedPath = `/optimized/${baseName.replace('/', '')}-hero`;

    // Feature detection for modern formats
    if (typeof window !== 'undefined') {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Check AVIF support
        if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
            return `${optimizedPath}.avif`;
        }

        // Check WebP support  
        if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
            return `${optimizedPath}.webp`;
        }
    }

    // Fallback to optimized JPEG or original
    return `${optimizedPath}.jpg`;
}

const generateResponsiveSizes = () => {
    return `(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px`;
}

const AdventureHero = ({
    backgroundImage = "/mountain-trail.JPG",
    stats,
    mainText1 = "Field Reports &",
    mainText2 = "Mountain Intel"
}: AdventureHeroProps) => {
    const [offset, setOffset] = useState<number>(0)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [optimalSrc, setOptimalSrc] = useState(backgroundImage)

    // Get optimal image source on mount
    useEffect(() => {
        setOptimalSrc(getOptimalImageSrc(backgroundImage))
    }, [backgroundImage])

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
        setImageError(true)
        // Fallback to original image if optimized version fails
        if (optimalSrc !== backgroundImage) {
            setOptimalSrc(backgroundImage)
            setImageError(false)
        }
    }, [optimalSrc, backgroundImage])

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

    return (
        <section className="relative px-4 overflow-hidden h-[80vh] flex items-center pt-20">
            {/* Loading State */}
            {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-20">
                    <div className="text-center text-white">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
                        <p className="text-sm font-medium">Loading image...</p>
                    </div>
                </div>
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

            {/* Optimized Background Image */}
            <div className="absolute inset-0">
                <Image
                    id="adventureHeroImg"
                    priority={true}
                    src={optimalSrc}
                    alt="Mountain trail adventure scene"
                    fill
                    sizes={generateResponsiveSizes()}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(1200, 800))}`}
                    quality={85}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{
                        objectFit: "cover",
                        transform: `translateY(${offset * 0.5}px)`,
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className={`container mx-auto text-center relative z-10 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                }`}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        {mainText1}
                        <span className="block text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                            {mainText2}
                        </span>
                    </h1>

                    {/* Stats Grid */}
                    {stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {stats.map((stat, index) => {
                                const IconComponent = iconMap[stat.iconName] || Mountain

                                return (
                                    <div
                                        key={index}
                                        className="relative group"
                                        style={{
                                            animationDelay: `${index * 150}ms`,
                                            animation: imageLoaded ? 'slideInUp 0.8s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                                    <IconComponent className="w-6 h-6 text-yellow-300" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))' }} />
                                                </div>
                                                <div className="text-2xl font-bold text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                                    {stat.value}
                                                </div>
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