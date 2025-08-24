import MountainJournal from '@/components/adventure/MountainJournal'
import AdventureHero from '@/components/adventure/AdventureHero'
import { AdventureNav } from '@/components/navigation/AdventureNav'
import peaksData from '@/data/peaks-data.json'

export const metadata = {
    title: 'Mountain Journal | Kyle Czajkowski',
    description: "Documenting my adventures across Colorado's peaks and ranges",
}

export default function PeaksPage() {
    // Get dynamic stats from peaks data
    const { metadata } = peaksData as {
        metadata: {
            climbedPeaks: number
            totalAscents: number
            favoritePeak: string
        }
    }

    const heroStats = [
        {
            label: 'Unique Peaks',
            value: metadata.climbedPeaks.toString(),
            iconName: 'Mountain'
        },
        {
            label: 'Total Adventures',
            value: metadata.totalAscents.toString(),
            iconName: 'TrendingUp'
        },
        {
            label: 'Favorite Peak',
            value: metadata.favoritePeak,
            iconName: 'Heart'
        },
        {
            label: '2015-2025',
            value: '10 Years',
            iconName: 'Calendar'
        }
    ]

    return (
        <div className="min-h-screen">
            <AdventureHero
                title="Mountain Journal"
                subtitle="A collection of peak experiences across Colorado's ranges"
                stats={heroStats}
                backgroundImage='/capitol-fall.jpg'
                mainText1='Mountain'
                mainText2='Journeys'
            />

            <section className="container mx-auto px-4 py-16">
                <MountainJournal />
            </section>
            <AdventureNav currentPage='peaks'/>
        </div>
    )
}