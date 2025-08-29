import { SanityService, TripReport, AdventureStats } from '@/lib/cmsProvider'
import AdventureClient, { AdventureContent } from '@/components/adventure/AdventureClient'

export const metadata = {
  title: 'Adventures | Kyle Czajkowski',
  description: "Trail running, backpacking, skiing, and peak bagging adventures across Colorado's 14ers and beyond. Real trail conditions, route information, and adventure reports.",
  keywords: 'colorado 14ers, trail running, backpacking, skiing, peak bagging, mountain adventures, trail reports, route conditions',
  openGraph: {
    title: 'Adventure Reports & Trail Intel | Kyle Czajkowski',
    description: 'Trail running, backpacking, skiing, and peak bagging adventures across Colorado\'s 14ers and beyond. Real trail conditions, route information, and adventure reports.',
    images: ['/mountain-trail.JPG'],
    url: 'https://kyle.czajkowski.tech/adventures',
    type: 'website',
    siteName: 'Kyle Czajkowski',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@SkiRoyJenkins',
    title: 'Adventure Reports & Trail Intel | Kyle Czajkowski',
    description: 'Trail running, backpacking, skiing, and peak bagging adventures across Colorado\'s 14ers and beyond.',
    images: ['/mountain-trail.JPG'],
  },
  alternates: {
    canonical: 'https://kyle.czajkowski.tech/adventures'
  }
};

// Get ALL trip reports and stats from Sanity
async function getAdventureData(): Promise<{
  adventures: AdventureContent[];
  stats: AdventureStats;
}> {
  const sanityService = new SanityService({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-01-01',
    useCdn: true
  });

  try {
    const [tripReports, stats] = await Promise.all([
      sanityService.getAllTripReports(), // Changed from getRecentTripReports(6) to getAllTripReports()
      sanityService.getAdventureStats()
    ]);

    // Transform trip reports to adventure content format
    const adventures: AdventureContent[] = tripReports.map(report => ({
      ...report,
      contentType: 'trip-report' as const  // Set default content type
    }));

    return { adventures, stats };
  } catch (error) {
    console.error('Error fetching adventure data:', error);
    // Return fallback data
    return {
      adventures: [],
      stats: {
        totalPeaks: 0,
        totalMiles: 0,
        highestElevation: 0,
        completedThisYear: 0,
        totalElevationGain: 0,
        stravaActivities: 0,
        tripReports: 0,
        duplicatesRemoved: 0
      }
    };
  }
}

export default async function AdventuresPage() {
  const { adventures, stats } = await getAdventureData();

  return <AdventureClient adventures={adventures} stats={stats} />
}