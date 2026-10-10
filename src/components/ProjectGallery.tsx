import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from '../data/portfolio';
import { X, ArrowUpRight, Maximize2, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ODIA_PORTFOLIO_DETAILS } from '../data/translations';

interface ProjectGalleryProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const { language, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const getCategoryLabel = (id: string, defaultLabel: string) => {
    if (language !== 'or') return defaultLabel;
    switch (id) {
      case 'all': return t.gallery.all;
      case 'gi-metal': return 'ଜି.ଆଇ. ଓ ମେଟାଲ୍';
      case 'fabrication': return 'ଫ୍ୟାବ୍ରିକେସନ';
      case 'signage': return 'ସାଇନେଜ୍';
      case 'printing': return 'ପ୍ରିଣ୍ଟିଂ';
      case 'stalls': return 'ଷ୍ଟଲ୍ ଓ ଇଭେଣ୍ଟ';
      default: return defaultLabel;
    }
  };

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  // Localized details for activeItem
  const activeOdiaDetails = activeItem ? ODIA_PORTFOLIO_DETAILS[activeItem.id] : null;
  const activeTitle = (language === 'or' && activeOdiaDetails?.title) ? activeOdiaDetails.title : activeItem?.title;
  const activeCategory = (language === 'or' && activeOdiaDetails?.categoryLabel) ? activeOdiaDetails.categoryLabel : activeItem?.categoryLabel;
  const activeScope = (language === 'or' && activeOdiaDetails?.scopeSummary) ? activeOdiaDetails.scopeSummary : activeItem?.scopeSummary;
  const activeDimensions = (language === 'or' && activeOdiaDetails?.dimensionsExample) ? activeOdiaDetails.dimensionsExample : activeItem?.dimensionsExample;
  const activeMaterials = (language === 'or' && activeOdiaDetails?.keyMaterials) ? activeOdiaDetails.keyMaterials : activeItem?.keyMaterials;

  return (
    <section id="gallery" className="py-24 bg-[#F4F9FF] relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DCE6F0]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
              {t.gallery.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight">
              {t.gallery.title}
            </h2>
          </div>
          <div className="text-xs text-[#64748B] max-w-sm font-mono flex items-start gap-2 bg-white p-3 rounded-xl border border-[#DCE6F0] shadow-xs">
            <Info className="w-4 h-4 text-[#2477C8] shrink-0 mt-0.5" />
            <span>
              {t.gallery.infoNotice}
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="py-6 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat.id;
            const label = getCategoryLabel(cat.id, cat.label);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2477C8] text-white shadow-xs shadow-[#2477C8]/25'
                    : 'bg-white text-[#27364B] hover:bg-[#DCEEFF]/50 border border-[#DCE6F0]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Real Photographic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const odiaItem = ODIA_PORTFOLIO_DETAILS[item.id];
            const title = (language === 'or' && odiaItem?.title) ? odiaItem.title : item.title;
            const catLabel = (language === 'or' && odiaItem?.categoryLabel) ? odiaItem.categoryLabel : item.categoryLabel;
            const scope = (language === 'or' && odiaItem?.scopeSummary) ? odiaItem.scopeSummary : item.scopeSummary;
            const dim = (language === 'or' && odiaItem?.dimensionsExample) ? odiaItem.dimensionsExample : item.dimensionsExample;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                {/* Real Photographic Card Media */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== item.imageFallbackUrl) {
                        target.src = item.imageFallbackUrl;
                      }
                    }}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Top unboxed category kicker */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#17365D] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#DCE6F0] font-bold shadow-xs">
                      {catLabel}
                    </span>
                  </div>

                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-[#17365D]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#17365D] bg-white px-3 py-1.5 rounded-lg border border-[#DCE6F0] shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#2477C8]" />
                      <span>{t.gallery.viewDetails}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Project Information */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#17365D] group-hover:text-[#2477C8] transition-colors mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-3">
                      {scope}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] pt-3 border-t border-[#DCE6F0]">
                    <span className="truncate max-w-[140px] text-[#64748B] font-medium">
                      {dim}
                    </span>
                    <span className="text-[#2477C8] group-hover:underline flex items-center gap-0.5 font-bold shrink-0">
                      {language === 'or' ? 'ବିସ୍ତୃତ' : 'Details'} <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Item Detail Modal with Enlarged Photograph */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#17365D]/60 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-[#DCE6F0] rounded-2xl shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCE6F0] bg-[#F4F9FF]">
              <div>
                <span className="text-xs font-mono uppercase text-[#2477C8] font-bold">
                  {activeCategory}
                </span>
                <h3 className="text-lg font-bold text-[#17365D] leading-tight">
                  {activeTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1.5 text-[#64748B] hover:text-[#17365D] rounded-lg hover:bg-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {/* High-Resolution Modal Photograph */}
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-[#DCE6F0] bg-slate-100 shadow-inner">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.imageAlt}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== activeItem.imageFallbackUrl) {
                      target.src = activeItem.imageFallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-[#DCE6F0] text-[11px] font-mono text-[#17365D] font-bold">
                  {t.gallery.refPhoto}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#64748B] mb-1 font-semibold">{t.gallery.scopeSpec}</h4>
                <p className="text-xs text-[#27364B] leading-relaxed">
                  {activeScope}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#64748B] mb-2 font-semibold">{t.gallery.materials}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeMaterials?.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono text-[#17365D] bg-[#F4F9FF] border border-[#DCE6F0] rounded-md font-semibold"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#DCE6F0]">
                <h4 className="text-xs font-mono uppercase text-[#64748B] mb-1 font-semibold">{t.gallery.refDimension}</h4>
                <div className="text-xs text-[#27364B] font-mono font-medium">
                  {activeDimensions}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 border-t border-[#DCE6F0] bg-[#F4F9FF] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-xs font-bold text-[#64748B] hover:text-[#17365D] transition-colors cursor-pointer"
              >
                {t.gallery.close}
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeTitle || activeItem.title;
                  setActiveItem(null);
                  onOpenQuoteModal(title);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2477C8] hover:bg-[#1d63a8] rounded-lg transition-all cursor-pointer shadow-md shadow-[#2477C8]/25"
              >
                {t.gallery.enquireSimilar}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
