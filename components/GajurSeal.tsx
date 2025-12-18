"use client";

import React from "react";

export const GajurSeal: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center mb-4">
        <p className="text-copper text-xs uppercase tracking-widest mb-2">Seal of Authenticity</p>
      </div>
      {/* Tokha Wooden Hook Illustration - Gold Line */}
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-antique-gold"
      >
        {/* Hook base (Gajur) */}
        <rect x="50" y="50" width="20" height="30" rx="2" fill="currentColor" opacity="0.3" />
        {/* Hook curve */}
        <path
          d="M60 50 Q50 40 40 30 Q35 20 40 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Hook tip */}
        <circle cx="40" cy="10" r="3" fill="currentColor" />
        {/* Decorative lines on base */}
        <line x1="55" y1="55" x2="55" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="60" y1="55" x2="60" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="65" y1="55" x2="65" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      <p className="text-charcoal/60 text-xs mt-4 italic">Traditional Tokha Wooden Hook</p>
    </div>
  );
};

