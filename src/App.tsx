import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceStrip } from './components/ServiceStrip';
import { ProductCatalogue } from './components/ProductCatalogue';
import { FabricationShowcase } from './components/FabricationShowcase';
import { SignageSection } from './components/SignageSection';
import { EventSolutions } from './components/EventSolutions';
import { ProjectGallery } from './components/ProjectGallery';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { EnquiryForm } from './components/EnquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { QuickQuoteModal } from './components/QuickQuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('GI Boxes');
  const [formInitialProduct, setFormInitialProduct] = useState('GI Boxes');

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedProductForQuote(productName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectForGeneralEnquiry = (productName: string) => {
    setFormInitialProduct(productName);
    const enquiryElem = document.getElementById('enquiry');
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-slate-100 flex flex-col font-sans selection:bg-[#ff5500] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. Trust and Service Area Strip */}
        <ServiceStrip />

        {/* 3. Product Catalogue with search, filters & custom sizing */}
        <ProductCatalogue onSelectForGeneralEnquiry={handleSelectForGeneralEnquiry} />

        {/* 4. Custom Fabrication Showcase */}
        <FabricationShowcase onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Signage and Advertising Section */}
        <SignageSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Event Management and Exhibition Stalls */}
        <EventSolutions onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 7. Project Gallery */}
        <ProjectGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. 4-Step Process: How It Works */}
        <HowItWorks />

        {/* 9. About the Business */}
        <AboutSection />

        {/* 10. Comprehensive Enquiry Form */}
        <EnquiryForm initialProductName={formInitialProduct} />

        {/* 11. Direct Contact Information */}
        <ContactSection onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Multi-Column Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Quick Quote Floating Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        initialProduct={selectedProductForQuote}
        onClose={() => setIsQuoteModalOpen(false)}
        onNavigateToFullForm={handleSelectForGeneralEnquiry}
      />
    </div>
  );
}
