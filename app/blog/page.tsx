import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SanityService } from "@/lib/cmsProvider"
import { format } from "date-fns"
import Link from "next/link"
import { PortableTextBlock } from "@portabletext/types";

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
    const posts = await getPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
                    <p className="text-muted-foreground">Thoughts, ideas, and discoveries</p>
                </div>

                {/* Conditional Rendering */}
                {posts && posts.length > 0 ? (
                    // Display Posts Grid if there are posts
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post._id}>
                                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 dark:hover:bg-gray-800/90 dark:bg-gray-800/50">
                                    {/* Post Image */}
                                    {post.mainImage && (
                                        <div className="aspect-video w-full overflow-hidden">
                                            <Image
                                                src={post.mainImage}
                                                alt={post.title}
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                                priority={false}
                                            />
                                        </div>
                                    )}

                                    {/* Post Header */}
                                    <CardHeader className="space-y-2">
                                        <CardTitle className="line-clamp-2 transition-colors group-hover:text-[var(--color-text-accent)] dark:group-hover:text-[var(--color-text-accent)]">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="dark:text-muted-foreground">
                                            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                                        </CardDescription>
                                    </CardHeader>

                                    {/* Post Content */}
                                    <CardContent>
                                        <p className="text-muted-foreground line-clamp-3 mb-4 dark:text-muted-foreground/90">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {post.categories?.map((category) => (
                                                <span
                                                    key={category}
                                                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-100"
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    // Display Friendly Message if No Posts
                    <div className="flex flex-col items-center justify-center py-24">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Come back soon for blog posts!
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
}