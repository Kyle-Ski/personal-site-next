"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mountain, MapPin, Calendar, TrendingUp, Heart, Users, Star } from 'lucide-react'
import peaksData from '@/data/peaks-data.json'

interface Experience {
  date: string
  conditions: string
  companions: string
  notes: string
  season: string
}

interface Peak {
  name: string
  range: string
  elevation: number
  experiences: Experience[]
  totalAscents: number
  firstAscent: string
  favorite: boolean
  winterAscent: boolean
  skiDescent: boolean
  tripReport: boolean
}

interface MountainJournalData {
  metadata: {
    lastUpdated: string
    totalPeaks: number
    climbedPeaks: number
    totalAscents: number
    firstPeak: string
    favoritePeak: string
  }
  peaks: Peak[]
}

const MountainJournal = () => {
  const [selectedRange, setSelectedRange] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'ranges' | 'timeline' | 'favorites'>('ranges')

  // Use imported data directly
  const { metadata, peaks } = peaksData as MountainJournalData
  
  // Get unique ranges for filtering
  const ranges = ['all', ...Array.from(new Set(peaks.map(peak => peak.range)))]
  
  // Filter peaks based on selected range
  const filteredPeaks = selectedRange === 'all' 
    ? peaks 
    : peaks.filter(peak => peak.range === selectedRange)

  // Group peaks by range for better organization
  const peaksByRange = filteredPeaks.reduce((acc, peak) => {
    if (!acc[peak.range]) {
      acc[peak.range] = []
    }
    acc[peak.range].push(peak)
    return acc
  }, {} as Record<string, Peak[]>)

  // Sort ranges by number of peaks (most active ranges first)
  const sortedRanges = Object.keys(peaksByRange).sort((a, b) => 
    peaksByRange[b].length - peaksByRange[a].length
  )

  const getSeasonColor = (season: string) => {
    switch (season.toLowerCase()) {
      case 'spring': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
      case 'summer': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
      case 'fall': case 'autumn': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
      case 'winter': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:!text-gray-100'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Journal Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="adventure-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peaks Explored</CardTitle>
            <Mountain className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-400">
              {metadata.climbedPeaks}
            </div>
            <p className="text-xs text-muted-foreground">
              Unique summits experienced
            </p>
          </CardContent>
        </Card>

        <Card className="adventure-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Adventures</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-400">
              {metadata.totalAscents}
            </div>
            <p className="text-xs text-muted-foreground">
              Mountain experiences
            </p>
          </CardContent>
        </Card>

        <Card className="adventure-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Summit</CardTitle>
            <Star className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-green-700 dark:text-green-400">
              {metadata.firstPeak}
            </div>
            <p className="text-xs text-muted-foreground">
              Where it all began
            </p>
          </CardContent>
        </Card>

        <Card className="adventure-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favorite Peak</CardTitle>
            <Heart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-green-700 dark:text-green-400">
              {metadata.favoritePeak}
            </div>
            <p className="text-xs text-muted-foreground">
              The one that stands out
            </p>
          </CardContent>
        </Card>
      </div>

      {/* View Mode Toggles */}
      <Card className="adventure-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-green-600" />
            Colorado Mountain Journal
          </CardTitle>
          <CardDescription>
            A collection of peak experiences across Colorado&apos;s ranges
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* View Mode Selector */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(['ranges', 'timeline', 'favorites'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 rounded-full text-sm transition-colors capitalize ${
                  viewMode === mode
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {mode === 'ranges' ? 'By Range' : mode}
              </button>
            ))}
          </div>

          {/* Range Filter (only show when in ranges mode) */}
          {viewMode === 'ranges' && (
            <div className="flex flex-wrap gap-2 mb-6">
              {ranges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedRange === range
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {range === 'all' ? 'All Ranges' : range} 
                  {range !== 'all' && ` (${peaksByRange[range]?.length || 0})`}
                </button>
              ))}
            </div>
          )}

          {/* Mountain Journal Content */}
          {viewMode === 'ranges' && (
            <div className="space-y-6">
              {selectedRange === 'all' ? (
                // Show all ranges grouped
                sortedRanges.map((rangeName) => (
                  <div key={rangeName} className="space-y-3">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 border-b border-green-200 dark:border-green-800 pb-1">
                      {rangeName} ({peaksByRange[rangeName].length} peaks)
                    </h3>
                    <div className="grid gap-3">
                      {peaksByRange[rangeName].map((peak) => (
                        <PeakJournalEntry key={peak.name} peak={peak} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                // Show filtered range
                <div className="grid gap-3">
                  {filteredPeaks.map((peak) => (
                    <PeakJournalEntry key={peak.name} peak={peak} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Timeline View - Placeholder for now */}
          {viewMode === 'timeline' && (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Timeline view coming soon - will show chronological dot plot of adventures</p>
            </div>
          )}

          {/* Favorites View */}
          {viewMode === 'favorites' && (
            <div className="space-y-3">
              {peaks.filter(peak => peak.favorite).length > 0 ? (
                peaks.filter(peak => peak.favorite).map((peak) => (
                  <PeakJournalEntry key={peak.name} peak={peak} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No favorite peaks marked yet</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Individual Peak Journal Entry Component
const PeakJournalEntry = ({ peak }: { peak: Peak }) => {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div 
      className="p-4 rounded-lg border transition-all duration-200 hover:border-green-300 dark:hover:border-green-700 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {peak.favorite && <Heart className="h-4 w-4 text-red-500" />}
            <Mountain className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <div className="font-semibold flex items-center gap-2">
              {peak.name}
              {peak.totalAscents > 1 && (
                <Badge variant="secondary" className="text-xs">
                  {peak.totalAscents}x
                </Badge>
              )}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              {peak.range} • {peak.elevation.toLocaleString()}&apos;
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {peak.winterAscent && (
            <Badge variant="outline" className="text-xs dark:text-white">❄️ Winter</Badge>
          )}
          {peak.skiDescent && (
            <Badge variant="outline" className="text-xs">⛷️ Ski</Badge>
          )}
          <div className="text-xs text-muted-foreground">
            {expanded ? '▲' : '▼'}
          </div>
        </div>
      </div>

      {/* Expanded Experience Details - Commented out for now */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-3">
          {peak.experiences.length > 0 ? (
            peak.experiences.map((exp, idx) => (
              <div key={idx} className="text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  <span className="font-medium">
                    {exp.date || `Experience ${idx + 1}`}
                  </span>
                  {exp.season && (
                    <Badge className={`text-xs ${exp.season ? '' : 'opacity-50'}`}>
                      {exp.season || 'summer'}
                    </Badge>
                  )}
                </div>
                
                {exp.conditions && (
                  <p className="text-muted-foreground">
                    <strong>Conditions:</strong> {exp.conditions}
                  </p>
                )}
                {exp.companions && (
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>With: {exp.companions}</span>
                  </div>
                )}
                {exp.notes && (
                  <p className="text-muted-foreground italic">{exp.notes}</p>
                )}
               
              </div>
            ))
          ) : (
            <div className="text-sm text-muted-foreground italic">
              Peak experienced {peak.totalAscents} time{peak.totalAscents !== 1 ? 's' : ''} • Details to be added
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MountainJournal