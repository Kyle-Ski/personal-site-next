import { PortableTextComponents, PortableTextBlockComponent } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source).url();
}

const extractText = (children: any): string => {
    if (!children) return ""; // Handle null or undefined

    if (typeof children === "string" || typeof children === "number") {
        return String(children); // Return plain strings or numbers directly
    }

    if (Array.isArray(children)) {
        // Recursively process arrays
        return children.map(extractText).join("");
    }

    if (typeof children === "object" && children.props) {
        const { children: nestedChildren } = children.props;
        const tagName = children.type;

        // Handle specific tags like <br>
        if (tagName === "br") {
            return "<br />"; // Explicitly render <br> as an HTML tag
        }

        // Preserve inline formatting tags
        if (["strong", "em", "u", "b", "i"].includes(tagName)) {
            return `<${tagName}>${extractText(nestedChildren)}</${tagName}>`;
        }

        // Recursively process other generic elements
        return extractText(nestedChildren);
    }

    return ""; // Fallback for unsupported structures
};

export const portableTextComponents: PortableTextComponents = {
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
        normal: ({ children }) => (
            <p className="mt-2 mb-2 text-lg sm:text-base leading-relaxed">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote style={{
                borderLeft: '4px solid #D1D5DB', // Tailwind's gray-300 equivalent
                paddingLeft: '1rem',
                marginTop: '1rem'
            }} className="mt-6 mb-6 pl-4 border-l-4 border-gray-300 italic text-gray-600 dark:border-gray-700 dark:text-gray-300">
                {children}
            </blockquote>
        ),
        h1: ({ children }) => {
            // Extract text with preserved structure (e.g., <br>, <strong>)
            const textContent = extractText(children);

            // Generate the ID by stripping HTML tags and normalizing text
            const id = textContent
                .replace(/<\/?[^>]+(>|$)/g, "") // Remove all HTML tags
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
                .replace(/^-+|-+$/g, ""); // Trim leading or trailing hyphens


            return (
                <h1 id={id} className="text-4xl font-bold mt-8 mb-4 scroll-mt-20">
                    <strong className="font-semibold">
                        <br />
                        {textContent}
                    </strong>
                </h1>
            );
        },
        h2: ({ children }) => {
            // Extract text with preserved structure (e.g., <br>, <strong>)
            const textContent = extractText(children);

            // Generate the ID by stripping HTML tags and normalizing text
            const id = textContent
                .replace(/<\/?[^>]+(>|$)/g, "") // Remove all HTML tags
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
                .replace(/^-+|-+$/g, ""); // Trim leading or trailing hyphens


            return (
                <h2 id={id} className="text-3xl font-semibold mt-6 mb-4 scroll-mt-20">
                    <strong className="font-semibold">
                        <br />
                        {textContent}
                    </strong>
                </h2>
            );
        },
        h3: ({ children }) => {
            // Extract text with preserved structure (e.g., <br>, <strong>)
            const textContent = extractText(children);

            // Generate the ID by stripping HTML tags and normalizing text
            const id = textContent
                .replace(/<\/?[^>]+(>|$)/g, "") // Remove all HTML tags
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
                .replace(/^-+|-+$/g, ""); // Trim leading or trailing hyphens


            return (
                <h3 id={id} className="text-2xl font-medium mt-4 mb-3 scroll-mt-20">
                    <strong className="font-semibold">
                        <br />
                        {textContent}
                    </strong>
                </h3>
            );
        },
        h4: ({ children }) => {
            // Extract text with preserved structure (e.g., <br>, <strong>)
            const textContent = extractText(children);

            // Generate the ID by stripping HTML tags and normalizing text
            const id = textContent
                .replace(/<\/?[^>]+(>|$)/g, "") // Remove all HTML tags
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
                .replace(/^-+|-+$/g, ""); // Trim leading or trailing hyphens


            return (
                <h4 id={id} className="text-xl font-medium mt-3 mb-2 scroll-mt-20">
                    <strong className="font-semibold">
                        <br />
                        {textContent}
                    </strong>
                </h4>
            );
        },
    },
    list: {
        bullet: ({ children }) => (
            <ul style={{listStyleType: "disc"}} className="list-disc ml-6 space-y-2 my-4">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal ml-6 space-y-2 my-4">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
        number: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded">
                {children}
            </code>
        ),
        link: ({ children, value }) => {
            const href = value?.href || '#';
            return (
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </Link>
            );
        },
        underline: ({ children }) => (
            <span className="underline decoration-1">{children}</span>
        ),
    },
};