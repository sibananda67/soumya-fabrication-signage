import React, { useState } from 'react';
import { ProductItem } from '../data/catalogue';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { IndustrialArt } from './IndustrialArt';
import { X, MessageSquare, Check, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ODIA_PRODUCT_DETAILS } from '../data/translations';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSelectForGeneralEnquiry: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForGeneralEnquiry,
}) => {
  if (!product) return null;

  const { language, t } = useLanguage();
  const [dimensions, setDimensions] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [gaugeOrNotes, setGaugeOrNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  const localizedData = language === 'or' ? ODIA_PRODUCT_DETAILS[product.id] : null;
  const productName = localizedData?.name || product.name;
  const categoryLabel = localizedData?.categoryLabel || product.categoryLabel;
  const detailedDesc = localizedData?.detailedDesc || product.detailedDesc;
  const configurableFields = localizedData?.configurableFields || product.configurableFields;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Hello ${BUSINESS_CONFIG.brandName}, I would like to inquire about:
*Product:* ${productName} (${categoryLabel})
*Quantity:* ${quantity || 'Not specified'}
*Required Dimensions:* ${dimensions || 'Standard / To be discussed'}
*Gauge/Specific Notes:* ${gaugeOrNotes || 'None'}
*My Name:* ${customerName || 'Customer'}
*My Contact:* ${customerPhone || 'Not provided'}

Please share the pricing and feasibility details. Thank you!`;

    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmittedWhatsApp(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#17365D]/60 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#DCE6F0] rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCE6F0] bg-[#F4F9FF]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2477C8]" />
            <div>
              <h3 className="text-lg font-bold text-[#17365D] tracking-tight">{productName}</h3>
              <div className="text-xs font-mono text-[#64748B]">
                {categoryLabel} · {language === 'or' ? 'ଅନୁରୋଧ ଅନୁଯାୟୀ ମୂଲ୍ୟ' : 'Price on Request'}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#17365D] hover:bg-white rounded-lg transition-colors cursor-pointer"
            aria-label={t.productDetail.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Visual Blueprint & Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-[#DCE6F0] bg-[#F8FAFC]">
              <IndustrialArt
                type={product.illustrationType}
                accentColor={product.accentColor}
                className="min-h-[190px]"
              />
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-[#64748B] mb-1 font-semibold">
                {t.productDetail.kicker}
              </div>
              <p className="text-xs text-[#27364B] leading-relaxed">
                {detailedDesc}
              </p>
            </div>

            {/* Configurable Attributes */}
            <div className="pt-3 border-t border-[#DCE6F0]">
              <div className="text-[11px] font-mono uppercase text-[#64748B] mb-2 font-semibold">
                {t.productDetail.specsTitle}
              </div>
              <ul className="space-y-1.5">
                {configurableFields.map((field, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[#27364B] font-mono flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2477C8]" />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Custom Requirement & Instant Quote Builder */}
          <div className="md:col-span-7 bg-[#F4F9FF] border border-[#DCE6F0] rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE6F0] mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#17365D]">
                  {language === 'or' ? 'କଷ୍ଟମ୍ କୋଟେସନ୍ ଅନୁରୋଧ' : 'Request Custom Quote'}
                </span>
                <span className="text-[11px] font-mono text-[#2477C8] font-semibold">
                  {language === 'or' ? 'ତୁରନ୍ତ ସଂଯୋଗ' : 'Instant Connect'}
                </span>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] mb-1">
                      {t.productDetail.name}
                    </label>
                    <input
                      type="text"
                      placeholder={t.productDetail.namePlaceholder}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-[#DCE6F0] rounded-lg px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] mb-1">
                      {t.productDetail.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.productDetail.phonePlaceholder}
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white border border-[#DCE6F0] rounded-lg px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] mb-1">
                      {t.productDetail.dimensions}
                    </label>
                    <input
                      type="text"
                      placeholder={t.productDetail.dimensionsPlaceholder}
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      className="w-full bg-white border border-[#DCE6F0] rounded-lg px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#17365D] mb-1">
                      {t.productDetail.quantity}
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 5"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full bg-white border border-[#DCE6F0] rounded-lg px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1">
                    {t.productDetail.notes}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.productDetail.notesPlaceholder}
                    value={gaugeOrNotes}
                    onChange={(e) => setGaugeOrNotes(e.target.value)}
                    className="w-full bg-white border border-[#DCE6F0] rounded-lg px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-md shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.productDetail.requestWhatsApp}</span>
                </button>
              </form>

              {submittedWhatsApp && (
                <div className="mt-3 p-2 bg-[#D1E7DD] border border-[#BADBCC] rounded-lg text-[11px] text-[#0F5132] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.productDetail.sentSuccess}</span>
                </div>
              )}
            </div>

            {/* Direct Call & Detailed Form Fallbacks */}
            <div className="pt-4 mt-4 border-t border-[#DCE6F0] flex flex-wrap items-center justify-between gap-2 text-xs">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="text-[#64748B] hover:text-[#17365D] flex items-center gap-1.5 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#2477C8]" />
                <span>{t.productDetail.directCall}: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectForGeneralEnquiry(productName);
                }}
                className="text-[#2477C8] hover:text-[#1d63a8] flex items-center gap-1 font-bold cursor-pointer transition-colors"
              >
                <span>{language === 'or' ? 'ସମ୍ପୂର୍ଣ୍ଣ ୱେବ୍ ଫର୍ମ' : 'Use Full Web Form'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
