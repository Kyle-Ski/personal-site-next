import { getAllGear, getFeaturedGear, getCategories, getBrands, getPackLists } from '@/utils/notionGear'
import GearHero from '@/components/gear/GearHero'
import GearFeatured from '@/components/gear/GearFeatured'
import GearGrid from '@/components/gear/GearGrid'
import GearStats from '@/components/gear/GearStats'
import { AdventureNav } from '@/components/navigation/AdventureNav'

export const metadata = {
  title: 'Gear Room | Kyle Czajkowski',
  description: "Field-tested gear for alpine adventures, backcountry skiing, and multi-day expeditions. Curated gear lists and recommendations from 10+ years in the mountains.",
  keywords: 'outdoor gear, alpine climbing, backcountry skiing, mountaineering gear, hiking equipment, field tested gear, gear reviews',
  openGraph: {
    title: 'Field-Tested Mountain Gear | Kyle Czajkowski',
    description: 'Field-tested gear for alpine adventures, backcountry skiing, and multi-day expeditions. Curated gear lists and recommendations from 10+ years in the mountains.',
    images: ['/Tent-Baker.jpg'], // Using the gear hero image  
    url: 'https://kyle.czajkowski.tech/gear',
    type: 'website',
    siteName: 'Kyle Czajkowski',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@SkiRoyJenkins',
    title: 'Field-Tested Mountain Gear | Kyle Czajkowski',
    description: 'Field-tested gear for alpine adventures, backcountry skiing, and multi-day expeditions.',
    images: ['/Tent-Baker.jpg'],
  },
  alternates: {
    canonical: 'https://kyle.czajkowski.tech/gear'
  }
};

export default async function GearPage() {
  const allGear = await getAllGear()
  const featuredGear = getFeaturedGear(allGear)
  const categories = getCategories(allGear)
  const brands = getBrands(allGear)
  const packLists = getPackLists(allGear)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Accomplishments */}
      <GearHero />

      {/* Featured Gear Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-center">Gear Favorites</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          My favorite gear to use
        </p>
        <GearFeatured items={featuredGear} />
      </section>

      {/* Quick Stats */}
      <GearStats gear={allGear} />

      {/* Main Gear Grid with Filters */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Gear Closet</h2>
        <GearGrid
          gear={allGear}
          categories={categories}
          brands={brands}
          packLists={packLists}
        />
      </section>
      <AdventureNav currentPage="gear" />
    </div>
  )
}