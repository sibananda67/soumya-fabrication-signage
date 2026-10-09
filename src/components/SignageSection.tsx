import React, { useState } from 'react';
import { ArrowUpRight, Sun, Moon, Sparkles, Printer, Layers } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface SignageSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const SignageSection: React.FC<SignageSectionProps> = ({ onOpenQuoteModal }) => {
  const [isNightMode, setIsNightMode] = useState(true);

  const signageTypes = [
    {
      id: 'led-acrylic',
      name: 'Illuminated 3D LED Boards',
      tag: 'Channel Letters · ACP Base',
      desc: 'Precision-routed acrylic letters with internal high-lumen LED modules mounted on aluminum composite panels.',
      materials: ['Cast Acrylic', 'ACP Sheet', 'IP65 LED Strips', 'Metal Subframe'],
      features: ['High night-time visibility', 'Clean 3D front/back illumination', 'Custom font styles'],
    },
    {
      id: 'gsb-backlit',
      name: 'Glow Sign Boards (GSB)',
      tag: 'Backlit Translucent Flex',
      desc: 'Heavy-gauge welded metal light box enclosures fitted with internal lighting channels and tensioned graphic flex faces.',
      materials: ['Welded Angle Box', 'Backlit Flex Media', 'Internal Fluorescent/LED Tubes'],
      features: ['Cost-effective 24/7 visibility', 'Weatherproof enclosure', 'Vivid uniform glow'],
    },
    {
      id: 'flex-banner',
      name: 'High-Resolution Flex Printing',
      tag: 'Wide-Format Graphics',
      desc: 'Wide-format printing on frontlit and backlit flex media using weather-resistant inks for promotional banners and hoardings.',
      materials: ['Star Flex Media', 'UV / Solvent Inks', 'Reinforced Eyelet Borders'],
      features: ['Vibrant color fidelity', 'Custom roll lengths', 'Quick turnaround'],
    },
  ];

  return (
    <section id="signage" className="py-24 bg-[#0a0b0e] relative border-t border-white/10">
      {/* Dynamic Ambient Lighting Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          isNightMode
            ? 'bg-radial from-orange-600/15 via-transparent to-transparent'
            : 'bg-radial from-slate-400/5 via-transparent to-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Day/Night Illumination Preview Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500] mb-2">
              SIGNAGE & ADVERTISING SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Make Your Brand{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff5500] to-yellow-400">
                Impossible to Miss.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Illumination Simulation Switch */}
            <div className="flex items-center gap-2 p-1 bg-[#141720] border border-white/10 rounded-md">
              <span className="text-[11px] font-mono text-zinc-400 px-2">Illumination:</span>
              <button
                type="button"
                onClick={() => setIsNightMode(false)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  !isNightMode
                    ? 'bg-white/15 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Day</span>
              </button>
              <button
                type="button"
                onClick={() => setIsNightMode(true)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  isNightMode
                    ? 'bg-[#ff5500] text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Night Glow</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Visual Simulation Preview Banner */}
        <div className="my-8 rounded-lg border border-white/10 overflow-hidden bg-[#0e1017]">
          <div
            className={`p-8 sm:p-12 text-center transition-all duration-700 relative overflow-hidden ${
              isNightMode
                ? 'bg-gradient-to-b from-zinc-950 via-[#10121a] to-zinc-950 shadow-[inset_0_0_80px_rgba(255,85,0,0.15)]'
                : 'bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950'
            }`}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-industrial-grid opacity-25" />

            {/* Simulated 3D Illuminated Lettering */}
            <div className="relative z-10 inline-block my-4">
              <div
                className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase transition-all duration-500 font-sans ${
                  isNightMode
                    ? 'text-white drop-shadow-[0_0_25px_rgba(255,85,0,0.9)] scale-[1.02]'
                    : 'text-zinc-300 drop-shadow-sm'
                }`}
              >
                SOUMYA FABRICATION
              </div>
              <div
                className={`text-xs sm:text-sm font-mono tracking-widest mt-2 uppercase transition-colors duration-500 ${
                  isNightMode ? 'text-orange-400' : 'text-zinc-400'
                }`}
              >
                GSB BOARDS · 3D ACRYLIC LED · FLEX PRINTING
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 mt-4">
              {isNightMode
                ? 'Night Illumination Simulation Active — Backlit diffusion & high-intensity LED preview'
                : 'Daylight View Simulation Active — Natural high-contrast visibility'}
            </div>
          </div>
        </div>

        {/* 3 Core Signage Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signageTypes.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg bg-[#12141c] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-orange-400 uppercase mb-1">
                  {item.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">{item.desc}</p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase text-zinc-400">Highlights</div>
                  <ul className="space-y-1">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-zinc-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#ff5500]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">Price on Request</span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(item.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff5500] hover:text-orange-300 transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-orange-950/30 via-zinc-900 to-zinc-950 border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Need custom dimensions for your storefront or hoarding?
            </h4>
            <p className="text-xs text-zinc-400">
              Provide your required board length, height, and lighting preference for an accurate quote.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Signage and Printing Inquiry')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-md transition-all shrink-0 cursor-pointer shadow-lg shadow-orange-950/40"
          >
            <span>Enquire About Signage</span>
          </button>
        </div>
      </div>
    </section>
  );
};
