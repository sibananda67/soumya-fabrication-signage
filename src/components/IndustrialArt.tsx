import React from 'react';
import { ProductItem } from '../data/catalogue';

interface IndustrialArtProps {
  type: ProductItem['illustrationType'];
  accentColor?: string;
  className?: string;
}

export const IndustrialArt: React.FC<IndustrialArtProps> = ({
  type,
  accentColor = '#E96524',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#F4F1EA] via-[#EDE9DF] to-[#E6E2D9] flex items-center justify-center overflow-hidden p-6 border-b border-[#E6E2D9] select-none ${className}`}
    >
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 bg-industrial-grid opacity-70" />

      {/* Technical coordinate markings */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-[#6F746F] uppercase tracking-widest flex items-center gap-1.5 font-semibold">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
        <span>SPEC-REV // FAB-ENG</span>
      </div>
      <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#6F746F] uppercase font-semibold">
        PRECISION METALCRAFT
      </div>

      {/* Centered Graphic Render */}
      <div className="relative z-10 w-44 h-40 flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
        {type === 'sheet' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* GI Corrugated Sheets Stacking */}
            <defs>
              <linearGradient id="sheetGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            {/* Bottom Sheet */}
            <path d="M20 70 L90 35 L140 60 L70 95 Z" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            {/* Middle Sheet */}
            <path d="M20 58 L90 23 L140 48 L70 83 Z" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
            {/* Top Corrugated Sheet with ridges */}
            <path d="M20 46 L90 11 L140 36 L70 71 Z" fill="url(#sheetGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Corrugation ribs */}
            <path d="M35 52 L105 17" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 1" />
            <path d="M50 58 L120 23" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 1" />
            <path d="M65 64 L135 29" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 1" />
            {/* Dimension Lines */}
            <line x1="15" y1="80" x2="70" y2="105" stroke={accentColor} strokeWidth="1.5" />
            <line x1="70" y1="105" x2="145" y2="68" stroke={accentColor} strokeWidth="1.5" />
            <circle cx="70" cy="105" r="2.5" fill={accentColor} />
            <text x="32" y="103" fill={accentColor} fontSize="8" fontFamily="monospace">LENGTH (L)</text>
            <text x="100" y="98" fill={accentColor} fontSize="8" fontFamily="monospace">WIDTH (W)</text>
          </svg>
        )}

        {type === 'box' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Metal Box / Trunk with hinges and padlocking hasp */}
            <defs>
              <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="70%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            {/* Base Body */}
            <polygon points="30,55 90,30 135,50 135,95 75,120 30,95" fill="url(#boxGrad)" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Front Face */}
            <polygon points="30,55 75,80 75,120 30,95" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.2" />
            {/* Right Face */}
            <polygon points="75,80 135,50 135,95 75,120" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
            {/* Lid Rim Lip */}
            <polygon points="26,50 90,24 139,46 139,53 75,83 26,58" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Heavy-Duty Center Lock Hasp */}
            <rect x="71" y="75" width="8" height="15" rx="1.5" fill="#f8fafc" stroke="#475569" strokeWidth="1" />
            <circle cx="75" cy="86" r="1.8" fill={accentColor} />
            {/* Side Handles */}
            <path d="M25 75 C20 75 20 83 25 83" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M140 70 C145 70 145 78 140 78" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            {/* Corner Rivet Guards */}
            <circle cx="34" cy="58" r="1.5" fill="#cbd5e1" />
            <circle cx="34" cy="92" r="1.5" fill="#cbd5e1" />
            <circle cx="75" cy="116" r="1.5" fill="#cbd5e1" />
            <circle cx="131" cy="92" r="1.5" fill="#cbd5e1" />
          </svg>
        )}

        {type === 'drum' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Cylindrical Storage Drum */}
            <defs>
              <linearGradient id="drumGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="35%" stopColor="#64748b" />
                <stop offset="70%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            {/* Drum Cylinder Body */}
            <path d="M45 45 C45 45 45 100 45 105 C45 115 115 115 115 105 C115 100 115 45 115 45" fill="url(#drumGrad)" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Drum Top Lip Ellipse */}
            <ellipse cx="80" cy="45" rx="35" ry="12" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="80" cy="45" rx="31" ry="9" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            {/* Rolling Rib Hoops */}
            <path d="M45 68 C45 75 115 75 115 68" stroke="#cbd5e1" strokeWidth="2.5" fill="none" />
            <path d="M45 88 C45 95 115 95 115 88" stroke="#cbd5e1" strokeWidth="2.5" fill="none" />
            {/* Drum Bung Cap */}
            <circle cx="95" cy="45" r="3" fill={accentColor} />
            <circle cx="68" cy="45" r="2" fill="#94a3b8" />
          </svg>
        )}

        {type === 'frame' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Structural Angle Frame / Khatia Frame skeleton */}
            <rect x="25" y="30" width="110" height="75" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
            {/* Internal Welded Bracing Grid */}
            <line x1="25" y1="67" x2="135" y2="67" stroke="#94a3b8" strokeWidth="1.8" />
            <line x1="62" y1="30" x2="62" y2="105" stroke="#64748b" strokeWidth="1.5" />
            <line x1="98" y1="30" x2="98" y2="105" stroke="#64748b" strokeWidth="1.5" />
            {/* Corner Weld Beads */}
            <circle cx="25" cy="30" r="3" fill={accentColor} />
            <circle cx="135" cy="30" r="3" fill={accentColor} />
            <circle cx="25" cy="105" r="3" fill={accentColor} />
            <circle cx="135" cy="105" r="3" fill={accentColor} />
            {/* Support Legs for Cot / Khatia frame */}
            <line x1="30" y1="105" x2="30" y2="125" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="square" />
            <line x1="130" y1="105" x2="130" y2="125" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="square" />
            <text x="50" y="24" fill={accentColor} fontSize="8" fontFamily="monospace">STRUCTURAL STEEL</text>
          </svg>
        )}

        {type === 'structure' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* 3D Isometric Truss Pavilion / Structure */}
            <polygon points="30,80 80,45 130,80 80,115" stroke="#cbd5e1" strokeWidth="1.8" fill="none" />
            <polygon points="80,15 130,50 80,85 30,50" stroke="#94a3b8" strokeWidth="1.8" fill="none" />
            {/* Vertical Posts */}
            <line x1="30" y1="50" x2="30" y2="80" stroke="#cbd5e1" strokeWidth="2.5" />
            <line x1="80" y1="15" x2="80" y2="45" stroke="#cbd5e1" strokeWidth="2.5" />
            <line x1="130" y1="50" x2="130" y2="80" stroke="#cbd5e1" strokeWidth="2.5" />
            <line x1="80" y1="85" x2="80" y2="115" stroke="#cbd5e1" strokeWidth="2.5" />
            {/* Cross Diagonal Braces */}
            <line x1="30" y1="50" x2="80" y2="115" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="130" y1="50" x2="80" y2="115" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="80" cy="15" r="3" fill={accentColor} />
          </svg>
        )}

        {type === 'cabin' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Modular Site Cabin */}
            <polygon points="30,55 85,30 135,50 85,75" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Front Panel */}
            <polygon points="30,55 85,75 85,115 30,95" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Side Panel */}
            <polygon points="85,75 135,50 135,90 85,115" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Door */}
            <polygon points="45,67 65,74 65,108 45,101" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="61" cy="91" r="1.5" fill={accentColor} />
            {/* Window */}
            <polygon points="98,69 122,58 122,76 98,87" fill="#38bdf8" fillOpacity="0.4" stroke="#94a3b8" strokeWidth="1" />
            <line x1="110" y1="63" x2="110" y2="81" stroke="#cbd5e1" strokeWidth="1" />
          </svg>
        )}

        {type === 'chimney' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Industrial Hood & Exhaust Flue */}
            {/* Exhaust Hood Trapezoid */}
            <polygon points="30,95 130,95 105,65 55,65" fill="#334155" stroke="#cbd5e1" strokeWidth="2" />
            {/* Cylindrical Flue Pipe */}
            <rect x="65" y="25" width="30" height="40" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
            {/* Rain Cowl Cap on top */}
            <ellipse cx="80" cy="22" rx="22" ry="6" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Grease Drip Tray Rim */}
            <rect x="25" y="95" width="110" height="8" rx="2" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Airflow Flow Direction Indicators */}
            <path d="M80 85 L80 45" stroke={accentColor} strokeWidth="1.8" strokeDasharray="3 2" />
            <polygon points="80,40 76,46 84,46" fill={accentColor} />
          </svg>
        )}

        {type === 'mould' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Bakery Bread Mould / Stepped Homa Kund */}
            {/* Stepped Pyramid Tiers */}
            <polygon points="25,95 80,70 135,95 80,120" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
            <polygon points="38,80 80,60 122,80 80,100" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
            <polygon points="52,65 80,50 108,65 80,80" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Central Fire / Hearth Cavity */}
            <polygon points="65,55 80,45 95,55 80,65" fill="#0f172a" stroke={accentColor} strokeWidth="2" />
            {/* Ritual / Bakery Handle Tabs */}
            <line x1="20" y1="92" x2="15" y2="92" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="140" y1="92" x2="145" y2="92" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="80" cy="55" r="3" fill={accentColor} />
          </svg>
        )}

        {type === 'temple' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Metal Mandir / Pooja Shikhara Temple */}
            {/* Base Pedestal */}
            <rect x="35" y="100" width="90" height="15" rx="2" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Pillars */}
            <rect x="42" y="55" width="8" height="45" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="110" y="55" width="8" height="45" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
            {/* Inner Idol Sanctum Arch */}
            <path d="M55 95 L55 65 C55 52 105 52 105 65 L105 95" stroke={accentColor} strokeWidth="1.5" fill="none" />
            {/* Shikhara Dome */}
            <polygon points="35,55 80,20 125,55" fill="#334155" stroke="#cbd5e1" strokeWidth="2" />
            {/* Kalash Pinnacle */}
            <circle cx="80" cy="18" r="4" fill={accentColor} />
            <line x1="80" y1="14" x2="80" y2="8" stroke={accentColor} strokeWidth="1.5" />
          </svg>
        )}

        {type === 'sign-led' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* 3D Illuminated LED Channel Letter Sign */}
            <defs>
              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Backplate / ACP Tray */}
            <rect x="20" y="35" width="120" height="70" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
            {/* 3D Acrylic Lettering "LED" with Glowing Rim */}
            <g filter="url(#glowEffect)">
              {/* L */}
              <path d="M35 50 V85 H50 V76 H43 V50 H35 Z" fill="#ff5500" stroke="#fff" strokeWidth="1" />
              {/* E */}
              <path d="M57 50 V85 H74 V76 H65 V71 H72 V63 H65 V58 H74 V50 H57 Z" fill="#ff5500" stroke="#fff" strokeWidth="1" />
              {/* D */}
              <path d="M81 50 V85 H93 C99 85 104 80 104 67.5 C104 55 99 50 93 50 H81 Z M88 58 H93 C96 58 97 61 97 67.5 C97 74 96 77 93 77 H88 V58 Z" fill="#ff5500" stroke="#fff" strokeWidth="1" />
            </g>
            {/* Power cable conduit */}
            <path d="M80 105 L80 125" stroke="#64748b" strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="80" cy="125" r="2.5" fill="#38bdf8" />
          </svg>
        )}

        {type === 'sign-gsb' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Backlit Glow Sign Board with internal tube lights */}
            <rect x="22" y="40" width="116" height="60" rx="3" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
            {/* Internal Fluorescent / LED glow strips */}
            <line x1="32" y1="55" x2="128" y2="55" stroke="#c084fc" strokeWidth="3" strokeOpacity="0.8" />
            <line x1="32" y1="70" x2="128" y2="70" stroke="#c084fc" strokeWidth="3" strokeOpacity="0.8" />
            <line x1="32" y1="85" x2="128" y2="85" stroke="#c084fc" strokeWidth="3" strokeOpacity="0.8" />
            {/* Wall mounting heavy brackets */}
            <rect x="16" y="50" width="6" height="12" rx="1" fill="#64748b" />
            <rect x="16" y="78" width="6" height="12" rx="1" fill="#64748b" />
            <rect x="138" y="50" width="6" height="12" rx="1" fill="#64748b" />
            <rect x="138" y="78" width="6" height="12" rx="1" fill="#64748b" />
            <text x="44" y="68" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">GSB BOARD</text>
          </svg>
        )}

        {type === 'print-flex' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Flex Printing Roller & Output Banner */}
            <defs>
              <linearGradient id="printGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="33%" stopColor="#eab308" />
                <stop offset="66%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            {/* Top Printhead Carriage Roller */}
            <rect x="20" y="30" width="120" height="16" rx="4" fill="#334155" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="70" cy="38" r="4" fill={accentColor} />
            {/* Feed Banner Paper roll descending */}
            <polygon points="30,46 130,46 130,110 30,110" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Printed CMYK stripes */}
            <rect x="36" y="54" width="88" height="12" fill="url(#printGrad)" />
            <rect x="36" y="72" width="60" height="6" fill="#38bdf8" />
            <rect x="36" y="82" width="75" height="6" fill="#fb923c" />
            {/* Roll Bottom Curl */}
            <ellipse cx="80" cy="110" rx="50" ry="6" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
          </svg>
        )}

        {type === 'stall' && (
          <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
            {/* Exhibition Stall / Booth 3D Architecture */}
            <polygon points="30,85 80,55 130,85 80,115" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Back Wall Panel */}
            <polygon points="30,85 80,55 80,25 30,55" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Right Branded Wall Panel */}
            <polygon points="80,55 130,85 130,55 80,25" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Overhead Branding Fascia Header */}
            <polygon points="25,50 80,20 135,50 135,38 80,08 25,38" fill={accentColor} stroke="#fff" strokeWidth="1" />
            {/* Reception Podium Desk */}
            <polygon points="65,95 85,83 98,92 78,104" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
            <text x="45" y="44" fill="#fff" fontSize="7" fontWeight="bold">BRAND STALL</text>
          </svg>
        )}
      </div>
    </div>
  );
};
