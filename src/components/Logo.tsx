import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/config';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'header' | 'hero' | 'footer' | 'md' | 'sm';
  imageOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  size = 'header',
  imageOnly = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string>('/images/maa-laxmi-steel-logo.png');

  // Exact dimensional sizing matching user guidelines
  const sizeConfig = {
    // Header: Desktop 64–76px, Mobile 54–64px
    header: {
      imageBox: 'w-[58px] h-[58px] sm:w-[70px] sm:h-[70px]',
      title: 'text-base sm:text-lg font-black',
      tagline: 'text-[9.5px] sm:text-[10.5px]',
      gap: 'gap-3 sm:gap-3.5',
    },
    // Hero: Desktop 180–240px, Mobile 140–180px
    hero: {
      imageBox: 'w-[150px] h-[150px] sm:w-[210px] sm:h-[210px]',
      title: 'text-xl sm:text-2xl font-black',
      tagline: 'text-xs sm:text-sm',
      gap: 'gap-4',
    },
    // Footer: 80–100px wide
    footer: {
      imageBox: 'w-[84px] h-[84px] sm:w-[94px] sm:h-[94px]',
      title: 'text-lg sm:text-xl font-black',
      tagline: 'text-[11px]',
      gap: 'gap-3.5',
    },
    md: {
      imageBox: 'w-16 h-16',
      title: 'text-base font-extrabold',
      tagline: 'text-[10px]',
      gap: 'gap-3',
    },
    sm: {
      imageBox: 'w-12 h-12',
      title: 'text-sm font-bold',
      tagline: 'text-[9px]',
      gap: 'gap-2',
    },
  }[size];

  // Standalone Image Emblem
  const imageElement = (
    <div
      className={`relative ${sizeConfig.imageBox} shrink-0 rounded-2xl sm:rounded-3xl bg-black p-1 sm:p-1.5 border-2 border-[#D6A63A] shadow-md shadow-[#17365D]/15 overflow-hidden flex items-center justify-center transition-transform hover:scale-[1.02] duration-300`}
      title={BUSINESS_CONFIG.brandName}
    >
      <img
        src={imgSrc}
        onError={() => {
          if (imgSrc !== '/images/maa-laxmi-steel-logo.svg') {
            setImgSrc('/images/maa-laxmi-steel-logo.svg');
          }
        }}
        alt={BUSINESS_CONFIG.brandName}
        className="w-full h-full object-contain rounded-xl"
        loading="eager"
      />
      {/* Delicate gold metallic reflection overlay */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-[#FFEFA6]/30 pointer-events-none" />
    </div>
  );

  if (imageOnly) {
    return <div className={`inline-flex select-none ${className}`}>{imageElement}</div>;
  }

  return (
    <div className={`flex items-center ${sizeConfig.gap} select-none ${className}`}>
      {imageElement}

      {/* Official Business Name with High-Contrast Navy Typography */}
      <div className="flex flex-col leading-tight">
        <div className="flex flex-wrap items-center gap-x-1.5">
          <span
            className={`${sizeConfig.title} tracking-tight text-[#17365D] uppercase font-sans drop-shadow-xs`}
          >
            MAA LAXMI STEEL
          </span>
          <span
            className={`${sizeConfig.title} tracking-tight text-[#2477C8] uppercase font-sans drop-shadow-xs`}
          >
            &amp; SUPPLIERS
          </span>
        </div>
        {showTagline && (
          <span
            className={`${sizeConfig.tagline} font-semibold tracking-wider text-[#64748B] uppercase mt-0.5`}
          >
            Quality Steel • GI Products • Fabrication &amp; Signage
          </span>
        )}
      </div>
    </div>
  );
};
