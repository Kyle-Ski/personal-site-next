import { SanityService, GearReview } from "@/lib/cmsProvider"
import GearReviewDetail from "@/components/gear/GearReviewDetail"
import { notFound } from "next/navigation"

interface Props {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

async function getGearReview(slug: string): Promise<GearReview | null> {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    })

    try {
        const review = await sanityService.getGearReviewBySlug(slug)
        return review
    } catch (error) {
        return null
    }
}

export async function generateMetadata({ params }: Props) {
    const review = await getGearReview(params.slug)

    if (!review) {
        return {
            title: 'Gear Review Not Found - Kyle Czajkowski',
        }
    }

    const stars = '★'.repeat(review.overallRating) + '☆'.repeat(5 - review.overallRating)

    return {
        title: `${review.gearName} Review (${review.overallRating}/5) - ${review.brand} | Kyle Czajkowski`,
        description: review.excerpt || `In-depth review of the ${review.brand} ${review.gearName}. ${stars} Rating based on real-world testing.`,
        openGraph: {
            title: `${review.brand} ${review.gearName} Review`,
            description: review.excerpt,
            images: review.mainImage ? [review.mainImage] : [],
            type: 'article',
            publishedTime: review.publishedAt,
            modifiedTime: review.updatedAt || review.publishedAt,
            authors: [review.author.name],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${review.brand} ${review.gearName} Review`,
            description: review.excerpt,
            images: review.mainImage ? [review.mainImage] : [],
        },
        // Structured data for gear reviews
        other: {
            'product:brand': review.brand,
            'product:availability': 'in_stock',
            'product:condition': 'new',
            'product:price:amount': review.price?.toString(),
            'product:price:currency': 'USD',
            'product:retailer_item_id': review.slug,
        }
    }
}

export default async function GearReviewPage({ params }: Props) {
    const review = await getGearReview(params.slug)

    if (!review) {
        notFound()
    }

    return <GearReviewDetail review={review} />
}