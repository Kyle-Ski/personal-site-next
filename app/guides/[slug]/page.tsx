import { PortableText } from "@portabletext/react"
import { MapPin, ChevronLeft, Compass, Mountain, Calendar, Clock, Users, Target, BookOpen, AlertTriangle, Trophy, ArrowUp, Cloud } from 'lucide-react'
import Link from "next/link"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import { Metadata } from "next";
import { SanityService, TripReport } from "@/lib/cmsProvider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdventureNav } from "@/components/navigation/AdventureNav"
import { TripReportTableOfContents } from "@/components/adventure/TripReportTableOfContents"
import { TripReportNavigation } from "@/components/adventure/TripReportNavigation"
import AdventureHero from "@/components/adventure/AdventureHero"
import { GearUsedSection } from "@/components/adventure/GearUsedSection"
import { MobileTOC } from "@/components/MobileTOC"
import GPXRouteSection from "@/components/adventure/GPXRouteSection"
import { portableTextComponents } from "@/utils/portableTextComponents"
import SocialShare from "@/components/SocialShare"

interface PageProps {
    params: Promise<{ slug: string }>
}

// Helper function for guide difficulty colors
function getDifficultyColor(difficulty?: string) {
    switch (difficulty?.toLowerCase()) {
        case 'easy':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800'
        case 'moderate':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800'
        case 'difficult':
            return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-200 dark:border-orange-800'
        case 'expert':
            return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-800'
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700'
    }
}

// Helper function for content type display
function getContentTypeInfo(contentType: string) {
    switch (contentType) {
        case 'route-guide':
            return { icon: Mountain, label: 'Route Guide', color: 'green' }
        case 'gear-guide':
            return { icon: Target, label: 'Gear Guide', color: 'blue' }
        case 'planning-guide':
            return { icon: MapPin, label: 'Planning Guide', color: 'purple' }
        case 'skills-guide':
            return { icon: BookOpen, label: 'Skills Guide', color: 'orange' }
        default:
            return { icon: BookOpen, label: 'Guide', color: 'gray' }
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    const guide = await sanityService.getGuideBySlug(slug);

    if (!guide) {
        return {
            title: 'Guide Not Found - Kyle Czajkowski',
        }
    }

    // Create descriptive title with location
    const contentTypeInfo = getContentTypeInfo(guide.contentType || '');
    const pageTitle = `${guide.title}${guide.location ? ` - ${guide.location}` : ''} | ${contentTypeInfo.label}`;

    // Create rich description using excerpt, location, and difficulty
    let description = guide.excerpt || guide.routeNotes || '';

    if (!description) {
        // Fallback description using available data
        const locationText = guide.location ? ` in ${guide.location}` : '';
        const difficultyText = guide.difficulty ? ` (${guide.difficulty} level)` : '';
        const elevationText = guide.elevation ? ` reaching ${guide.elevation}ft` : '';
        description = `${contentTypeInfo.label}: ${guide.title}${locationText}${elevationText}${difficultyText}. Comprehensive guide for safe outdoor adventures.`;
    }

    // Generate activity tags
    const activityTags = guide.activities?.join(', ') || '';

    return {
        title: pageTitle,
        description,
        keywords: `${activityTags}, outdoor guides, ${guide.location || ''}, ${contentTypeInfo.label.toLowerCase()}, colorado adventures`,
        openGraph: {
            title: `${guide.title} - ${contentTypeInfo.label}`,
            description,
            images: guide.mainImage ? [guide.mainImage] : [],
            type: 'article',
            publishedTime: guide.publishedAt,
            authors: [guide.author?.name || 'Kyle Czajkowski'],
            tags: guide.tags || [],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${guide.title} - ${contentTypeInfo.label}`,
            description,
            images: guide.mainImage ? [guide.mainImage] : [],
        },
        alternates: {
            canonical: `https://kyle.czajkowski.tech/guides/${guide.slug}`
        }
    };
}

export default async function GuidePage({ params }: PageProps) {
    const { slug } = await params;

    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    const guide = await sanityService.getGuideBySlug(slug);

    if (!guide) {
        notFound();
    }

    // Get adjacent guides for navigation
    const { previousGuide, nextGuide } = await sanityService.getAdjacentGuides(slug);

    const contentTypeInfo = getContentTypeInfo(guide.contentType || '');
    const ContentTypeIcon = contentTypeInfo.icon;

    const guideDate = guide.date || guide.publishedAt;
    const formattedDate = guideDate ?
        format(new Date(guideDate), 'MMMM dd, yyyy') : 'Date TBD';

    return (
        <div>
            {/* AdventureHero for consistent styling */}
            <AdventureHero
                backgroundImage={guide.mainImage}
                mainText1={guide.title}
                mainText2={guide.location || ""}
            />

            {/* Mobile TOC */}
            <MobileTOC
                tripReport={guide} // Reusing TripReport structure
                contentType="adventure"
            />

            {/* Desktop TOC */}
            <TripReportTableOfContents tripReport={guide} />

            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
                {/* Back Navigation */}
                <Link
                    href="/guides"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 adventure-content"
                >
                    <ChevronLeft size={20} />
                    Back to all guides
                </Link>
                {/* Guide Type & Meta Information */}
                <div className="mb-4">
                    {/* Guide Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <ContentTypeIcon size={20} className={`text-${contentTypeInfo.color}-600`} />
                        <span className={`text-sm font-medium text-${contentTypeInfo.color}-600 dark:text-${contentTypeInfo.color}-400`}>
                            {contentTypeInfo.label}
                        </span>
                    </div>

                    {/* Activities & Tags - Integrated with Guide Type */}
                    {(guide.activities || guide.tags) && (
                        <div className="space-y-2">
                            {/* Activities */}
                            {guide.activities && guide.activities.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        Activities:
                                    </span>
                                    {guide.activities.map((activity) => (
                                        <Badge
                                            key={activity}
                                            variant="outline"
                                            className="border-green-200 text-green-800 dark:border-green-800 dark:text-green-200 text-xs"
                                        >
                                            {activity}
                                        </Badge>
                                    ))}
                                </div>
                            )}

                            {/* Tags */}
                            {guide.tags && guide.tags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        Tags:
                                    </span>
                                    {guide.tags.slice(0, 4).map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                    {guide.tags.length > 4 && (
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            +{guide.tags.length - 4} more
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                </div>
                {/* Header */}
                <div className="space-y-6 mb-8">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{guide.title}</h1>
                            {guide.excerpt && (
                                <p className="text-lg text-muted-foreground mb-4">{guide.excerpt}</p>
                            )}
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span>{formattedDate}</span>
                                </div>
                                {guide.author && (
                                    <div className="flex items-center gap-1">
                                        <Users size={16} />
                                        <span>By {guide.author.name}</span>
                                    </div>
                                )}
                                <Badge className={getDifficultyColor(guide.difficulty)}>
                                    {guide.difficulty || 'All Levels'}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <SocialShare
                        url={`https://kyle.czajkowski.tech/guides/${guide.slug}`}
                        title={`${guide.title}`}
                        variant="buttons"
                    />
                    {/* Guide Meta Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {/* Location */}
                        {guide.location && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">{guide.location}</div>
                                    <div className="text-sm text-muted-foreground">Location</div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Distance (for route guides) */}
                        {guide.distance && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">{guide.distance} mi</div>
                                    <div className="text-sm text-muted-foreground">Distance</div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Elevation (for route guides) */}
                        {guide.elevation && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <ArrowUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">{guide.elevation.toLocaleString()}&apos;</div>
                                    <div className="text-sm text-muted-foreground">Elevation</div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Elevation Gain (for route guides) */}
                        {guide.elevationGain && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <Mountain className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">+{guide.elevationGain.toLocaleString()}&apos;</div>
                                    <div className="text-sm text-muted-foreground">Elevation Gain</div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>

                {/* GPX Route Data (for route guides) */}
                {guide.gpxFile && (
                    <section className="adventure-content" id="route-data">
                        <h2 className="text-2xl font-bold mb-4">Route & Elevation</h2>
                        <GPXRouteSection
                            gpxFile={guide.gpxFile}
                            routeName={guide.title}
                        />
                    </section>
                )}

                {/* Weather Info (for route guides) */}
                {guide.weather && (
                    <Card className="weather-widget mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Cloud className="h-5 w-5 text-green-600" />
                                Typical Conditions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-medium capitalize">{guide.weather.conditions?.replace('-', ' ')}</div>
                                        <div className="text-sm opacity-90">Weather Conditions</div>
                                    </div>
                                </div>
                                {guide.weather.temperature && (
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">
                                            {guide.weather.temperature.low}° - {guide.weather.temperature.high}°F
                                        </div>
                                        <div className="text-sm opacity-90">Temperature Range</div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Route/Planning Notes */}
                {guide.routeNotes && (
                    <Card id="planning-notes" className="adventure-card mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Compass className="h-5 w-5 text-green-600" />
                                {guide.contentType === 'route-guide' ? 'Route Notes & Navigation' : 'Planning Notes & Key Information'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="whitespace-pre-wrap text-muted-foreground">
                                {guide.routeNotes.split('\n\n').map((section, index) => (
                                    <div key={index} className="mb-4 last:mb-0">
                                        {section.startsWith('CRITICAL') || section.startsWith('WARNING') ? (
                                            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-3 rounded">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <AlertTriangle className="h-4 w-4 text-red-600" />
                                                    <span className="font-semibold text-red-800 dark:text-red-200">Safety Alert</span>
                                                </div>
                                                <p className="text-red-800 dark:text-red-200">{section}</p>
                                            </div>
                                        ) : section.startsWith('TIP') || section.startsWith('PRO TIP') ? (
                                            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-3 rounded">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Target className="h-4 w-4 text-blue-600" />
                                                    <span className="font-semibold text-blue-800 dark:text-blue-200">Pro Tip</span>
                                                </div>
                                                <p className="text-blue-800 dark:text-blue-200">{section}</p>
                                            </div>
                                        ) : (
                                            <p>{section}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Recommended Gear */}
                <GearUsedSection gearUsed={guide.gearUsed} />

                {/* Main Guide Content */}
                <div id="main-content" className="prose prose-lg max-w-none adventure-content dark:prose-invert">
                    {guide.body && guide.body.length > 0 ? (
                        <PortableText
                            value={guide.body}
                            components={{
                                ...portableTextComponents,
                                marks: {
                                    link: ({ children, value }) => {
                                        const target = value?.href?.startsWith('http') ? '_blank' : undefined
                                        return (
                                            <a
                                                href={value?.href}
                                                target={target}
                                                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline"
                                            >
                                                {children}
                                            </a>
                                        )
                                    }
                                }
                            }}
                        />
                    ) : (
                        <div className="text-muted-foreground italic text-center py-12">
                            Guide content coming soon...
                        </div>
                    )}
                </div>

                {/* Guide Navigation */}
                <TripReportNavigation
                    previousReport={previousGuide}
                    nextReport={nextGuide}
                    basePath="/guides"
                />

                {/* Call to Action */}
                <section className="container mx-auto px-4 py-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Found this guide helpful?</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Ready to put this guide into action? Check out my gear recommendations and real trip reports for additional insights from the field.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/gear" className="btn-adventure">
                            Browse Gear Collection
                        </Link>
                        <Link href="/reports" className="px-6 py-3 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            Read Trip Reports
                        </Link>
                    </div>
                </section>

            </article>

            <AdventureNav currentPage="guides" />
        </div>
    )
}