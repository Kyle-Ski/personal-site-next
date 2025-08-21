import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mountain, MapPin, Calendar, TrendingUp, Thermometer, Clock } from 'lucide-react'
import { format } from 'date-fns'
import { TripReport } from '@/lib/cmsProvider'

interface TripReportCardProps {
    trip: TripReport
}

const TripReportCard = ({ trip }: TripReportCardProps) => {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-800'
            case 'moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-yellow-200 dark:border-yellow-800'
            case 'difficult': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 border-orange-200 dark:border-orange-800'
            case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border-red-200 dark:border-red-800'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
        }
    }

    // Handle date formatting - use trip date if available, otherwise published date
    const tripDate = trip.date || trip.publishedAt
    const formattedDate = tripDate ? format(new Date(tripDate), 'MMM dd, yyyy') : 'Date TBD'

    return (
        <Link href={`/adventures/${trip.slug}`}>
            <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 adventure-card">
                {/* Hero Image */}
                {trip.mainImage && (
                    <div className="aspect-video w-full overflow-hidden">
                        <Image
                            src={trip.mainImage}
                            alt={trip.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            priority={false}
                        />
                    </div>
                )}

                <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="line-clamp-2 group-hover:text-green-600 transition-colors">
                            {trip.title}
                        </CardTitle>
                        <Badge className={getDifficultyColor(trip.difficulty)}>
                            {trip.difficulty}
                        </Badge>
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {trip.location || 'Location TBD'}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {formattedDate}
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                        {trip.elevation && trip.elevation > 0 && (
                            <div className="flex items-center gap-1">
                                <Mountain size={14} />
                                {trip.elevation.toLocaleString()}'
                            </div>
                        )}
                        {trip.distance && trip.distance > 0 && (
                            <div className="flex items-center gap-1">
                                <TrendingUp size={14} />
                                {trip.distance} mi
                            </div>
                        )}
                        {trip.weather?.temperature && (
                            <div className="flex items-center gap-1">
                                <Thermometer size={14} />
                                {trip.weather.temperature.low}°-{trip.weather.temperature.high}°F
                            </div>
                        )}
                    </div>

                    {/* Activities */}
                    {trip.activities && trip.activities.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                            {trip.activities.slice(0, 3).map((activity) => (
                                <Badge key={activity} variant="outline" className="text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                    {activity}
                                </Badge>
                            ))}
                            {trip.activities.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{trip.activities.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Tags as fallback if no activities */}
                    {(!trip.activities || trip.activities.length === 0) && trip.tags && trip.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                            {trip.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                    {tag}
                                </Badge>
                            ))}
                            {trip.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{trip.tags.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Excerpt */}
                    {trip.excerpt && (
                        <CardDescription className="line-clamp-3">
                            {trip.excerpt}
                        </CardDescription>
                    )}

                    {/* Route Notes Preview */}
                    {!trip.excerpt && trip.routeNotes && (
                        <CardDescription className="line-clamp-3">
                            {trip.routeNotes}
                        </CardDescription>
                    )}

                    {/* Fallback if no description */}
                    {!trip.excerpt && !trip.routeNotes && (
                        <CardDescription className="line-clamp-3 italic">
                            Click to read the full adventure report...
                        </CardDescription>
                    )}
                </CardContent>
            </Card>
        </Link>
    )
}

export default TripReportCard