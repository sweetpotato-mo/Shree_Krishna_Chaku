"use client";

import React from "react";

export const SectionDivider: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center py-12 ${className}`}>
      <div className="flex items-center w-full max-w-4xl">
        <div className="flex-1 h-px bg-masi-black/10"></div>
        {/* Tiny Elegant Gold Lotus Icon */}
        <div className="mx-4">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-antique-gold"
          >
            {/* Lotus petals */}
            <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.7" />
            <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.7" transform="rotate(45 12 12)" />
            <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.7" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.7" transform="rotate(135 12 12)" />
            {/* Center */}
            <circle cx="12" cy="8" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-masi-black/10"></div>
      </div>
    </div>
  );
};
