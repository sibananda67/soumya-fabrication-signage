import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../data/config';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // 4-5 single-line clean nav links complying with Top Bar Contract
  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Fabrication', href: '#fabrication' },
    { label: 'Signage', href: '#signage' },
    { label: 'Events & Stalls', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F7F2]/90 backdrop-blur-md border-b border-[#E6E2D9] shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark / brand lockup */}
            <a
              href="#hero"
              className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E96524] rounded"
              aria-label={BUSINESS_CONFIG.brandName}
            >
              <Logo />
            </a>

            {/* Zone 2: 4-5 clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252824]">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap shrink-0 text-[#252824]/80 hover:text-[#E96524] transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-[#E96524]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#E96524] hover:bg-[#d55719] active:scale-[0.98] rounded-md transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm hover:shadow cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#252824] hover:bg-[#E6E2D9]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E96524] cursor-pointer"
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
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-18 right-0 bottom-0 w-full max-w-sm bg-[#FFFFFF] border-l border-[#E6E2D9] p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-[#6F746F] tracking-wider pb-2 border-b border-[#E6E2D9]">
                Navigation
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-base font-semibold text-[#252824] hover:text-[#E96524] transition-colors py-2 border-b border-[#E6E2D9]/40"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E6E2D9] space-y-3">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold tracking-wider uppercase text-white bg-[#E96524] hover:bg-[#d55719] rounded-md transition-all shadow-sm"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-[#6F746F] font-mono text-center">
                Call: {BUSINESS_CONFIG.phoneDisplay}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
