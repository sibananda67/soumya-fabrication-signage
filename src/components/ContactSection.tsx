import React from 'react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { Phone, Mail, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-[#F4F9FF] relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
            {t.contact.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone Contact */}
          <div className="p-7 rounded-2xl bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-md">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#DCEEFF] text-[#2477C8] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase text-[#64748B] mb-1 font-semibold">{t.nav.callUs}</div>
              <h3 className="text-base font-bold text-[#17365D] mb-2">{t.contact.phoneTitle}</h3>
              <p className="text-xs text-[#64748B] mb-4">
                {t.contact.phoneDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCE6F0]">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="text-sm font-bold text-[#17365D] hover:text-[#2477C8] flex items-center justify-between transition-colors"
              >
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
                <ArrowUpRight className="w-4 h-4 text-[#2477C8]" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-7 rounded-2xl bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-md">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#D1E7DD] text-[#0F5132] flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase text-[#64748B] mb-1 font-semibold">
                {language === 'or' ? 'ତୁରନ୍ତ ଉତ୍ତର' : 'Fast Response'}
              </div>
              <h3 className="text-base font-bold text-[#17365D] mb-2">{t.contact.whatsappTitle}</h3>
              <p className="text-xs text-[#64748B] mb-4">
                {t.contact.whatsappDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCE6F0]">
              <a
                href={getWhatsAppUrl(
                  `Hello ${BUSINESS_CONFIG.brandName}, I would like to inquire about steel, metal fabrication, and signage products.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#0F5132] hover:text-[#25D366] flex items-center justify-between transition-colors"
              >
                <span>{t.contact.whatsappAction}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="p-7 rounded-2xl bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-md">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#DCEEFF] text-[#2477C8] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase text-[#64748B] mb-1 font-semibold">
                {language === 'or' ? 'ଅଫିସିଆଲ୍ ଇମେଲ୍' : 'Formal Quotes'}
              </div>
              <h3 className="text-base font-bold text-[#17365D] mb-2">{t.contact.emailTitle}</h3>
              <p className="text-xs text-[#64748B] mb-4">
                {t.contact.emailDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCE6F0]">
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="text-xs font-bold text-[#17365D] hover:text-[#2477C8] flex items-center justify-between transition-colors break-all"
              >
                <span>{BUSINESS_CONFIG.email}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#2477C8]" />
              </a>
            </div>
          </div>
        </div>

        {/* Operational Note Strip */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#DCE6F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xs">
          <div className="flex items-center gap-2 text-[#27364B]">
            <Clock className="w-4 h-4 text-[#2477C8]" />
            <span className="font-semibold">{t.contact.hoursNotice}</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="text-[#2477C8] hover:text-[#1d63a8] font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>{t.contact.openForm}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
