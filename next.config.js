/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    RESUME_LINK: process.env.RESUME_LINK
  }
}

module.exports = nextConfig
