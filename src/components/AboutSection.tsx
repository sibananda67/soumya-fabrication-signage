import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { Layers, ShieldCheck, Hammer, MessageSquare } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0d10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Core Factual Story - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500]">
              ABOUT THE BUSINESS
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Practical Solutions.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff5500] to-yellow-400">
                Custom-Built Results.
              </span>
            </h2>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                {BUSINESS_CONFIG.brandName} is a multi-disciplinary fabrication and advertising service providing specialized galvanized iron (GI) products, custom metal structures, illuminated signage, flex printing, and event stall arrangements.
              </p>
              <p>
                Rather than offering rigid one-size-fits-all items, our manufacturing is built around customer requirements. We work directly with individuals, contractors, commercial enterprises, and event organizers to produce products tailored to their dimensional specifications, load demands, and functional objectives.
              </p>
              <p>
                Whether you need a single custom-dimension storage trunk, heavy welded pipe frames, roadside LED display boards, or a complete modular exhibition stall framework — we ensure clear communication, transparent quotations, and reliable execution.
              </p>
            </div>

            {/* Factual Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded bg-[#12141c] border border-white/5">
                <div className="text-xs font-bold text-white mb-1">Direct Communication</div>
                <div className="text-[11px] text-zinc-400">
                  Discuss sizes and requirements directly with business owner {BUSINESS_CONFIG.ownerName}.
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#12141c] border border-white/5">
                <div className="text-xs font-bold text-white mb-1">Custom Fabrication</div>
                <div className="text-[11px] text-zinc-400">
                  Cut, folded, welded, and assembled to exact client measurements.
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#12141c] border border-white/5">
                <div className="text-xs font-bold text-white mb-1">Comprehensive Range</div>
                <div className="text-[11px] text-zinc-400">
                  Metal products, retail signage, flex prints, and event setups under one roof.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Card - 5 cols */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-lg bg-[#141720] border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pb-4 border-b border-white/10 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span className="uppercase font-semibold">Service Philosophy</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">No Hidden Figures</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Clear material specifications and quotes based on confirmed project requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Built for Utility</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Heavy-gauge materials and rigid joins engineered for practical day-to-day longevity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Adaptable Sizing</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Every box, sheet cut, frame, and banner can be customized to your exact dimensions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
                Contact: <span className="text-white font-semibold">{BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
