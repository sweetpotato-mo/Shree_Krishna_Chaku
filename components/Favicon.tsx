"use client";

import { useEffect } from "react";

export function Favicon() {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    existingLinks.forEach(link => link.remove());

    // Determine basePath based on current location
    const isGitHubPages = typeof window !== 'undefined' && 
      (window.location.hostname.includes('github.io') || 
       window.location.pathname.startsWith('/Shree_Krishna_Chaku'));
    const basePath = isGitHubPages ? '/Shree_Krishna_Chaku' : '';

    // Create and add favicon link
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = `${basePath}/LOGO_White.png`;
    document.head.appendChild(faviconLink);

    // Create and add apple touch icon
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = `${basePath}/LOGO_White.png`;
    document.head.appendChild(appleLink);
  }, []);

  return null;
}

