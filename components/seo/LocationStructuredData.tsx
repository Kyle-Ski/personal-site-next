import { TripReport } from '@/lib/cmsProvider';

interface LocationStructuredDataProps {
  tripReport: TripReport;
}

export function LocationStructuredData({ tripReport }: LocationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": tripReport.title,
    "description": tripReport.excerpt || tripReport.routeNotes,
    "author": {
      "@type": "Person",
      "name": tripReport.author?.name || "Kyle Czajkowski"
    },
    "datePublished": tripReport.publishedAt,
    "image": tripReport.mainImage ? [tripReport.mainImage] : [],
    
    // Location-specific data
    "locationCreated": tripReport.location ? {
      "@type": "Place",
      "name": tripReport.location,
      ...(tripReport.coordinates && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": tripReport.coordinates.lat,
          "longitude": tripReport.coordinates.lng
        }
      }),
      ...(tripReport.elevation && {
        "elevation": `${tripReport.elevation} feet`
      })
    } : undefined,
    
    // Activity-specific data
    "about": {
      "@type": "Thing",
      "name": "Outdoor Adventure",
      "description": `${tripReport.activities?.join(', ')} adventure in ${tripReport.location}`
    },
    
    // Additional adventure metadata
    "additionalProperty": [
      ...(tripReport.difficulty ? [{
        "@type": "PropertyValue",
        "name": "Difficulty",
        "value": tripReport.difficulty
      }] : []),
      ...(tripReport.distance ? [{
        "@type": "PropertyValue",
        "name": "Distance",
        "value": `${tripReport.distance} miles`,
        "unitCode": "MI"
      }] : []),
      ...(tripReport.elevationGain ? [{
        "@type": "PropertyValue", 
        "name": "Elevation Gain",
        "value": `${tripReport.elevationGain} feet`,
        "unitCode": "FT"
      }] : [])
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
