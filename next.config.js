/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    URESUME_LINK: process.env.RESUME_LINK
  }
}

module.exports = nextConfig
