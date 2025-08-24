"use client"

import Image from 'next/image'
import { Mountain, MapPin, Award, Timer } from 'lucide-react'
import styles from '@/styles/GearHero.module.css'

const GearHero = () => {
  const achievements = [
    { icon: Mountain, label: "60+ peaks above 13,000ft" },
    { icon: Award, label: "AIARE Certified" },
    { icon: MapPin, label: "Mt. Kilimanjaro & Mt. Baker" },
    { icon: Timer, label: "10+ years in the mountains" },
  ]

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.heroBackground}>
        <Image
          src="/Tent-Baker.jpg" // Using your existing hero image
          alt="Mountain landscape"
          fill
          priority
          quality={100}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Gear That Goes the Distance</h1>
        <p className={styles.subtitle}>
          Field-tested on 14ers, backcountry lines, and multi-day expeditions
        </p>

        {/* Achievement Pills */}
        {/* <div className={styles.achievements}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div key={index} className={styles.achievementPill}>
                <Icon size={18} />
                <span>{achievement.label}</span>
              </div>
            )
          })}
        </div> */}

        {/* Expedition Highlights */}
        {/* <div className={styles.expeditions}>
          <h3 className={styles.expeditionTitle}>Notable Expeditions</h3>
          <div className={styles.expeditionGrid}>
            <div className={styles.expeditionItem}>
              <strong>Multi-Day Adventures</strong>
              <p>4-day Mt. Baker • Little Death Hollow • Lost Creek Wilderness • Pecos Wilderness</p>
            </div>
            <div className={styles.expeditionItem}>
              <strong>Trail Racing</strong>
              <p>Dead Horse Ultra 30K • Greenland Trail 30K • Silverton Mountain Duo</p>
            </div>
          </div>
        </div> */}

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span>↓ Explore the gear room ↓</span>
        </div>
      </div>
    </section>
  )
}

export default GearHero