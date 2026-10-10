import React, { useState } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';

interface SignageSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const SignageSection: React.FC<SignageSectionProps> = ({ onOpenQuoteModal }) => {
  const [isNightMode, setIsNightMode] = useState(true);
  const { language, t } = useLanguage();

  const signageTypes = [
    {
      id: 'led-acrylic',
      name: language === 'or' ? 'ଆଲୋକିତ ୩ଡି ଏଲ୍.ଇ.ଡି. ବୋର୍ଡ' : 'Illuminated 3D LED Boards',
      tag: language === 'or' ? 'ଚ୍ୟାନେଲ୍ ଲେଟର୍ · ଏସିପି ବେସ୍' : 'Channel Letters · ACP Base',
      desc: language === 'or'
        ? 'ପ୍ରିସିସନ୍ ରୁଟେଡ୍ ଏକ୍ରିଲିକ୍ ଅକ୍ଷର, ଏସିପି ପ୍ୟାନେଲ୍ ଓ ୱାଟରପ୍ରୁଫ୍ ଏଲ୍.ଇ.ଡି. ମଡ୍ୟୁଲ୍ ଦ୍ୱାରା ନିର୍ମିତ।'
        : 'Precision-routed acrylic letters with internal high-lumen LED modules mounted on aluminum composite panels.',
      materials: ['Cast Acrylic', 'ACP Sheet', 'IP65 LED Strips', 'Metal Subframe'],
      features: language === 'or'
        ? ['ରାତ୍ରି ସମୟରେ ଉଚ୍ଚ ଦୃଶ୍ୟମାନତା', 'ପରିଷ୍କାର ୩ଡି ଫ୍ରଣ୍ଟ/ବ୍ୟାକ୍ ଆଲୋକ', 'କଷ୍ଟମ୍ ଫଣ୍ଟ ଶୈଳୀ']
        : ['High night-time visibility', 'Clean 3D front/back illumination', 'Custom font styles'],
    },
    {
      id: 'gsb-backlit',
      name: language === 'or' ? 'ଗ୍ଲୋ ସାଇନ୍ ବୋର୍ଡ (ଜି.ଏସ୍.ବି.)' : 'Glow Sign Boards (GSB)',
      tag: language === 'or' ? 'ବ୍ୟାକଲିଟ୍ ଟ୍ରାନ୍ସଲୁସେଣ୍ଟ ଫ୍ଲେକ୍ସ' : 'Backlit Translucent Flex',
      desc: language === 'or'
        ? 'ହେଭି-ଗେଜ୍ ୱେଲ୍ଡେଡ୍ ଆଙ୍ଗେଲ୍ ବକ୍ସ, ଆଭ୍ୟନ୍ତରୀଣ ଆଲୋକ ବ୍ୟବସ୍ଥା ଓ ଟେନସନଡ୍ ଗ୍ରାଫିକ୍ ଫ୍ଲେକ୍ସ।'
        : 'Heavy-gauge welded metal light box enclosures fitted with internal lighting channels and tensioned graphic flex faces.',
      materials: ['Welded Angle Box', 'Backlit Flex Media', 'Internal Fluorescent/LED Tubes'],
      features: language === 'or'
        ? ['୨୪/୭ କମ୍ ଖର୍ଚ୍ଚରେ ଉତ୍କୃଷ୍ଟ ଦୃଶ୍ୟମାନତା', 'ୱେଦରପ୍ରୁଫ୍ ଆବରଣ', 'ସମାନ ଉଜ୍ଜ୍ୱଳ ଆଲୋକ']
        : ['Cost-effective 24/7 visibility', 'Weatherproof enclosure', 'Vivid uniform glow'],
    },
    {
      id: 'flex-banner',
      name: language === 'or' ? 'ହାଇ-ରିଜୋଲ୍ୟୁସନ ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ' : 'High-Resolution Flex Printing',
      tag: language === 'or' ? 'ୱାଇଡ୍-ଫର୍ମାଟ୍ ଗ୍ରାଫିକ୍ସ' : 'Wide-Format Graphics',
      desc: language === 'or'
        ? 'ପ୍ରମୋସନାଲ ବ୍ୟାନର ଓ ହୋର୍ଡିଂ ପାଇଁ ଫ୍ରଣ୍ଟଲିଟ୍ ଓ ବ୍ୟାକଲିଟ୍ ମିଡିଆରେ ୱେଦରପ୍ରୁଫ୍ ଇଙ୍କ୍ ପ୍ରିଣ୍ଟ।'
        : 'Wide-format printing on frontlit and backlit flex media using weather-resistant inks for promotional banners and hoardings.',
      materials: ['Star Flex Media', 'UV / Solvent Inks', 'Reinforced Eyelet Borders'],
      features: language === 'or'
        ? ['ଉଜ୍ଜ୍ୱଳ ରଙ୍ଗ ସ୍ପଷ୍ଟତା', 'କଷ୍ଟମ୍ ରୋଲ୍ ଲମ୍ବ', 'ତୁରନ୍ତ ଡେଲିଭରୀ']
        : ['Vibrant color fidelity', 'Custom roll lengths', 'Quick turnaround'],
    },
  ];

  return (
    <section id="signage" className="py-24 bg-[#F4F9FF] relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Day/Night Illumination Preview Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DCE6F0]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
              {t.signage.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight">
              {t.signage.titlePart1}{' '}
              <span className="text-[#2477C8]">
                {t.signage.titlePart2}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Illumination Simulation Switch */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#DCE6F0] rounded-xl shadow-xs">
              <span className="text-[11px] font-mono text-[#64748B] px-2 font-semibold">
                {t.signage.lightingPreview}
              </span>
              <button
                type="button"
                onClick={() => setIsNightMode(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  !isNightMode
                    ? 'bg-[#DCEEFF] text-[#2477C8]'
                    : 'text-[#64748B] hover:text-[#17365D]'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{t.signage.day}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsNightMode(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isNightMode
                    ? 'bg-[#17365D] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#17365D]'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>{t.signage.nightGlow}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Visual Simulation Preview Banner */}
        <div className="my-8 rounded-2xl border border-[#DCE6F0] overflow-hidden bg-white shadow-sm">
          <div
            className={`p-8 sm:p-12 text-center transition-all duration-700 relative overflow-hidden ${
              isNightMode
                ? 'bg-gradient-to-b from-[#0B1528] via-[#10223D] to-[#0B1528] shadow-[inset_0_0_80px_rgba(36,119,200,0.25)]'
                : 'bg-gradient-to-b from-[#F4F9FF] to-[#E9F3FC]'
            }`}
          >
            {/* Simulated 3D Illuminated Lettering */}
            <div className="relative z-10 inline-block my-4">
              <div
                className={`text-2xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase transition-all duration-500 font-sans ${
                  isNightMode
                    ? 'text-white drop-shadow-[0_0_30px_rgba(36,119,200,0.9)] scale-[1.02]'
                    : 'text-[#17365D] drop-shadow-sm'
                }`}
              >
                MAA LAXMI STEEL &amp; SUPPLIERS
              </div>
              <div
                className={`text-xs sm:text-sm font-mono tracking-widest mt-2 uppercase transition-colors duration-500 font-bold ${
                  isNightMode ? 'text-blue-300' : 'text-[#64748B]'
                }`}
              >
                {t.signage.simulatedTagline}
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#64748B] mt-4">
              {isNightMode ? t.signage.nightDesc : t.signage.dayDesc}
            </div>
          </div>
        </div>

        {/* 3 Core Signage Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signageTypes.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="text-[11px] font-mono text-[#2477C8] font-bold uppercase mb-1">
                  {item.tag}
                </div>
                <h3 className="text-lg font-bold text-[#17365D] mb-3">{item.name}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">{item.desc}</p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase text-[#17365D] font-bold">{t.signage.highlights}</div>
                  <ul className="space-y-1.5">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-[#27364B] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2477C8]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE6F0] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#64748B]">{t.products.priceOnRequest}</span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(item.name)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#2477C8] hover:text-[#1d63a8] transition-colors cursor-pointer"
                >
                  <span>{t.products.enquireNow}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#DCE6F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-[#17365D] mb-1">
              {t.signage.ctaTitle}
            </h4>
            <p className="text-xs text-[#64748B]">
              {t.signage.ctaDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Signage and Printing Inquiry')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#2477C8] hover:bg-[#1d63a8] rounded-lg transition-all shrink-0 cursor-pointer shadow-md shadow-[#2477C8]/20"
          >
            <span>{t.signage.ctaBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
