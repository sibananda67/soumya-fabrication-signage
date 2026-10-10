import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { Layers, ShieldCheck, Hammer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#F4F9FF] relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Core Factual Story - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold">
              {t.about.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight leading-tight">
              {t.about.titlePart1}{' '}
              <span className="text-[#2477C8]">
                {t.about.titlePart2}
              </span>
            </h2>

            <div className="space-y-4 text-sm text-[#27364B] leading-relaxed font-normal">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Factual Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DCE6F0]">
              <div className="p-4 rounded-xl bg-white border border-[#DCE6F0] shadow-xs">
                <div className="text-xs font-bold text-[#17365D] mb-1">{t.about.pillar1Title}</div>
                <div className="text-[11px] text-[#64748B]">
                  {t.about.pillar1Desc}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DCE6F0] shadow-xs">
                <div className="text-xs font-bold text-[#17365D] mb-1">{t.about.pillar2Title}</div>
                <div className="text-[11px] text-[#64748B]">
                  {t.about.pillar2Desc}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DCE6F0] shadow-xs">
                <div className="text-xs font-bold text-[#17365D] mb-1">{t.about.pillar3Title}</div>
                <div className="text-[11px] text-[#64748B]">
                  {t.about.pillar3Desc}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Card - 5 cols */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-white border border-[#DCE6F0] relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] pb-4 border-b border-[#DCE6F0] mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2477C8]" />
                <span className="uppercase font-bold text-[#17365D]">{t.about.philTitle}</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DCEEFF] flex items-center justify-center text-[#2477C8] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17365D]">{t.about.f1Title}</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {t.about.f1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DCEEFF] flex items-center justify-center text-[#2477C8] shrink-0 mt-0.5">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17365D]">{t.about.f2Title}</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {t.about.f2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DCEEFF] flex items-center justify-center text-[#2477C8] shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17365D]">{t.about.f3Title}</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {t.about.f3Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE6F0] text-xs font-mono text-[#64748B]">
                {t.about.directContact} <span className="text-[#17365D] font-bold">{BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
