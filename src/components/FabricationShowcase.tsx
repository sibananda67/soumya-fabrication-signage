import React from 'react';
import { ArrowUpRight, Wrench, Shield, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FabricationShowcaseProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const FabricationShowcase: React.FC<FabricationShowcaseProps> = ({ onOpenQuoteModal }) => {
  const { t } = useLanguage();

  return (
    <section id="fabrication" className="py-24 bg-white relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition - 6 cols */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold">
              {t.fabrication.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight leading-tight">
              {t.fabrication.titlePart1}{' '}
              <span className="text-[#2477C8]">
                {t.fabrication.titlePart2}
              </span>
            </h2>

            <p className="text-base text-[#27364B] leading-relaxed font-normal">
              {t.fabrication.description}
            </p>

            {/* Core Fabrication Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0]">
                <div className="p-2.5 rounded-lg bg-[#DCEEFF] text-[#2477C8] shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17365D]">{t.fabrication.p1Title}</h3>
                  <p className="text-xs text-[#64748B] leading-normal mt-0.5">
                    {t.fabrication.p1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0]">
                <div className="p-2.5 rounded-lg bg-[#DCEEFF] text-[#2477C8] shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17365D]">{t.fabrication.p2Title}</h3>
                  <p className="text-xs text-[#64748B] leading-normal mt-0.5">
                    {t.fabrication.p2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0]">
                <div className="p-2.5 rounded-lg bg-[#DCEEFF] text-[#2477C8] shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17365D]">{t.fabrication.p3Title}</h3>
                  <p className="text-xs text-[#64748B] leading-normal mt-0.5">
                    {t.fabrication.p3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Custom Metal Fabrication')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2477C8] hover:bg-[#1d63a8] rounded-lg transition-all cursor-pointer shadow-md shadow-[#2477C8]/25"
              >
                <span>{t.fabrication.ctaBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-[#64748B] font-mono">
                {t.fabrication.ctaHint}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workshop Process Interactive Bento - 6 cols */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Bento Card 1: Sheet Metal Forming */}
            <div className="p-5 rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-xs font-mono text-[#2477C8] font-bold mb-2">{t.fabrication.fab1Tag}</div>
                <h4 className="text-sm font-bold text-[#17365D] mb-2">{t.fabrication.fab1Title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {t.fabrication.fab1Desc}
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#17365D] font-semibold pt-3 border-t border-[#DCE6F0]">
                GI Sheets · Trunks · Boxes
              </div>
            </div>

            {/* Bento Card 2: Pipe & Angle Welding */}
            <div className="p-5 rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-xs font-mono text-[#2477C8] font-bold mb-2">{t.fabrication.fab2Tag}</div>
                <h4 className="text-sm font-bold text-[#17365D] mb-2">{t.fabrication.fab2Title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {t.fabrication.fab2Desc}
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#17365D] font-semibold pt-3 border-t border-[#DCE6F0]">
                Khatia Frames · Full Frames
              </div>
            </div>

            {/* Bento Card 3: Modular Assembly */}
            <div className="p-5 rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-xs font-mono text-[#2477C8] font-bold mb-2">{t.fabrication.fab3Tag}</div>
                <h4 className="text-sm font-bold text-[#17365D] mb-2">{t.fabrication.fab3Title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {t.fabrication.fab3Desc}
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#17365D] font-semibold pt-3 border-t border-[#DCE6F0]">
                Site Cabins · Event Stalls
              </div>
            </div>

            {/* Bento Card 4: Quality & Dispatch Check */}
            <div className="p-5 rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-xs font-mono text-[#2477C8] font-bold mb-2">{t.fabrication.fab4Tag}</div>
                <h4 className="text-sm font-bold text-[#17365D] mb-2">{t.fabrication.fab4Title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {t.fabrication.fab4Desc}
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#17365D] font-semibold pt-3 border-t border-[#DCE6F0]">
                Client Inspection · Direct Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
