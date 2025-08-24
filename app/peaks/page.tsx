import PeakTracker from '@/components/adventure/PeakTracker'
import AdventureHero from '@/components/adventure/AdventureHero'
import { Mountain, TrendingUp, Target, Calendar } from 'lucide-react'

export const metadata = {
    title: 'Peak Tracker | Kyle Czajkowski',
    description: "Tracking my progress on Colorado 14ers and other notable summits",
}

export default function PeaksPage() {
    const heroStats = [
        {
            label: '14ers Completed',
            value: '12/58',
            iconName: 'Mountain'
        },
        {
            label: 'Highest Summit',
            value: '14,440\'',
            iconName: 'TrendingUp'
        },
        {
            label: 'Goal This Year',
            value: '8 more',
            iconName: 'Target'
        },
        {
            label: 'Season Active',
            value: 'Year-round',
            iconName: 'Calendar'
        }
    ]

    return (
        <div className="min-h-screen">
            <AdventureHero
                title="Peak Tracker"
                subtitle="Documenting my journey through Colorado's highest summits"
                stats={heroStats}
            />

            <section className="container mx-auto px-4 py-16">
                <PeakTracker />
            </section>
        </div>
    )
}
