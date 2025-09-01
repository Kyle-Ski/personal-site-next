import { SanityService } from '@/lib/cmsProvider'
import { AdventureNav } from '@/components/navigation/AdventureNav'
import { Mountain, MapPin, Backpack, Compass, TrendingUp, Calendar } from 'lucide-react'
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

// Check for actual guides content from Sanity (Phase 2)
async function getGuidesData() {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    try {
        // This query would check for guide content types in Phase 2
        // For now, return empty array as placeholder
        return [];
    } catch (error) {
        console.error('Error fetching guides:', error);
        return [];
    }
}

export default async function GuidesPage() {
    const guides = await getGuidesData();

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-gray-900">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Compass size={16} />
                        Adventure Guides
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Guide Your Next
                        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Adventure</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Comprehensive route guides, planning resources, and essential skills for safe alpine adventures in Colorado and beyond.
                    </p>
                </div>
            </section>

            {/* Coming Soon Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {guides.length === 0 ? (
                            <div className="text-center mb-12">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
                                    <Calendar size={48} className="mx-auto mb-4 text-green-600 dark:text-green-400" />
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Comprehensive Guides Coming Soon
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        I&apos;m working on detailed route guides, planning resources, and skills tutorials based on years of mountain experience.
                                        These guides will help you plan safer, more successful adventures.
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400">
                                        <TrendingUp size={16} />
                                        <span className="font-medium">In Development</span>
                                    </div>
                                </div>

                                {/* Planned Content Types */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                                        }
                                    ].map((item) => (
                                        <div key={item.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                                            <item.icon size={32} className={`mx-auto mb-4 text-${item.color}-600 dark:text-${item.color}-400`} />
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="text-center">
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        Want to be notified when guides are published? Check out my current trip reports for route insights.
                                    </p>
                                    <Link
                                        href="/reports"
                                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                                    >
                                        <Mountain size={16} />
                                        Browse Trip Reports
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            // Phase 2: Actual guides content would be rendered here
                            <div>
                                {/* Future: Render actual guides */}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <AdventureNav currentPage="guides" />
        </div>
    )
}