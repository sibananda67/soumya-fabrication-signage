import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Metal-Inspired Emblem */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center bg-[#252824] border border-[#3D433C] rounded-md shadow-sm overflow-hidden group">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#E6E2D9] group-hover:text-[#E96524] transition-colors"
        >
          {/* Isometric folded sheet metal hex/prism */}
          <path
            d="M18 4L31 11.5V24.5L18 32L5 24.5V11.5L18 4Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Internal structural cross-brace */}
          <path
            d="M18 4V18M18 18L31 24.5M18 18L5 24.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          {/* Center precision rivet node */}
          <circle cx="18" cy="18" r="2.5" fill="#E96524" />
          {/* Technical indicator tick */}
          <line x1="18" y1="9" x2="18" y2="13" stroke="#E96524" strokeWidth="1.5" />
        </svg>
        {/* Subtle metallic reflection sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-tight">
        <span className="text-base font-extrabold tracking-tight text-[#252824] uppercase font-sans">
          {BUSINESS_CONFIG.brandName}
        </span>
        {showTagline && (
          <span className="text-[11px] tracking-wider text-[#6F746F] uppercase font-mono">
            Metal Fabrication • Signage • Stalls
          </span>
        )}
      </div>
    </div>
  );
};

