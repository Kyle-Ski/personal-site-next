import { PortableText, PortableTextComponentProps, PortableTextReactComponents } from "@portabletext/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { format } from "date-fns"
import { notFound } from "next/navigation"
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { SanityService } from "@/lib/cmsProvider";

interface PageProps {
    params: Promise<{ id: string }>
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source).url();
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

    const portableTextComponents: Partial<PortableTextReactComponents> = {
        types: {
            image: ({ value }: { value: any }) => (
                <div className="relative w-full my-8">
                    <Image
                        src={urlFor(value)}
                        alt={value.alt || "Blog post image"}
                        width={800}
                        height={500}
                        className="object-contain mx-auto rounded-md"
                        loading="lazy"
                    />
                </div>
            ),
        },
        block: {
            blockquote: ({ children }: PortableTextComponentProps<any>) => (
                <blockquote className="mt-6 mb-6 pl-4 border-l-4 border-gray-300 italic text-gray-600 dark:border-gray-800 dark:text-gray-200">
                    {children}
                </blockquote>
            ),
            normal: ({ children }: PortableTextComponentProps<any>) => (
                <p className="mt-2 mb-2 text-lg sm:text-base">{children}</p>
            ),
            custom: ({ children, value }: PortableTextComponentProps<any>) => {
                switch (value.style) {
                    case 'h1':
                        return <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>;
                    case 'h2':
                        return <h2 className="text-2xl font-semibold mt-6 mb-4">{children}</h2>;
                    case 'h3':
                        return <h3 className="text-xl font-medium mt-4 mb-3">{children}</h3>;
                    case 'h4':
                        return <h4 className="text-lg font-medium mt-3 mb-2">{children}</h4>;
                    default:
                        return <p className="mt-2 mb-2">{children}</p>;
                }
            },
        },
        list: {
            bullet: ({ children }: PortableTextComponentProps<any>) => (
                <ul className="list-disc ml-5 space-y-2">{children}</ul>
            ),
            number: ({ children }: PortableTextComponentProps<any>) => (
                <ol className="list-decimal ml-5 space-y-2">{children}</ol>
            ),
        },
        listItem: {
            bullet: ({ children }: PortableTextComponentProps<any>) => (
                <li className="ml-2">{children}</li>
            ),
            number: ({ children }: PortableTextComponentProps<any>) => (
                <li className="ml-2">{children}</li>
            ),
        },
    };


    const post = await sanityService.getPostBySlug(id);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
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
            )}

            <div className="space-y-4">
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
            </div>
        </article>
    );
}