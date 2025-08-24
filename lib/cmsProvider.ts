import { Category, Post } from '@/app/blog/page';
import { createClient } from 'next-sanity'
import fs from 'fs';
import path from 'path';

interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
}

export interface Author {
  _id: string
  name: string
  image: string
}

interface ProcessedActivity {
  id: number;
  name: string;
  type: string;
  date: string; // YYYY-MM-DD format
  distanceMiles: number;
  elevationGainFeet: number;
  durationHours: number;
  location: string;
  startCoordinates: [number, number] | null;
}

export interface TripReport {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string;
  publishedAt: string;
  date: string;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  elevation?: number;
  distance?: number;
  elevationGain?: number;
  difficulty: 'easy' | 'moderate' | 'difficult' | 'expert';
  activities: string[];
  weather?: {
    conditions: string;
    temperature?: {
      low: number;
      high: number;
    };
  };
  gearUsed?: string[];
  routeNotes?: string;
  body?: any[];
  author?: {
    _id: string;
    name: string;
    image?: string;
  };
  tags?: string[];
  achievement?: {
    type: string;
    title: string;
    description?: string;
  };
}
export interface GearReview {
  _id: string
  title: string
  slug: string
  gearName: string
  brand: string
  model?: string
  price?: number
  overallRating: number
  excerpt: string
  mainImage: string
  gallery?: Array<{
    asset: { url: string }
    alt?: string
    caption?: string
  }>
  gearCategories: Category[]
  seasons?: string[]
  activities?: string[]
  pros?: string[]
  cons?: string[]
  detailedRatings?: {
    durability?: number
    comfort?: number
    performance?: number
    valueForMoney?: number
  }
  specifications?: {
    weight?: string
    dimensions?: string
    materials?: string[]
    features?: string[]
  }
  testingConditions?: string
  timeUsed?: string
  purchaseLinks?: Array<{
    retailer: string
    url: string
    currentPrice?: number
  }>
  recommendedFor?: string
  alternatives?: string
  body: any[]
  publishedAt: string
  updatedAt?: string
  author: Author
}

export interface AdventureStats {
  totalPeaks: number;
  totalMiles: number;
  totalElevationGain: number; // Add this line
  highestElevation: number;
  completedThisYear: number;
  latestAdventure?: string;
  stravaActivities: number;
  tripReports: number;
  duplicatesRemoved: number;
}
export class SanityService {
  private client;

  constructor(config: SanityConfig) {
    this.client = createClient(config);
  }

  /*
  * Remove trip reports that have matching dates with Strava activities
   */
  private deduplicateActivities(
    stravaActivities: ProcessedActivity[],
    tripReports: TripReport[]
  ): { uniqueTripReports: TripReport[]; duplicatesRemoved: number } {
    const stravaActivityDates = new Set(
      stravaActivities.map(activity => activity.date)
    );

    const uniqueTripReports: TripReport[] = [];
    let duplicatesRemoved = 0;

    for (const tripReport of tripReports) {
      const tripDate = new Date(tripReport.date).toISOString().split('T')[0]; // YYYY-MM-DD

      if (stravaActivityDates.has(tripDate)) {
        console.log(`Removing duplicate trip report: "${tripReport.title}" (${tripDate}) - found in Strava`);
        duplicatesRemoved++;
      } else {
        uniqueTripReports.push(tripReport);
      }
    }

    console.log(`Deduplication complete: ${duplicatesRemoved} duplicates removed, ${uniqueTripReports.length} unique trip reports remaining`);

    return { uniqueTripReports, duplicatesRemoved };
  }

  /**
   * Convert Strava activity to stats format
   */
  private convertStravaToStats(activity: ProcessedActivity) {
    return {
      title: activity.name,
      date: activity.date,
      distance: activity.distanceMiles,
      elevation: activity.elevationGainFeet > 0 ? activity.elevationGainFeet : undefined,
      location: activity.location,
      type: activity.type,
      source: 'strava'
    };
  }

  /**
   * Convert trip report to stats format  
   */
  private convertTripReportToStats(tripReport: TripReport) {
    return {
      title: tripReport.title,
      date: new Date(tripReport.date).toISOString().split('T')[0],
      distance: tripReport.distance || 0,
      elevation: tripReport.elevation || tripReport.elevationGain,
      location: tripReport.location,
      type: 'trip-report',
      source: 'sanity'
    };
  }

  private async loadStravaActivities(): Promise<ProcessedActivity[]> {
    try {
      const dataFilePath = path.join(process.cwd(), 'data', 'strava-activities.json');

      if (!fs.existsSync(dataFilePath)) {
        console.log('No Strava activities found. Run "npm run fetch-strava" to cache activities.');
        return [];
      }

      const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
      console.log(`Loaded ${data.totalActivities} Strava activities from cache (last updated: ${data.lastUpdated})`);
      return data.activities || [];
    } catch (error) {
      console.error('Error loading Strava activities:', error);
      return [];
    }
  }

  async getAllPosts(): Promise<Post[]> {
    return this.client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      publishedAt,
      title,
      "slug": slug.current,
      excerpt,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->{
        title,
        color,
        isOutdoor,
        _id
      },
      "author": author->{
        _id,
        name,
        "image": image.asset->url
      },
      body
    }
  `);
  }

  async getPostBySlug(slug: string): Promise<Post> {
    const [post] = await this.client.fetch(`
      *[_type == "post" && slug.current == $slug] {
        _id,
        publishedAt,
        title,
        "slug": slug.current,
        excerpt,
        body,
        "mainImage": mainImage.asset->url,
        "categories": categories[]->{
        _id,
        title,
        color,
        isOutdoor
      },
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        },
        content
      }
    `, { slug });
    return post;
  }

  // New gear review methods
  async getAllGearReviews(): Promise<GearReview[]> {
    return this.client.fetch(`
      *[_type == "gearReview"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        gearName,
        brand,
        model,
        price,
        overallRating,
        excerpt,
        "mainImage": mainImage.asset->url,
        "gallery": gallery[]{
          "asset": asset->,
          alt,
          caption
        },
        "gearCategories": gearCategories[]->{
          title,
          color,
          isOutdoor,
          _id
        },
        seasons,
        activities,
        pros,
        cons,
        detailedRatings,
        specifications,
        testingConditions,
        timeUsed,
        purchaseLinks,
        recommendedFor,
        alternatives,
        publishedAt,
        updatedAt,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `);
  }

  async getGearReviewBySlug(slug: string): Promise<GearReview> {
    const [review] = await this.client.fetch(`
      *[_type == "gearReview" && slug.current == $slug] {
        _id,
        title,
        "slug": slug.current,
        gearName,
        brand,
        model,
        price,
        overallRating,
        excerpt,
        "mainImage": mainImage.asset->url,
        "gallery": gallery[]{
          "asset": asset->,
          alt,
          caption
        },
        "gearCategories": gearCategories[]->{
          title,
          color,
          isOutdoor,
          _id
        },
        seasons,
        activities,
        pros,
        cons,
        detailedRatings,
        specifications,
        testingConditions,
        timeUsed,
        purchaseLinks,
        recommendedFor,
        alternatives,
        body,
        publishedAt,
        updatedAt,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `, { slug });
    return review;
  }

  async getGearReviewsByCategory(categoryId: string): Promise<GearReview[]> {
    return this.client.fetch(`
      *[_type == "gearReview" && $categoryId in gearCategories[]._ref] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        gearName,
        brand,
        model,
        overallRating,
        excerpt,
        "mainImage": mainImage.asset->url,
        "gearCategories": gearCategories[]->{
          title,
          color,
          isOutdoor,
          _id
        },
        publishedAt,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `, { categoryId });
  }

  async getGearReviewsByActivity(activity: string): Promise<GearReview[]> {
    return this.client.fetch(`
      *[_type == "gearReview" && $activity in activities] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        gearName,
        brand,
        model,
        overallRating,
        excerpt,
        "mainImage": mainImage.asset->url,
        "gearCategories": gearCategories[]->{
          title,
          color,
          isOutdoor,
          _id
        },
        publishedAt,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `, { activity });
  }

  async getTopRatedGearReviews(limit: number = 6): Promise<GearReview[]> {
    return this.client.fetch(`
      *[_type == "gearReview"] | order(overallRating desc, publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        gearName,
        brand,
        overallRating,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `, { limit });
  }

  // Trip Report methods
  async getAllTripReports(): Promise<TripReport[]> {
    try {
      // First try to fetch from dedicated tripReport schema
      const tripReports = await this.client.fetch(`
        *[_type == "tripReport"] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          excerpt,
          "mainImage": mainImage.asset->url,
          publishedAt,
          date,
          location,
          coordinates,
          elevation,
          distance,
          elevationGain,
          difficulty,
          activities,
          weather,
          gearUsed,
          routeNotes,
          achievement,
          "author": author->{
            _id,
            name,
            "image": image.asset->url
          },
          "tags": tags[]->title
        }
      `);

      if (tripReports.length > 0) {
        return tripReports;
      }
    } catch (error) {
      console.log('No tripReport schema found, falling back to posts...');
    }

    // Fallback: get posts that are categorized as trip reports or outdoor content
    const outdoorPosts = await this.client.fetch(`
      *[_type == "post" && count(categories[@ in *[_type == "category" && (title match "Trip Report*" || title match "*Adventure*" || title match "*Hiking*" || title match "*Peak*")]._id]) > 0] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "date": publishedAt,
        "location": "Location TBD",
        "difficulty": "moderate",
        "activities": categories[]->title,
        body,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        },
        "tags": categories[]->title
      }
    `);

    return outdoorPosts;
  }

  async getTripReportBySlug(slug: string): Promise<TripReport | null> {
    try {
      // First try tripReport schema
      const [tripReport] = await this.client.fetch(`
        *[_type == "tripReport" && slug.current == $slug] {
          _id,
          title,
          "slug": slug.current,
          excerpt,
          "mainImage": mainImage.asset->url,
          publishedAt,
          date,
          location,
          coordinates,
          elevation,
          distance,
          elevationGain,
          difficulty,
          activities,
          weather,
          gearUsed,
          routeNotes,
          body,
          achievement,
          "author": author->{
            _id,
            name,
            "image": image.asset->url
          },
          "tags": tags[]->title
        }
      `, { slug });

      if (tripReport) {
        return tripReport;
      }
    } catch (error) {
      console.log('No tripReport schema found, checking posts...');
    }

    // Fallback to post
    const [post] = await this.client.fetch(`
      *[_type == "post" && slug.current == $slug] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "date": publishedAt,
        "location": "Location TBD",
        "difficulty": "moderate",
        "activities": categories[]->title,
        body,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        },
        "tags": categories[]->title
      }
    `, { slug });

    return post || null;
  }

  // Get recent trip reports for homepage/featured
  async getRecentTripReports(limit: number = 6): Promise<TripReport[]> {
    const allReports = await this.getAllTripReports();
    return allReports.slice(0, limit);
  }

  async getAdventureStats(): Promise<AdventureStats> {
    console.log('Calculating adventure stats from Strava + Trip Reports...');

    // Load Strava activities from cached JSON file
    const stravaActivities = await this.loadStravaActivities();

    // Get trip reports from Sanity
    const tripReports = await this.getAllTripReports();

    // Deduplicate: remove trip reports that match Strava activities by date
    const { uniqueTripReports, duplicatesRemoved } = this.deduplicateActivities(
      stravaActivities,
      tripReports
    );

    // Combine all activities for stats calculation
    const allActivities = [
      ...stravaActivities.map(this.convertStravaToStats),
      ...uniqueTripReports.map(this.convertTripReportToStats)
    ];

    // Calculate stats
    const peaksWithElevation = new Array(75)
    // allActivities.filter(activity =>
    //   activity.elevation && activity.elevation > 0
    // );

    const totalMiles = Math.round(
      allActivities.reduce((sum, activity) => sum + (activity.distance || 0), 0)
    );

    // Calculate total elevation gain from all activities
    const totalElevationGain = Math.round(
      allActivities.reduce((sum, activity) => sum + (activity.elevation || 0), 0)
    );

    const highestElevation = peaksWithElevation.length > 0
      ? Math.max(...peaksWithElevation.map(activity => activity.elevation || 0))
      : 0;

    const currentYear = new Date().getFullYear();
    const completedThisYear = allActivities.filter(activity =>
      new Date(activity.date).getFullYear() === currentYear
    ).length;

    // Find latest adventure
    const sortedActivities = allActivities.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const latestAdventure = sortedActivities.length > 0 ? sortedActivities[0].title : undefined;

    return {
      totalPeaks: peaksWithElevation.length,
      totalMiles,
      highestElevation,
      totalElevationGain,
      completedThisYear,
      latestAdventure,
      stravaActivities: stravaActivities.length,
      tripReports: uniqueTripReports.length,
      duplicatesRemoved
    };
  }

  // Get outdoor blog posts (for blog filtering)
  async getOutdoorPosts(): Promise<Post[]> {
    return this.client.fetch(`
      *[_type == "post" && count(categories[@ in *[_type == "category" && (title match "*Outdoor*" || title match "*Adventure*" || title match "*Hiking*" || title match "*Peak*" || title match "*Trail*" || title match "*Gear*")]._id]) > 0] | order(publishedAt desc) {
        _id,
        publishedAt,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        "categories": categories[]->title,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `);
  }

  // Search functionality
  async searchContent(query: string, contentTypes: string[] = ['post', 'tripReport']): Promise<(Post | TripReport)[]> {
    const searchQuery = contentTypes.map(type => {
      if (type === 'gearReview') {
        return `*[_type == "${type}" && (title match "*${query}*" || gearName match "*${query}*" || brand match "*${query}*" || excerpt match "*${query}*")]`
      }
      return `*[_type == "${type}" && (title match "*${query}*" || excerpt match "*${query}*")]`
    }

    ).join(' | ');

    return this.client.fetch(`
      (${searchQuery}) | order(publishedAt desc) {
        _id,
        _type,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "categories": categories[]->title,
        gearName,
        brand,
        overallRating,
        "gearCategories": gearCategories[]->title,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `);
  }
}