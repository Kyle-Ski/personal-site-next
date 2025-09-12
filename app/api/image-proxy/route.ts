import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const imageUrl = searchParams.get('url')

    if (!imageUrl) {
        return new NextResponse('Missing image URL parameter', { status: 400 })
    }

    // Security: Only allow Notion AWS S3 URLs
    if (!imageUrl.includes('prod-files-secure.s3.us-west-2.amazonaws.com')) {
        return new NextResponse('Unauthorized image source', { status: 403 })
    }

    try {
        console.log('Proxying gear image:', imageUrl.substring(0, 100) + '...')

        // Fetch the image from Notion's AWS S3
        const imageResponse = await fetch(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; NextJS-ImageProxy/1.0)',
            },
            // Don't cache the fetch since URLs are time-sensitive
            cache: 'no-store',
        })

        if (!imageResponse.ok) {
            console.error('Failed to fetch gear image:', {
                status: imageResponse.status,
                statusText: imageResponse.statusText,
                url: imageUrl.substring(0, 100) + '...'
            })
            return new NextResponse(`Failed to fetch image: ${imageResponse.status}`, {
                status: imageResponse.status
            })
        }

        const imageBuffer = await imageResponse.arrayBuffer()
        const contentType = imageResponse.headers.get('content-type') || 'image/jpeg'

        console.log('Successfully proxied gear image:', {
            contentType,
            size: imageBuffer.byteLength
        })

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                // Cache for 24 hours
                'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                'CDN-Cache-Control': 'max-age=86400',
                'Vercel-CDN-Cache-Control': 'max-age=86400',
                'X-Content-Type-Options': 'nosniff',
            },
        })
    } catch (error) {
        console.error('Gear image proxy error:', error)
        return new NextResponse('Internal server error while proxying image', {
            status: 500
        })
    }
}