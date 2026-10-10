import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EventSolutionsProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const EventSolutions: React.FC<EventSolutionsProps> = ({ onOpenQuoteModal }) => {
  const { language, t } = useLanguage();

  const eventCapabilities = [
    {
      title: language === 'or' ? 'ପ୍ରଦର୍ଶନୀ ଓ ବାଣିଜ୍ୟ ମେଳା ଷ୍ଟଲ୍' : 'Exhibition & Trade Fair Stalls',
      desc: language === 'or'
        ? 'ବ୍ରାଣ୍ଡେଡ୍ ଫ୍ଲେକ୍ସ ଫାସିଆ, ସ୍ପଟଲାଇଟ୍ ଟ୍ରସ୍ ଏବଂ ପ୍ରଡକ୍ଟ କାଉଣ୍ଟର୍ ସହିତ ମଡ୍ୟୁଲାର୍ ବୁଥ୍।'
        : 'Modular and custom metal framework booths with branded flex fascia, spotlight trusses, and partitioned product display counters.',
      tag: language === 'or' ? 'ମଡ୍ୟୁଲାର୍ ମେଳା ବୁଥ୍' : 'Modular Fair Booths',
      specs: language === 'or' ? 'ଷ୍ଟାଣ୍ଡାର୍ଡ ମାପ: ୩×୩ ମି., ୬×୩ ମି., ଆଇଲ୍ୟାଣ୍ଡ୍ ଲେଆଉଟ୍' : 'Common footprints: 3×3m, 6×3m, custom island layouts',
    },
    {
      title: language === 'or' ? 'ପ୍ରମୋସନାଲ ପପ୍-ଅପ୍ କିଓସ୍କ' : 'Promotional Pop-Up Kiosks',
      desc: language === 'or'
        ? 'ପ୍ରଡକ୍ଟ ଲଞ୍ଚ୍, ମଲ୍ ଆକ୍ଟିଭେସନ୍ ଓ ରୋଡ୍‌ସୋ ପାଇଁ ଶୀଘ୍ର ଯୋଡ଼ିହେବା ବ୍ରାଣ୍ଡେଡ୍ କିଓସ୍କ।'
        : 'Fast-assembly branded kiosks and demo stalls engineered for product launches, mall activations, and roadshows.',
      tag: language === 'or' ? 'ବ୍ରାଣ୍ଡ୍ ପ୍ରମୋସନ୍' : 'Brand Activation',
      specs: language === 'or' ? 'ପୋର୍ଟେବଲ୍ ମେଟାଲ୍ ଫ୍ରେମ୍ ଓ ପ୍ରିଣ୍ଟେଡ୍ ସ୍କିନ୍' : 'Compact transportable metal frames with printed skins',
    },
    {
      title: language === 'or' ? 'ଇଭେଣ୍ଟ ମ୍ୟାନେଜମେଣ୍ଟ ଓ ସେଟଅପ୍' : 'Event Management & Physical Setup',
      desc: language === 'or'
        ? 'ଷ୍ଟ୍ରକଚରାଲ୍ ଷ୍ଟେଜିଂ, ଷ୍ଟିଲ୍ ଟ୍ରସ୍ ଗ୍ରିଡ୍, ବ୍ୟାରିକେଡ୍ ଏବଂ ବ୍ୟାକଡ୍ରପ୍ ଫ୍ରେମିଂ।'
        : 'Heavy-duty structural staging, steel truss grids, crowd control barricades, and audio-visual backdrop framing.',
      tag: language === 'or' ? 'ଇଭେଣ୍ଟ ଇନଫ୍ରାଷ୍ଟ୍ରକ୍ଚର' : 'Event Infrastructure',
      specs: language === 'or' ? 'ଷ୍ଟେଜ୍, ରାଇଜର୍ସ, ବ୍ୟାରିକେଡ୍ ଓ ଟ୍ରସ୍' : 'Staging, stage risers, barricades, and truss systems',
    },
    {
      title: language === 'or' ? 'କଷ୍ଟମ୍ କ୍ୟାବିନ୍ ଓ ସିକ୍ୟୁରିଟି ପୋଷ୍ଟ୍' : 'Custom Cabins & Security Checkpoints',
      desc: language === 'or'
        ? 'ସାଇଟ୍ ଅଫିସ୍, ଇଭେଣ୍ଟ ଟିକେଟ୍ କାଉଣ୍ଟର୍ ଏବଂ ଏଣ୍ଟ୍ରି ସିକ୍ୟୁରିଟି ବୁଥ୍।'
        : 'Weather-sealed metal cabins fabricated for site management offices, event ticket counters, and entry security booths.',
      tag: language === 'or' ? 'କ୍ୟାବିନ୍ ଓ ଏନକ୍ଲୋଜର୍' : 'Enclosures & Cabins',
      specs: language === 'or' ? 'ମଜଭୁତ ବେସ୍ ଫ୍ରେମ୍, ସ୍ଲାଇଡିଂ ଝରକା ଓ ଲକିଂ କବାଟ' : 'Rigid base frames with sliding windows and lockable doors',
    },
  ];

  return (
    <section id="events" className="py-24 bg-white relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DCE6F0]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
              {t.events.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight">
              {t.events.titlePart1}{' '}
              <span className="text-[#2477C8]">
                {t.events.titlePart2}
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#64748B] max-w-md leading-relaxed font-normal">
            {t.events.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {eventCapabilities.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] mb-3">
                  <span className="text-[#2477C8] font-bold uppercase">{item.tag}</span>
                  <span className="font-semibold">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#17365D] mb-2">{item.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">{item.desc}</p>
                <div className="p-3 rounded-xl bg-white border border-[#DCE6F0] text-[11px] font-mono text-[#64748B]">
                  <span className="text-[#94A3B8]">{t.events.configLabel} </span>
                  <span className="text-[#17365D] font-semibold">{item.specs}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCE6F0] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B]">{t.products.customSizing}</span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(item.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2477C8] hover:text-[#1d63a8] transition-colors cursor-pointer"
                >
                  <span>{t.events.requestStallQuote}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="p-8 rounded-2xl bg-[#DCEEFF]/40 border border-[#DCE6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#2477C8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-[#2477C8]/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#17365D] mb-1">
                {t.events.calloutTitle}
              </h4>
              <p className="text-xs text-[#64748B]">
                {t.events.calloutDesc}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Event & Stall Fabrication')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#2477C8] hover:bg-[#1d63a8] rounded-lg transition-all shrink-0 cursor-pointer shadow-md shadow-[#2477C8]/25"
          >
            <span>{t.events.bookConsultation}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
