"use client"

import { Package, Weight, DollarSign, Calendar } from 'lucide-react'
import { GearItem, calculateTotalWeight } from '@/utils/notionGear'
import styles from '@/styles/GearStats.module.css'

interface GearStatsProps {
  gear: GearItem[]
}

const GearStats = ({ gear }: GearStatsProps) => {
  const activeGear = gear.filter(item => !item.isRetired)
  const totalWeight = calculateTotalWeight(activeGear)
  const totalValue = activeGear.reduce((sum, item) => sum + (item.cost || 0), 0)
  
  // Calculate average days since acquisition
  const gearWithDates = activeGear.filter(item => item.acquiredOn)
  const avgDaysOwned = gearWithDates.length > 0
    ? gearWithDates.reduce((sum, item) => {
        const acquired = new Date(item.acquiredOn!)
        const now = new Date()
        const days = Math.floor((now.getTime() - acquired.getTime()) / (1000 * 60 * 60 * 24))
        return sum + days
      }, 0) / gearWithDates.length
    : 0

  const stats = [
    {
      icon: Package,
      label: "Active Items",
      value: activeGear.length.toString(),
      subtext: `${gear.length - activeGear.length} retired`
    },
    {
      icon: Weight,
      label: "Total Weight",
      value: `${totalWeight.lb.toFixed(1)} lbs`,
      subtext: `${totalWeight.oz.toFixed(0)} oz`
    },
    {
      icon: DollarSign,
      label: "Total Investment",
      value: `$${totalValue.toLocaleString()}`,
      subtext: "and counting..."
    },
    {
      icon: Calendar,
      label: "Avg Days Owned",
      value: Math.floor(avgDaysOwned).toString(),
      subtext: "battle-tested"
    }
  ]

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Icon size={24} />
                </div>
                <div className={styles.statContent}>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statSubtext}>{stat.subtext}</p>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className={styles.funFact}>
          <p>
            💡 <strong>Fun fact:</strong> The total weight of my gear could supply a small expedition to Denali
          </p>
        </div>
      </div>
    </section>
  )
}

export default GearStats