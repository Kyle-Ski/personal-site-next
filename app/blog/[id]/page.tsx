import { PortableText } from "@portabletext/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import { Metadata } from "next";
import { SanityService } from "@/lib/cmsProvider";
import { portableTextComponents } from "@/utils/portableTextComponents";
import TableOfContents from "@/components/tableOfContents"

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;

    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    const post = await sanityService.getPostBySlug(id);

    return {
        title: post?.title,
        description: post?.excerpt,
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { id } = await params;
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });


    const post = await sanityService.getPostBySlug(id);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl" >
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
                >
                    <ChevronLeft size={20} />
                    Back to all posts
                </Link>

                {post.mainImage && (
                    <div className="w-full h-96 relative mb-8">
                        <img
                            src={post.mainImage}
                            alt={post.title}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                )
                }

                < div className="space-y-4" >
                    <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>

                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={post.author?.image} />
                            <AvatarFallback>{post.author?.name?.[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{post.author?.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {format(new Date(post._createdAt), "MMMM d, yyyy")}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {post.categories?.map((category) => (
                            <span
                                key={category}
                                className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-100"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-lg dark:prose-invert">
                        <PortableText value={post.body} components={portableTextComponents} />
                    </div>
                </div >
            </article >
            <TableOfContents content={post.body} />
        </div>
    );
}