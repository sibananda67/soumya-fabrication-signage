import React from 'react';
import { ArrowUpRight, CheckCircle2, Wrench, Shield, Compass, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

interface FabricationShowcaseProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const FabricationShowcase: React.FC<FabricationShowcaseProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="fabrication" className="py-24 bg-[#0e1017] relative border-t border-white/10">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition - 6 cols */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500]">
              BESPOKE METAL FABRICATION
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Requirements.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff5500] to-amber-400">
                Our Fabrication.
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Every project comes with unique site dimensions, metal gauges, and functional requirements. Whether you require reinforced galvanized iron utility trunks, custom angle frames, heavy cot structures, or architectural cabins — our workshop builds directly around your specifications.
            </p>

            {/* Core Fabrication Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-orange-500/10 border border-orange-500/20 text-[#ff5500] shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Precision Sheet Metal Work</h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Cutting, folding, and riveting of galvanized iron sheets for boxes, drums, light enclosures, and bakeries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-orange-500/10 border border-orange-500/20 text-[#ff5500] shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Structural Angle & Pipe Welding</h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Heavy-duty welded assemblies for machine bases, khatia bed frames, shed framing, and portable security cabins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-orange-500/10 border border-orange-500/20 text-[#ff5500] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Specialty & Ceremonial Metalcraft</h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Made-to-order stepped homa kunds, decorative mandir temples, kitchen exhaust hoods, and custom metal fixtures.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Custom Metal Fabrication')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-md transition-all cursor-pointer shadow-lg shadow-orange-950/40"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-zinc-400 font-mono">
                No standard limits — custom dimensions welcomed
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workshop Process Interactive Bento - 6 cols */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Bento Card 1: Sheet Metal Forming */}
            <div className="p-5 rounded-lg bg-[#141720] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-orange-400 mb-2">FAB-01 // CUT & FOLD</div>
                <h4 className="text-sm font-bold text-white mb-2">Sheet Metal Forming</h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Galvanized sheets sheared and machine-folded with reinforced hemmed edges for maximum rigidity.
                </p>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                GI Sheets · Trunks · Boxes
              </div>
            </div>

            {/* Bento Card 2: Pipe & Angle Welding */}
            <div className="p-5 rounded-lg bg-[#141720] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-orange-400 mb-2">FAB-02 // WELDING</div>
                <h4 className="text-sm font-bold text-white mb-2">Structural Joint Welding</h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Continuous and stitch welding across tubular steel sections, angle channels, and plate gussets.
                </p>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                Khatia Frames · Full Frames
              </div>
            </div>

            {/* Bento Card 3: Modular Assembly */}
            <div className="p-5 rounded-lg bg-[#141720] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-orange-400 mb-2">FAB-03 // ASSEMBLY</div>
                <h4 className="text-sm font-bold text-white mb-2">Modular Unit Construction</h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Prefabricated cabin panels, security kiosks, and exhibition frame sections built for on-site erection.
                </p>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                Site Cabins · Event Stalls
              </div>
            </div>

            {/* Bento Card 4: Quality & Dispatch Check */}
            <div className="p-5 rounded-lg bg-[#141720] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-orange-400 mb-2">FAB-04 // DISPATCH</div>
                <h4 className="text-sm font-bold text-white mb-2">Dimensional Verification</h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Inspection of overall tolerances, latch alignments, and corner welds prior to client handover.
                </p>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                Client Inspection · Direct Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
