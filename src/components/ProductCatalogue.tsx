import React, { useState, useMemo } from 'react';
import { CATALOGUE_ITEMS, CATEGORIES, ProductItem } from '../data/catalogue';
import { IndustrialArt } from './IndustrialArt';
import { ProductDetailModal } from './ProductDetailModal';
import { getWhatsAppUrl } from '../data/config';
import { Search, SlidersHorizontal, MessageSquare, ArrowUpRight, Ruler } from 'lucide-react';

interface ProductCatalogueProps {
  onSelectForGeneralEnquiry: (productName: string) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  onSelectForGeneralEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Filter products by category and search text
  const filteredProducts = useMemo(() => {
    return CATALOGUE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.visualTag.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#F8F7F2] relative">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E2D9]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#E96524] mb-2 font-semibold">
              FABRICATION CATALOGUE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#252824] tracking-tight">
              Products & Fabrications
            </h2>
          </div>
          <p className="text-sm text-[#6F746F] max-w-md leading-relaxed">
            From galvanized iron utility boxes and structural frames to illuminated signage and event setups — all fabricated to your exact dimensional requirements.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="py-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6F746F]" />
              <input
                type="text"
                placeholder="Search products (e.g., GI Boxes, LED, Khatia, Chimneys)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E6E2D9] rounded-md pl-10 pr-4 py-2.5 text-xs text-[#252824] placeholder-[#6F746F]/70 focus:outline-none focus:border-[#E96524] transition-colors shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6F746F] hover:text-[#252824]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-mono text-[#6F746F]">
              Showing <span className="text-[#252824] font-semibold">{filteredProducts.length}</span> of {CATALOGUE_ITEMS.length} items
            </div>
          </div>

          {/* Interactive Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E96524] text-white shadow-sm'
                      : 'bg-white text-[#252824] hover:bg-[#F4F1EA] border border-[#E6E2D9]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-lg border border-[#E6E2D9] bg-white p-8 shadow-xs">
            <SlidersHorizontal className="w-8 h-8 text-[#6F746F] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#252824] mb-1">No products match your search</h3>
            <p className="text-xs text-[#6F746F] mb-4">
              Try adjusting your search terms or view all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#F4F1EA] hover:bg-[#E6E2D9] text-[#252824] rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group relative bg-white border border-[#E6E2D9] hover:border-[#E96524]/40 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
                >
                  {/* Top Graphic Illustration */}
                  <div
                    className="cursor-pointer"
                    onClick={() => setActiveModalProduct(product)}
                  >
                    <IndustrialArt
                      type={product.illustrationType}
                      accentColor={product.accentColor}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Zero-Pill Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#6F746F] mb-2 font-medium">
                        <span>{product.categoryLabel}</span>
                        <span aria-hidden="true" className="text-[#6F746F]/50">·</span>
                        <span className="text-[#6F746F]/80">{product.visualTag}</span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setActiveModalProduct(product)}
                        className="text-lg font-bold text-[#252824] group-hover:text-[#E96524] transition-colors cursor-pointer mb-2"
                      >
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#6F746F] leading-relaxed line-clamp-3 mb-4">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-[#E6E2D9] space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[11px] text-[#6F746F]">
                          Price on Request
                        </span>
                        {product.hasCustomSizing && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#E96524] font-medium">
                            <Ruler className="w-3 h-3" />
                            Custom Sizes
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setActiveModalProduct(product)}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#252824] bg-[#F8F7F2] hover:bg-[#E96524] hover:text-white border border-[#E6E2D9] rounded transition-all cursor-pointer shadow-2xs"
                        >
                          <span>Enquire Now</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>

                        <a
                          href={getWhatsAppUrl(
                            `Hello Soumya Kumar, I would like to inquire about ${product.name} (${product.categoryLabel}). Please share details and pricing.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded transition-all shadow-2xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
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
