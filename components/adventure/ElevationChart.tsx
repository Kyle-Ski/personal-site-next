'use client';

import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Mountain, TrendingUp, Target, ToggleLeft, ToggleRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface ElevationData {
    distance: number;
    elevation: number;
    distanceLabel: string;
    // Add metric versions
    distanceKm: number;
    elevationM: number;
    distanceLabelKm: string;
}

interface ElevationChartProps {
    data: ElevationData[];
    totalDistance: number;
    totalElevationGain: number;
    maxElevation: number;
    minElevation: number;
    title?: string;
}

export default function ElevationChart({
    data,
    totalDistance,
    totalElevationGain,
    maxElevation,
    minElevation,
    title = "Elevation Profile"
}: ElevationChartProps) {

    // Unit toggle states
    const [useMetric, setUseMetric] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for dark mode and mobile
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkDarkMode();
        checkMobile();

        // Watch for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // Watch for window resize
        const handleResize = () => checkMobile();
        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Unit conversion functions
    const metersToFeet = (m: number) => m * 3.28084;
    const feetToMeters = (ft: number) => ft / 3.28084;
    const milesToKm = (miles: number) => miles * 1.60934;
    const kmToMiles = (km: number) => km / 1.60934;

    // Calculate metric values
    const totalDistanceKm = milesToKm(totalDistance);
    const totalElevationGainM = Math.round(feetToMeters(totalElevationGain));
    const maxElevationM = Math.round(feetToMeters(maxElevation));
    const minElevationM = Math.round(feetToMeters(minElevation));

    // Get current unit values based on toggle
    const currentDistance = useMetric ? totalDistanceKm : totalDistance;
    const currentElevationGain = useMetric ? totalElevationGainM : totalElevationGain;
    const currentMaxElevation = useMetric ? maxElevationM : maxElevation;
    const currentMinElevation = useMetric ? minElevationM : minElevation;

    // Distance and elevation units
    const distanceUnit = useMetric ? 'km' : 'mi';
    const elevationUnit = useMetric ? 'm' : 'ft';

    // Helper function to abbreviate numbers on mobile
    const formatNumber = (value: number, isMobile: boolean = false) => {
        if (!isMobile) return value.toLocaleString();

        if (value >= 1000) {
            return `${Math.round(value / 100) / 10}k`;
        }
        return value.toString();
    };

    // Mobile-responsive Y-axis title
    const yAxisTitle = isMobile
        ? `Elev (${elevationUnit})`  // Shorter on mobile
        : `Elevation (${elevationUnit})`;  // Full text on desktop

    // Dynamic colors based on theme
    const chartColors = {
        primary: isDark ? '#60a5fa' : '#2563eb', // blue-400 in dark, blue-600 in light
        primaryFill: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
        grid: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        text: isDark ? '#e5e7eb' : '#374151', // gray-200 in dark, gray-700 in light
        tooltipBg: isDark ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        tooltipText: isDark ? '#f9fafb' : '#1f2937',
        tooltipBorder: isDark ? '#4b5563' : '#e5e7eb'
    };

    // Prepare data for Chart.js based on current units
    const chartData = {
        labels: data.map(point => useMetric ? point.distanceLabelKm : point.distanceLabel),
        datasets: [
            {
                label: `Elevation (${elevationUnit})`,
                data: data.map(point => useMetric ? Math.round(feetToMeters(point.elevation)) : point.elevation),
                borderColor: chartColors.primary,
                backgroundColor: chartColors.primaryFill,
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: chartColors.primary,
                pointHoverBorderColor: isDark ? '#1f2937' : '#ffffff',
                pointHoverBorderWidth: 2,
                tension: 0.1,
            },
        ],
    };

    // Calculate padding for Y-axis (add 10% padding top/bottom)
    const elevationRange = currentMaxElevation - currentMinElevation;
    const yAxisPadding = elevationRange * 0.1;
    const yMin = Math.max(0, currentMinElevation - yAxisPadding);
    const yMax = currentMaxElevation + yAxisPadding;

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: isMobile ? 5 : 10,   // Reduce left padding on mobile
                right: isMobile ? 5 : 10,
                top: 5,
                bottom: 5
            }
        },
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: chartColors.tooltipBg,
                titleColor: chartColors.tooltipText,
                bodyColor: chartColors.tooltipText,
                borderColor: chartColors.tooltipBorder,
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                titleFont: {
                    size: isMobile ? 11 : 12,
                    weight: 'normal' as const,
                },
                bodyFont: {
                    size: isMobile ? 11 : 12,
                },
                callbacks: {
                    title: function (context: any) {
                        return `Distance: ${context[0].label}`;
                    },
                    label: function (context: any) {
                        const value = context.parsed.y.toLocaleString();
                        return `Elevation: ${value}${elevationUnit}`;
                    },
                },
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: !isMobile, // Hide X-axis title on mobile
                    text: `Distance (${distanceUnit})`,
                    color: chartColors.text,
                    font: {
                        size: 11,
                    },
                },
                grid: {
                    color: chartColors.grid,
                },
                ticks: {
                    maxTicksLimit: isMobile ? 5 : 8, // Fewer ticks on mobile
                    color: chartColors.text,
                    font: {
                        size: isMobile ? 9 : 11,
                    },
                },
            },
            y: {
                display: true,
                min: yMin,
                max: yMax,
                title: {
                    display: true,
                    text: yAxisTitle, // Use mobile-responsive title
                    color: chartColors.text,
                    font: {
                        size: isMobile ? 10 : 12,
                    },
                },
                grid: {
                    color: chartColors.grid,
                },
                ticks: {
                    maxTicksLimit: isMobile ? 5 : 7, // Fewer ticks on mobile
                    color: chartColors.text,
                    callback: function (value: any) {
                        return formatNumber(value, isMobile); // Use abbreviated numbers on mobile
                    },
                    font: {
                        size: isMobile ? 9 : 11,
                    },
                },
            },
        },
    };

    return (
        <Card className="w-full border-border bg-card adventure-card">
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-card-foreground">
                        <Mountain className="h-5 w-5" />
                        {title}
                    </CardTitle>

                    {/* Unit Toggle */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setUseMetric(!useMetric)}
                        className="flex items-center gap-2 text-xs"
                    >
                        {useMetric ? (
                            <>
                                <ToggleRight className="h-4 w-4" />
                                Metric
                            </>
                        ) : (
                            <>
                                <ToggleLeft className="h-4 w-4" />
                                Imperial
                            </>
                        )}
                    </Button>
                </div>

                {/* Key Stats Row */}
                <div className={`grid gap-4 pt-2 ${isMobile ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
                    <div className="flex items-center gap-2 text-sm">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <div className="font-medium text-card-foreground">
                                {useMetric ?
                                    `${Math.round(currentDistance * 10) / 10}${distanceUnit}` :
                                    `${currentDistance}${distanceUnit}`
                                }
                            </div>
                            <div className="text-muted-foreground text-xs">Distance</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <div className="font-medium text-card-foreground">
                                {isMobile ?
                                    formatNumber(currentElevationGain, true) :
                                    currentElevationGain.toLocaleString()
                                }{elevationUnit}
                            </div>
                            <div className="text-muted-foreground text-xs">Elev Gain</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <div className="font-medium text-card-foreground">
                                {isMobile ?
                                    formatNumber(currentMaxElevation, true) :
                                    currentMaxElevation.toLocaleString()
                                }{elevationUnit}
                            </div>
                            <div className="text-muted-foreground text-xs">Max Elev</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4" /> {/* spacer */}
                        <div>
                            <div className="font-medium text-card-foreground">
                                {isMobile ?
                                    formatNumber(currentMinElevation, true) :
                                    currentMinElevation.toLocaleString()
                                }{elevationUnit}
                            </div>
                            <div className="text-muted-foreground text-xs">Min Elev</div>
                        </div>
                    </div>
                </div>

                {/* Unit conversion helper text */}
                {!isMobile && (
                    <div className="text-xs text-muted-foreground mt-2">
                        {useMetric ? (
                            <span>
                                {totalDistance}mi • {totalElevationGain.toLocaleString()}ft max
                            </span>
                        ) : (
                            <span>
                                {Math.round(totalDistanceKm * 10) / 10}km • {totalElevationGainM.toLocaleString()}m max
                            </span>
                        )}
                    </div>
                )}
            </CardHeader>

            <CardContent>
                <div className="h-64 w-full">
                    <Line data={chartData} options={options} />
                </div>

                {/* Additional info row */}
                <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-3 flex items-center justify-between">
                    <p>{isMobile ? 'Tap chart for details' : 'Hover over the chart to see elevation at specific distances'}</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setUseMetric(!useMetric)}
                        className="text-xs h-auto p-1 text-muted-foreground hover:text-card-foreground"
                    >
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}