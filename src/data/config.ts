/**
 * Central Brand and Business Configuration
 * All company details and contact numbers are configured here for easy updating.
 */

export const BUSINESS_CONFIG = {
  // Working brand identity (easily customizable)
  brandName: "Soumya Fabrication & Signage",
  brandShortName: "Soumya Fab",
  tagline: "Built in Metal. Made to Stand Out.",
  subTagline: "Custom GI Products, Precision Fabrication, LED Signage and Creative Event Solutions — Built Around Your Requirements.",

  // Contact Information (Verified details)
  ownerName: "Soumya Kumar",
  phoneDisplay: "+91 86589 90058",
  phoneRaw: "+918658990058",
  email: "soumyakumar2002@gmail.com",
  whatsappNumber: "918658990058",

  // Business Operational Note (Configurable)
  operationalHours: "Monday – Saturday: 9:00 AM – 7:30 PM (IST)",
  responseTime: "Quotes typically shared within business hours upon requirement review",

  // Main navigation anchors
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "Custom Fabrication", href: "#fabrication" },
    { label: "Signage & Print", href: "#signage" },
    { label: "Event Stalls", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // Service Core Pillars
  coreServices: [
    "GI Products",
    "Custom Fabrication",
    "LED Signage",
    "Flex Printing",
    "Event Structures",
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
