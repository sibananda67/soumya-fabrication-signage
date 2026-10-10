import React from 'react';
import { ArrowDown, ArrowUpRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#F4F9FF]"
    >
      {/* Background Architectural Grid & Subtle Light-Blue Gradients */}
      <div className="absolute inset-0 bg-industrial-grid opacity-60" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-br from-[#DCEEFF]/80 via-[#E8F3FD]/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-gradient-to-tr from-[#DCEEFF]/60 to-transparent blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Brand Tag with Gold Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE6F0] shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D6A63A]" />
              <span className="text-xs font-bold tracking-wider text-[#17365D] uppercase font-mono">
                {t.hero.brandTag}
              </span>
            </div>

            {/* Official Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17365D] leading-[1.14] max-w-2xl mb-6">
              {t.hero.titlePart1}{' '}
              <span className="text-[#2477C8]">
                {t.hero.titlePart2}
              </span>{' '}
              {t.hero.titlePart3}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#27364B] leading-relaxed max-w-2xl font-normal mb-8">
              {t.hero.subTagline}
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl mb-8">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#17365D]">
                <CheckCircle2 className="w-4 h-4 text-[#2477C8] shrink-0" />
                <span>{t.hero.bullet1}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#17365D]">
                <CheckCircle2 className="w-4 h-4 text-[#2477C8] shrink-0" />
                <span>{t.hero.bullet2}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#17365D]">
                <CheckCircle2 className="w-4 h-4 text-[#2477C8] shrink-0" />
                <span>{t.hero.bullet3}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#17365D]">
                <CheckCircle2 className="w-4 h-4 text-[#2477C8] shrink-0" />
                <span>{t.hero.bullet4}</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-[#2477C8] hover:bg-[#1d63a8] active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-[#2477C8]/25 hover:shadow-xl hover:shadow-[#2477C8]/35 cursor-pointer"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-[#17365D] bg-white hover:bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/50 active:scale-[0.98] rounded-lg transition-all shadow-xs cursor-pointer"
              >
                <span>{t.hero.quoteBtn}</span>
                <ArrowUpRight className="w-4 h-4 text-[#2477C8]" />
              </button>
            </div>

            {/* Direct Verified Contact Quick Strip */}
            <div className="pt-4 border-t border-[#DCE6F0] w-full flex flex-wrap items-center gap-6 text-xs text-[#64748B] font-mono">
              <div>
                <span>Phone: </span>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="text-[#17365D] hover:text-[#2477C8] font-bold underline-offset-4 hover:underline transition-colors"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <span className="text-[#DCE6F0]">|</span>
              <div>
                <span>WhatsApp: </span>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#17365D] hover:text-[#2477C8] font-bold underline-offset-4 hover:underline transition-colors"
                >
                  Quick Chat &amp; Enquiries
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with Prominent Brand Logo & Production Scope - 5 Cols */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl bg-white border border-[#DCE6F0] p-6 sm:p-8 shadow-xl shadow-[#17365D]/8 overflow-hidden flex flex-col items-center text-center">
              {/* Verified Badge Header */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-[#DCE6F0] mb-6">
                <span className="text-xs font-mono uppercase text-[#64748B] font-bold tracking-wider">
                  OFFICIAL BRAND IDENTITY
                </span>
                <span className="px-3 py-1 rounded-full bg-[#DCEEFF] text-[#2477C8] text-[11px] font-mono font-bold tracking-wider uppercase">
                  {t.hero.verifiedTag}
                </span>
              </div>

              {/* Prominent Original Maa Laxmi Logo (180–240px Desktop, 140–180px Mobile) */}
              <div className="relative mb-5 group">
                <div className="relative w-[155px] h-[155px] sm:w-[215px] sm:h-[215px] rounded-3xl bg-black p-2 border-2 border-[#D6A63A] shadow-xl shadow-[#17365D]/20 overflow-hidden flex items-center justify-center transition-transform hover:scale-[1.03] duration-300">
                  <img
                    src="/images/maa-laxmi-steel-logo.png"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/maa-laxmi-steel-logo.svg';
                    }}
                    alt="MAA LAXMI STEEL & SUPPLIERS - Official Logo"
                    className="w-full h-full object-contain rounded-2xl"
                    loading="eager"
                  />
                  {/* Subtle gold metallic sheen */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#FFEFA6]/40 pointer-events-none" />
                </div>
                {/* Decorative gold aura under the emblem */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D6A63A]/20 via-[#2477C8]/10 to-[#D6A63A]/20 rounded-full blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Official Brand Lockup */}
              <div className="mb-5">
                <h2 className="text-lg sm:text-xl font-black text-[#17365D] uppercase tracking-tight">
                  MAA LAXMI STEEL &amp; SUPPLIERS
                </h2>
                <p className="text-xs text-[#64748B] font-semibold tracking-wide uppercase mt-1">
                  {t.hero.heroCardSubtitle}
                </p>
              </div>

              {/* Core Supply Scope Highlights */}
              <div className="grid grid-cols-2 gap-3 w-full mb-6 text-left">
                <div className="p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#17365D] mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#2477C8]" />
                    <span>{t.hero.giSheetBoxTitle}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-tight font-medium">
                    {t.hero.giSheetBoxDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#17365D] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D6A63A]" />
                    <span>{t.hero.signageStallsTitle}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-tight font-medium">
                    {t.hero.signageStallsDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2477C8] hover:bg-[#1d63a8] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#2477C8]/25 cursor-pointer"
              >
                <span>{t.hero.heroCardBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#products"
            className="flex flex-col items-center gap-2 text-[#64748B] hover:text-[#2477C8] transition-colors"
            aria-label="Scroll to products"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold">
              {t.hero.scrollHint}
            </span>
            <div className="w-5 h-8 rounded-full border border-[#DCE6F0] bg-white flex items-start justify-center p-1 shadow-xs">
              <div className="w-1.5 h-2.5 bg-[#2477C8] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
