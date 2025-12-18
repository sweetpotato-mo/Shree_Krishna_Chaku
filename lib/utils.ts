/**
 * Get asset path - works for both development and production
 * Next.js automatically handles basePath for Image components,
 * but for video and CSS background images, we need to handle it manually
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // For development (localhost), always return path as-is
  // For production (GitHub Pages), we'll detect and add basePath on client-side
  if (typeof window === 'undefined') {
    // Server-side: return path as-is (Next.js will handle basePath in production builds)
    return cleanPath;
  }
  
  // Client-side: check environment
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  // Always return path as-is for localhost
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return cleanPath;
  }
  
  // For GitHub Pages (github.io domain), check if pathname includes basePath
  if (hostname.includes('github.io') && pathname.includes('/Shree_Krishna_Chaku')) {
    return `/Shree_Krishna_Chaku${cleanPath}`;
  }
  
  // Default: return path as-is
  return cleanPath;
}

