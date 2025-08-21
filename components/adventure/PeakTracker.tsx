"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mountain, MapPin, Calendar, TrendingUp, Award, CheckCircle } from 'lucide-react'

interface Peak {
    id: string
    name: string
    elevation: number
    completed: boolean
    completedDate?: string
    difficulty: 'easy' | 'moderate' | 'difficult' | 'expert'
    range: string
    coordinates?: [number, number]
}

// Sample 14ers data - you'd fetch this from your CMS
const colorado14ers: Peak[] = [
    {
        id: '1',
        name: 'Mount Elbert',
        elevation: 14440,
        completed: true,
        completedDate: '2023-08-15',
        difficulty: 'moderate',
        range: 'Sawatch Range'
    },
    {
        id: '2',
        name: 'Mount Massive',
        elevation: 14428,
        completed: true,
        completedDate: '2023-07-22',
        difficulty: 'moderate',
        range: 'Sawatch Range'
    },
    {
        id: '3',
        name: 'Mount Harvard',
        elevation: 14421,
        completed: false,
        difficulty: 'difficult',
        range: 'Collegiate Peaks'
    },
    // Add more peaks...
]

const PeakTracker = () => {
    const [selectedRange, setSelectedRange] = useState<string>('all')

    const completedPeaks = colorado14ers.filter(peak => peak.completed)
    const totalPeaks = colorado14ers.length
    const completionRate = Math.round((completedPeaks.length / totalPeaks) * 100)

    const ranges = ['all', ...Array.from(new Set(colorado14ers.map(peak => peak.range)))]

    const filteredPeaks = selectedRange === 'all'
        ? colorado14ers
        : colorado14ers.filter(peak => peak.range === selectedRange)

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
            case 'moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
            case 'difficult': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
            case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
        }
    }

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="adventure-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Peaks Completed</CardTitle>
                        <Mountain className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                            {completedPeaks.length}/{totalPeaks}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {completionRate}% completion rate
                        </p>
                    </CardContent>
                </Card>

                <Card className="adventure-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Highest Elevation</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                            {Math.max(...completedPeaks.map(p => p.elevation)).toLocaleString()}'
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {completedPeaks.find(p => p.elevation === Math.max(...completedPeaks.map(peak => peak.elevation)))?.name}
                        </p>
                    </CardContent>
                </Card>

                <Card className="adventure-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recent Achievement</CardTitle>
                        <Award className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                            Latest
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {completedPeaks.sort((a, b) =>
                                new Date(b.completedDate || '').getTime() - new Date(a.completedDate || '').getTime()
                            )[0]?.name}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Filter */}
            <Card className="adventure-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Mountain className="h-5 w-5 text-green-600" />
                        Colorado 14ers Progress
                    </CardTitle>
                    <CardDescription>
                        Tracking my journey to summit Colorado's highest peaks
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Range Filter */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {ranges.map((range) => (
                            <button
                                key={range}
                                onClick={() => setSelectedRange(range)}
                                className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedRange === range
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                                    }`}
                            >
                                {range === 'all' ? 'All Ranges' : range}
                            </button>
                        ))}
                    </div>

                    {/* Peaks List */}
                    <div className="space-y-3">
                        {filteredPeaks.map((peak) => (
                            <div
                                key={peak.id}
                                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${peak.completed
                                    ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                                    : 'bg-background border-border hover:bg-accent'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {peak.completed ? (
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    ) : (
                                        <Mountain className="h-5 w-5 text-muted-foreground" />
                                    )}
                                    <div>
                                        <div className="font-medium">{peak.name}</div>
                                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                                            <MapPin className="h-3 w-3" />
                                            {peak.range} • {peak.elevation.toLocaleString()}'
                                            {peak.completedDate && (
                                                <>
                                                    <Calendar className="h-3 w-3 ml-2" />
                                                    {new Date(peak.completedDate).toLocaleDateString()}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Badge className={getDifficultyColor(peak.difficulty)}>
                                    {peak.difficulty}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PeakTracker