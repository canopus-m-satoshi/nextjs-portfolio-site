/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
