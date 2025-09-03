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
import AdventureHero from "@/components/adventure/AdventureHero"
import { MobileTOC } from "@/components/MobileTOC"
import SocialShare from "@/components/SocialShare"

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

    if (!post) {
        return {
            title: 'Blog Post Not Found - Kyle Czajkowski',
        }
    }

    // Create a more descriptive title
    const pageTitle = `${post.title} | Kyle Czajkowski`;

    // Use excerpt or create a fallback description
    const description = post.excerpt || `Read ${post.title} on Kyle Czajkowski's tech blog covering web development, programming tutorials, and development insights.`;

    // Generate category tags for better SEO
    const categoryTags = post.categories?.map(cat => cat.title).join(', ') || '';

    return {
        title: pageTitle,
        description,
        keywords: `${categoryTags}, web development, react, typescript, programming, tech blog, tutorial`,
        openGraph: {
            title: post.title,
            description,
            images: post.mainImage ? [post.mainImage] : [],
            url: `https://kyle.czajkowski.tech/blog/${id}`,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author?.name || 'Kyle Czajkowski'],
            tags: post.categories?.map(cat => cat.title) || [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
            images: post.mainImage ? [post.mainImage] : [],
            creator: '@SkiRoyJenkins',
        },
        // Additional meta tags for better SEO
        other: {
            'article:author': post.author?.name || 'Kyle Czajkowski',
            'article:published_time': post.publishedAt,
            'article:section': categoryTags,
        }
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

    function splitTitle(title: string): { part1: string; part2: string } {
        const words = title.split(" ");
        const mid = Math.ceil(words.length / 2);
        return {
            part1: words.slice(0, mid).join(" "),
            part2: words.slice(mid).join(" "),
        };
    }
    const { part1, part2 } = splitTitle(post.title);
    if (!post) {
        notFound();
    }

    return (
        <div>
            <AdventureHero
                backgroundImage={post.mainImage}
                mainText1={part1}
                mainText2={part2}
            />
            <MobileTOC
                content={post.body}
                contentType="blog"
            />
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-3xl" >
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
                >
                    <ChevronLeft size={20} />
                    Back to all posts
                </Link>

                < div className="space-y-4" >
                    <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
                    <SocialShare
                        url={`https://kyle.czajkowski.tech/blog/${post.slug}`}
                        variant="buttons"
                        size="md"
                        className="mb-6 pb-6 border-b border-border"
                    />
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={post.author?.image} />
                            <AvatarFallback>{post.author?.name?.[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{post.author?.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {post.categories?.map((category) => (
                            <span
                                key={category._id}
                                className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-100"
                            >
                                {category.title}
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