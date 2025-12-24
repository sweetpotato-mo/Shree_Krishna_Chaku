/**
 * Base path for GitHub Pages
 */
const BASE_PATH = "/Shree_Krishna_Chaku";

/**
 * Get asset path - works for both development and production
 * For static exports with basePath, Next.js handles Image components automatically,
 * but for video, CSS background images, and other assets, we need to handle it manually
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // During build time (server-side): for production builds, always add basePath
  // This ensures static export includes the correct paths in the HTML
  if (typeof process !== "undefined" && process.env.NODE_ENV === "production") {
    return `${BASE_PATH}${cleanPath}`;
  }

  // Client-side: check if we're on GitHub Pages
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Always return path as-is for localhost
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return cleanPath;
    }

    // For GitHub Pages (github.io domain) or if pathname starts with basePath, add basePath
    if (hostname.includes("github.io") || pathname.startsWith(BASE_PATH)) {
      return `${BASE_PATH}${cleanPath}`;
    }
  }

  // Default: return path as-is (for dev server)
  return cleanPath;
}

/**
 * Get base path for metadata and other server-side uses
 */
export function getBasePath(): string {
  if (typeof process !== "undefined" && process.env.NODE_ENV === "production") {
    return BASE_PATH;
  }
  return "";
}
