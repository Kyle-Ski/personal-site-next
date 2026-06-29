import { NextRequest, NextResponse } from 'next/server'
import { generateAllFeeds } from '@/sanity/lib/rss'

const API_KEY = process.env.RSS_UPDATE_API_KEY

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const providedKey = authHeader?.replace('Bearer ', '')

    if (!API_KEY || providedKey !== API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const feeds = await generateAllFeeds()

    const results = Object.entries(feeds).map(([feedType, content]) => ({
      feedType,
      size: content.length,
    }))

    return NextResponse.json({
      success: true,
      message: 'RSS feeds generated successfully',
      feeds: results,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error updating RSS feeds:', error)

    return NextResponse.json(
      {
        error: 'Failed to update RSS feeds',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const headerKey = authHeader?.replace('Bearer ', '')
  const queryKey = request.nextUrl.searchParams.get('key')
  const providedKey = headerKey || queryKey

  if (!API_KEY || providedKey !== API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    status: 'RSS Update API is running',
    timestamp: new Date().toISOString(),
  })
}