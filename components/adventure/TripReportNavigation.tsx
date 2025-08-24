import Link from 'next/link'
import { ChevronLeft, ChevronRight, Mountain, Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { Card, CardContent } from '@/components/ui/card'

interface AdjacentTripReport {
  _id: string
  title: string
  slug: string
  location: string
  date: string
  difficulty: 'easy' | 'moderate' | 'difficult' | 'expert'
  mainImage?: string
}

interface TripReportNavigationProps {
  previousReport?: AdjacentTripReport
  nextReport?: AdjacentTripReport
}

export function TripReportNavigation({ previousReport, nextReport }: TripReportNavigationProps) {
  // Don't render if no adjacent reports
  if (!previousReport && !nextReport) return null

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600'
      case 'moderate': return 'text-yellow-600'
      case 'difficult': return 'text-orange-600'
      case 'expert': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mountain className="h-4 w-4" />
            <span>More Adventures</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Previous Report */}
          {previousReport ? (
            <Link href={`/adventures/${previousReport.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center gap-1 text-muted-foreground group-hover:text-green-600 transition-colors">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="text-xs font-medium">Previous</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        {previousReport.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span>{previousReport.location}</span>
                        <span className={getDifficultyColor(previousReport.difficulty)}>
                          {previousReport.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(previousReport.date), 'MMM dd, yyyy')}
                      </div>
                    </div>

                    {previousReport.mainImage && (
                      <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={previousReport.mainImage} 
                          alt={previousReport.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div></div> // Empty div to maintain grid layout
          )}

          {/* Next Report */}
          {nextReport ? (
            <Link href={`/adventures/${nextReport.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {nextReport.mainImage && (
                      <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={nextReport.mainImage} 
                          alt={nextReport.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        {nextReport.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span>{nextReport.location}</span>
                        <span className={getDifficultyColor(nextReport.difficulty)}>
                          {nextReport.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(nextReport.date), 'MMM dd, yyyy')}
                      </div>
                    </div>

                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center gap-1 text-muted-foreground group-hover:text-green-600 transition-colors">
                        <span className="text-xs font-medium">Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div></div> // Empty div to maintain grid layout
          )}
        </div>
      </div>
    </div>
  )
}