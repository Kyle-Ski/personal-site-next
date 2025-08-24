import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, User, Mountain, Star, FileText, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { SanityService } from "@/lib/cmsProvider";

interface BaseContent {
  _id: string;
  publishedAt: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string;
  author?: {
    name: string;
    image?: string;
  };
  contentType: 'blog' | 'tripReport' | 'gearReview';
}

interface BlogPost extends BaseContent {
  contentType: 'blog';
  categories?: Array<{
    title: string;
    color: string;
    isOutdoor: boolean;
    _id: string;
  }>;
}

interface TripReport extends BaseContent {
  contentType: 'tripReport';
  location?: string;
  difficulty?: string;
  activities?: string[];
}

interface GearReview extends BaseContent {
  contentType: 'gearReview';
  brand?: string;
  model?: string;
  overallRating?: number;
}

type ContentItem = BlogPost | TripReport | GearReview;

async function getAllRecentContent(): Promise<ContentItem[]> {
  const sanityService = new SanityService({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-01-01',
    useCdn: true
  });

  try {
    // Fetch all content types in parallel using proper methods
    const [blogPosts, tripReports, gearReviews] = await Promise.all([
      // Blog posts
      sanityService.getAllPosts().then((posts: any[]) => 
        posts.map(post => ({ ...post, contentType: 'blog' as const }))
      ),
      
      // Trip reports
      sanityService.getAllTripReports().then((reports: any[]) => 
        reports.map(report => ({ ...report, contentType: 'tripReport' as const }))
      ),
      
      // Gear reviews
      sanityService.getAllGearReviews().then((reviews: any[]) => 
        reviews.map(review => ({ ...review, contentType: 'gearReview' as const }))
      )
    ]);

    // Combine all content and sort by publishedAt
    const allContent: ContentItem[] = [
      ...blogPosts,
      ...tripReports,
      ...gearReviews
    ];

    // Sort by publishedAt (most recent first) and take top 6
    return allContent
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 6);

  } catch (error) {
    console.error('Error fetching recent content:', error);
    return [];
  }
}

function getContentTypeInfo(contentType: string) {
  switch (contentType) {
    case 'blog':
      return {
        icon: FileText,
        color: 'blue',
        label: 'Blog Post',
        urlPrefix: '/blog',
        bgColor: 'bg-blue-100 dark:bg-blue-900/30',
        textColor: 'text-blue-800 dark:text-blue-300'
      };
    case 'tripReport':
      return {
        icon: Mountain,
        color: 'green',
        label: 'Trip Report',
        urlPrefix: '/adventures',
        bgColor: 'bg-green-100 dark:bg-green-900/30',
        textColor: 'text-green-800 dark:text-green-300'
      };
    case 'gearReview':
      return {
        icon: Star,
        color: 'orange',
        label: 'Gear Review',
        urlPrefix: '/gear/reviews',
        bgColor: 'bg-orange-100 dark:bg-orange-900/30',
        textColor: 'text-orange-800 dark:text-orange-300'
      };
    default:
      return {
        icon: FileText,
        color: 'gray',
        label: 'Content',
        urlPrefix: '',
        bgColor: 'bg-gray-100 dark:bg-gray-900/30',
        textColor: 'text-gray-800 dark:text-gray-300'
      };
  }
}

function getContentSubtext(item: ContentItem): string {
  switch (item.contentType) {
    case 'tripReport':
      const report = item as TripReport;
      return report.location || 'Adventure Report';
    case 'gearReview':
      const review = item as GearReview;
      const rating = review.overallRating ? ` • ${review.overallRating}/5 ⭐` : '';
      return `${review.brand || ''} ${review.model || ''}${rating}`.trim();
    case 'blog':
    default:
      return 'Tech Insights';
  }
}

export default async function RecentContent() {
  const content = await getAllRecentContent();

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest Content
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recent blog posts, trip reports, and gear reviews - sharing everything from code insights to mountain adventures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.map((item) => {
            const typeInfo = getContentTypeInfo(item.contentType);
            const IconComponent = typeInfo.icon;
            const contentUrl = `${typeInfo.urlPrefix}/${item.slug}`;
            
            return (
              <article 
                key={`${item.contentType}-${item._id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <Link href={contentUrl}>
                  {/* Featured Image */}
                  {item.mainImage ? (
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={item.mainImage}
                        alt={item.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Content Type Badge */}
                      <div className={`absolute top-3 left-3 ${typeInfo.bgColor} ${typeInfo.textColor} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                        <IconComponent size={12} />
                        {typeInfo.label}
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                      <div className="text-white text-2xl font-bold">
                        {item.title.charAt(0)}
                      </div>
                      {/* Content Type Badge */}
                      <div className={`absolute top-3 left-3 ${typeInfo.bgColor} ${typeInfo.textColor} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                        <IconComponent size={12} />
                        {typeInfo.label}
                      </div>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Content-specific subtext */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {getContentSubtext(item)}
                    </p>

                    {/* Excerpt */}
                    {item.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <time dateTime={item.publishedAt}>
                          {format(new Date(item.publishedAt), 'MMM d, yyyy')}
                        </time>
                      </div>
                      {item.author && (
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          <span>{item.author.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Navigation CTAs */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Link 
            href="/blog"
            className="group p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
          >
            <FileText size={24} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">All Blog Posts</h3>
            <p className="text-sm text-blue-600 dark:text-blue-300 group-hover:underline">Tech insights & tutorials →</p>
          </Link>

          <Link 
            href="/adventures"
            className="group p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300"
          >
            <Mountain size={24} className="mx-auto mb-3 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Trip Reports</h3>
            <p className="text-sm text-green-600 dark:text-green-300 group-hover:underline">Adventure stories →</p>
          </Link>

          <Link 
            href="/gear/reviews"
            className="group p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300"
          >
            <Star size={24} className="mx-auto mb-3 text-orange-600 dark:text-orange-400" />
            <h3 className="font-semibold mb-2 text-orange-900 dark:text-orange-100">Gear Reviews</h3>
            <p className="text-sm text-orange-600 dark:text-orange-300 group-hover:underline">Field-tested gear →</p>
          </Link>
        </div>
      </div>
    </section>
  );
}