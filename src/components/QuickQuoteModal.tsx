import React, { useState } from 'react';
import { CATALOGUE_ITEMS } from '../data/catalogue';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { X, MessageSquare, Phone, ArrowUpRight, Check } from 'lucide-react';

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

    const msg = `Hello Soumya Kumar, I would like to request a quote:
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center text-left"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#141720] border border-white/15 rounded-lg shadow-2xl overflow-hidden p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div>
            <div className="text-[11px] font-mono uppercase text-orange-400">
              FAST QUOTATION
            </div>
            <h3 className="text-lg font-bold text-white">Request a Custom Quote</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Select Product or Service
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff5500]"
            >
              {CATALOGUE_ITEMS.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name} ({item.categoryLabel})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Anand Patra"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="e.g. 8658990058"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Dimensions / Sizing
              </label>
              <input
                type="text"
                placeholder="e.g. 3 ft × 2 ft or gauge"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                placeholder="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Additional Notes or Site Details
            </label>
            <textarea
              rows={2}
              placeholder="Locking hasp preference, installation requirements, etc..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#0c0d10] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-lg shadow-emerald-950/40"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>
        </form>

        {hasSent && (
          <div className="mt-3 p-2 bg-emerald-950/40 border border-emerald-500/30 rounded text-[11px] text-emerald-300 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span>Chat opened! Send message to connect with Soumya Kumar.</span>
          </div>
        )}

        <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="text-zinc-400 hover:text-white flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-orange-400" />
            <span>Direct Call</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigateToFullForm(selectedProduct);
            }}
            className="text-[#ff5500] hover:text-orange-400 flex items-center gap-1 font-semibold cursor-pointer"
          >
            <span>Open Comprehensive Form</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
