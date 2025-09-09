import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Zap, MailIcon } from "lucide-react";
import AdventureHero from "@/components/adventure/AdventureHero";

export const metadata = {
    title: 'Projects | Kyle Czajkowski - Full-Stack Developer',
    description: 'Explore my portfolio of web development projects including React packages, API integrations, and outdoor tech solutions. Featuring React, TypeScript, Node.js, and more.',
    keywords: 'Kyle Czajkowski projects, react packages, npm packages, strava api, notion api, outdoor tech, web development portfolio, typescript projects, node.js',
    openGraph: {
        title: 'Projects Portfolio | Kyle Czajkowski',
        description: 'Explore my portfolio of web development projects including React packages, API integrations, and outdoor tech solutions.',
        images: ['/longs.jpg'],
        url: 'https://kyle.czajkowski.tech/projects',
        type: 'website',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'Projects Portfolio | Kyle Czajkowski',
        description: 'Full-stack development projects featuring React, TypeScript, APIs, and outdoor tech solutions.',
        images: ['/longs.jpg'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/projects'
    }
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "React Dynamic Input",
            description:
                "An NPM package that allows users to duplicate input fields dynamically, enhancing form flexibility in React applications. Built with TypeScript for type safety and published to npm for easy integration.",
            longDescription: "This package solves a common problem in React forms where users need to add multiple similar inputs (like adding multiple phone numbers or email addresses). It provides a clean, reusable component that handles adding/removing fields with proper state management.",
            technologies: ["React", "TypeScript", "NPM", "Jest", "Rollup"],
            link: "https://github.com/Kyle-Ski/react-dynamic-input",
            demoLink: "https://www.npmjs.com/package/react-dynamic-input",
            status: "Published",
            category: "Open Source Package"
        },
        {
            title: "Strava-Notion Webhooks",
            description:
                "An Express server that integrates Strava activities with a Notion database, enabling real-time updates through webhooks.",
            longDescription: "Automatically syncs your Strava activities to a Notion database in real-time. When you complete a run, ride, or hike, it instantly appears in your Notion workspace with all relevant data like distance, elevation, and duration.",
            technologies: ["Express", "Node.js", "Strava API", "Notion API", "Webhooks", "TypeScript"],
            link: "https://github.com/Kyle-Ski/strava-notion-webhooks2",
            status: "Active",
            category: "API Integration"
        },
        {
            title: "Leaf-N-Go",
            description:
                "An environmental tech packing tool for outdoor adventurers, featuring customizable checklists, environmental insights, and trip planning tools.",
            longDescription: "A comprehensive trip planning application that helps outdoor enthusiasts pack efficiently while minimizing environmental impact. Features include weather-based gear recommendations, Leave No Trace principles integration, and collaborative trip planning.",
            technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Weather API"],
            link: "https://github.com/Kyle-Ski/leaf-n-go",
            status: "In Development",
            category: "Outdoor Tech"
        },
        {
            title: "Strava Node v3",
            description:
                "A Node.js package for interacting with the Strava API, supporting features such as activity tracking, user authentication, and data fetching.",
            longDescription: "A comprehensive Node.js wrapper for the Strava API v3. This community-maintained package provides easy access to Strava's features including athlete data, activities, segments, and more. Used by developers to build Strava integrations.",
            technologies: ["Node.js", "TypeScript", "Strava API", "OAuth", "Jest"],
            link: "https://github.com/node-strava/node-strava-v3",
            demoLink: "https://www.npmjs.com/package/strava-v3",
            status: "Maintained",
            category: "Open Source Package"
        },
        {
            title: "Climb Log",
            description:
                "A collaborative project aimed at logging and tracking climbing activities, providing insights and progress tracking for climbers.",
            longDescription: "A climbing journal application built collaboratively to track climbing sessions, routes, and progress over time. Features include grade tracking, location mapping, and climbing partner coordination.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Collaboration"],
            link: "https://github.com/kale-stew/climb-log",
            status: "Collaborative",
            category: "Outdoor Tech",
            demoLink: "https://www.kylies.photos/climb-log"
        },
        {
            title: "Personal Website",
            description:
                "This website! A modern portfolio built with Next.js, featuring a blog, trip reports, gear reviews, and outdoor activity tracking.",
            longDescription: "A comprehensive personal website showcasing my transition from software development to the outdoor industry. Features include a tech blog, detailed trip reports with GPS data, gear reviews, and integration with Strava for activity tracking.",
            technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Notion API", "Strava API"],
            link: "https://github.com/Kyle-Ski/personal-site-next",
            demoLink: "https://kyle.czajkowski.tech",
            status: "Live",
            category: "Portfolio"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Published':
            case 'Live':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Active':
            case 'Maintained':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'In Development':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Collaborative':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Open Source Package':
                return <Code2 size={16} />;
            case 'API Integration':
                return <Zap size={16} />;
            case 'Outdoor Tech':
                return <Zap size={16} />; // You could use a hiking icon if available
            default:
                return <Code2 size={16} />;
        }
    };

    return (
        <div className="min-h-screen py-16">
            <AdventureHero
                // backgroundImage="/coding-mountains.jpg" // Tech + outdoors image
                mainText1="Projects &"
                mainText2="Code"
            />
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* <h1 className="text-4xl lg:text-5xl font-bold mb-6  mt-4" style={{ color: 'var(--color-text-primary)' }}>
                        Projects & <span style={{ color: 'var(--color-text-accent)' }}>Code</span>
                    </h1> */}
                    <p className="text-xl max-w-3xl mx-auto mt-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        A collection of web development projects showcasing my expertise in React, TypeScript,
                        API integrations, and outdoor technology solutions. From NPM packages used by developers
                        to specialized outdoor apps.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="h-full flex flex-col transition-transform hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}
                        >
                            <CardHeader className="flex-grow">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {getCategoryIcon(project.category)}
                                        <span className="text-sm font-medium" style={{ color: 'var(--color-text-accent)' }}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </Badge>
                                </div>

                                <CardTitle className="text-xl mb-3" style={{ color: 'var(--color-text-primary)' }}>
                                    {project.title}
                                </CardTitle>

                                <CardDescription className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                    {project.longDescription || project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs"
                                            style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-primary)' }}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
                                        style={{ backgroundColor: 'var(--color-text-accent)', color: 'white' }}
                                    >
                                        <Github size={16} />
                                        View Code
                                    </a>

                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors hover:opacity-80"
                                            style={{
                                                borderColor: 'var(--color-text-accent)',
                                                color: 'var(--color-text-accent)'
                                            }}
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                        Interested in collaborating?
                    </h2>
                    <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                        I&apos;m always open to new projects and interesting challenges. Let&apos;s build something great together!
                    </p>
                    <a
                        href="mailto:kyle@czajkowski.tech"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium text-white transition-colors hover:opacity-90"
                        style={{ backgroundColor: 'var(--color-text-accent)' }}
                    >
                        Get In Touch
                        <MailIcon size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}