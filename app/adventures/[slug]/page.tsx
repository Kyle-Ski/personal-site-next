import { PortableText } from "@portabletext/react"
import { ChevronLeft, Mountain, MapPin, Calendar, TrendingUp, Thermometer, Clock, Compass } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import { Metadata } from "next";
import { SanityService, TripReport } from "@/lib/cmsProvider";
import { portableTextComponents } from "@/utils/portableTextComponents";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

    return {
        title: tripReport?.title ? `${tripReport.title} | Adventures` : 'Adventure Report',
        description: tripReport?.excerpt || 'Adventure and trip report details',
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
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
                <Link
                    href="/adventures"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 adventure-content"
                >
                    <ChevronLeft size={20} />
                    Back to all adventures
                </Link>

                {/* Hero Image */}
                {tripReport.mainImage && (
                    <div className="w-full h-96 relative mb-8">
                        <img
                            src={tripReport.mainImage}
                            alt={tripReport.title}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                )}

                {/* Header */}
                <div className="space-y-6 mb-8">
                    <div className="flex items-start justify-between">
                        <h1 className="text-3xl sm:text-4xl font-bold flex-1">{tripReport.title}</h1>
                        <Badge className={getDifficultyColor(tripReport.difficulty)}>
                            {tripReport.difficulty}
                        </Badge>
                    </div>

                    {/* Trip Meta Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                                    <div className="font-medium">{tripReport.elevation.toLocaleString()}'</div>
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
                    </div>

                    {/* Activities */}
                    {tripReport.activities && tripReport.activities.length > 0 && (
                        <div>
                            <h3 className="font-medium mb-2">Activities</h3>
                            <div className="flex flex-wrap gap-2">
                                {tripReport.activities.map((activity) => (
                                    <Badge key={activity} variant="outline" className="border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                        {activity}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags as fallback */}
                    {(!tripReport.activities || tripReport.activities.length === 0) && tripReport.tags && tripReport.tags.length > 0 && (
                        <div>
                            <h3 className="font-medium mb-2">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {tripReport.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Weather Conditions */}
                {tripReport.weather && (
                    <Card className="adventure-card mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Thermometer className="h-5 w-5 text-green-600" />
                                Weather Conditions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tripReport.weather.conditions && (
                                    <div>
                                        <div className="font-medium">Conditions</div>
                                        <div className="text-muted-foreground capitalize">{tripReport.weather.conditions}</div>
                                    </div>
                                )}
                                {tripReport.weather.temperature && (
                                    <div>
                                        <div className="font-medium">Temperature</div>
                                        <div className="text-muted-foreground">
                                            {tripReport.weather.temperature.low}°F - {tripReport.weather.temperature.high}°F
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Route Notes */}
                {tripReport.routeNotes && (
                    <Card className="adventure-card mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Compass className="h-5 w-5 text-green-600" />
                                Route Notes
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground whitespace-pre-wrap">{tripReport.routeNotes}</p>
                        </CardContent>
                    </Card>
                )}

                {/* Gear Used */}
                {tripReport.gearUsed && tripReport.gearUsed.length > 0 && (
                    <Card className="adventure-card mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mountain className="h-5 w-5 text-green-600" />
                                Key Gear Used
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {tripReport.gearUsed.map((gear, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-muted-foreground">{gear}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Main Content */}
                <div className="prose prose-lg max-w-none adventure-content">
                    {tripReport.body && tripReport.body.length > 0 ? (
                        <PortableText
                            value={tripReport.body}
                            components={portableTextComponents}
                        />
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>Detailed trip report coming soon...</p>
                        </div>
                    )}
                </div>

                {/* Author Info */}
                {tripReport.author && (
                    <div className="border-t border-border pt-8 mt-12">
                        <div className="flex items-center gap-4">
                            {tripReport.author.image && (
                                <img
                                    src={tripReport.author.image}
                                    alt={tripReport.author.name}
                                    className="w-12 h-12 rounded-full"
                                />
                            )}
                            <div>
                                <div className="font-medium">{tripReport.author.name}</div>
                                <div className="text-sm text-muted-foreground">Adventure Author</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/adventures"
                            className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
                        >
                            <ChevronLeft size={16} />
                            More Adventures
                        </Link>
                        <Link
                            href="/gear"
                            className="text-green-600 dark:text-green-400 hover:underline"
                        >
                            Check Out My Gear →
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}