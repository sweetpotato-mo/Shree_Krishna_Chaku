/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds (GitHub Pages)
  // In development, use normal Next.js mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (for GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/Shree_Krishna_Chaku' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
