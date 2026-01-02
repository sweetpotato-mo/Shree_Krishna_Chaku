/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Only use static export and basePath when explicitly set for GitHub Pages deployment
  // For local builds, use relative paths (no basePath)
  ...(process.env.NODE_ENV === "production" && process.env.USE_BASE_PATH === "true" && {
    output: "export",
    basePath: "/Shree_Krishna_Chaku",
    assetPrefix: "/Shree_Krishna_Chaku",
    trailingSlash: true,
  }),
  // For local production builds, still export but without basePath
  ...(process.env.NODE_ENV === "production" && process.env.USE_BASE_PATH !== "true" && {
    output: "export",
    trailingSlash: true,
  }),
};

module.exports = nextConfig;
