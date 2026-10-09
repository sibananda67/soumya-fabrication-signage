import React, { useState } from 'react';
import { ProductItem } from '../data/catalogue';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { IndustrialArt } from './IndustrialArt';
import { X, MessageSquare, Check, Phone, ArrowUpRight } from 'lucide-react';

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

  const [dimensions, setDimensions] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [gaugeOrNotes, setGaugeOrNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Hello Soumya Kumar, I would like to inquire about:
*Product:* ${product.name} (${product.categoryLabel})
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#12141c] border border-white/15 rounded-lg shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e1017]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ff5500]" />
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">{product.name}</h3>
              <div className="text-xs font-mono text-zinc-400">
                {product.categoryLabel} · Price on Request
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Visual Blueprint & Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-md overflow-hidden border border-white/10 bg-[#0a0b0e]">
              <IndustrialArt
                type={product.illustrationType}
                accentColor={product.accentColor}
                className="min-h-[190px]"
              />
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-zinc-500 mb-1">
                Product Specification
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {product.detailedDesc}
              </p>
            </div>

            {/* Configurable Attributes */}
            <div className="pt-3 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase text-zinc-400 mb-2">
                Customizable Parameters
              </div>
              <ul className="space-y-1">
                {product.configurableFields.map((field, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-zinc-300 font-mono flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-400" />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Custom Requirement & Instant Quote Builder */}
          <div className="md:col-span-7 bg-white/[0.02] border border-white/10 rounded-lg p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Request Custom Quote
                </span>
                <span className="text-[10px] font-mono text-orange-400">
                  Instant WhatsApp Connect
                </span>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Dimensions (L × W × H)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3ft × 2ft × 1.5ft or 18 gauge"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Quantity Needed
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 5"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Specific Requirements or Usage Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specify sheet gauge, locking preference, profile type, or delivery requirements..."
                    value={gaugeOrNotes}
                    onChange={(e) => setGaugeOrNotes(e.target.value)}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-lg shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Requirement via WhatsApp</span>
                </button>
              </form>

              {submittedWhatsApp && (
                <div className="mt-3 p-2 bg-emerald-950/40 border border-emerald-500/30 rounded text-[11px] text-emerald-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Requirement ready in WhatsApp. Tap send to share directly with Soumya Kumar.</span>
                </div>
              )}
            </div>

            {/* Direct Call & Detailed Form Fallbacks */}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectForGeneralEnquiry(product.name);
                }}
                className="text-[#ff5500] hover:text-orange-400 flex items-center gap-1 font-semibold cursor-pointer transition-colors"
              >
                <span>Use Full Web Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
