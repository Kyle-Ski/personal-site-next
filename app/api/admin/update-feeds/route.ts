import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { generateAllFeeds } from '@/sanity/lib/rss'

// Simple API key protection - add this to your .env.local
const API_KEY = process.env.RSS_UPDATE_API_KEY

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization')
    const providedKey = authHeader?.replace('Bearer ', '')
    
    if (!API_KEY || providedKey !== API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    console.log('🔄 Generating RSS feeds...')
    
    // Generate all RSS feeds
    const feeds = await generateAllFeeds()
    
    // Ensure public/feed directory exists
    const feedDir = join(process.cwd(), 'public', 'feed')
    await mkdir(feedDir, { recursive: true })
    
    // Write each feed to a file
    const writePromises = Object.entries(feeds).map(async ([feedType, content]) => {
      const filename = getFeedFilename(feedType)
      const filepath = join(feedDir, filename)
      await writeFile(filepath, content, 'utf-8')
      return { feedType, filename, size: content.length }
    })
    
    const results = await Promise.all(writePromises)
    
    console.log('✅ RSS feeds generated successfully')
    console.log('📁 Files written:', results.map(r => r.filename).join(', '))
    
    return NextResponse.json({
      success: true,
      message: 'RSS feeds updated successfully',
      feeds: results,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('❌ Error updating RSS feeds:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to update RSS feeds',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}

// Map feed types to filenames
function getFeedFilename(feedType: string): string {
  const mapping = {
    all: 'all.xml',
    blog: 'blog.xml',
    reports: 'trip-reports.xml',
    guides: 'guides.xml',
    gear: 'gear-reviews.xml'
  }
  
  return mapping[feedType as keyof typeof mapping] || `${feedType}.xml`
}

// Optional: Allow GET requests to check API status
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
  
  // Check if feed files exist and their last modified dates
  const { readdir, stat } = await import('fs/promises')
  const { join } = await import('path')
  
  try {
    const feedDir = join(process.cwd(), 'public', 'feed')
    const files = await readdir(feedDir).catch(() => [])
    
    const feedStatus = await Promise.all(
      files
        .filter(file => file.endsWith('.xml'))
        .map(async (file) => {
          const filepath = join(feedDir, file)
          const stats = await stat(filepath)
          return {
            filename: file,
            lastModified: stats.mtime.toISOString(),
            size: stats.size
          }
        })
    )
    
    return NextResponse.json({
      status: 'RSS Update API is running',
      feeds: feedStatus,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    return NextResponse.json({
      status: 'RSS Update API is running',
      feeds: [],
      error: 'Could not read feed directory'
    })
  }
}