"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Mountain, MapPin, Award, Timer } from 'lucide-react'
import { imgStrToBase64, shimmer } from '@/utils/imageHelpers'

const GearHero = () => {
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

  const achievements = [
    { icon: Mountain, label: "60+ peaks above 13,000ft" },
    { icon: Award, label: "AIARE Certified" },
    { icon: MapPin, label: "Mt. Kilimanjaro & Mt. Baker" },
    { icon: Timer, label: "10+ years in the mountains" },
  ]

  return (
    <section className="relative px-4 overflow-hidden h-[80vh] flex items-center pt-20">
      {/* Parallax Background Image */}
      <div className="absolute inset-0">
        <Image
          id="gearHeroImg"
          priority={true}
          src="/Tent-Baker.jpg"
          alt="Mountain camping with gear - gear testing environment"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            Gear That Goes
            <span className="block text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>the Distance</span>
          </h1>
          {/* Glassmorphism Achievement Pills */}
          {/* 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="relative backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-lg hover:from-white/20 hover:to-white/10">
                    <div className="absolute inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <Icon size={24} className="text-yellow-300" />
                        </div>
                      </div>
                      <div className="text-white/90 text-sm font-medium leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          */}

          {/* Scroll Indicator */}
          <div className="mt-8 animate-bounce">
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

export default GearHero