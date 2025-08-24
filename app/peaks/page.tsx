import MountainJournal from '@/components/adventure/MountainJournal'
import AdventureHero from '@/components/adventure/AdventureHero'
import { Mountain, TrendingUp, Heart, Calendar } from 'lucide-react'
import { AdventureNav } from '@/components/navigation/AdventureNav'

export const metadata = {
    title: 'Mountain Journal | Kyle Czajkowski',
    description: "Documenting my adventures across Colorado's peaks and ranges",
}

export default function PeaksPage() {
    const heroStats = [
        {
            label: 'Peaks Explored',
            value: '40',
            iconName: 'Mountain'
        },
        {
            label: 'Total Adventures',
            value: '56',
            iconName: 'TrendingUp'
        },
        {
            label: 'Favorite Peak',
            value: 'Wetterhorn',
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