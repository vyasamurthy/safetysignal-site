/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  env: {
    SAFETYSIGNAL_API_URL: process.env.SAFETYSIGNAL_API_URL || 'http://localhost:8888',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig
