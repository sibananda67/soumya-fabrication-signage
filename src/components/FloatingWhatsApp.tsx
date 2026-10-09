import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = `Hello Soumya Kumar, I am interested in your metal fabrication / signage / stall services. Please share more details.`;
  const whatsappUrl = getWhatsAppUrl(defaultMessage);

  return (
    <aside aria-label="Customer Support Links" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Soumya Kumar"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />

        {/* Hover Tooltip on Desktop */}
        <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 text-xs font-semibold text-white bg-[#0c0d10] border border-white/10 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Chat with Soumya Kumar
        </span>
      </a>
    </aside>
  );
};
