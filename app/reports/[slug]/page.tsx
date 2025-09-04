import { PortableText } from "@portabletext/react"
import { Trophy, ArrowUp, BarChart, Backpack, Cloud, Award, Target, Calendar, TrendingUp, Mountain, ChevronLeft, MapPin, Compass } from 'lucide-react'
import Link from "next/link"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import { Metadata } from "next";
import { SanityService, TripReport } from "@/lib/cmsProvider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image"
import { AdventureNav } from "@/components/navigation/AdventureNav"
import { TripReportTableOfContents } from "@/components/adventure/TripReportTableOfContents"
import { TripReportNavigation } from "@/components/adventure/TripReportNavigation"
import AdventureHero from "@/components/adventure/AdventureHero"
import { GearUsedSection } from "@/components/adventure/GearUsedSection"
import { MobileTOC } from "@/components/MobileTOC"
import GPXRouteSection from "@/components/adventure/GPXRouteSection"
import SocialShare from "@/components/SocialShare"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    const tripReport = await sanityService.getTripReportBySlug(slug);

    if (!tripReport) {
        return {
            title: 'Trip Report Not Found - Kyle Czajkowski',
        }
    }

    // Create descriptive title with location
    const pageTitle = `${tripReport.title}${tripReport.location ? ` - ${tripReport.location}` : ''} | Reports`;

    // Create rich description using excerpt, location, and difficulty
    let description = tripReport.excerpt || tripReport.routeNotes || '';

    if (!description) {
        // Fallback description using available data
        const locationText = tripReport.location ? ` in ${tripReport.location}` : '';
        const difficultyText = tripReport.difficulty ? ` (${tripReport.difficulty} difficulty)` : '';
        const elevationText = tripReport.elevation ? ` reaching ${tripReport.elevation}ft` : '';
        description = `Adventure report: ${tripReport.title}${locationText}${elevationText}${difficultyText}. Read about this outdoor adventure experience.`;
    }

    // Generate activity tags
    const activityTags = tripReport.activities?.join(', ') || '';

    return {
        title: pageTitle,
        description,
        keywords: `${activityTags}, outdoor adventures, hiking, colorado, trip report, ${tripReport.location || ''}`,
        openGraph: {
            title: `${tripReport.title} - Adventure Report`,
            description,
            images: tripReport.mainImage ? [tripReport.mainImage] : [],
            url: `https://kyle.czajkowski.tech/reports/${slug}`,
            type: 'article',
            publishedTime: tripReport.publishedAt,
            authors: [tripReport.author?.name || 'Kyle Czajkowski'],
            tags: tripReport.activities || [],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${tripReport.title} - Adventure Report`,
            description,
            images: tripReport.mainImage ? [{
                url: tripReport.mainImage,
                width: 1200,
                height: 630,
                alt: tripReport.title
            }] : [],
            creator: '@SkiRoyJenkins',
        },
        alternates: {
            canonical: `https://kyle.czajkowski.tech/reports/${slug}`
        },
        // Location-specific meta tags
        other: {
            'geo.placename': tripReport.location || '',
            'geo.position': tripReport.coordinates ? `${tripReport.coordinates.lat};${tripReport.coordinates.lng}` : '',
            'geo.region': 'Colorado, US', // Adjust based on your typical locations
            'article:author': tripReport.author?.name || 'Kyle Czajkowski',
            'article:published_time': tripReport.publishedAt,
            'article:section': 'Trip Reports',
            'adventure:difficulty': tripReport.difficulty || '',
            'adventure:location': tripReport.location || '',
            'adventure:elevation': tripReport.elevation?.toString() || '',
            'adventure:distance': tripReport.distance?.toString() || '',
        }
    }
}

function getAchievementIcon(type: string) {
    switch (type) {
        case 'final-peak': return Trophy
        case 'first-peak': return Award
        case 'personal-record': return Target
        case 'anniversary': return Calendar
        case 'milestone-distance': return TrendingUp
        case 'highest-peak': return Mountain
        case 'technical-achievement': return Mountain
        case 'group-achievement': return Award
        case 'weather-challenge': return Cloud
        case 'multi-day-record': return Calendar
        case 'comeback': return Trophy
        default: return Award
    }
}

function getAchievementStyling(type: string) {
    switch (type) {
        case 'final-peak':
        case 'highest-peak':
            return {
                bgColor: 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                textColor: 'text-green-800 dark:text-green-200'
            }
        case 'first-peak':
        case 'technical-achievement':
            return {
                bgColor: 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                textColor: 'text-blue-800 dark:text-blue-200'
            }
        case 'personal-record':
        case 'milestone-distance':
            return {
                bgColor: 'bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                textColor: 'text-purple-800 dark:text-purple-200'
            }
        case 'anniversary':
        case 'group-achievement':
            return {
                bgColor: 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                textColor: 'text-yellow-800 dark:text-yellow-200'
            }
        case 'weather-challenge':
            return {
                bgColor: 'bg-gray-100 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800',
                textColor: 'text-gray-800 dark:text-gray-200'
            }
        default:
            return {
                bgColor: 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                textColor: 'text-green-800 dark:text-green-200'
            }
    }
}

export default async function TripReportPage({ params }: PageProps) {
    const { slug } = await params;
    const sanityService = new SanityService({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2024-01-01',
        useCdn: true
    });

    const tripReport = await sanityService.getTripReportBySlug(slug);

    if (!tripReport) {
        notFound();
    }

    // Get adjacent trip reports for navigation
    const { previousReport, nextReport } = await sanityService.getAdjacentTripReports(slug);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
            case 'moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
            case 'difficult': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
            case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
        }
    }

    const tripDate = tripReport.date || tripReport.publishedAt
    const formattedDate = tripDate ? format(new Date(tripDate), 'MMMM dd, yyyy') : 'Date TBD'

    return (
        <div>
            {/* Table of Contents - Only shows on desktop */}
            <AdventureHero
                backgroundImage={tripReport.mainImage}
                mainText1={tripReport.title}
                mainText2={tripReport.location || ""}
            />
            <MobileTOC
                tripReport={tripReport}
                contentType="adventure"
            />
            <TripReportTableOfContents tripReport={tripReport} />

            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
                {/* Back Navigation */}
                <Link
                    href="/adventures"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 adventure-content"
                >
                    <ChevronLeft size={20} />
                    Back to all adventures
                </Link>

                {/* Header with Explicit Achievement Callout */}
                <div className="space-y-6 mb-8">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{tripReport.title}</h1>
                            <SocialShare
                                url={`https://kyle.czajkowski.tech/reports/${tripReport.slug}`}
                                title={`${tripReport.title} - Adventure Report`}
                                size="md"
                            />
                            {/* Explicit Achievement Callout from Sanity */}
                            {tripReport.achievement && (
                                <div className={`border rounded-lg p-3 mb-4 ${getAchievementStyling(tripReport.achievement.type).bgColor}`}>
                                    <div className={`flex items-center gap-2 ${getAchievementStyling(tripReport.achievement.type).textColor}`}>
                                        {(() => {
                                            const IconComponent = getAchievementIcon(tripReport.achievement.type)
                                            return <IconComponent className="h-5 w-5" />
                                        })()}
                                        <span className="font-medium">{tripReport.achievement.title}</span>
                                    </div>
                                    {tripReport.achievement.description && (
                                        <p className={`text-sm mt-1 ml-7 ${getAchievementStyling(tripReport.achievement.type).textColor} opacity-90`}>
                                            {tripReport.achievement.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                        <Badge className={getDifficultyColor(tripReport.difficulty)}>
                            {tripReport.difficulty}
                        </Badge>
                    </div>

                    {/* Enhanced Trip Meta Grid - Add Elevation Gain */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {/* Location */}
                        <Card className="adventure-card">
                            <CardContent className="p-4 text-center">
                                <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <div className="font-medium">{tripReport.location || 'Location TBD'}</div>
                                <div className="text-sm text-muted-foreground">Location</div>
                            </CardContent>
                        </Card>

                        {/* Date */}
                        <Card className="adventure-card">
                            <CardContent className="p-4 text-center">
                                <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <div className="font-medium">{formattedDate}</div>
                                <div className="text-sm text-muted-foreground">Trip Date</div>
                            </CardContent>
                        </Card>

                        {/* Elevation */}
                        {tripReport.elevation && tripReport.elevation > 0 && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <Mountain className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">{tripReport.elevation.toLocaleString()}&apos;</div>
                                    <div className="text-sm text-muted-foreground">Elevation</div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Distance */}
                        {tripReport.distance && tripReport.distance > 0 && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">{tripReport.distance} mi</div>
                                    <div className="text-sm text-muted-foreground">Distance</div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Elevation Gain */}
                        {tripReport.elevationGain && tripReport.elevationGain > 0 && (
                            <Card className="adventure-card">
                                <CardContent className="p-4 text-center">
                                    <ArrowUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <div className="font-medium">{tripReport.elevationGain.toLocaleString()}&apos;</div>
                                    <div className="text-sm text-muted-foreground">Elevation Gain</div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>


                {/* Activities & Tags Row */}
                {(tripReport.activities || tripReport.tags) && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tripReport.activities?.map((activity) => (
                            <Badge key={activity} variant="outline" className="border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                {activity}
                            </Badge>
                        ))}
                        {tripReport.tags?.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
                {tripReport.gpxFile && (
                    <section className="adventure-content" id="route-data">
                        <h2 className="text-2xl font-bold mb-4">Route & Elevation</h2>
                        <GPXRouteSection
                            gpxFile={tripReport.gpxFile}
                            routeName={tripReport.title}
                        />
                    </section>
                )}
                {/* Enhanced Weather Widget */}
                {tripReport.weather && (
                    <Card className="weather-widget mb-8">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Cloud className="h-8 w-8" />
                                    <div>
                                        <div className="font-medium capitalize">{tripReport.weather.conditions?.replace('-', ' ')}</div>
                                        <div className="text-sm opacity-90">Weather Conditions</div>
                                    </div>
                                </div>
                                {tripReport.weather.temperature && (
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">
                                            {tripReport.weather.temperature.low}° - {tripReport.weather.temperature.high}°F
                                        </div>
                                        <div className="text-sm opacity-90">Temperature Range</div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Route Notes - Enhanced with ID for TOC */}
                {tripReport.routeNotes && (
                    <Card id="route-notes" className="adventure-card mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Compass className="h-5 w-5 text-green-600" />
                                Route Notes & Navigation
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="whitespace-pre-wrap text-muted-foreground">
                                {tripReport.routeNotes.split('\n\n').map((section, index) => (
                                    <div key={index} className="mb-4 last:mb-0">
                                        {section.startsWith('CRITICAL') || section.startsWith('WARNING') ? (
                                            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-3 rounded">
                                                <p className="text-red-800 dark:text-red-200 font-medium">{section}</p>
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

                {/* Gear Used */}
                <GearUsedSection gearUsed={tripReport.gearUsed} />

                {/* Main Content with Image Support and ID for TOC */}
                <div id="main-content" className="prose prose-lg max-w-none adventure-content dark:prose-invert">
                    {tripReport.body && tripReport.body.length > 0 ? (
                        <PortableText
                            value={tripReport.body}
                            components={{
                                block: {
                                    h2: ({ children }) => (
                                        <h2 className="text-2xl font-bold mt-8 mb-4 text-green-800 dark:text-green-200 border-b border-green-200 dark:border-green-800 pb-2">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-xl font-semibold mt-6 mb-3 text-green-700 dark:text-green-300">
                                            {children}
                                        </h3>
                                    ),
                                },
                                types: {
                                    image: ({ value }) => {
                                        return (
                                            <figure className="my-8">
                                                <div className="relative w-full h-auto">
                                                    <img
                                                        src={value.asset?.url || value.asset?._ref ? `${value.asset.url || urlFor(value.asset).url()}` : ''}
                                                        alt={value.alt || 'Trip photo'}
                                                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                {value.alt && (
                                                    <figcaption className="mt-2 text-sm text-center text-muted-foreground italic">
                                                        {value.alt}
                                                    </figcaption>
                                                )}
                                            </figure>
                                        )
                                    }
                                },
                                marks: {
                                    link: ({ children, value }) => {
                                        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
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
                            Trip report content coming soon...
                        </div>
                    )}
                </div>

                {/* Trip Report Navigation */}
                <TripReportNavigation
                    previousReport={previousReport}
                    nextReport={nextReport}
                />

                {/* Call to Action */}
                <section className="container mx-auto px-4 py-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Enjoyed this adventure report?</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Whether you&apos;re planning your first 14er or looking for gear recommendations, I love to help fellow adventurers get outside safely.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/gear" className="btn-adventure">
                            Browse My Gear Setup
                        </Link>
                        <Link href="/#contact" className="px-6 py-3 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            Get In Touch
                        </Link>
                    </div>
                </section>

            </article>
            <AdventureNav currentPage="reports" />
        </div>
    )
}