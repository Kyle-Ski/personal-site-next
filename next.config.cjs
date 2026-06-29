/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  serverExternalPackages: ['react-is'],
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</CrestonesAtSunrise.jpeg>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/gear/reviews',
        headers: [
          {
            key: 'Link',
            value: '</blue-tent.jpg>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/peaks',
        headers: [
          {
            key: 'Link',
            value: '</capitol-fall.jpg>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/blog',
        headers: [
          {
            key: 'Link',
            value: '</longs.jpg>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/guides',
        headers: [
          {
            key: 'Link',
            value: '</guide-hero.jpg>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/reports',
        headers: [
          {
            key: 'Link',
            value: '</mountain-trail.JPG>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/resume',
        headers: [
          {
            key: 'Link',
            value: '</mountain-trail.JPG>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/projects',
        headers: [
          {
            key: 'Link',
            value: '</mountain-trail.JPG>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/about',
        headers: [
          {
            key: 'Link',
            value: '</mountain-trail.JPG>; rel=preload; as=image',
          },
        ],
      },
      {
        source: '/gear',
        headers: [{
          key: 'Link',
          value: '</Tent-Baker.jpg>; rel=preload; as=image'
        }],
      },
    ]
  },
  env: {
    UPDATED_RESUME_LINK: process.env.UPDATED_RESUME_LINK
  },
  async redirects() {
    return [
      {
        source: '/adventures',
        destination: '/reports',
        permanent: true,
      },
      {
        source: '/adventures/:slug*',
        destination: '/reports/:slug*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
