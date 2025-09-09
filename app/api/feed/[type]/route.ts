import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { generateRSSFeed } from '@/sanity/lib/rss'

// Valid feed types
const VALID_FEED_TYPES = ['all', 'blog', 'trip-reports', 'guides', 'gear-reviews']

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const feedType = params.type
  
  // Validate feed type
  if (!VALID_FEED_TYPES.includes(feedType)) {
    return NextResponse.json(
      { error: 'Invalid feed type' },
      { status: 404 }
    )
  }
  
  try {
    // Try to read the pre-generated feed file first
    const filename = getFeedFilename(feedType)
    const feedPath = join(process.cwd(), 'public', 'feed', filename)
    
    try {
      const feedContent = await readFile(feedPath, 'utf-8')
      
      return new NextResponse(feedContent, {
        headers: {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400', // Cache for 1 hour
        },
      })
    } catch (fileError) {
      // If file doesn't exist, generate feed on-demand
      console.log(`Feed file not found for ${feedType}, generating on-demand...`)
      
      const feedTypeMapping = {
        'trip-reports': 'reports',
        'gear-reviews': 'gear'
      }
      
      const sanityFeedType = feedTypeMapping[feedType as keyof typeof feedTypeMapping] || feedType
      const feedContent = await generateRSSFeed(sanityFeedType as any)
      
      return new NextResponse(feedContent, {
        headers: {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600', // Shorter cache for on-demand
        },
      })
    }
    
  } catch (error) {
    console.error(`Error serving RSS feed for ${feedType}:`, error)
    
    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    )
  }
}

// Map URL feed types to filenames
function getFeedFilename(feedType: string): string {
  const mapping = {
    'all': 'all.xml',
    'blog': 'blog.xml',
    'trip-reports': 'trip-reports.xml',
    'guides': 'guides.xml',
    'gear-reviews': 'gear-reviews.xml'
  }
  
  return mapping[feedType as keyof typeof mapping] || `${feedType}.xml`
}