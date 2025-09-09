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