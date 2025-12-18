"use client";

import React from "react";

export const SugarcaneWatermark: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 right-0 pointer-events-none z-0"
      style={{
        opacity: 0.03,
        width: "60%",
        height: "80%",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-masi-black"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sugarcane Stalks - Multiple stalks arranged naturally */}
        {/* Stalk 1 */}
        <rect x="50" y="50" width="12" height="200" rx="6" fill="currentColor" opacity="0.4" />
        <rect x="52" y="50" width="8" height="200" rx="4" fill="currentColor" opacity="0.6" />
        {/* Leaves on stalk 1 */}
        <path
          d="M56 80 L70 60 L68 100 L56 80"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M56 120 L75 100 L73 140 L56 120"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M56 160 L72 140 L70 180 L56 160"
          fill="currentColor"
          opacity="0.3"
        />

        {/* Stalk 2 */}
        <rect x="120" y="80" width="12" height="220" rx="6" fill="currentColor" opacity="0.4" />
        <rect x="122" y="80" width="8" height="220" rx="4" fill="currentColor" opacity="0.6" />
        {/* Leaves on stalk 2 */}
        <path
          d="M126 110 L140 90 L138 130 L126 110"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M126 150 L145 130 L143 170 L126 150"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M126 190 L142 170 L140 210 L126 190"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M126 230 L141 210 L139 250 L126 230"
          fill="currentColor"
          opacity="0.3"
        />

        {/* Stalk 3 */}
        <rect x="190" y="100" width="12" height="240" rx="6" fill="currentColor" opacity="0.4" />
        <rect x="192" y="100" width="8" height="240" rx="4" fill="currentColor" opacity="0.6" />
        {/* Leaves on stalk 3 */}
        <path
          d="M196 130 L210 110 L208 150 L196 130"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M196 170 L215 150 L213 190 L196 170"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M196 210 L212 190 L210 230 L196 210"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M196 250 L211 230 L209 270 L196 250"
          fill="currentColor"
          opacity="0.3"
        />

        {/* Stalk 4 */}
        <rect x="260" y="60" width="12" height="200" rx="6" fill="currentColor" opacity="0.4" />
        <rect x="262" y="60" width="8" height="200" rx="4" fill="currentColor" opacity="0.6" />
        {/* Leaves on stalk 4 */}
        <path
          d="M266 90 L280 70 L278 110 L266 90"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M266 130 L285 110 L283 150 L266 130"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M266 170 L282 150 L280 190 L266 170"
          fill="currentColor"
          opacity="0.3"
        />

        {/* Stalk 5 */}
        <rect x="330" y="90" width="12" height="230" rx="6" fill="currentColor" opacity="0.4" />
        <rect x="332" y="90" width="8" height="230" rx="4" fill="currentColor" opacity="0.6" />
        {/* Leaves on stalk 5 */}
        <path
          d="M336 120 L350 100 L348 140 L336 120"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M336 160 L355 140 L353 180 L336 160"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M336 200 L352 180 L350 220 L336 200"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M336 240 L351 220 L349 260 L336 240"
          fill="currentColor"
          opacity="0.3"
        />

        {/* Additional smaller stalks in background for depth */}
        <rect x="80" y="200" width="10" height="180" rx="5" fill="currentColor" opacity="0.2" />
        <rect x="150" y="220" width="10" height="200" rx="5" fill="currentColor" opacity="0.2" />
        <rect x="220" y="180" width="10" height="190" rx="5" fill="currentColor" opacity="0.2" />
        <rect x="290" y="200" width="10" height="210" rx="5" fill="currentColor" opacity="0.2" />
      </svg>
    </div>
  );
};

