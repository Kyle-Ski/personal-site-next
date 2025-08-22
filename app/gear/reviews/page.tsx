import { SanityService, GearReview } from "@/lib/cmsProvider"
import GearReviewsClient from "@/components/gear/GearReviewClient"

async function getGearReviews(): Promise<GearReview[]> {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    })

    const reviews = await sanityService.getAllGearReviews()
    return reviews
}

export const metadata = {
    title: 'Gear Reviews - Kyle Czajkowski',
    description: 'In-depth reviews of outdoor gear, hiking equipment, and adventure essentials.',
}

export default async function GearReviewsPage() {
    const reviews = await getGearReviews()
    return <GearReviewsClient reviews={reviews} />
}