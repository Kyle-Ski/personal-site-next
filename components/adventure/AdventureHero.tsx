"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Mountain, MapPin, Calendar, Trophy, TrendingUp, ArrowUp, Map, Heart } from 'lucide-react'
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

const AdventureHero = ({ backgroundImage = "/mountain-trail.JPG", stats, mainText1 = "Field Reports &", mainText2 = "Mountain Intel" }: AdventureHeroProps) => {
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setOffset(window.pageYOffset)
            }
            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    return (
        <section className="relative px-4 overflow-hidden h-[80vh] flex items-center pt-20">
            {/* Parallax Background Image */}
            <div className="absolute inset-0">
                <Image
                    id="adventureHeroImg"
                    priority={true}
                    src={backgroundImage}
                    alt="Mountain trail adventure scene"
                    fill
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(1200, 800))}`}
                    quality={100}
                    style={{
                        objectFit: "cover",
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Main Title */}
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        {mainText1}
                        <span className="block text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{mainText2}</span>
                    </h1>

                    {/* Glassmorphism Stats */}
                    {stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {stats.map((stat, index) => {
                                // Get the icon component, with a fallback to Mountain
                                const IconComponent = iconMap[stat.iconName] || Mountain

                                // Debug log if icon not found (remove in production)
                                if (!iconMap[stat.iconName]) {
                                    console.warn(`Icon "${stat.iconName}" not found in iconMap, using Mountain as fallback`)
                                }

                                return (
                                    <div
                                        key={index}
                                        className="relative group"
                                    >
                                        {/* Glassmorphism container */}
                                        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                {/* Icon */}
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                                    <IconComponent className="w-6 h-6 text-yellow-300" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))' }} />
                                                </div>

                                                {/* Value */}
                                                <div className="text-2xl font-bold text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                                    {stat.value}
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
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdventureHero