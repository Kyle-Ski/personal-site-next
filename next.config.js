/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    UPDATED_RESUME_LINK: process.env.UPDATED_RESUME_LINK
  }
}

module.exports = nextConfig
