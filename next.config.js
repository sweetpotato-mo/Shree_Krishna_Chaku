/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Shree_Krishna_Chaku',
  trailingSlash: true,
};

module.exports = nextConfig;
