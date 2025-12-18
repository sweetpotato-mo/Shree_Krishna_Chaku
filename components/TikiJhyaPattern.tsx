"use client";

import React from "react";

export const TikiJhyaPattern: React.FC<{ className?: string; color?: string; strokeWidth?: string; bold?: boolean }> = ({
  className = "",
  color = "#8B0000",
  strokeWidth = "0.4",
  bold = false,
}) => {
  const patternId = `diamond-lotus-pattern-${color.replace('#', '')}-${strokeWidth}`;
  const finalStrokeWidth = bold ? "1.2" : strokeWidth;
  const finalColor = bold ? (color === "#8B0000" ? "#D4AF37" : color) : color;
  
  return (
    <svg
      className={`${bold ? 'tiki-jhya-header' : 'tiki-jhya-overlay'} ${className}`}
      width="100%"
      height="100"
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Interlocking diamond and lotus motifs pattern */}
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* Interlocking diamonds */}
          <g stroke={finalColor} strokeWidth={finalStrokeWidth} fill="none">
            {/* Main diamond */}
            <path d="M30,0 L60,30 L30,60 L0,30 Z" />
            {/* Interlocking diamond rotated 45deg */}
            <path d="M30,10 L50,30 L30,50 L10,30 Z" transform="rotate(45 30 30)" />
            {/* Corner diamonds */}
            <path d="M15,15 L30,0 L45,15 L30,30 Z" />
            <path d="M45,15 L60,30 L45,45 L30,30 Z" />
            <path d="M15,45 L30,60 L45,45 L30,30 Z" />
            <path d="M15,15 L0,30 L15,45 L30,30 Z" />
          </g>
          
          {/* Lotus motif in center */}
          <g stroke={finalColor} strokeWidth={bold ? "0.8" : "0.3"} fill="none" transform="translate(30,30)">
            {/* Outer petals */}
            <ellipse cx="0" cy="-8" rx="4" ry="6" />
            <ellipse cx="7" cy="-4" rx="4" ry="6" transform="rotate(45 7 -4)" />
            <ellipse cx="7" cy="4" rx="4" ry="6" transform="rotate(90 7 4)" />
            <ellipse cx="0" cy="8" rx="4" ry="6" transform="rotate(135 0 8)" />
            <ellipse cx="-7" cy="4" rx="4" ry="6" transform="rotate(180 -7 4)" />
            <ellipse cx="-7" cy="-4" rx="4" ry="6" transform="rotate(225 -7 -4)" />
            {/* Inner circle */}
            <circle cx="0" cy="0" r="3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
