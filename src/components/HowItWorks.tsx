import React from 'react';
import { MessageSquareText, PhoneCall, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { language, t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
      icon: MessageSquareText,
    },
    {
      num: '02',
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
      icon: PhoneCall,
    },
    {
      num: '03',
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
      icon: FileText,
    },
    {
      num: '04',
      title: t.howItWorks.step4Title,
      desc: t.howItWorks.step4Desc,
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative border-t border-[#DCE6F0]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2477C8] font-bold mb-2">
            {t.howItWorks.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17365D] tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-[#F4F9FF] border border-[#DCE6F0] hover:border-[#2477C8]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#2477C8]">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#DCEEFF] text-[#2477C8] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#17365D] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DCE6F0] text-[10px] font-mono text-[#64748B] font-semibold uppercase">
                  {language === 'or' ? `ପଦକ୍ଷେପ ୦${idx + 1} / ୪` : `Step ${idx + 1} of 4`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
