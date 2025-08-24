"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Zap, Target, Star, Award } from 'lucide-react'
import { imgStrToBase64, shimmer } from '@/utils/imageHelpers'

interface HeroStat {
    label: string
    value: string
    icon: any
}

interface GearReviewsHeroProps {
    totalReviews?: number
    averageRating?: number
    categoriesCovered?: number
    yearsOfTesting?: number
}

export default function GearReviewsHero({
    totalReviews = 0,
    averageRating = 0,
    categoriesCovered = 0,
    yearsOfTesting = 5
}: GearReviewsHeroProps) {
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

    const heroStats: HeroStat[] = [
        {
            label: 'Gear Reviews',
            value: totalReviews > 0 ? `${totalReviews}+` : 'Growing Library',
            icon: Star
        },
        {
            label: 'Average Rating',
            value: averageRating > 0 ? `${averageRating.toFixed(1)}/5` : 'High Standards',
            icon: Award
        },
        {
            label: 'Categories',
            value: categoriesCovered > 0 ? `${categoriesCovered}+` : 'Comprehensive',
            icon: Target
        },
        {
            label: 'Testing Experience',
            value: `${yearsOfTesting}+ Years`,
            icon: Zap
        }
    ]

    return (
        <section className="relative px-4 overflow-hidden h-[80vh] flex items-center pt-20">
            {/* Parallax Background Image */}
            <div className="absolute inset-0">
                <Image
                    id="gearReviewsHeroImg"
                    priority={true}
                    src="/blue-tent.jpg"
                    alt="Blue tent in mountain wilderness - gear testing environment"
                    fill
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(1200, 800))}`}
                    quality={100}
                    style={{
                        objectFit: "cover",
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
                {/* Subtle gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        Field-Tested
                        <span className="block text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Gear Reviews</span>
                    </h1>
                    {/* Glassmorphism Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {heroStats.map((stat, index) => (
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
                                                <stat.icon size={24} className="text-yellow-300" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))' }} />
                                            </div>
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
                        ))}
                    </div>

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