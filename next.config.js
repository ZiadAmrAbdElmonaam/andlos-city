/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add Vercel-specific settings
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig 