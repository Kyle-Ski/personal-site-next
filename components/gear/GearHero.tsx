"use client"

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Mountain, MapPin, Award, Timer, Loader2 } from 'lucide-react'
import { imgStrToBase64, shimmer } from '@/utils/imageHelpers'

const GearHero = () => {
  const [offset, setOffset] = useState<number>(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

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
  }, [])

  const achievements = [
    { icon: Mountain, label: "60+ peaks above 13,000ft" },
    { icon: Award, label: "AIARE Certified" },
    { icon: MapPin, label: "Mt. Kilimanjaro & Mt. Baker" },
    { icon: Timer, label: "10+ years in the mountains" },
  ]

  // Enhanced responsive sizes for gear hero
  const responsiveSizes = `
    (max-width: 640px) 640px,
    (max-width: 1024px) 1024px, 
    1920px
  `

  return (
    <section className="relative px-4 overflow-hidden h-[80vh] flex items-center pt-20">
      {/* Loading State */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-sm font-medium">Loading gear collection...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-center text-white">
            <Mountain className="w-12 h-12 mx-auto mb-4 text-slate-400" />
            <p className="text-sm font-medium text-slate-300">Gear ready for adventure</p>
          </div>
        </div>
      )}

      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          id="gearHeroImg"
          priority={true}
          src="/Tent-Baker.jpg"
          alt="Mountain camping with gear - gear testing environment"
          fill
          sizes={responsiveSizes}
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

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className={`container mx-auto text-center relative z-10 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
        }`}>
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
          >
            Gear That Goes
            <span
              className="block text-yellow-300"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
            >
              the Distance
            </span>
          </h1>

          {/* Achievement Pills - Enhanced with loading states */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: imageLoaded ? 'slideInUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  {/* Enhanced Glassmorphism container */}
                  <div className="relative backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-lg hover:from-white/20 hover:to-white/10 hover:scale-105">
                    <div className="absolute inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                          <Icon size={24} className="text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div
                        className="text-white/90 text-sm font-medium leading-tight group-hover:text-white transition-colors duration-300"
                        style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.7)' }}
                      >
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div
            className="mt-8 animate-bounce transition-opacity duration-500"
            style={{
              opacity: imageLoaded ? 1 : 0.5,
              animationDelay: '1s'
            }}
          >
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

export default GearHero