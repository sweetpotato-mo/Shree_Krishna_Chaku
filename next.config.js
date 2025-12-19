/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Only use static export and basePath for production builds (GitHub Pages)
  // In development, use normal Next.js mode without basePath
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/Shree_Krishna_Chaku",
    trailingSlash: true,
  }),
};

module.exports = nextConfig;
