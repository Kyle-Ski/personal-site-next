import { SanityService } from "@/lib/cmsProvider"
import BlogPageClient from "@/components/blog/BlogPageClient"
import { PortableTextBlock } from "@portabletext/types"

export interface Author {
    _id: string
    name: string
    image: string
}

export interface Category {
    title: string
    color: string
    isOutdoor: boolean
    _id: string
}

export interface Post {
    _id: string
    publishedAt: string
    title: string
    slug: string
    excerpt: string
    mainImage: string
    categories: Category[]
    author: Author
    content: any[]
    body: PortableTextBlock[]
}

async function getPosts(): Promise<Post[]> {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    })

    // Use new tech-only method instead of getAllPosts()
    const posts = await sanityService.getTechPosts()
    return posts
}

export const metadata = {
    title: 'Tech Blog | Kyle Czajkowski',
    description: 'Web development tutorials, tech insights, and programming tips. Covering React, TypeScript, Node.js, Next.js, and full-stack development.',
    keywords: 'web development blog, react tutorials, typescript, node.js, nextjs, tech blog, programming tutorials, javascript, full stack development',
    openGraph: {
        title: 'Tech Blog & Development Insights | Kyle Czajkowski',
        description: 'Web development tutorials, tech insights, and programming tips. Covering React, TypeScript, Node.js, Next.js, and full-stack development.',
        images: ['/longs.jpg'],
        url: 'https://kyle.czajkowski.tech/blog',
        type: 'website',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'Tech Blog & Development Insights | Kyle Czajkowski',
        description: 'Web development tutorials, tech insights, and programming tips. Covering React, TypeScript, Node.js, and more.',
        images: ['/longs.jpg'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/blog'
    }
};

export default async function BlogPage() {
    const posts = await getPosts()
    return <BlogPageClient posts={posts} techOnly={true} />
}