"use client";

import { useEffect } from "react";

export function Favicon() {
  useEffect(() => {
    // Only run on client side after component mounts
    if (typeof window === 'undefined' || !document.head) return;

    // Determine basePath based on current location
    const isGitHubPages = window.location.hostname.includes('github.io') || 
                          window.location.pathname.startsWith('/Shree_Krishna_Chaku');
    const basePath = isGitHubPages ? '/Shree_Krishna_Chaku' : '';

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      // Remove existing favicon links (but keep other links intact)
      const existingFavicons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
      existingFavicons.forEach(link => {
        // Only remove if it's pointing to LOGO_White.png or GoldLogo copy_No_BG.png
        const href = link.getAttribute('href');
        if (href && (href.includes('LOGO_White') || href.includes('GoldLogo copy_No_BG'))) {
          link.remove();
        }
      });

      // Create and add favicon link
      const faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/png';
      faviconLink.href = `${basePath}/${encodeURIComponent('GoldLogo copy_No_BG.png')}`;
      document.head.appendChild(faviconLink);

      // Create and add apple touch icon
      const appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      appleLink.href = `${basePath}/${encodeURIComponent('GoldLogo copy_No_BG.png')}`;
      document.head.appendChild(appleLink);
    }, 100);
  }, []);

  return null;
}

