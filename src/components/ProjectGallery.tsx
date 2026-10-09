import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from '../data/portfolio';
import { X, ArrowUpRight, Maximize2, ShieldAlert } from 'lucide-react';

interface ProjectGalleryProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#0e1017] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500] mb-2">
              PROJECT CAPABILITIES & FABRICATION GALLERY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Craftsmanship in Focus
            </h2>
          </div>
          <div className="text-xs text-zinc-400 max-w-sm font-mono flex items-start gap-2 bg-white/[0.03] p-3 rounded border border-white/5">
            <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <span>
              Illustrative reference photographs of fabrication scopes and production capabilities. Custom work is built to client drawings.
            </span>
          </div>
        </div>

        {/* Filter Tabs (Interactive buttons) */}
        <div className="py-6 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ff5500] text-white shadow-md'
                    : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Real Photographic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-lg bg-[#12141c] border border-white/10 hover:border-white/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Real Photographic Card Media */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== item.imageFallbackUrl) {
                      target.src = item.imageFallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient scrim for contrast & aesthetic integrity */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-[#12141c]/30 to-black/20 pointer-events-none" />

                {/* Top unboxed category kicker */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/15">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0c0d10]/90 px-3 py-1.5 rounded border border-white/20 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>View Details</span>
                  </span>
                </div>
              </div>

              {/* Bottom Project Information */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                    {item.scopeSummary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                  <span className="truncate max-w-[140px] text-zinc-400">
                    {item.dimensionsExample}
                  </span>
                  <span className="text-[#ff5500] group-hover:underline flex items-center gap-0.5 font-medium shrink-0">
                    Details <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Item Detail Modal with Enlarged Photograph */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#141720] border border-white/15 rounded-lg shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e1017]">
              <div>
                <span className="text-xs font-mono uppercase text-orange-400">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {/* High-Resolution Modal Photograph */}
              <div className="relative w-full h-64 sm:h-72 rounded-md overflow-hidden border border-white/10 bg-black shadow-inner">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== activeItem.imageFallbackUrl) {
                      target.src = activeItem.imageFallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[11px] font-mono text-zinc-300">
                  Illustrative Reference Photograph
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-1">Scope & Specification</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeItem.scopeSummary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Key Materials & Techniques</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.keyMaterials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono text-slate-200 bg-white/5 border border-white/10 rounded"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/5">
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-1">Standard Reference Dimension</h4>
                <div className="text-xs text-zinc-300 font-mono">
                  {activeItem.dimensionsExample}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0e1017] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeItem.title;
                  setActiveItem(null);
                  onOpenQuoteModal(title);
                }}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#ff5500] hover:bg-[#e04b00] rounded transition-all cursor-pointer shadow-md shadow-orange-950/40"
              >
                Enquire for Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

