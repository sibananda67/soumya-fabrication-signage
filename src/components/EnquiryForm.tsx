import React, { useState } from 'react';
import { CATALOGUE_ITEMS } from '../data/catalogue';
import { BUSINESS_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../data/config';
import { MessageSquare, Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

interface EnquiryFormProps {
  initialProductName?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProductName = '' }) => {
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
  const [lastSubmissionSummary, setLastSubmissionSummary] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.fullName.trim()) {
      setStatus('error');
      setFeedbackMessage('Please enter your full name.');
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setStatus('error');
      setFeedbackMessage('Please provide a valid contact phone number.');
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const summary = `*New Fabrication / Signage Enquiry*
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
    setLastSubmissionSummary(summary);
    setFeedbackMessage(
      'Enquiry prefilled in WhatsApp. Tap send to share directly with Soumya Kumar.'
    );
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
    setFeedbackMessage('Email draft created. Please send to complete your enquiry.');
  };

  return (
    <section id="enquiry" className="py-24 bg-[#0a0b0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500] mb-2">
              GET A CUSTOM QUOTE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Request Your Estimate
            </h2>
            <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
              Submit your dimensions, quantity, and requirements. We will review the details and provide a direct quote.
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-lg bg-[#12141c] border border-white/10 p-6 sm:p-8 shadow-2xl relative">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Full Name <span className="text-[#ff5500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone Number <span className="text-[#ff5500]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email and Product Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Product or Service <span className="text-[#ff5500]">*</span>
                  </label>
                  <select
                    name="productOrService"
                    value={formData.productOrService}
                    onChange={handleChange}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff5500] transition-colors"
                  >
                    <optgroup label="GI & Metal Products">
                      <option value="GI Sheets">GI Sheets</option>
                      <option value="GI Boxes">GI Boxes</option>
                      <option value="School Boxes">School Boxes</option>
                      <option value="Letter Boxes">Letter Boxes</option>
                      <option value="Tent House Boxes">Tent House Boxes</option>
                      <option value="Light Boxes">Light Boxes</option>
                      <option value="Drums">Drums</option>
                    </optgroup>
                    <optgroup label="Frames & Structures">
                      <option value="Frames">Frames</option>
                      <option value="Khatia Frames">Khatia Frames</option>
                      <option value="Full Frames">Full Frames</option>
                      <option value="Custom Cabins">Custom Cabins</option>
                    </optgroup>
                    <optgroup label="Specialty Fabrication">
                      <option value="Chimneys">Chimneys</option>
                      <option value="Bread Moulds">Bread Moulds</option>
                      <option value="GI Temples">GI Temples</option>
                      <option value="Homa Kunds / Homekunds">Homa Kunds / Homekunds</option>
                    </optgroup>
                    <optgroup label="Signage & Printing">
                      <option value="GSB Boards">GSB Boards</option>
                      <option value="LED Boards">LED Boards</option>
                      <option value="Flex Printing">Flex Printing</option>
                    </optgroup>
                    <optgroup label="Event Solutions">
                      <option value="Event Management">Event Management</option>
                      <option value="Exhibition and Promotional Stalls">Exhibition and Promotional Stalls</option>
                      <option value="Custom Metal Fabrication">Custom Metal Fabrication</option>
                      <option value="Made-to-Order Structures">Made-to-Order Structures</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 3: Quantity & Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Quantity Needed
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="quantity"
                    placeholder="e.g. 5"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Required Dimensions <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    placeholder="e.g. 4 ft × 2.5 ft or 20 gauge"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Location */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  City or Delivery Location <span className="text-zinc-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Cuttack, Bhubaneswar, or nearby area"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors"
                />
              </div>

              {/* Row 5: Description */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Project Description & Specific Requirements
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Describe your design, gauge thickness, corner latches, mounting style, or delivery urgency..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-[#0c0d10] border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-lg shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>Send via Email</span>
                </button>
              </div>

              {/* Status Feedback Toast */}
              {status === 'error' && (
                <div className="p-3 bg-red-950/40 border border-red-500/30 rounded text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Technical Integration Notice for Developer */}
              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Direct inquiry routes: WhatsApp & Mailto</span>
                <span>Owner: {BUSINESS_CONFIG.ownerName}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
