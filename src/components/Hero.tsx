import React from 'react';
import { ArrowDown, ArrowUpRight, Hammer, Layers, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

interface HeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#F8F7F2]"
    >
      {/* Background Architectural Grid & Subtle Sunlight Glow */}
      <div className="absolute inset-0 bg-industrial-grid opacity-60" />
      <div className="absolute top-1/4 right-10 w-[600px] h-[500px] bg-gradient-to-br from-orange-200/20 via-amber-100/10 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Technical Editorial Marks */}
      <div className="absolute top-24 left-6 hidden md:block text-[#6F746F] font-mono text-[10px] select-none">
        <div>[001] INDUSTRIAL FABRICATION STUDIO</div>
        <div className="text-[#6F746F]/80">ODISHA • CUSTOM MANUFACTURING</div>
      </div>
      <div className="absolute top-24 right-6 hidden md:block text-right text-[#6F746F] font-mono text-[10px] select-none">
        <div>PRECISION GI & STRUCTURAL WORKS</div>
        <div className="text-[#6F746F]/80">STANDARD: BESPOKE CLIENT SPECIFICATION</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Service Label (Clean unboxed typography) */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E96524] uppercase mb-5 font-semibold">
              <span>FABRICATION</span>
              <span aria-hidden="true" className="text-[#6F746F]/50">·</span>
              <span>SIGNAGE</span>
              <span aria-hidden="true" className="text-[#6F746F]/50">·</span>
              <span>CUSTOM SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#252824] leading-[1.08] max-w-2xl mb-6">
              Built in Metal.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E96524] via-[#ea7436] to-[#cf5518]">
                Made to Stand Out.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#6F746F] leading-relaxed max-w-2xl font-normal mb-8">
              {BUSINESS_CONFIG.subTagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#E96524] hover:bg-[#d55719] active:scale-[0.98] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wider uppercase text-[#252824] bg-white hover:bg-[#F4F1EA] border border-[#E6E2D9] rounded-md transition-all cursor-pointer shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#E96524]" />
              </button>
            </div>

            {/* Verified Direct Contact Quick-Row */}
            <div className="pt-6 border-t border-[#E6E2D9] w-full flex flex-wrap items-center gap-6 text-xs text-[#6F746F] font-mono">
              <div>
                <span className="text-[#6F746F]/80">Direct Inquiries: </span>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="text-[#252824] hover:text-[#E96524] underline-offset-4 hover:underline transition-colors font-medium"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="hidden sm:inline" aria-hidden="true">·</div>
              <div>
                <span className="text-[#6F746F]/80">Contact: </span>
                <span className="text-[#252824] font-medium">{BUSINESS_CONFIG.ownerName}</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Blueprint Panel - 5 Cols */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-lg border border-[#E6E2D9] bg-white p-6 lg:p-7 shadow-lg overflow-hidden group">
              {/* Corner refined accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E96524]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E96524]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E96524]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E96524]" />

              <div className="flex items-center justify-between pb-4 border-b border-[#E6E2D9] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#E96524] rounded-sm" />
                  <span className="text-xs font-mono uppercase text-[#252824] font-semibold tracking-wider">
                    Manufacturing Capabilities
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6F746F] uppercase">
                  Price on Request
                </span>
              </div>

              {/* 3 Core Production Capabilities List */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded bg-[#F8F7F2] border border-[#E6E2D9] hover:border-[#E96524]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#252824] mb-1">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#E96524]" />
                      Galvanized Sheet & Utility Fabrication
                    </span>
                    <span className="text-[10px] font-mono text-[#6F746F]">GI Series</span>
                  </div>
                  <p className="text-xs text-[#6F746F] leading-normal">
                    Plain & corrugated sheets, trunks, school boxes, tent house boxes, and drums.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#F8F7F2] border border-[#E6E2D9] hover:border-[#E96524]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#252824] mb-1">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Illuminated Signage & High-Res Flex
                    </span>
                    <span className="text-[10px] font-mono text-[#6F746F]">GSB / LED</span>
                  </div>
                  <p className="text-xs text-[#6F746F] leading-normal">
                    Frontlit & backlit 3D acrylic LED boards, glowing storefronts, and wide banner printing.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#F8F7F2] border border-[#E6E2D9] hover:border-[#E96524]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#252824] mb-1">
                    <span className="flex items-center gap-2">
                      <Hammer className="w-3.5 h-3.5 text-teal-600" />
                      Frames, Cabins & Exhibition Stalls
                    </span>
                    <span className="text-[10px] font-mono text-[#6F746F]">Structures</span>
                  </div>
                  <p className="text-xs text-[#6F746F] leading-normal">
                    Welded hollow pipe frames, khatia frames, turnkey event stalls, and custom cabins.
                  </p>
                </div>
              </div>

              {/* Quick Action inside Blueprint Card */}
              <div className="mt-5 pt-4 border-t border-[#E6E2D9] flex items-center justify-between text-xs">
                <span className="text-[#6F746F] font-mono text-[11px]">
                  Custom sizes & bulk orders
                </span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="text-[#E96524] hover:text-[#d55719] font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Submit Dimensions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#service-strip"
            className="flex flex-col items-center gap-2 text-[#6F746F] hover:text-[#252824] transition-colors group"
            aria-label="Scroll to services"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F746F] group-hover:text-[#252824]">
              Explore Offerings
            </span>
            <div className="w-5 h-8 rounded-full border border-[#D9D4C7] flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#E96524] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
