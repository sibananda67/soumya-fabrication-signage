import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-lg bg-[#F4F9FF] border border-[#DCE6F0] shadow-2xs select-none ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-1.5 pr-1 text-[#2477C8] flex items-center" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-[#2477C8] text-white shadow-2xs'
            : 'text-[#64748B] hover:text-[#17365D] hover:bg-white/60'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        {variant === 'full' ? 'English' : 'EN'}
      </button>

      <button
        type="button"
        onClick={() => setLanguage('or')}
        className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
          language === 'or'
            ? 'bg-[#2477C8] text-white shadow-2xs'
            : 'text-[#64748B] hover:text-[#17365D] hover:bg-white/60'
        }`}
        aria-pressed={language === 'or'}
        title="ଓଡ଼ିଆ ଭାଷାକୁ ବଦଳାନ୍ତୁ (Switch to Odia)"
      >
        {variant === 'full' ? 'ଓଡ଼ିଆ (Odia)' : 'ଓଡ଼ିଆ'}
      </button>
    </div>
  );
};
