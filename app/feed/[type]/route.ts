import { NextRequest, NextResponse } from 'next/server'
import { generateRSSFeed } from '@/sanity/lib/rss'

// Valid feed types
const VALID_FEED_TYPES = ['all', 'blog', 'trip-reports', 'guides', 'gear-reviews']

const FEED_TYPE_MAPPING: Record<string, string> = {
  'trip-reports': 'reports',
  'gear-reviews': 'gear',
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type: feedType } = await params

  if (!VALID_FEED_TYPES.includes(feedType)) {
    return NextResponse.json(
      { error: 'Invalid feed type' },
      { status: 404 }
    )
  }

  try {
    const sanityFeedType = FEED_TYPE_MAPPING[feedType] || feedType
    const feedContent = await generateRSSFeed(sanityFeedType as any)

    return new NextResponse(feedContent, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error(`Error serving RSS feed for ${feedType}:`, error)

    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    )
  }
}