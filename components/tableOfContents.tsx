"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PortableTextBlock } from "@portabletext/types";

interface TableOfContentsProps {
    content: PortableTextBlock[];
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
    const [activeSection, setActiveSection] = useState("");
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        // Extract headings from the content
        const extractHeadings = (blocks: any) => {
            return blocks
                .filter(
                    (block: any) =>
                        block.style === "h3" || block.style === "h2" || block.style === "h1"
                )
                .map((block: any) => {
                    const text = block.children[0]?.text || "";
                    const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-+/, ""); // Remove leading hyphens
                    return {
                        text,
                        id,
                        level: parseInt(block.style.charAt(1)),
                    };
                });
        };

        if (content?.length) {
            setHeadings(extractHeadings(content));
        }
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -80% 0px",
            }
        );

        // Observe all section headings
        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="hidden xl:flex xl:fixed xl:right-[max(2rem,calc(50%-45rem))] top-1/2 transform -translate-y-1/2 w-64">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
                <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    Jump to
                </h4>
                <ul className="space-y-2">
                    {headings.map(({ text, id, level }) => (
                        <li key={id} style={{ paddingLeft: `${(level - 1) * 0.75}rem` }}>
                            <a
                                href={`#${id}`}
                                className={cn(
                                    "block py-1 text-sm transition-colors hover:text-[var--color-text-accent]",
                                    activeSection === id
                                        ? "text-[var--color-text-accent] font-medium"
                                        : "text-gray-600 dark:text-gray-400"
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(id)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TableOfContents;
