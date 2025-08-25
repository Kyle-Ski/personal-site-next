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
    categories: Category[] // Updated to use Category objects
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

    const posts = await sanityService.getAllPosts()
    return posts
}

export const metadata = {
    title: 'Blog | Kyle Czajkowski',
    description: 'Web development tutorials, outdoor adventure stories, tech insights, and programming tips. Covering React, TypeScript, Node.js, and mountain adventures in Colorado.',
    keywords: 'web development blog, react tutorials, typescript, node.js, outdoor adventures, tech blog, programming tutorials, colorado hiking',
    openGraph: {
        title: 'Tech Blog & Adventure Stories | Kyle Czajkowski',
        description: 'Web development tutorials, outdoor adventure stories, tech insights, and programming tips. Covering React, TypeScript, Node.js, and mountain adventures in Colorado.',
        images: ['/longs.jpg'],
        url: 'https://kyle.czajkowski.tech/blog',
        type: 'website',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'Tech Blog & Adventure Stories | Kyle Czajkowski',
        description: 'Web development tutorials, outdoor adventure stories, tech insights, and programming tips.',
        images: ['/longs.jpg'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/blog'
    }
};

export default async function BlogPage() {
    const posts = await getPosts()
    return <BlogPageClient posts={posts} />
}