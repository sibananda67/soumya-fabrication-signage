import React, { useState } from 'react';
import { CATALOGUE_ITEMS } from '../data/catalogue';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { X, MessageSquare, Phone, ArrowUpRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ODIA_PRODUCT_DETAILS } from '../data/translations';

interface QuickQuoteModalProps {
  isOpen: boolean;
  initialProduct?: string;
  onClose: () => void;
  onNavigateToFullForm: (productName: string) => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  initialProduct = '',
  onClose,
  onNavigateToFullForm,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const [selectedProduct, setSelectedProduct] = useState(
    initialProduct || 'GI Boxes'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [notes, setNotes] = useState('');
  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Hello ${BUSINESS_CONFIG.brandName}, I would like to request a quote:
*Item:* ${selectedProduct}
*Quantity:* ${quantity || '1'}
*Dimensions/Gauge:* ${dimensions || 'Standard / To be discussed'}
*Customer Name:* ${name || 'Customer'}
*Contact Phone:* ${phone || 'Not provided'}
*Specific Requirements:* ${notes || 'None'}

Please provide pricing and turnaround time. Thank you!`;

    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setHasSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#17365D]/60 backdrop-blur-sm p-4 flex items-center justify-center text-left"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white border border-[#DCE6F0] rounded-2xl shadow-2xl overflow-hidden p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#DCE6F0] mb-4">
          <div>
            <div className="text-[11px] font-mono uppercase text-[#2477C8] font-bold">
              {t.quickQuote.kicker}
            </div>
            <h3 className="text-lg font-bold text-[#17365D]">{t.quickQuote.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#17365D] rounded-lg hover:bg-[#F4F9FF] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#17365D] mb-1">
              {t.quickQuote.productLabel}
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full bg-[#F4F9FF] border border-[#DCE6F0] rounded-xl px-3 py-2 text-xs text-[#27364B] focus:outline-none focus:border-[#2477C8]"
            >
              {CATALOGUE_ITEMS.map((item) => {
                const odiaDetails = ODIA_PRODUCT_DETAILS[item.id];
                const displayName = (language === 'or' && odiaDetails?.name) ? odiaDetails.name : item.name;
                const displayCat = (language === 'or' && odiaDetails?.categoryLabel) ? odiaDetails.categoryLabel : item.categoryLabel;
                return (
                  <option key={item.id} value={item.name}>
                    {displayName} ({displayCat})
                  </option>
                );
              })}
              <option value="Custom Metal Fabrication">
                {language === 'or' ? 'କଷ୍ଟମ୍ ମେଟାଲ ଫ୍ୟାବ୍ରିକେସନ' : 'Custom Metal Fabrication'}
              </option>
              <option value="Exhibition Stall Setup">
                {language === 'or' ? 'ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍ ସେଟଅପ୍' : 'Exhibition Stall Setup'}
              </option>
              <option value="Storefront Signage">
                {language === 'or' ? 'ଦୋକାନ ଆଗ ସାଇନେଜ୍ ବୋର୍ଡ' : 'Storefront Signage'}
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#17365D] mb-1">
                {t.quickQuote.nameLabel}
              </label>
              <input
                type="text"
                placeholder={t.quickQuote.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#17365D] mb-1">
                {t.quickQuote.phoneLabel} *
              </label>
              <input
                type="tel"
                required
                placeholder={t.quickQuote.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#17365D] mb-1">
                {t.quickQuote.dimensionsLabel}
              </label>
              <input
                type="text"
                placeholder={t.quickQuote.dimensionsPlaceholder}
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#17365D] mb-1">
                {t.quickQuote.quantityLabel}
              </label>
              <input
                type="number"
                min="1"
                placeholder="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#17365D] mb-1">
              {t.quickQuote.notesLabel}
            </label>
            <textarea
              rows={2}
              placeholder={t.quickQuote.notesPlaceholder}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3 py-2 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-md shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.quickQuote.submitWhatsApp}</span>
          </button>
        </form>

        {hasSent && (
          <div className="mt-3 p-2 bg-[#D1E7DD] border border-[#BADBCC] rounded-xl text-[11px] text-[#0F5132] flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span>{t.quickQuote.sentSuccess}</span>
          </div>
        )}

        <div className="pt-3 mt-3 border-t border-[#DCE6F0] flex items-center justify-between text-xs">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="text-[#64748B] hover:text-[#17365D] flex items-center gap-1 font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#2477C8]" />
            <span>{BUSINESS_CONFIG.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigateToFullForm(selectedProduct);
            }}
            className="text-[#2477C8] hover:text-[#1d63a8] font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>{t.quickQuote.openFullForm}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
