import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../data/config';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.fabrication, href: '#fabrication' },
    { label: t.nav.signage, href: '#signage' },
    { label: t.nav.events, href: '#events' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#DCE6F0] shadow-sm shadow-[#17365D]/5 py-2.5 sm:py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-[#DCE6F0]/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2477C8] rounded-md"
              aria-label={BUSINESS_CONFIG.brandName}
            >
              <Logo size="header" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-sm font-semibold text-[#27364B]">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap hover:text-[#2477C8] transition-colors duration-150 py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2477C8] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Quick Contact, Language Switcher & Request Quote CTA */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Switcher on Header */}
              <div className="flex items-center">
                <LanguageSwitcher />
              </div>

              {/* Call Link on Large Screens */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-[#17365D] hover:text-[#2477C8] px-2.5 py-2 rounded-lg hover:bg-[#F4F9FF] border border-transparent hover:border-[#DCE6F0] transition-colors"
                title="Call Maa Laxmi Steel"
              >
                <Phone className="w-3.5 h-3.5 text-[#2477C8]" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#2477C8] hover:bg-[#1d63a8] active:scale-[0.98] rounded-lg transition-all duration-150 shadow-md shadow-[#2477C8]/20 hover:shadow-lg hover:shadow-[#2477C8]/30 cursor-pointer shrink-0"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Quick Quote Button */}
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="sm:hidden px-2.5 py-1.5 text-[11px] font-bold uppercase text-white bg-[#2477C8] rounded-md shrink-0 shadow-xs"
              >
                {t.nav.requestQuote}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-[#17365D] hover:text-[#2477C8] hover:bg-[#F4F9FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2477C8] cursor-pointer"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#17365D]/40 backdrop-blur-sm xl:hidden transition-opacity"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-18 right-0 bottom-0 w-full max-w-sm bg-white border-l border-[#DCE6F0] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE6F0]">
                <Logo size="sm" showTagline />
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0]">
                <span className="text-xs font-semibold text-[#17365D]">Language / ଭାଷା:</span>
                <LanguageSwitcher variant="full" />
              </div>

              <nav className="flex flex-col space-y-1.5">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-base font-semibold text-[#17365D] hover:text-[#2477C8] hover:bg-[#F4F9FF] px-3 py-2 rounded-lg transition-colors border-b border-slate-100 last:border-b-0"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-5 border-t border-[#DCE6F0] space-y-3">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold tracking-wider uppercase text-white bg-[#2477C8] hover:bg-[#1d63a8] rounded-lg transition-all shadow-md shadow-[#2477C8]/25 cursor-pointer"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-[#17365D] font-bold bg-[#F4F9FF] border border-[#DCE6F0] rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#2477C8]" />
                <span>{t.nav.callUs}: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
