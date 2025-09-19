import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mountain, MapPin, Calendar, BookOpen, Target, Compass } from 'lucide-react'
import { format } from 'date-fns'
import { TripReport } from '@/lib/cmsProvider'

interface GuideCardProps {
    guide: TripReport
}

const GuideCard = ({ guide }: GuideCardProps) => {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-800'
            case 'moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-yellow-200 dark:border-yellow-800'
            case 'difficult': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 border-orange-200 dark:border-orange-800'
            case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border-red-200 dark:border-red-800'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
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

    const contentTypeInfo = getContentTypeInfo(guide.contentType || '');
    const ContentTypeIcon = contentTypeInfo.icon;

    // Handle date formatting - use guide date if available, otherwise published date
    const guideDate = guide.date || guide.publishedAt
    const formattedDate = guideDate ?
        format(new Date(guideDate), 'MMM dd, yyyy') : 'Date TBD'

    return (
        <Link href={`/guides/${guide.slug}`}>
            <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 adventure-card">
                {/* Hero Image */}
                {guide.mainImage && (
                    <div className="aspect-video w-full overflow-hidden">
                        <Image
                            src={guide.mainImage}
                            alt={guide.title}
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
                            {guide.title}
                        </CardTitle>
                        <Badge className={getDifficultyColor(guide.difficulty)}>
                            {guide.difficulty || 'All Levels'}
                        </Badge>
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <ContentTypeIcon size={14} />
                            {contentTypeInfo.label}
                        </div>
                        {guide.location && (
                            <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                {guide.location}
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {formattedDate}
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    {/* Stats for route guides */}
                    {(guide.elevation || guide.distance) && (
                        <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                            {guide.elevation && guide.elevation > 0 && (
                                <div className="flex items-center gap-1">
                                    <Mountain size={14} />
                                    {guide.elevation.toLocaleString()}&apos;
                                </div>
                            )}
                            {guide.distance && guide.distance > 0 && (
                                <div className="flex items-center gap-1">
                                    <Compass size={14} />
                                    {guide.distance} mi
                                </div>
                            )}
                        </div>
                    )}

                    {/* Activities */}
                    {guide.activities && guide.activities.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                            {guide.activities.slice(0, 3).map((activity) => (
                                <Badge key={activity} variant="outline" className="text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                    {activity}
                                </Badge>
                            ))}
                            {guide.activities.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{guide.activities.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Tags as fallback if no activities */}
                    {(!guide.activities || guide.activities.length === 0) && guide.tags && guide.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                            {guide.tags.slice(0, 3).map((tag) => {
                                return (
                                <Badge key={tag} variant="outline" className="text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200">
                                    {tag}
                                </Badge>
                            )
                            })}
                            {guide.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{guide.tags.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Excerpt */}
                    {guide.excerpt && (
                        <CardDescription className="line-clamp-3">
                            {guide.excerpt}
                        </CardDescription>
                    )}

                    {/* Route Notes Preview */}
                    {!guide.excerpt && guide.routeNotes && (
                        <CardDescription className="line-clamp-3">
                            {guide.routeNotes}
                        </CardDescription>
                    )}

                    {/* Fallback if no description */}
                    {!guide.excerpt && !guide.routeNotes && (
                        <CardDescription className="line-clamp-3 italic">
                            Click to read the full guide...
                        </CardDescription>
                    )}
                </CardContent>
            </Card>
        </Link>
    )
}

export default GuideCard