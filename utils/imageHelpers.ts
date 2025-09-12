export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const imgStrToBase64 = (str: string) => Buffer.from(str).toString('base64');

/**
 * Converts Notion signed URLs to use our image proxy
 * This prevents OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED errors
 */
export function getProxiedImageUrl(originalUrl: string): string {
  // Check if it's a Notion AWS S3 URL that needs proxying
  if (originalUrl && originalUrl.includes('prod-files-secure.s3.us-west-2.amazonaws.com')) {
    // Use our API proxy route
    return `/api/image-proxy?url=${encodeURIComponent(originalUrl)}`
  }

  // Return original URL for local/other images
  return originalUrl
}

/**
 * Get responsive sizes for gear card images
 */
export function getGearCardImageSizes(): string {
  return `
    (max-width: 640px) 280px,
    (max-width: 768px) 320px,
    (max-width: 1024px) 350px,
    400px
  `.trim()
}

/**
 * Check if an image URL is from Notion and needs proxying
 */
export function isNotionImage(url: string): boolean {
  if (!url) return false
  return url.includes('prod-files-secure.s3.us-west-2.amazonaws.com')
}
