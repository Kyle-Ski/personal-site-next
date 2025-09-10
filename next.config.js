/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      'cdn.sanity.io',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'file.notion.so',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: '**.notion.so',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    // Optimize bundle size
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-slot',
      'react-icons',
      'chart.js',
      'react-chartjs-2'
    ],
  },
  esmExternals: true,
  serverComponentsExternalPackages: ['sharp'],
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  // Enhanced bundle analyzer and optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize chunks
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              enforce: true,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      }
    }

    // Bundle analyzer (only in development)
    if (!dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
    }

    return config
  },
  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
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
        permanent: true, // 301 redirect
      },
      {
        source: '/adventures/:slug*',
        destination: '/reports/:slug*',
        permanent: true, // 301 redirect  
      },
    ]
  },
}

module.exports = nextConfig