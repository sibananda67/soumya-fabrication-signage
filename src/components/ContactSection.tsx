import React from 'react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { Phone, Mail, MessageSquare, Clock, MapPin, User, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="contact" className="py-24 bg-[#0c0d10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500] mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Direct Contact & Inquiries
          </h2>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            Reach out directly for quotations, dimension reviews, and production schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone Contact */}
          <div className="p-6 rounded-lg bg-[#12141c] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase text-zinc-400 mb-1">Direct Calling</div>
              <h3 className="text-base font-bold text-white mb-2">Telephone Inquiries</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Speak directly regarding product availability, sizes, and orders.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="text-sm font-bold text-slate-100 hover:text-[#ff5500] flex items-center justify-between transition-colors"
              >
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 rounded-lg bg-[#12141c] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase text-zinc-400 mb-1">Fast Response</div>
              <h3 className="text-base font-bold text-white mb-2">WhatsApp Messaging</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Send sketches, photos, dimension sheets, and ask for instant quotes.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={getWhatsAppUrl(
                  'Hello Soumya Kumar, I would like to inquire about metal fabrication and signage products.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-between transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="p-6 rounded-lg bg-[#12141c] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase text-zinc-400 mb-1">Formal Quotes</div>
              <h3 className="text-base font-bold text-white mb-2">Email Correspondence</h3>
              <p className="text-xs text-zinc-400 mb-4">
                Send tender files, drawing PDFs, and purchase orders.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="text-xs font-bold text-slate-100 hover:text-blue-400 flex items-center justify-between transition-colors break-all"
              >
                <span>{BUSINESS_CONFIG.email}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Operational Hours & Verified Contact Summary */}
        <div className="mt-8 p-6 rounded-lg bg-[#141720] border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-orange-400 shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">Operating Schedule</div>
              <div className="text-xs text-slate-200 font-semibold">{BUSINESS_CONFIG.operationalHours}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-orange-400 shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">Primary Representative</div>
              <div className="text-xs text-slate-200 font-semibold">
                {BUSINESS_CONFIG.ownerName} · Founder & Managing Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
