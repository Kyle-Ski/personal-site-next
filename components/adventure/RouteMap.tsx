'use client';

import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { MapPin, Mountain, Download } from 'lucide-react';
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
    onHoverPoint?: (pointIndex: number | null) => void;
    hoveredPointIndex?: number | null;
    // NEW: Download props
    onDownload?: () => void;
    downloadFilename?: string;
}

export interface RouteMapRef {
    highlightPoint: (pointIndex: number | null) => void;
}

const RouteMap = forwardRef<RouteMapRef, RouteMapProps>(({
    gpxData,
    title = "Route Map",
    height = 400,
    onHoverPoint,
    hoveredPointIndex,
    onDownload,
    downloadFilename = "route.gpx"
}, ref) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const routeLineRef = useRef<any>(null);
    const hoverMarkerRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [mapError, setMapError] = useState<string | null>(null);
    const [mapReady, setMapReady] = useState(false);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
        highlightPoint: (pointIndex: number | null) => {
            if (!mapInstanceRef.current || !routeLineRef.current) return;

            const L = window.L;

            // Remove existing hover marker
            if (hoverMarkerRef.current) {
                mapInstanceRef.current.removeLayer(hoverMarkerRef.current);
                hoverMarkerRef.current = null;
            }

            if (pointIndex !== null && gpxData.points[pointIndex]) {
                const point = gpxData.points[pointIndex];
                const elevation = Math.round(point.elevation || 0);
                const distance = Math.round((point.distance || 0) * 10) / 10;

                // Create hover marker
                const hoverIcon = L.divIcon({
                    className: 'custom-marker hover-marker',
                    html: '<div class="marker-inner hover">📍</div>',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12],
                });

                hoverMarkerRef.current = L.marker([point.lat, point.lon], { icon: hoverIcon })
                    .bindTooltip(`${distance}mi • ${elevation}ft`, {
                        permanent: false,
                        className: 'hover-tooltip'
                    })
                    .addTo(mapInstanceRef.current);
            }
        }
    }));

    // Handle hover point changes from elevation chart
    useEffect(() => {
        if (ref && typeof ref === 'object' && ref.current) {
            ref.current.highlightPoint(hoveredPointIndex ?? null);
        }
    }, [hoveredPointIndex, ref]);

    // Load Leaflet dynamically
    useEffect(() => {
        const loadLeaflet = async () => {
            if (typeof window !== 'undefined' && !window.L) {
                // Load Leaflet CSS
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
                document.head.appendChild(link);

                // Load Leaflet JS
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
                script.onload = () => setMapReady(true);
                document.head.appendChild(script);
            } else if (window.L) {
                setMapReady(true);
            }
        };

        loadLeaflet();
    }, []);

    // Initialize map
    useEffect(() => {
        if (!mapReady || !mapRef.current || !gpxData.points.length) return;

        const initializeMap = async () => {
            try {
                const L = window.L;

                // Create map
                const map = L.map(mapRef.current, {
                    zoomControl: true,
                    scrollWheelZoom: true,
                    doubleClickZoom: true,
                    boxZoom: true,
                    keyboard: true,
                });

                // Add tile layer
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                    maxZoom: 19,
                }).addTo(map);

                // Create route line
                const coordinates = gpxData.points.map(point => [point.lat, point.lon]);
                const routeLine = L.polyline(coordinates, {
                    color: '#2563eb',
                    weight: 4,
                    opacity: 0.8,
                }).addTo(map);

                routeLineRef.current = routeLine;

                // Calculate if start and end are too close (within ~50 meters)
                const startPoint = gpxData.points[0];
                const endPoint = gpxData.points[gpxData.points.length - 1];

                const distance = Math.sqrt(
                    Math.pow(startPoint.lat - endPoint.lat, 2) +
                    Math.pow(startPoint.lon - endPoint.lon, 2)
                );

                const isLoop = distance < 0.0005; // Roughly 50 meters

                if (isLoop) {
                    // For loops, create a combined start/finish marker
                    const loopIcon = L.divIcon({
                        className: 'custom-marker loop-marker',
                        html: '<div class="marker-inner loop">START/FINISH</div>',
                        iconSize: [90, 30],
                        iconAnchor: [45, 15],
                    });

                    L.marker([startPoint.lat, startPoint.lon], { icon: loopIcon })
                        .bindPopup(`
            <div class="custom-popup">
              <h4><strong>Start & Finish</strong></h4>
              <p>Elevation: ${Math.round(startPoint.elevation || 0)}ft</p>
              <p class="text-sm">This is a loop route</p>
            </div>
          `)
                        .addTo(map);
                } else {
                    // Separate start and end markers
                    const startIcon = L.divIcon({
                        className: 'custom-marker start-marker',
                        html: '<div class="marker-inner start">START</div>',
                        iconSize: [60, 30],
                        iconAnchor: [30, 15],
                    });

                    L.marker([startPoint.lat, startPoint.lon], { icon: startIcon })
                        .bindPopup(`
            <div class="custom-popup">
              <h4><strong>Start</strong></h4>
              <p>Elevation: ${Math.round(startPoint.elevation || 0)}ft</p>
            </div>
          `)
                        .addTo(map);

                    const endIcon = L.divIcon({
                        className: 'custom-marker end-marker',
                        html: '<div class="marker-inner end">FINISH</div>',
                        iconSize: [60, 30],
                        iconAnchor: [30, 15],
                    });

                    L.marker([endPoint.lat, endPoint.lon], { icon: endIcon })
                        .bindPopup(`
            <div class="custom-popup">
              <h4><strong>Finish</strong></h4>
              <p>Elevation: ${Math.round(endPoint.elevation || 0)}ft</p>
            </div>
          `)
                        .addTo(map);
                }

                // Add highest point marker if available (only for routes with enough points)
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
                            .bindPopup(`
              <div class="custom-popup">
                <h4><strong>Highest Point</strong></h4>
                <p>Elevation: ${Math.round(highestPoint.elevation)}ft</p>
              </div>
            `)
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
        };

        initializeMap();
    }, [mapReady, gpxData, onHoverPoint]);

    if (mapError) {
        return (
            <Card className="border-border bg-card adventure-card">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-card-foreground">
                            <MapPin className="h-5 w-5" />
                            {title}
                        </CardTitle>
                        {/* Download button still available when map fails */}
                        {onDownload && (
                            <Button
                                onClick={onDownload}
                                variant="outline"
                                size="sm"
                                className="gap-2"
                            >
                                <Download className="h-4 w-4" />
                                Download GPX
                            </Button>
                        )}
                    </div>
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
        <Card className="border-border bg-card adventure-card">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-card-foreground">
                        <MapPin className="h-5 w-5" />
                        {title}
                    </CardTitle>
                    {/* Download button in header */}
                    {onDownload && (
                        <Button
                            onClick={onDownload}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download GPX
                        </Button>
                    )}
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

                {/* Usage tip */}
                <div className="text-xs text-muted-foreground text-center mt-3">
                    💡 Hover over the elevation chart below to see corresponding points on the map
                </div>
            </CardContent>

            {/* Enhanced Custom Styles */}
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: transform 0.2s ease;
        }
        
        .marker-inner:hover {
          transform: scale(1.05);
        }
        
        .marker-inner.start {
          background: #22c55e;
          color: white;
        }
        
        .marker-inner.end {
          background: #ef4444;
          color: white;
        }
        
        .marker-inner.loop {
          background: linear-gradient(90deg, #22c55e 50%, #ef4444 50%);
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
        
        .marker-inner.hover {
          background: #8b5cf6;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        /* Enhanced popup styles */
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          padding: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .custom-popup {
          padding: 12px;
          min-width: 150px;
        }
        
        .custom-popup h4 {
          margin: 0 0 8px 0;
          font-size: 14px;
          color: #1f2937;
        }
        
        .custom-popup p {
          margin: 4px 0;
          font-size: 12px;
          color: #6b7280;
        }
        
        .hover-tooltip {
          background: rgba(139, 92, 246, 0.9) !important;
          color: white !important;
          border: none !important;
          border-radius: 4px !important;
          font-size: 11px !important;
          padding: 4px 8px !important;
          font-weight: 500;
        }
        
        /* Dark mode popup styles */
        .dark .leaflet-popup-content-wrapper {
          background: #1f2937;
          color: #f9fafb;
        }
        
        .dark .custom-popup h4 {
          color: #f9fafb;
        }
        
        .dark .custom-popup p {
          color: #d1d5db;
        }
        
        .dark .leaflet-popup-tip {
          background: #1f2937;
        }
        
        /* Map controls dark mode */
        .dark .leaflet-control-layers,
        .dark .leaflet-control-zoom {
          background: #374151;
          border-color: #4b5563;
        }
        
        .dark .leaflet-control-layers a,
        .dark .leaflet-control-zoom a {
          background: #374151;
          color: #f9fafb;
          border-color: #4b5563;
        }
        
        .dark .leaflet-control-layers a:hover,
        .dark .leaflet-control-zoom a:hover {
          background: #4b5563;
        }
        
        /* Map container styles */
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
        </Card>
    );
});

RouteMap.displayName = 'RouteMap';

export default RouteMap;