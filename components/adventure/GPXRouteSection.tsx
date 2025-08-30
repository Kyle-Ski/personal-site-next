// components/adventure/GPXRouteSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Download, Mountain, Loader2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ElevationChart from './ElevationChart';
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

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = gpxFile.asset.url;
        link.download = gpxFile.asset.originalFilename || `${routeName.replace(/\s+/g, '-')}.gpx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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

            {/* Elevation Chart */}
            {gpxData && gpxData.elevationProfile.length > 0 && (
                <div className="space-y-4">
                    <ElevationChart
                        data={gpxData.elevationProfile}
                        totalDistance={gpxData.totalDistance}
                        totalElevationGain={gpxData.totalElevationGain}
                        maxElevation={gpxData.maxElevation}
                        minElevation={gpxData.minElevation}
                        title="Route Elevation Profile"
                    />

                    {/* Download Button - positioned under the chart */}
                    <div className="flex justify-center">
                        <Button
                            onClick={handleDownload}
                            variant="outline"
                            className="gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download GPX File
                        </Button>
                    </div>

                    {/* Usage instructions */}
                    <div className="text-sm text-muted-foreground text-center space-y-1">
                        <p>Import this route into your GPS device or favorite mapping app</p>
                    </div>
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