import React, { useState, useMemo } from 'react';
import { CATALOGUE_ITEMS, CATEGORIES, ProductItem } from '../data/catalogue';
import { IndustrialArt } from './IndustrialArt';
import { ProductDetailModal } from './ProductDetailModal';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { Search, SlidersHorizontal, MessageSquare, ArrowUpRight, Ruler } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ODIA_PRODUCT_DETAILS } from '../data/translations';

interface ProductCatalogueProps {
  onSelectForGeneralEnquiry: (productName: string) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  onSelectForGeneralEnquiry,
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Helper to get localized category tab label
  const getCategoryTabLabel = (catId: string, defaultLabel: string) => {
    switch (catId) {
      case 'all':
        return t.products.all;
      case 'gi-metal':
        return t.products.giCategory;
      case 'frames-structures':
        return t.products.framesCategory;
      case 'specialty':
        return t.products.specialtyCategory;
      case 'signage-print':
        return t.products.signageCategory;
      case 'event-solutions':
        return t.products.eventsCategory;
      default:
        return defaultLabel;
    }
  };

  // Filter products by category and search text
  const filteredProducts = useMemo(() => {
    return CATALOGUE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const odiaInfo = ODIA_PRODUCT_DETAILS[item.id];
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.visualTag.toLowerCase().includes(q) ||
        (odiaInfo &&
          (odiaInfo.name.toLowerCase().includes(q) ||
            odiaInfo.shortDesc.toLowerCase().includes(q) ||
            odiaInfo.categoryLabel.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#F4F9FF] relative border-b border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DCE6F0]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
              {t.products.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17365D] tracking-tight">
              {t.products.title}
            </h2>
          </div>
          <p className="text-sm text-[#64748B] max-w-md leading-relaxed font-normal">
            {t.products.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="py-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
              <input
                type="text"
                placeholder={t.products.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#DCE6F0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#17365D] cursor-pointer"
                >
                  {language === 'or' ? 'ଲିଭାନ୍ତୁ' : 'Clear'}
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-mono text-[#64748B]">
              {t.products.showing} <span className="text-[#17365D] font-bold">{filteredProducts.length}</span> {t.products.of} {CATALOGUE_ITEMS.length} {t.products.items}
            </div>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const label = getCategoryTabLabel(cat.id, cat.label);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2477C8] text-white shadow-sm shadow-[#2477C8]/30'
                      : 'bg-white text-[#27364B] hover:bg-[#DCEEFF]/50 border border-[#DCE6F0]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-[#DCE6F0] bg-white p-8 shadow-xs">
            <SlidersHorizontal className="w-8 h-8 text-[#94A3B8] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#17365D] mb-1">{t.products.noResults}</h3>
            <p className="text-xs text-[#64748B] mb-4">
              {t.products.noResultsDesc}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold bg-[#DCEEFF] text-[#2477C8] hover:bg-[#2477C8] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              {t.products.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const odiaDetails = ODIA_PRODUCT_DETAILS[product.id];
              const displayName = (language === 'or' && odiaDetails?.name) ? odiaDetails.name : product.name;
              const displayCategory = (language === 'or' && odiaDetails?.categoryLabel) ? odiaDetails.categoryLabel : product.categoryLabel;
              const displayDesc = (language === 'or' && odiaDetails?.shortDesc) ? odiaDetails.shortDesc : product.shortDesc;
              const displayTag = (language === 'or' && odiaDetails?.visualTag) ? odiaDetails.visualTag : product.visualTag;

              return (
                <div
                  key={product.id}
                  className="group relative bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  {/* Top Graphic Illustration */}
                  <div
                    className="cursor-pointer bg-[#F8FAFC] border-b border-[#DCE6F0]/80"
                    onClick={() => setActiveModalProduct(product)}
                  >
                    <IndustrialArt
                      type={product.illustrationType}
                      accentColor={product.accentColor}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Metadata */}
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748B] mb-2 font-medium">
                        <span className="text-[#2477C8] font-bold">{displayCategory}</span>
                        <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                        <span>{displayTag}</span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setActiveModalProduct(product)}
                        className="text-lg font-bold text-[#17365D] group-hover:text-[#2477C8] transition-colors cursor-pointer mb-2"
                      >
                        {displayName}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 mb-4">
                        {displayDesc}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-[#DCE6F0] space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[11px] text-[#64748B] font-semibold">
                          {t.products.priceOnRequest}
                        </span>
                        {product.hasCustomSizing && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#2477C8] font-bold">
                            <Ruler className="w-3 h-3" />
                            {t.products.customSizing}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setActiveModalProduct(product)}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-[#2477C8] hover:bg-[#1d63a8] rounded-lg transition-all cursor-pointer shadow-xs"
                        >
                          <span>{t.products.enquireNow}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={getWhatsAppUrl(
                            `Hello ${BUSINESS_CONFIG.brandName}, I would like to inquire about ${displayName} (${displayCategory}). Please share details and pricing.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#0F5132] hover:text-white bg-[#D1E7DD] hover:bg-[#25D366] border border-[#BADBCC] rounded-lg transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{t.products.whatsapp}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detail & Custom Dimensions Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onSelectForGeneralEnquiry={onSelectForGeneralEnquiry}
      />
    </section>
  );
};

