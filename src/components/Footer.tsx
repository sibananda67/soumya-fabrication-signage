import React, { useState } from 'react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';
import { Phone, Mail, Clock, MessageSquare, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const { language, t } = useLanguage();

  return (
    <footer className="bg-white border-t border-[#DCE6F0] text-[#27364B] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline={true} size="footer" />
            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm mt-3">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(`Hello ${BUSINESS_CONFIG.brandName}, I would like to get in touch regarding steel & fabrication products.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D1E7DD] hover:bg-[#25D366] text-[#0F5132] hover:text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.footer.quickWhatsapp}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#17365D] font-bold">
              {t.footer.categoriesTitle}
            </div>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li>
                <a href="#products" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଜି.ଆଇ. ସିଟ୍ ଓ ବାକ୍ସ' : 'GI Sheets & Boxes'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଆଙ୍ଗେଲ୍ ଓ ଖଟିଆ ଫ୍ରେମ୍' : 'Angle & Cot Frames'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଚିମନି ଓ ବ୍ରେଡ୍ ମୋଲ୍ଡ' : 'Chimneys & Bread Moulds'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଜି.ଆଇ. ମନ୍ଦିର ଓ ହୋମକୁଣ୍ଡ' : 'GI Temples & Homa Kunds'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଧାନ ଡ୍ରମ୍ ଓ ଷ୍ଟୋରେଜ୍ ଟ୍ରଙ୍କ୍' : 'Tent House & Storage Trunks'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Advertising */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#17365D] font-bold">
              {t.footer.servicesTitle}
            </div>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li>
                <a href="#signage" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଆଲୋକିତ ଏଲ୍.ଇ.ଡି. ବୋର୍ଡ' : 'Illuminated LED Boards'}
                </a>
              </li>
              <li>
                <a href="#signage" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ଗ୍ଲୋ ସାଇନ୍ ବୋର୍ଡ (ଜି.ଏସ୍.ବି.)' : 'Glow Sign Boards (GSB)'}
                </a>
              </li>
              <li>
                <a href="#signage" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ହାଇ-ରିଜୋଲ୍ୟୁସନ ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟ' : 'High-Resolution Flex Print'}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ପ୍ରଦର୍ଶନୀ ଓ ଇଭେଣ୍ଟ ଷ୍ଟଲ୍' : 'Exhibition & Event Stalls'}
                </a>
              </li>
              <li>
                <a href="#fabrication" className="hover:text-[#2477C8] transition-colors">
                  {language === 'or' ? 'ପୋର୍ଟେବଲ୍ କ୍ୟାବିନ୍ ଓ ଷ୍ଟ୍ରକଚର୍' : 'Custom Cabins & Structures'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#17365D] font-bold">
              {t.footer.contactTitle}
            </div>
            <div className="space-y-2.5 text-xs text-[#64748B]">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#2477C8] transition-colors font-semibold text-[#17365D]"
              >
                <Phone className="w-3.5 h-3.5 text-[#2477C8]" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#2477C8] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#2477C8]" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-2 text-[#64748B] font-mono text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#94A3B8] shrink-0 mt-0.5" />
                <span>{t.contact.hoursNotice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="mt-12 pt-8 border-t border-[#DCE6F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-[#17365D] transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <span className="text-[#CBD5E1]">·</span>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-[#17365D] transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modal */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-[#17365D]/60 backdrop-blur-sm p-4 flex items-center justify-center text-left"
          onClick={() => setModalType(null)}
        >
          <div
            className="w-full max-w-lg bg-white border border-[#DCE6F0] rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#DCE6F0]">
              <h3 className="text-sm font-bold text-[#17365D] uppercase font-mono">
                {modalType === 'terms'
                  ? (language === 'or' ? 'କମର୍ସିଆଲ୍ ଓ କୋଟେସନ୍ ସର୍ତ୍ତାବଳୀ' : 'Commercial & Quotation Terms')
                  : (language === 'or' ? 'ଗ୍ରାହକ ଗୋପନୀୟତା ନୀତି' : 'Customer Privacy Policy')}
              </h3>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="text-[#64748B] hover:text-[#17365D]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-[#27364B] space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              {modalType === 'terms' ? (
                language === 'or' ? (
                  <>
                    <p>
                      ୧. <strong>କୋଟେସନ୍ ଓ ମାପ:</strong> ସମସ୍ତ କୋଟେସନ୍ ଗ୍ରାହକଙ୍କ ପ୍ରଦତ୍ତ ମାପ, ସିଟ୍ ଗେଜ୍ ଏବଂ ପରିମାଣ ଉପରେ ଆଧାରିତ। ସାଇଟ୍ ପରିବର୍ତ୍ତନ ହେଲେ ନୂତନ ଦର ପ୍ରଦାନ କରାଯିବ।
                    </p>
                    <p>
                      ୨. <strong>ନିର୍ମାଣ ସମୟସୀମା:</strong> ଅର୍ଡର ସର୍ତ୍ତାବଳୀ ଚୂଡ଼ାନ୍ତ ହେବା ପରେ ଉତ୍ପାଦନ ଆରମ୍ଭ ହୁଏ। ସମୟସୀମା କାର୍ଯ୍ୟ ପରିମାଣ ଉପରେ ନିର୍ଭର କରେ।
                    </p>
                    <p>
                      ୩. <strong>ଡେଲିଭରୀ ଓ ଯାଞ୍ଚ:</strong> ଡେଲିଭରୀ ପୂର୍ବରୁ ସାମଗ୍ରୀର ସମ୍ପୂର୍ଣ୍ଣ ଗୁଣବତ୍ତା ଯାଞ୍ଚ କରାଯାଇ ହସ୍ତାନ୍ତର କରାଯାଏ।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      1. <strong>Quotations &amp; Sizing:</strong> All quotes are generated based on client-provided dimensions, thickness gauges, and quantity. Any on-site adjustments or material specification changes will be re-quoted.
                    </p>
                    <p>
                      2. <strong>Production Lead Time:</strong> Fabrication begins following mutual confirmation of commercial terms and specifications. Timelines depend on batch volume and design complexity.
                    </p>
                    <p>
                      3. <strong>Dispatches:</strong> Inspection of finished metal products, signage boards, or stall frames can be conducted upon completion before delivery or handoff.
                    </p>
                  </>
                )
              ) : (
                language === 'or' ? (
                  <>
                    <p>
                      ୧. <strong>ଗ୍ରାହକ ତଥ୍ୟ:</strong> ଆପଣଙ୍କ ନାମ, ଫୋନ୍ ନମ୍ବର କେବଳ କୋଟେସନ୍ ଓ ଅର୍ଡର ଯୋଗାଯୋଗ ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।
                    </p>
                    <p>
                      ୨. <strong>ତଥ୍ୟ ସୁରକ୍ଷା:</strong> ଆମେ କୌଣସି ତୃତୀୟ ପକ୍ଷ ସହିତ ଆପଣଙ୍କ ତଥ୍ୟ ଆଦାନପ୍ରଦାନ କରୁନାହିଁ।
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
                )
              )}
            </div>

            <div className="pt-3 border-t border-[#DCE6F0] flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 text-xs font-bold bg-[#DCEEFF] hover:bg-[#2477C8] text-[#2477C8] hover:text-white rounded-lg cursor-pointer transition-colors"
              >
                {language === 'or' ? 'ବନ୍ଦ କରନ୍ତୁ' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
