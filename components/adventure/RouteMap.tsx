'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Maximize2, Minimize2, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GPXData } from '@/lib/gpxParser';

// Leaflet imports - these will be loaded dynamically
declare global {
    interface Window {
        L: any;
    }
}

interface RouteMapProps {
    gpxData: GPXData;
    title?: string;
    height?: number;
}

export default function RouteMap({ gpxData, title = "Route Map", height = 400 }: RouteMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [mapError, setMapError] = useState<string | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [mapReady, setMapReady] = useState(false);

    // Dynamically load Leaflet
    useEffect(() => {
        const loadLeaflet = async () => {
            try {
                // Load Leaflet CSS
                if (!document.querySelector('link[href*="leaflet.css"]')) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                    document.head.appendChild(link);
                }

                // Load Leaflet JS
                if (!window.L) {
                    await new Promise<void>((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                        script.onload = () => resolve();
                        script.onerror = () => reject(new Error('Failed to load Leaflet'));
                        document.head.appendChild(script);
                    });
                }

                setMapReady(true);
            } catch (error) {
                console.error('Error loading Leaflet:', error);
                setMapError('Failed to load map library');
                setIsLoading(false);
            }
        };

        loadLeaflet();
    }, []);

    // Initialize map when Leaflet is ready
    useEffect(() => {
        if (!mapReady || !mapRef.current || !gpxData.points.length) return;

        try {
            setIsLoading(true);

            // Clean up existing map
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }

            const L = window.L;

            // Create map
            const map = L.map(mapRef.current, {
                zoomControl: true,
                scrollWheelZoom: true,
                doubleClickZoom: true,
                touchZoom: true,
            });

            // Add tile layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);

            // Create route line from GPX points
            const routeCoordinates = gpxData.points.map(point => [point.lat, point.lon]);

            const routeLine = L.polyline(routeCoordinates, {
                color: '#2563eb',
                weight: 3,
                opacity: 0.8,
                smoothFactor: 1,
            }).addTo(map);

            // Add start marker
            const startPoint = gpxData.points[0];
            const startIcon = L.divIcon({
                className: 'custom-marker start-marker',
                html: '<div class="marker-inner start">START</div>',
                iconSize: [60, 30],
                iconAnchor: [30, 15],
            });

            L.marker([startPoint.lat, startPoint.lon], { icon: startIcon })
                .bindPopup(`<b>Start</b><br/>Elevation: ${Math.round(startPoint.elevation || 0)}ft`)
                .addTo(map);

            // Add end marker
            const endPoint = gpxData.points[gpxData.points.length - 1];
            const endIcon = L.divIcon({
                className: 'custom-marker end-marker',
                html: '<div class="marker-inner end">FINISH</div>',
                iconSize: [60, 30],
                iconAnchor: [30, 15],
            });

            L.marker([endPoint.lat, endPoint.lon], { icon: endIcon })
                .bindPopup(`<b>Finish</b><br/>Elevation: ${Math.round(endPoint.elevation || 0)}ft`)
                .addTo(map);

            // Add highest point marker if available
            if (gpxData.points.length > 10) {
                const highestPoint = gpxData.points.reduce((prev, current) =>
                    (current.elevation || 0) > (prev.elevation || 0) ? current : prev
                );

                if (highestPoint.elevation) {
                    const peakIcon = L.divIcon({
                        className: 'custom-marker peak-marker',
                        html: '<div class="marker-inner peak">⛰️</div>',
                        iconSize: [40, 40],
                        iconAnchor: [20, 20],
                    });

                    L.marker([highestPoint.lat, highestPoint.lon], { icon: peakIcon })
                        .bindPopup(`<b>Highest Point</b><br/>Elevation: ${Math.round(highestPoint.elevation)}ft`)
                        .addTo(map);
                }
            }

            // Fit map to route bounds
            map.fitBounds(routeLine.getBounds(), { padding: [20, 20] });

            mapInstanceRef.current = map;
            setMapError(null);
        } catch (error) {
            console.error('Error initializing map:', error);
            setMapError('Failed to initialize map');
        } finally {
            setIsLoading(false);
        }
    }, [mapReady, gpxData]);

    // Handle fullscreen toggle
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        // Give the DOM time to update, then invalidate size
        setTimeout(() => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.invalidateSize();
            }
        }, 100);
    };

    if (mapError) {
        return (
            <Card className="border-border bg-card adventure-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-card-foreground">
                        <MapPin className="h-5 w-5" />
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center py-8 text-muted-foreground">
                        <div className="text-center">
                            <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <p>{mapError}</p>
                            <p className="text-xs mt-1">Route data is still available for download above</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            {/* Normal map */}
            {!isFullscreen && (
                <Card className="border-border bg-card adventure-card">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-card-foreground">
                                <MapPin className="h-5 w-5" />
                                {title}
                            </CardTitle>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={toggleFullscreen}
                                className="gap-1"
                            >
                                <Maximize2 className="h-4 w-4" />
                                Expand
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div
                            ref={mapRef}
                            style={{ height: `${height}px` }}
                            className="w-full rounded-lg overflow-hidden border border-border relative"
                        >
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                                    <div className="text-center">
                                        <Mountain className="h-8 w-8 mx-auto mb-2 animate-pulse text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">Loading route map...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Fullscreen map */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-background">
                    <div className="h-full flex flex-col">
                        {/* Fullscreen header */}
                        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                <span className="font-medium">{title} - Full Screen</span>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={toggleFullscreen}
                                className="gap-1"
                            >
                                <Minimize2 className="h-4 w-4" />
                                Exit Fullscreen
                            </Button>
                        </div>

                        {/* Fullscreen map */}
                        <div className="flex-1 relative">
                            <div
                                ref={isFullscreen ? mapRef : undefined}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Custom marker styles */}
            <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        
        .marker-inner {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: bold;
          text-align: center;
          white-space: nowrap;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .marker-inner.start {
          background: #22c55e;
          color: white;
        }
        
        .marker-inner.end {
          background: #ef4444;
          color: white;
        }
        
        .marker-inner.peak {
          background: #f59e0b;
          color: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Map container styles */
        .leaflet-container {
          font-family: inherit;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
        }
        
        /* Dark mode adjustments */
        .dark .leaflet-control-layers,
        .dark .leaflet-control-zoom {
          background: #374151;
          border-color: #4b5563;
        }
        
        .dark .leaflet-control-layers a,
        .dark .leaflet-control-zoom a {
          background: #374151;
          color: #f9fafb;
        }
        
        .dark .leaflet-control-layers a:hover,
        .dark .leaflet-control-zoom a:hover {
          background: #4b5563;
        }
      `}</style>
        </>
    );
}