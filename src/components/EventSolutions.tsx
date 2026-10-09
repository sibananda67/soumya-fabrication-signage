import React from 'react';
import { ArrowUpRight, Tent, CheckCircle2, Box, Calendar } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface EventSolutionsProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const EventSolutions: React.FC<EventSolutionsProps> = ({ onOpenQuoteModal }) => {
  const eventCapabilities = [
    {
      title: 'Exhibition & Trade Fair Stalls',
      desc: 'Modular and custom metal framework booths with branded flex fascia, spotlight trusses, and partitioned product display counters.',
      tag: 'Modular Fair Booths',
      specs: 'Common footprints: 3×3m, 6×3m, custom island layouts',
    },
    {
      title: 'Promotional Pop-Up Kiosks',
      desc: 'Fast-assembly branded kiosks and demo stalls engineered for product launches, mall activations, and roadshows.',
      tag: 'Brand Activation',
      specs: 'Compact transportable metal frames with printed skins',
    },
    {
      title: 'Event Management & Physical Setup',
      desc: 'Heavy-duty structural staging, aluminum/steel truss grids, crowd control barricades, and audio-visual backdrop framing.',
      tag: 'Event Infrastructure',
      specs: 'Staging, stage risers, barricades, and truss systems',
    },
    {
      title: 'Custom Cabins & Security Checkpoints',
      desc: 'Weather-sealed metal cabins fabricated for site management offices, event ticket counters, and entry security booths.',
      tag: 'Enclosures & Cabins',
      specs: 'Rigid base frames with sliding windows and lockable doors',
    },
  ];

  return (
    <section id="events" className="py-24 bg-[#0c0d10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500] mb-2">
              FABRICATION & EVENT SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Spaces That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff5500] to-yellow-400">
                Bring Ideas to Life.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            From promotional stalls and exhibition pavilions to robust site cabins and event stage frameworks — manufactured according to your event footprint and layout.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {eventCapabilities.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-lg bg-[#12141c] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-3">
                  <span className="text-orange-400">{item.tag}</span>
                  <span>STEP // 0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">{item.desc}</p>
                <div className="p-3 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-500">Configuration: </span>
                  <span className="text-slate-200">{item.specs}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Custom Dimensions</span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(item.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5500] hover:text-orange-300 transition-colors cursor-pointer"
                >
                  <span>Request Stall Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="p-8 rounded-lg bg-[#141720] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0 mt-1">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Planning an upcoming exhibition or trade showcase?
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                Share your booth dimensions, hall layout requirements, and branding deadlines for a comprehensive structural fabrication quote.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Exhibition and Event Stalls')}
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-md transition-all cursor-pointer shadow-lg shadow-orange-950/40"
            >
              <span>Plan Your Event or Stall</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
