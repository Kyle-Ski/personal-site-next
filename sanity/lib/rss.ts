import { client } from '@/sanity/lib/client'

interface RSSItem {
    title: string
    slug: string
    excerpt?: string
    publishedAt: string
    _type: string
    guideType?: string
}

interface RSSConfig {
    title: string
    description: string
    link: string
    feedUrl: string
}

const SITE_CONFIG = {
    title: 'Your Adventure Blog',
    description: 'Trip reports, guides, gear reviews, and outdoor adventures',
    baseUrl: 'https://kyle.czajkowski.tech',
    author: 'Kyle Czajkowski',
    language: 'en-US'
}

// RSS feed configurations
const RSS_FEEDS = {
    all: {
        title: `${SITE_CONFIG.title} - All Posts`,
        description: 'All trip reports, guides, gear reviews, and blog posts',
        link: SITE_CONFIG.baseUrl,
        feedUrl: `${SITE_CONFIG.baseUrl}/feed/all.xml`
    },
    blog: {
        title: `${SITE_CONFIG.title} - Blog Posts`,
        description: 'Personal thoughts and outdoor adventures',
        link: `${SITE_CONFIG.baseUrl}/blog`,
        feedUrl: `${SITE_CONFIG.baseUrl}/feed/blog.xml`
    },
    reports: {
        title: `${SITE_CONFIG.title} - Trip Reports`,
        description: 'Detailed trip reports from outdoor adventures',
        link: `${SITE_CONFIG.baseUrl}/reports`,
        feedUrl: `${SITE_CONFIG.baseUrl}/feed/trip-reports.xml`
    },
    guides: {
        title: `${SITE_CONFIG.title} - Guides`,
        description: 'Route guides, gear guides, and outdoor planning resources',
        link: `${SITE_CONFIG.baseUrl}/guides`,
        feedUrl: `${SITE_CONFIG.baseUrl}/feed/guides.xml`
    },
    gear: {
        title: `${SITE_CONFIG.title} - Gear Reviews`,
        description: 'In-depth reviews of outdoor gear and equipment',
        link: `${SITE_CONFIG.baseUrl}/gear`,
        feedUrl: `${SITE_CONFIG.baseUrl}/feed/gear-reviews.xml`
    }
}

// Sanity queries for each feed type
const QUERIES = {
    all: `*[_type in ["post", "tripReport", "guide", "gearReview"] && includeInRSS == true] | order(publishedAt desc) [0...50] {
    title,
    slug,
    excerpt,
    publishedAt,
    _type,
    guideType
  }`,
    blog: `*[_type == "post" && includeInRSS == true] | order(publishedAt desc) [0...50] {
    title,
    slug,
    excerpt,
    publishedAt,
    _type
  }`,
    reports: `*[_type == "tripReport" && includeInRSS == true] | order(publishedAt desc) [0...50] {
    title,
    slug,
    excerpt,
    publishedAt,
    _type
  }`,
    guides: `*[_type == "guide" && includeInRSS == true] | order(publishedAt desc) [0...50] {
    title,
    slug,
    excerpt,
    publishedAt,
    _type,
    guideType
  }`,
    gear: `*[_type == "gearReview" && includeInRSS == true] | order(publishedAt desc) [0...50] {
    title,
    slug,
    excerpt,
    publishedAt,
    _type
  }`
}

// Generate RSS XML for a specific feed type
export async function generateRSSFeed(feedType: keyof typeof RSS_FEEDS): Promise<string> {
    const config = RSS_FEEDS[feedType]
    const query = QUERIES[feedType]

    try {
        const items: RSSItem[] = await client.fetch(query)

        const rssItems = items.map(item => {
            const link = getItemLink(item)
            const pubDate = new Date(item.publishedAt).toUTCString()

            return `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.excerpt || ''}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${getItemCategory(item)}]]></category>
    </item>`
        }).join('')

        const lastBuildDate = items.length > 0
            ? new Date(items[0].publishedAt).toUTCString()
            : new Date().toUTCString()

        return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${config.title}]]></title>
    <description><![CDATA[${config.description}]]></description>
    <link>${config.link}</link>
    <atom:link href="${config.feedUrl}" rel="self" type="application/rss+xml"/>
    <language>${SITE_CONFIG.language}</language>
    <managingEditor>${SITE_CONFIG.author}</managingEditor>
    <webMaster>${SITE_CONFIG.author}</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js RSS Generator</generator>${rssItems}
  </channel>
</rss>`

    } catch (error) {
        console.error(`Error generating RSS feed for ${feedType}:`, error)
        throw new Error(`Failed to generate RSS feed: ${error}`)
    }
}

// Helper function to get the correct link for each content type
function getItemLink(item: RSSItem): string {
    const baseUrl = SITE_CONFIG.baseUrl
    const slug = item.slug

    switch (item._type) {
        case 'post':
            return `${baseUrl}/blog/${slug}`
        case 'tripReport':
            return `${baseUrl}/reports/${slug}`
        case 'guide':
            return `${baseUrl}/guides/${slug}`
        case 'gearReview':
            return `${baseUrl}/gear/${slug}`
        default:
            return `${baseUrl}/${slug}`
    }
}

// Helper function to get category name for RSS
function getItemCategory(item: RSSItem): string {
    switch (item._type) {
        case 'post':
            return 'Blog'
        case 'tripReport':
            return 'Trip Report'
        case 'guide':
            if (item.guideType) {
                const typeMap = {
                    'route': 'Route Guide',
                    'gear': 'Gear Guide',
                    'planning': 'Planning Guide',
                    'skills': 'Skills Guide',
                    'conditions': 'Conditions Report'
                }
                return typeMap[item.guideType as keyof typeof typeMap] || 'Guide'
            }
            return 'Guide'
        case 'gearReview':
            return 'Gear Review'
        default:
            return 'Post'
    }
}

// Generate all RSS feeds
export async function generateAllFeeds(): Promise<{ [key: string]: string }> {
    const feeds: { [key: string]: string } = {}

    for (const feedType of Object.keys(RSS_FEEDS) as Array<keyof typeof RSS_FEEDS>) {
        try {
            feeds[feedType] = await generateRSSFeed(feedType)
        } catch (error) {
            console.error(`Failed to generate ${feedType} feed:`, error)
            // Continue with other feeds even if one fails
        }
    }

    return feeds
}