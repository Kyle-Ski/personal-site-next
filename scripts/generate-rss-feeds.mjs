#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Sanity client setup (needs to be self-contained since it runs outside Next.js)
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'be82egj8';
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-31';

const SITE_CONFIG = {
  title: "Kyle Czajkowski's Content Feed",
  description: 'Trip reports, guides, gear reviews, and outdoor adventures',
  baseUrl: 'https://kyle.czajkowski.tech',
  author: 'Kyle Czajkowski',
  language: 'en-US',
};

const RSS_FEEDS = {
  all: { title: `${SITE_CONFIG.title} - All Posts`, description: 'All trip reports, guides, gear reviews, and blog posts', link: SITE_CONFIG.baseUrl, feedUrl: `${SITE_CONFIG.baseUrl}/feed/all.xml` },
  blog: { title: `${SITE_CONFIG.title} - Blog Posts`, description: 'Personal thoughts and outdoor adventures', link: `${SITE_CONFIG.baseUrl}/blog`, feedUrl: `${SITE_CONFIG.baseUrl}/feed/blog.xml` },
  reports: { title: `${SITE_CONFIG.title} - Trip Reports`, description: 'Detailed trip reports from outdoor adventures', link: `${SITE_CONFIG.baseUrl}/reports`, feedUrl: `${SITE_CONFIG.baseUrl}/feed/trip-reports.xml` },
  guides: { title: `${SITE_CONFIG.title} - Guides`, description: 'Route guides, gear guides, and outdoor planning resources', link: `${SITE_CONFIG.baseUrl}/guides`, feedUrl: `${SITE_CONFIG.baseUrl}/feed/guides.xml` },
  gear: { title: `${SITE_CONFIG.title} - Gear Reviews`, description: 'In-depth reviews of outdoor gear and equipment', link: `${SITE_CONFIG.baseUrl}/gear`, feedUrl: `${SITE_CONFIG.baseUrl}/feed/gear-reviews.xml` },
};

const QUERIES = {
  all: `*[_type in ["post", "tripReport", "guide", "gearReview"] && includeInRSS == true] | order(publishedAt desc) [0...50] { title, "slug": slug.current, excerpt, publishedAt, _type, guideType }`,
  blog: `*[_type == "post" && includeInRSS == true] | order(publishedAt desc) [0...50] { title, "slug": slug.current, excerpt, publishedAt, _type }`,
  reports: `*[_type == "tripReport" && includeInRSS == true] | order(publishedAt desc) [0...50] { title, "slug": slug.current, excerpt, publishedAt, _type }`,
  guides: `*[_type == "guide" && includeInRSS == true] | order(publishedAt desc) [0...50] { title, "slug": slug.current, excerpt, publishedAt, _type, guideType }`,
  gear: `*[_type == "gearReview" && includeInRSS == true] | order(publishedAt desc) [0...50] { title, "slug": slug.current, excerpt, publishedAt, _type }`,
};

function getItemLink(item) {
  const baseUrl = SITE_CONFIG.baseUrl;
  switch (item._type) {
    case 'post': return `${baseUrl}/blog/${item.slug}`;
    case 'tripReport': return `${baseUrl}/reports/${item.slug}`;
    case 'guide': return `${baseUrl}/guides/${item.slug}`;
    case 'gearReview': return `${baseUrl}/gear/reviews/${item.slug}`;
    default: return `${baseUrl}/${item.slug}`;
  }
}

function getItemCategory(item) {
  const typeMap = { route: 'Route Guide', gear: 'Gear Guide', planning: 'Planning Guide', skills: 'Skills Guide', conditions: 'Conditions Report' };
  switch (item._type) {
    case 'post': return 'Blog';
    case 'tripReport': return 'Trip Report';
    case 'guide': return (item.guideType && typeMap[item.guideType]) || 'Guide';
    case 'gearReview': return 'Gear Review';
    default: return 'Post';
  }
}

function generateRssXml(feedType, items) {
  const config = RSS_FEEDS[feedType];
  const rssItems = items.map(item => {
    const link = getItemLink(item);
    const pubDate = new Date(item.publishedAt).toUTCString();
    return `    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.excerpt || ''}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${getItemCategory(item)}]]></category>
    </item>`;
  }).join('\n');

  const lastBuildDate = items.length > 0 ? new Date(items[0].publishedAt).toUTCString() : new Date().toUTCString();
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
    <generator>Next.js RSS Generator</generator>
${rssItems}
  </channel>
</rss>`;
}

async function querySanity(query) {
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity query failed: ${res.statusText}`);
  const data = await res.json();
  return data.result || [];
}

async function main() {
  const feedDir = join(__dirname, '..', 'public', 'feed');
  mkdirSync(feedDir, { recursive: true });

  const FEED_FILENAMES = { all: 'all.xml', blog: 'blog.xml', reports: 'trip-reports.xml', guides: 'guides.xml', gear: 'gear-reviews.xml' };

  for (const [feedType, filename] of Object.entries(FEED_FILENAMES)) {
    try {
      const query = QUERIES[feedType];
      const items = await querySanity(query);
      const xml = generateRssXml(feedType, items);
      const filepath = join(feedDir, filename);
      writeFileSync(filepath, xml, 'utf-8');
      console.log(`✅ Generated ${filename} (${items.length} items, ${xml.length} bytes)`);
    } catch (err) {
      console.error(`❌ Failed to generate ${filename}:`, err.message);
    }
  }
  console.log('🎉 RSS feeds generated successfully!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
