export interface GPXPoint {
    lat: number;
    lon: number;
    elevation?: number;
    time?: Date;
    distance?: number; // cumulative distance in miles
}

export interface GPXData {
    name?: string;
    points: GPXPoint[];
    totalDistance: number; // in miles
    totalElevationGain: number; // in feet
    maxElevation: number;
    minElevation: number;
    elevationProfile: Array<{
        distance: number;
        elevation: number;
        distanceLabel: string;
        distanceKm: number;
        elevationM: number;
        distanceLabelKm: string;
    }>;
}

// Haversine formula to calculate distance between two GPS points
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export async function parseGPX(gpxContent: string): Promise<GPXData> {
    // Parse the XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(gpxContent, 'text/xml');

    // Get track name
    const nameElement = xmlDoc.querySelector('trk name');
    const name = nameElement?.textContent || 'Unnamed Track';

    // Get all track points
    const trkpts = xmlDoc.querySelectorAll('trkpt');
    const points: GPXPoint[] = [];
    let cumulativeDistance = 0;

    trkpts.forEach((trkpt, index) => {
        const lat = parseFloat(trkpt.getAttribute('lat') || '0');
        const lon = parseFloat(trkpt.getAttribute('lon') || '0');
        const elevElement = trkpt.querySelector('ele');
        const timeElement = trkpt.querySelector('time');

        // Convert elevation from meters to feet
        const elevationMeters = elevElement ? parseFloat(elevElement.textContent || '0') : undefined;
        const elevation = elevationMeters ? elevationMeters * 3.28084 : undefined;

        // Calculate distance from previous point
        if (index > 0) {
            const prevPoint = points[index - 1];
            const segmentDistance = calculateDistance(prevPoint.lat, prevPoint.lon, lat, lon);
            cumulativeDistance += segmentDistance;
        }

        points.push({
            lat,
            lon,
            elevation,
            time: timeElement ? new Date(timeElement.textContent || '') : undefined,
            distance: cumulativeDistance
        });
    });

    // Calculate stats
    const elevations = points
        .map(p => p.elevation)
        .filter((e): e is number => e !== undefined);

    const maxElevation = elevations.length > 0 ? Math.max(...elevations) : 0;
    const minElevation = elevations.length > 0 ? Math.min(...elevations) : 0;

    // Calculate total elevation gain
    let totalElevationGain = 0;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1].elevation;
        const curr = points[i].elevation;
        if (prev !== undefined && curr !== undefined && curr > prev) {
            totalElevationGain += curr - prev;
        }
    }

    // Create elevation profile data (sample every ~0.1 miles for chart)
    const elevationProfile: Array<{
        distance: number;
        elevation: number;
        distanceLabel: string;
        distanceKm: number;
        elevationM: number;
        distanceLabelKm: string;
    }> = [];
    const sampleInterval = 0.1; // miles
    let nextSampleDistance = 0;

    // Conversion functions
    const milesToKm = (miles: number) => miles * 1.60934;
    const feetToMeters = (feet: number) => feet / 3.28084;

    points.forEach(point => {
        if (point.distance !== undefined && point.elevation !== undefined) {
            if (point.distance >= nextSampleDistance) {
                const distanceMiles = Math.round(point.distance * 10) / 10;
                const distanceKm = Math.round(milesToKm(point.distance) * 10) / 10;
                const elevationFt = Math.round(point.elevation);
                const elevationM = Math.round(feetToMeters(point.elevation));

                elevationProfile.push({
                    distance: distanceMiles,
                    elevation: elevationFt,
                    distanceLabel: `${distanceMiles}mi`,
                    distanceKm: distanceKm,
                    elevationM: elevationM,
                    distanceLabelKm: `${distanceKm}km`
                });
                nextSampleDistance += sampleInterval;
            }
        }
    });

    // Always include the final point
    const lastPoint = points[points.length - 1];
    if (lastPoint.distance !== undefined && lastPoint.elevation !== undefined) {
        const distanceMiles = Math.round(lastPoint.distance * 10) / 10;
        const distanceKm = Math.round(milesToKm(lastPoint.distance) * 10) / 10;
        const elevationFt = Math.round(lastPoint.elevation);
        const elevationM = Math.round(feetToMeters(lastPoint.elevation));

        elevationProfile.push({
            distance: distanceMiles,
            elevation: elevationFt,
            distanceLabel: `${distanceMiles}mi`,
            distanceKm: distanceKm,
            elevationM: elevationM,
            distanceLabelKm: `${distanceKm}km`
        });
    }

    return {
        name,
        points,
        totalDistance: Math.round(cumulativeDistance * 10) / 10,
        totalElevationGain: Math.round(totalElevationGain),
        maxElevation: Math.round(maxElevation),
        minElevation: Math.round(minElevation),
        elevationProfile
    };
}

export async function fetchAndParseGPX(gpxUrl: string): Promise<GPXData> {
    try {
        const response = await fetch(gpxUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch GPX: ${response.statusText}`);
        }
        const gpxContent = await response.text();
        return parseGPX(gpxContent);
    } catch (error) {
        console.error('Error fetching/parsing GPX:', error);
        throw error;
    }
}