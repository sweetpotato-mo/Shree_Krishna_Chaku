/**
 * Base path for GitHub Pages
 */
const BASE_PATH = '/Shree_Krishna_Chaku';

/**
 * Get asset path - works for both development and production
 * Next.js automatically handles basePath for Image components,
 * but for video and CSS background images, we need to handle it manually
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Client-side: check if we're on GitHub Pages
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Always return path as-is for localhost
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return cleanPath;
    }
    
    // For GitHub Pages (github.io domain), always add basePath
    if (hostname.includes('github.io')) {
      return `${BASE_PATH}${cleanPath}`;
    }
  }
  
  // Server-side or during build: for production builds, add basePath
  // This ensures static export includes the correct paths
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    return `${BASE_PATH}${cleanPath}`;
  }
  
  // Default: return path as-is (for dev server)
  return cleanPath;
}

