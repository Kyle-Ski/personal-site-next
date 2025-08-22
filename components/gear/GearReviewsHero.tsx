import { Zap, Target, Star, Award } from 'lucide-react'

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
        <section className="adventure-hero relative py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="hero-content">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Field-Tested
                        <span className="block text-yellow-300">Gear Reviews</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
                        Real-world testing in Colorado&apos;s backcountry. No fluff, just honest insights on gear that performs when it matters.
                    </p>

                    {/* Hero Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {heroStats.map((stat, index) => (
                            <div
                                key={index}
                                className="adventure-stat bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="adventure-stat-icon mb-4">
                                    <stat.icon size={24} className="text-yellow-300" />
                                </div>
                                <div className="adventure-stat-value text-2xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="adventure-stat-label text-green-100 text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}