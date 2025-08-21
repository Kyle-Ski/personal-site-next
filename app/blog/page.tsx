import { SanityService } from "@/lib/cmsProvider"
import BlogPageClient from "@/components/blog/BlogPageClient"
import { PortableTextBlock } from "@portabletext/types"

export interface Author {
    _id: string
    name: string
    image: string
}

export interface Post {
    _id: string
    publishedAt: string
    title: string
    slug: string
    excerpt: string
    mainImage: string
    categories: string[]
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

export default async function BlogPage() {
    const posts = await getPosts()
    return <BlogPageClient posts={posts} />
}