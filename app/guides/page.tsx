import { SanityService } from '@/lib/cmsProvider'
import { AdventureNav } from '@/components/navigation/AdventureNav'
import AdventureHero from '@/components/adventure/AdventureHero'
import GuideCard from '@/components/adventure/GuideCard'
import { Mountain, MapPin, Backpack, TrendingUp, Calendar, Compass } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Adventure Guides | Kyle Czajkowski',
    description: "Route guides, planning resources, and outdoor skills for Colorado's mountains. Comprehensive guides for safe alpine adventures.",
    keywords: 'colorado hiking guides, route planning, 14er guides, outdoor skills, alpine safety, mountain guides',
    openGraph: {
        title: 'Adventure Guides & Route Planning | Kyle Czajkowski',
        description: 'Route guides, planning resources, and outdoor skills for Colorado\'s mountains. Comprehensive guides for safe alpine adventures.',
        images: ['/mountain-trail.JPG'],
        url: 'https://kyle.czajkowski.tech/guides',
        type: 'website',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'Adventure Guides & Route Planning | Kyle Czajkowski',
        description: 'Route guides, planning resources, and outdoor skills for Colorado\'s mountains.',
        images: ['/mountain-trail.JPG'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/guides'
    }
};

// Check for actual guides content from Sanity
async function getGuidesData() {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    try {
        const guides = await sanityService.getAllGuides();
        return guides;
    } catch (error) {
        console.error('Error fetching guides:', error);
        return [];
    }
}

export default async function GuidesPage() {
    const guides = await getGuidesData();

    // Calculate guide type counts for hero stats
    const guideTypeCounts = guides.reduce((acc, guide) => {
        const type = guide.contentType || 'guide';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Dynamic hero stats based on actual content
    const heroStats = guides.length > 0 ? [
        {
            label: 'Route Guides',
            value: guideTypeCounts['route-guide'] ? `${guideTypeCounts['route-guide']}` : '0',
            iconName: 'Mountain'
        },
        {
            label: 'Planning Guides',
            value: guideTypeCounts['planning-guide'] ? `${guideTypeCounts['planning-guide']}` : '0',
            iconName: 'MapPin'
        },
        {
            label: 'Skills Guides',
            value: guideTypeCounts['skills-guide'] ? `${guideTypeCounts['skills-guide']}` : '0',
            iconName: 'TrendingUp'
        },
        {
            label: 'Total Guides',
            value: `${guides.length}`,
            iconName: 'Calendar'
        }
    ] : [
        {
            label: 'Route Guides',
            value: 'Coming Soon',
            iconName: 'Mountain'
        },
        {
            label: 'Planning Resources',
            value: 'In Development',
            iconName: 'MapPin'
        },
        {
            label: 'Skills Tutorials',
            value: 'In Progress',
            iconName: 'TrendingUp'
        },
        {
            label: 'Years Experience',
            value: '10+',
            iconName: 'Calendar'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <AdventureHero
                backgroundImage="/mountain-trail.JPG"
                mainText1="Adventure"
                mainText2="Guides"
                // stats={heroStats}
            />

            {/* Main Content - Show guides if they exist, otherwise coming soon */}
            {guides.length > 0 ? (
                /* Actual Guides Content */
                <section className="container mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold mb-2 text-center">Adventure Guides</h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Comprehensive resources for planning your next adventure
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {guides.map(guide => (
                            <GuideCard
                                key={guide._id}
                                guide={guide}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                /* Coming Soon Content */
                <>
                    <section className="container mx-auto px-4 py-12">
                        <h2 className="text-3xl font-bold mb-2 text-center">Comprehensive Guides Coming Soon</h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                            Detailed planning resources and route intelligence
                        </p>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
                                <Mountain size={48} className="mx-auto mb-4 text-green-600 dark:text-green-400" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                                    Route Guides & Planning Resources
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                    I&apos;m working on detailed route guides, planning resources, and skills tutorials based on years of mountain experience.
                                    These guides will help you plan safer, more successful adventures.
                                </p>
                                <div className="flex justify-center">
                                    <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400">
                                        <TrendingUp size={16} />
                                        <span className="font-medium">In Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Planned Content Types */}
                    <section className="container mx-auto px-4 py-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">Planned Guide Types</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: Mountain,
                                    title: 'Route Guides',
                                    description: 'Detailed trail descriptions, waypoints, and conditions for popular Colorado routes',
                                    color: 'green'
                                },
                                {
                                    icon: MapPin,
                                    title: 'Planning Guides',
                                    description: 'Trip planning essentials, logistics, and preparation checklists',
                                    color: 'blue'
                                },
                                {
                                    icon: Backpack,
                                    title: 'Skills & Safety',
                                    description: 'Essential outdoor skills, safety protocols, and risk management',
                                    color: 'orange'
                                },
                                {
                                    icon: Compass,
                                    title: 'Navigation',
                                    description: 'GPS, map reading, and route finding techniques',
                                    color: 'purple'
                                },
                                {
                                    icon: Calendar,
                                    title: 'Seasonal Guides',
                                    description: 'Best times to visit, weather patterns, and seasonal considerations',
                                    color: 'yellow'
                                },
                                {
                                    icon: TrendingUp,
                                    title: 'Training Guides',
                                    description: 'Physical preparation and conditioning for mountain activities',
                                    color: 'red'
                                }
                            ].map((item) => (
                                <div key={item.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <item.icon size={32} className={`mx-auto mb-4 text-${item.color}-600 dark:text-${item.color}-400`} />
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-center">{item.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* CTA Section - Always show, but adjust content based on guides existence */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h3 className="text-2xl font-bold mb-4">
                    {guides.length > 0 ? 'Ready for Your Next Adventure?' : 'Ready to Explore?'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    {guides.length > 0
                        ? 'Get the gear and see real trip reports from the routes covered in these guides.'
                        : 'While guides are in development, check out my current trip reports for route insights and real-world conditions.'
                    }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/reports"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <Mountain size={16} />
                        Browse Trip Reports
                    </Link>
                    <Link
                        href="/gear"
                        className="px-6 py-3 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                    >
                        View Gear Collection
                    </Link>
                </div>
            </section>

            <AdventureNav currentPage="guides" />
        </div>
    )
}