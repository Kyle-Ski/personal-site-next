import { MetadataRoute } from 'next'
import { SanityService } from "@/lib/cmsProvider";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kyle.czajkowski.tech'

  // Initialize Sanity service
  const sanityService = new SanityService({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-01-01',
    useCdn: true
  });

  try {
    // Fetch all content types in parallel
    const [posts, tripReports, gearReviews] = await Promise.all([
      sanityService.getAllPosts(),
      sanityService.getAllTripReports(),
      sanityService.getAllGearReviews()
    ]);

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/gear`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/adventures`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/gear/reviews`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/guides`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]

    // Blog posts
    const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    // Trip reports
    const tripReportPages: MetadataRoute.Sitemap = tripReports.map(tripReport => ({
      url: `${baseUrl}/reports/${tripReport.slug}`,
      lastModified: new Date(tripReport.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    // Gear reviews
    const gearReviewPages: MetadataRoute.Sitemap = gearReviews.map(gearReview => ({
      url: `${baseUrl}/gear/reviews/${gearReview.slug}`,
      lastModified: new Date(gearReview.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));

    // Combine all pages
    return [
      ...staticPages,
      ...blogPages,
      ...tripReportPages,
      ...gearReviewPages
    ];

  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Fallback to basic sitemap if there's an error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/gear`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/reports`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/guides`,  // Add guides
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ];
  }
}