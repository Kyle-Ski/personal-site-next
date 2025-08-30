'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Download, Mountain, Loader2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ElevationChart from './ElevationChart';
import RouteMap, { RouteMapRef } from './RouteMap';
import { fetchAndParseGPX, GPXData } from '@/lib/gpxParser';

interface GPXRouteSectionProps {
    gpxFile: {
        asset: {
            url: string;
            originalFilename?: string;
        }
    };
    routeName: string;
}

export default function GPXRouteSection({ gpxFile, routeName }: GPXRouteSectionProps) {
    const [gpxData, setGpxData] = useState<GPXData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // NEW: State for hover integration
    const [hoveredElevationIndex, setHoveredElevationIndex] = useState<number | null>(null);
    const [hoveredGpxPointIndex, setHoveredGpxPointIndex] = useState<number | null>(null);

    // NEW: Ref for the map component
    const routeMapRef = useRef<RouteMapRef>(null);

    useEffect(() => {
        async function loadGPXData() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchAndParseGPX(gpxFile.asset.url);
                setGpxData(data);
            } catch (err) {
                console.error('Failed to load GPX data:', err);
                setError('Failed to load route data. You can still download the GPX file below.');
            } finally {
                setLoading(false);
            }
        }

        if (gpxFile.asset.url) {
            loadGPXData();
        }
    }, [gpxFile.asset.url]);

    // NEW: Function to find closest GPX point to elevation profile point
    const findClosestGpxPointIndex = useCallback((elevationIndex: number): number | null => {
        if (!gpxData || !gpxData.elevationProfile[elevationIndex]) return null;

        const elevationPoint = gpxData.elevationProfile[elevationIndex];
        const targetDistance = elevationPoint.distance; // Distance in miles

        let closestIndex = 0;
        let closestDistanceDiff = Infinity;

        // Find GPX point with distance closest to the elevation profile point's distance
        for (let i = 0; i < gpxData.points.length; i++) {
            const gpxPoint = gpxData.points[i];
            if (gpxPoint.distance !== undefined) {
                const distanceDiff = Math.abs(gpxPoint.distance - targetDistance);
                if (distanceDiff < closestDistanceDiff) {
                    closestDistanceDiff = distanceDiff;
                    closestIndex = i;
                }
            }
        }

        return closestIndex;
    }, [gpxData]);

    // NEW: Handle elevation chart hover events
    const handleElevationHover = useCallback((elevationIndex: number | null) => {
        setHoveredElevationIndex(elevationIndex);

        if (elevationIndex !== null) {
            const gpxPointIndex = findClosestGpxPointIndex(elevationIndex);
            setHoveredGpxPointIndex(gpxPointIndex);

            // Tell the map to highlight this point
            if (routeMapRef.current) {
                routeMapRef.current.highlightPoint(gpxPointIndex);
            }
        } else {
            setHoveredGpxPointIndex(null);

            // Clear map highlight
            if (routeMapRef.current) {
                routeMapRef.current.highlightPoint(null);
            }
        }
    }, [findClosestGpxPointIndex]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = gpxFile.asset.url;
        link.download = gpxFile.asset.originalFilename || `${routeName.replace(/\s+/g, '-')}.gpx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Generate clean filename for display
    const downloadFilename = gpxFile.asset.originalFilename || `${routeName.replace(/\s+/g, '-')}.gpx`;

    return (
        <div className="space-y-6">
            {/* Loading State */}
            {loading && (
                <Card className="border-border bg-card">
                    <CardContent className="flex items-center justify-center py-8">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Processing elevation data...</span>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Error State */}
            {error && (
                <Card className="border-destructive/50 bg-destructive/5">
                    <CardContent className="flex items-center gap-2 pt-4">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        <span className="text-destructive">{error}</span>
                    </CardContent>
                </Card>
            )}

            {/* Elevation Chart & Route Map */}
            {gpxData && gpxData.elevationProfile.length > 0 && (
                <div className="space-y-6">
                    {/* Interactive Route Map with Download Button */}
                    <RouteMap
                        ref={routeMapRef}
                        gpxData={gpxData}
                        title="Interactive Route Map"
                        hoveredPointIndex={hoveredGpxPointIndex}
                        onDownload={handleDownload}
                        downloadFilename={downloadFilename}
                    />

                    {/* Elevation Chart with Hover Integration */}
                    <ElevationChart
                        data={gpxData.elevationProfile}
                        totalDistance={gpxData.totalDistance}
                        totalElevationGain={gpxData.totalElevationGain}
                        maxElevation={gpxData.maxElevation}
                        minElevation={gpxData.minElevation}
                        title="Route Elevation Profile"
                        onHoverPoint={handleElevationHover}
                    />

                    {/* Debug info (remove in production) */}
                    {process.env.NODE_ENV === 'development' && hoveredElevationIndex !== null && (
                        <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                            Debug: Elevation Index: {hoveredElevationIndex}, GPX Point Index: {hoveredGpxPointIndex}
                            {gpxData.elevationProfile[hoveredElevationIndex] && (
                                <span> | Distance: {gpxData.elevationProfile[hoveredElevationIndex].distance}mi</span>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Fallback download if chart fails to load */}
            {!loading && error && (
                <div className="flex flex-col items-center gap-4 py-6">
                    <Button
                        onClick={handleDownload}
                        variant="outline"
                        className="gap-2"
                    >
                        <Download className="h-4 w-4" />
                        Download GPX File
                    </Button>

                    <div className="text-sm text-muted-foreground text-center">
                        <p>Route data failed to process, but you can still download the GPX file</p>
                    </div>
                </div>
            )}
        </div>
    );
}