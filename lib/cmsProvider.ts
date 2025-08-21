import { Post } from '@/app/blog/page';
import { createClient } from 'next-sanity'

interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
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
}


export interface AdventureStats {
  totalPeaks: number;
  totalMiles: number;
  highestElevation: number;
  completedThisYear: number;
  latestAdventure?: string;
}

export class SanityService {
  private client;

  constructor(config: SanityConfig) {
    this.client = createClient(config);
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
        "categories": categories[]->title,
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

  // Trip Report methods
  async getAllTripReports(): Promise<TripReport[]> {
    try {
      // First try to fetch from dedicated tripReport schema
      const tripReports = await this.client.fetch(`
        *[_type == "tripReport"] | order(date desc) {
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

  // Get adventure statistics
  async getAdventureStats(): Promise<AdventureStats> {
    const tripReports = await this.getAllTripReports();

    const peaksWithElevation = tripReports.filter(trip => trip.elevation && trip.elevation > 0);
    const totalMiles = tripReports.reduce((sum, trip) => sum + (trip.distance || 0), 0);
    const highestElevation = Math.max(...peaksWithElevation.map(trip => trip.elevation || 0));

    const currentYear = new Date().getFullYear();
    const completedThisYear = tripReports.filter(trip =>
      new Date(trip.date).getFullYear() === currentYear
    ).length;

    const latestAdventure = tripReports.length > 0 ? tripReports[0].title : undefined;

    return {
      totalPeaks: peaksWithElevation.length,
      totalMiles: Math.round(totalMiles),
      highestElevation,
      completedThisYear,
      latestAdventure
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
    const searchQuery = contentTypes.map(type =>
      `*[_type == "${type}" && (title match "*${query}*" || excerpt match "*${query}*")]`
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
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `);
  }
}