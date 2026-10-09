import React from 'react';
import { MessageSquareText, PhoneCall, FileText, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Requirement',
      desc: 'Explain the product, dimensions, sheet gauge, quantity, or specific intended usage via our form or direct WhatsApp.',
      icon: MessageSquareText,
    },
    {
      num: '02',
      title: 'Discuss the Details',
      desc: 'Our team reviews the dimensions and fabrication requirements, clarifying any technical fittings or site parameters.',
      icon: PhoneCall,
    },
    {
      num: '03',
      title: 'Receive a Quote',
      desc: 'Receive transparent pricing, material scope, and estimated manufacturing timeline tailored directly to your project.',
      icon: FileText,
    },
    {
      num: '04',
      title: 'Confirm Your Order',
      desc: 'Production, metal fabrication, or event setup arrangements begin promptly once commercial terms are confirmed.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0b0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5500] mb-2">
            SIMPLE & TRANSPARENT PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            From initial sketch or dimensions to completed metalwork — a seamless 4-step collaboration.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 rounded-lg bg-[#12141c] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#ff5500]">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-zinc-500 uppercase">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
