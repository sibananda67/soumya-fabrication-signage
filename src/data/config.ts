/**
 * Central Brand and Business Configuration
 * All company details and contact numbers are configured here for easy updating.
 */

export const BUSINESS_CONFIG = {
  // Brand identity
  brandName: "MAA LAXMI STEEL & SUPPLIERS",
  brandShortName: "Maa Laxmi Steel",
  tagline: "Quality Steel. Trusted Supply. Custom Solutions.",
  subTagline: "Your Partner for GI Products, Metal Fabrication, Steel Frames, Signage and Custom-Built Solutions.",

  // Contact Information (Verified details)
  ownerName: "Maa Laxmi Steel & Suppliers",
  phoneDisplay: "+91 86589 90058",
  phoneRaw: "+918658990058",
  email: "soumyakumar2002@gmail.com",
  whatsappNumber: "918658990058",

  // Business Operational Note (Configurable)
  operationalHours: "Monday – Saturday: 9:00 AM – 7:30 PM (IST)",
  responseTime: "Quotes shared promptly upon requirement review",

  // Main navigation anchors
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "Fabrication", href: "#fabrication" },
    { label: "Signage", href: "#signage" },
    { label: "Events & Stalls", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // Service Core Pillars
  coreServices: [
    "GI Sheets & Boxes",
    "Metal Fabrication",
    "Steel Frames",
    "Signage & Printing",
    "Cabins & Stalls",
  ],
};

/**
 * Generates an official WhatsApp chat link with an encoded, pre-filled message
 */
export function getWhatsAppUrl(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage.trim());
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Generates an official mailto link
 */
export function getMailtoUrl(subject: string, body: string): string {
  const encSub = encodeURIComponent(subject);
  const encBody = encodeURIComponent(body);
  return `mailto:${BUSINESS_CONFIG.email}?subject=${encSub}&body=${encBody}`;
}
