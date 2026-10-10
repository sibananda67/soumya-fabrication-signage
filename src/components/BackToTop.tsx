import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.floating.backToTop}
      title={t.floating.backToTop}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white border border-[#DCE6F0] hover:border-[#2477C8]/40 text-[#17365D] hover:text-[#2477C8] hover:bg-[#F4F9FF] shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2477C8]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
