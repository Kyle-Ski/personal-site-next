import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SanityService } from "@/lib/cmsProvider";
import { formatDistance } from "date-fns"
import Link from "next/link"

export interface Author {
    _id: string;
    name: string;
    image: string;
}

export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    excerpt: string;
    mainImage: string;
    categories: string[];
    author: Author;
    content: any[];
    body: any;
}

async function getPosts(): Promise<Post[]> {
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    const posts = await sanityService.getAllPosts();
    return posts
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="container mx-auto py-12">
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
                    <p className="text-muted-foreground">Thoughts, ideas, and discoveries</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts?.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post._id}>
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                {post.mainImage && (
                                    <div className="w-full h-48 relative">
                                        <img
                                            src={post.mainImage}
                                            alt={post.title}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                                    <CardDescription>
                                        {formatDistance(new Date(post._createdAt), new Date(), { addSuffix: true })}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex gap-2 mt-4">
                                        {post.categories?.map((category) => (
                                            <span
                                                key={category}
                                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
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
            </div>
        </div>
    );
}