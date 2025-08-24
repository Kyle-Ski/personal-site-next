import { SanityService, GearReview } from "@/lib/cmsProvider"
import GearReviewsClient from "@/components/gear/GearReviewClient"
import GearReviewsHero from "@/components/gear/GearReviewsHero"
import { AdventureNav } from "@/components/navigation/AdventureNav"

async function getGearReviewsData(): Promise<{
    reviews: GearReview[]
    stats: {
        totalReviews: number
        averageRating: number
        categoriesCovered: number
    }
}> {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    })

    try {
        const reviews = await sanityService.getAllGearReviews()

        // Calculate stats from reviews
        const totalReviews = reviews.length
        const averageRating = reviews.length > 0
            ? reviews.reduce((sum, review) => sum + (review.overallRating || 0), 0) / reviews.length
            : 0

        const categoriesCovered = new Set(
            reviews.flatMap(review => review.gearCategories?.map(cat => cat.title) || [])
        ).size

        return {
            reviews,
            stats: {
                totalReviews,
                averageRating,
                categoriesCovered
            }
        }
    } catch (error) {
        console.error('Error fetching gear reviews data:', error)
        return {
            reviews: [],
            stats: {
                totalReviews: 0,
                averageRating: 0,
                categoriesCovered: 0
            }
        }
    }
}

export const metadata = {
    title: 'Gear Reviews | Kyle Czajkowski',
    description: 'In-depth reviews of outdoor gear, hiking equipment, and adventure essentials tested in Colorado\'s backcountry. Real-world performance insights from 10+ years of field testing.',
    keywords: 'outdoor gear reviews, hiking gear reviews, backpacking equipment, mountain gear, field tested gear, colorado outdoor gear',
    openGraph: {
        title: 'Field-Tested Gear Reviews | Kyle Czajkowski',
        description: 'In-depth reviews of outdoor gear, hiking equipment, and adventure essentials tested in Colorado\'s backcountry. Real-world performance insights from 10+ years of field testing.',
        images: ['/blue-tent.jpg'], // Using the gear reviews hero image
        url: 'https://kyle.czajkowski.tech/gear/reviews',
        type: 'website',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'Field-Tested Gear Reviews | Kyle Czajkowski',
        description: 'In-depth reviews of outdoor gear, hiking equipment, and adventure essentials tested in Colorado\'s backcountry.',
        images: ['/blue-tent.jpg'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/gear/reviews'
    }
};

export default async function GearReviewsPage() {
    const { reviews, stats } = await getGearReviewsData()

    return (
        <div className="min-h-screen">
            {/* Hero Section with Stats */}
            <GearReviewsHero
                totalReviews={stats.totalReviews}
                averageRating={stats.averageRating}
                categoriesCovered={stats.categoriesCovered}
                yearsOfTesting={5}
            />

            {/* Reviews Section */}
            <section className="container mx-auto px-4 py-12">
                <GearReviewsClient reviews={reviews} />
            </section>
            <AdventureNav currentPage="gear-reviews" />
        </div>
    )
}