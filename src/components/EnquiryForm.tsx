import React, { useState } from 'react';
import { CATALOGUE_ITEMS } from '../data/catalogue';
import { BUSINESS_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../data/config';
import { MessageSquare, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EnquiryFormProps {
  initialProductName?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProductName = '' }) => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    productOrService: initialProductName || 'GI Boxes',
    quantity: '1',
    dimensions: '',
    location: '',
    description: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.fullName.trim()) {
      setStatus('error');
      setFeedbackMessage(t.enquiry.errorName);
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setStatus('error');
      setFeedbackMessage(t.enquiry.errorPhone);
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const summary = `*New Requirement Enquiry — ${BUSINESS_CONFIG.brandName}*
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not specified'}
*Product/Service:* ${formData.productOrService}
*Quantity:* ${formData.quantity || '1'}
*Dimensions:* ${formData.dimensions || 'Standard / To discuss'}
*Delivery Location:* ${formData.location || 'Not specified'}
*Project Details:* ${formData.description || 'None provided'}

Please share quotation and delivery timeline.`;

    const url = getWhatsAppUrl(summary);
    window.open(url, '_blank', 'noopener,noreferrer');

    setStatus('success');
    setFeedbackMessage(t.enquiry.successWhatsapp);
  };

  const handleEmailSubmit = () => {
    if (!validate()) return;

    const subject = `Enquiry: ${formData.productOrService} - ${formData.fullName}`;
    const body = `Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Product/Service: ${formData.productOrService}
Quantity: ${formData.quantity}
Dimensions: ${formData.dimensions || 'N/A'}
City/Location: ${formData.location || 'N/A'}

Description:
${formData.description || 'N/A'}`;

    const url = getMailtoUrl(subject, body);
    window.location.href = url;

    setStatus('success');
    setFeedbackMessage(t.enquiry.successEmail);
  };

  return (
    <section id="enquiry" className="py-24 bg-white relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
              {t.enquiry.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight">
              {t.enquiry.title}
            </h2>
            <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
              {t.enquiry.subtitle}
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] p-6 sm:p-8 shadow-sm relative">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                    {t.enquiry.fullName} <span className="text-[#B82025]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={t.enquiry.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                    {t.enquiry.phone} <span className="text-[#B82025]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.enquiry.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email and Product Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                    {t.enquiry.email} <span className="text-[#94A3B8] font-normal">{t.enquiry.optional}</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.enquiry.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                    {t.enquiry.productService} <span className="text-[#B82025]">*</span>
                  </label>
                  <select
                    name="productOrService"
                    value={formData.productOrService}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] focus:outline-none focus:border-[#2477C8] transition-all"
                  >
                    <optgroup label={language === 'or' ? 'ଜି.ଆଇ. ଓ ମେଟାଲ ସାମଗ୍ରୀ' : 'GI & Metal Products'}>
                      <option value="GI Sheets">{language === 'or' ? 'ଜି.ଆଇ. ସିଟ୍ (GI Sheets)' : 'GI Sheets'}</option>
                      <option value="GI Boxes">{language === 'or' ? 'ଜି.ଆଇ. ବାକ୍ସ (GI Boxes)' : 'GI Boxes'}</option>
                      <option value="School Boxes">{language === 'or' ? 'ସ୍କୁଲ ବାକ୍ସ (School Boxes)' : 'School Boxes'}</option>
                      <option value="Letter Boxes">{language === 'or' ? 'ଲେଟର ବାକ୍ସ (Letter Boxes)' : 'Letter Boxes'}</option>
                      <option value="Tent House Boxes">{language === 'or' ? 'ଟେଣ୍ଟ ହାଉସ୍ ବାକ୍ସ (Tent House Boxes)' : 'Tent House Boxes'}</option>
                      <option value="Light Boxes">{language === 'or' ? 'ଲାଇଟ୍ ବାକ୍ସ (Light Boxes)' : 'Light Boxes'}</option>
                      <option value="Drums">{language === 'or' ? 'ଧାନ ଡ୍ରମ୍ (Drums)' : 'Drums'}</option>
                    </optgroup>
                    <optgroup label={language === 'or' ? 'ଫ୍ରେମ୍ ଓ ଷ୍ଟ୍ରକଚର୍' : 'Frames & Structures'}>
                      <option value="Frames">{language === 'or' ? 'ମେଟାଲ ଫ୍ରେମ୍ (Frames)' : 'Frames'}</option>
                      <option value="Khatia Frames">{language === 'or' ? 'ଖଟିଆ ଫ୍ରେମ୍ (Khatia Frames)' : 'Khatia Frames'}</option>
                      <option value="Full Frames">{language === 'or' ? 'ଫୁଲ୍ ଫ୍ରେମ୍ (Full Frames)' : 'Full Frames'}</option>
                      <option value="Custom Cabins">{language === 'or' ? 'ପୋର୍ଟେବଲ୍ କ୍ୟାବିନ୍ (Custom Cabins)' : 'Custom Cabins'}</option>
                    </optgroup>
                    <optgroup label={language === 'or' ? 'ସ୍ୱତନ୍ତ୍ର ଫ୍ୟାବ୍ରିକେସନ' : 'Specialty Fabrication'}>
                      <option value="Chimneys">{language === 'or' ? 'ଚିମନି ହୁଡ୍ (Chimneys)' : 'Chimneys'}</option>
                      <option value="Bread Moulds">{language === 'or' ? 'ବ୍ରେଡ୍ ମୋଲ୍ଡ (Bread Moulds)' : 'Bread Moulds'}</option>
                      <option value="GI Temples">{language === 'or' ? 'ଜି.ଆଇ. ମନ୍ଦିର (GI Temples)' : 'GI Temples'}</option>
                      <option value="Homa Kunds / Homekunds">{language === 'or' ? 'ହୋମକୁଣ୍ଡ (Homa Kunds)' : 'Homa Kunds / Homekunds'}</option>
                    </optgroup>
                    <optgroup label={language === 'or' ? 'ସାଇନେଜ୍ ଓ ପ୍ରିଣ୍ଟ' : 'Signage & Printing'}>
                      <option value="GSB Boards">{language === 'or' ? 'ଜିଏସବି ବୋର୍ଡ (GSB Boards)' : 'GSB Boards'}</option>
                      <option value="LED Boards">{language === 'or' ? 'ଏଲ୍.ଇ.ଡି. ବୋର୍ଡ (LED Boards)' : 'LED Boards'}</option>
                      <option value="Flex Printing">{language === 'or' ? 'ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ (Flex Printing)' : 'Flex Printing'}</option>
                    </optgroup>
                    <optgroup label={language === 'or' ? 'ଇଭେଣ୍ଟ ସମାଧାନ' : 'Event Solutions'}>
                      <option value="Event Management">{language === 'or' ? 'ଇଭେଣ୍ଟ ସେଟଅପ୍ (Event Management)' : 'Event Management'}</option>
                      <option value="Exhibition and Promotional Stalls">{language === 'or' ? 'ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍ (Exhibition Stalls)' : 'Exhibition and Promotional Stalls'}</option>
                      <option value="Custom Metal Fabrication">{language === 'or' ? 'କଷ୍ଟମ୍ ମେଟାଲ ଫ୍ୟାବ୍ରିକେସନ' : 'Custom Metal Fabrication'}</option>
                      <option value="Made-to-Order Structures">{language === 'or' ? 'ଅର୍ଡର ମୁତାବକ ଷ୍ଟ୍ରକଚର୍' : 'Made-to-Order Structures'}</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 3: Quantity & Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                    {t.enquiry.quantity}
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="quantity"
                    placeholder="e.g. 5"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                    {t.enquiry.dimensions} <span className="text-[#94A3B8] font-normal">{t.enquiry.optional}</span>
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    placeholder={t.enquiry.dimensionsPlaceholder}
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Location */}
              <div>
                <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                  {t.enquiry.location} <span className="text-[#94A3B8] font-normal">{t.enquiry.optional}</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder={t.enquiry.locationPlaceholder}
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all"
                />
              </div>

              {/* Row 5: Description */}
              <div>
                <label className="block text-xs font-semibold text-[#17365D] mb-1.5">
                  {t.enquiry.description}
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder={t.enquiry.descriptionPlaceholder}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#DCE6F0] rounded-xl px-3.5 py-2.5 text-xs text-[#27364B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2477C8] focus:ring-2 focus:ring-[#2477C8]/20 transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-md shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.enquiry.sendWhatsapp}</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#17365D] bg-white hover:bg-[#DCEEFF]/40 border border-[#DCE6F0] transition-all cursor-pointer shadow-xs"
                >
                  <Mail className="w-4 h-4 text-[#2477C8]" />
                  <span>{t.enquiry.sendEmail}</span>
                </button>
              </div>

              {/* Status Feedback Toast */}
              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Technical Notice */}
              <div className="pt-4 border-t border-[#DCE6F0] text-[11px] font-mono text-[#64748B] flex items-center justify-between">
                <span>{t.enquiry.directNotice}</span>
                <span>{BUSINESS_CONFIG.brandName}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
