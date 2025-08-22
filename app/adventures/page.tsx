import AdventureHero from '@/components/adventure/AdventureHero'
import TripReportCard from '@/components/adventure/TripReportCard'
import { Mountain, MapPin, Calendar, Trophy, TrendingUp, ArrowUp } from 'lucide-react'
import { SanityService, TripReport, AdventureStats } from '@/lib/cmsProvider'
import Link from 'next/link'

export const metadata = {
  title: 'Adventures | Kyle Czajkowski',
  description: "Trail running, backpacking, skiing, and peak bagging adventures across Colorado and beyond",
}

// Get trip reports and stats from Sanity
async function getAdventureData(): Promise<{
  tripReports: TripReport[];
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
      sanityService.getRecentTripReports(6),
      sanityService.getAdventureStats()
    ]);

    return { tripReports, stats };
  } catch (error) {
    console.error('Error fetching adventure data:', error);
    // Return fallback data
    return { 
      tripReports: [], 
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
  const { tripReports, stats } = await getAdventureData();

  // Build hero stats from real data - now with 5 stats including elevation gained
  const heroStats = [
    {
      label: 'Peaks Summited',
      value: stats.totalPeaks > 0 ? `${stats.totalPeaks}+` : 'Getting Started',
      icon: Mountain
    },
    {
      label: 'Miles Adventured',
      value: stats.totalMiles > 0 ? `${stats.totalMiles.toLocaleString()}+` : 'Counting...',
      icon: MapPin
    },
    {
      label: 'Elevation Gained',
      value: stats.totalElevationGain > 0 ? `${Math.round(stats.totalElevationGain / 1000).toLocaleString()}k ft` : 'Climbing...',
      icon: ArrowUp
    },
    // {
    //   label: 'This Year',
    //   value: `${stats.completedThisYear} Adventures`,
    //   icon: Calendar
    // },
    {
      label: 'Highest Summit',
      value: '19,341 ft',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AdventureHero
        title="Adventures in the Great Outdoors"
        subtitle="Exploring as many peaks, trails, and backcountry lines as I can"
        backgroundImage="/images/adventure-hero.jpg"
        stats={heroStats}
      />

      {/* Trip Reports Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 adventure-heading">Recent Trip Reports</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {tripReports.length > 0 
              ? "Detailed accounts of recent adventures, complete with route info, conditions, and lessons learned for fellow adventurers."
              : "Adventure reports coming soon! Check back for detailed trip accounts and route information."
            }
          </p>
        </div>

        {tripReports.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tripReports.map((trip) => (
                <TripReportCard key={trip.slug} trip={trip} />
              ))}
            </div>

            {/* <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to see more adventures? Check out my complete trip history.
              </p>
              <Link href="/adventures/all" className="btn-adventure inline-flex items-center gap-2">
                <Mountain size={16} />
                View All Trip Reports
              </Link>
            </div> */}
          </>
        ) : (
          // Empty state when no trip reports exist yet
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Mountain className="h-24 w-24 text-green-200 dark:text-green-800 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Adventure Reports Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m currently documenting my recent adventures. Check back soon for detailed trip reports, route information, and gear insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog" className="btn-adventure">
                  Read Blog Posts
                </Link>
                <Link href="/gear" className="px-4 py-2 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                  Check Out My Gear
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Latest Adventure Highlight */}
      {stats.latestAdventure && (
        <section className="bg-green-50 dark:bg-green-900/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Latest Adventure</h3>
            <p className="text-lg text-muted-foreground">
              Most recent expedition: <span className="font-semibold text-green-700 dark:text-green-400">{stats.latestAdventure}</span>
            </p>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready for Your Own Adventure?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Whether you&apos;re planning your first 14er or looking for gear recommendations, I&apos;d love to help fellow adventurers get outside safely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/gear" className="btn-adventure">
            Browse My Gear Setup
          </Link>
          <Link href="/#contact" className="px-6 py-3 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}