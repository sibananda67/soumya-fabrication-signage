import React, { useState } from 'react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../data/config';
import { CATEGORIES } from '../data/catalogue';
import { Phone, Mail, Clock, ArrowUpRight, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#08090b] border-t border-white/10 text-slate-300 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline={true} />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Custom galvanized iron (GI) products, heavy-gauge steel frame fabrication, illuminated 3D LED signage, GSB boards, flex printing, and modular exhibition stall solutions built to customer specifications.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              Representative: {BUSINESS_CONFIG.ownerName}
            </div>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Product Categories
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  GI Sheets & Boxes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Angle & Cot Frames
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Chimneys & Bread Moulds
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  GI Temples & Homa Kunds
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Tent House & Storage Trunks
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Advertising */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Services & Advertising
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#signage" className="hover:text-white transition-colors">
                  Illuminated LED Boards
                </a>
              </li>
              <li>
                <a href="#signage" className="hover:text-white transition-colors">
                  Glow Sign Boards (GSB)
                </a>
              </li>
              <li>
                <a href="#signage" className="hover:text-white transition-colors">
                  High-Resolution Flex Print
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Exhibition & Event Stalls
                </a>
              </li>
              <li>
                <a href="#fabrication" className="hover:text-white transition-colors">
                  Custom Cabins & Structures
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs text-zinc-400">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#ff5500] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#ff5500] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-2 text-zinc-500 font-mono text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.operationalHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Order & Quotation Terms
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modal */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center text-left"
          onClick={() => setModalType(null)}
        >
          <div
            className="w-full max-w-lg bg-[#141720] border border-white/15 rounded-lg p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-sm font-bold text-white uppercase font-mono">
                {modalType === 'terms' ? 'Commercial & Quotation Terms' : 'Customer Privacy Policy'}
              </h3>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-zinc-300 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              {modalType === 'terms' ? (
                <>
                  <p>
                    1. <strong>Quotations & Sizing:</strong> All quotes are generated based on client-provided dimensions, thickness gauges, and quantity. Any on-site adjustments or material specification changes will be re-quoted.
                  </p>
                  <p>
                    2. <strong>Production Lead Time:</strong> Fabrication begins following mutual confirmation of commercial terms and specifications. Timelines depend on batch volume and design complexity.
                  </p>
                  <p>
                    3. <strong>Dispatches:</strong> Inspection of finished metal products, signage boards, or stall frames can be conducted upon completion before delivery or handoff.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    1. <strong>Customer Data:</strong> Your name, phone number, and project details submitted through our forms or WhatsApp links are strictly utilized for communicating regarding your specific fabrication or signage enquiry.
                  </p>
                  <p>
                    2. <strong>No Unsolicited Sharing:</strong> We do not sell or share customer contact details with third-party marketing services.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
