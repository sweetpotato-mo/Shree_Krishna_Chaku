/**
 * Base path for GitHub Pages
 */
const BASE_PATH = "/Shree_Krishna_Chaku";

/**
 * Get asset path - works for both development and production
 * Always uses relative paths for localhost, basePath only for GitHub Pages
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Always check runtime environment (client-side)
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Always use relative paths for localhost (including when serving built files)
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0") {
      return cleanPath;
    }

    // For GitHub Pages (github.io domain) or if pathname starts with basePath, add basePath
    if (hostname.includes("github.io") || pathname.startsWith(BASE_PATH)) {
      return `${BASE_PATH}${cleanPath}`;
    }
  }

  // Server-side/build-time: default to relative path
  // This ensures local builds work correctly
  // Only add basePath if explicitly needed for GitHub Pages deployment
  return cleanPath;
}

/**
 * Get base path for metadata and other server-side uses
 * Only returns basePath for GitHub Pages, not for localhost
 */
export function getBasePath(): string {
  // Check runtime environment if available
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Never use basePath for localhost
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0") {
      return "";
    }
    
    // Only use basePath for GitHub Pages
    if (hostname.includes("github.io") || pathname.startsWith(BASE_PATH)) {
      return BASE_PATH;
    }
  }
  
  // Server-side: default to empty (relative paths)
  return "";
}
