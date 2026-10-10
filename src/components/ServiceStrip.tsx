import React from 'react';
import { ShieldCheck, Layers, Sparkles, Printer, Tent } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServiceStrip: React.FC = () => {
  const { t } = useLanguage();

  const servicePillars = [
    { title: t.services.giTitle, icon: ShieldCheck, subtitle: t.services.giSubtitle },
    { title: t.services.metalTitle, icon: Layers, subtitle: t.services.metalSubtitle },
    { title: t.services.signageTitle, icon: Sparkles, subtitle: t.services.signageSubtitle },
    { title: t.services.flexTitle, icon: Printer, subtitle: t.services.flexSubtitle },
    { title: t.services.stallsTitle, icon: Tent, subtitle: t.services.stallsSubtitle },
  ];

  return (
    <section id="service-strip" className="relative border-y border-[#DCE6F0] bg-white py-6 overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
          {servicePillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#DCEEFF] border border-[#DCE6F0] flex items-center justify-center text-[#2477C8] group-hover:bg-[#2477C8] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#17365D] truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#64748B] font-medium truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
