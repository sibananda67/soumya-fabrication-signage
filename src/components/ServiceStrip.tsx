import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { ShieldCheck, Cpu, Flame, Printer, Tent } from 'lucide-react';

export const ServiceStrip: React.FC = () => {
  const servicePillars = [
    { title: 'GI Products', icon: ShieldCheck, subtitle: 'Sheets, Utility Boxes & Drums' },
    { title: 'Custom Fabrication', icon: Cpu, subtitle: 'Frames, Cabins & Welded Assemblies' },
    { title: 'LED Signage', icon: Flame, subtitle: '3D Acrylic & Backlit GSB Boards' },
    { title: 'Flex Printing', icon: Printer, subtitle: 'Large Format Banners & Media' },
    { title: 'Event Structures', icon: Tent, subtitle: 'Exhibition Stalls & Promotional Setups' },
  ];

  return (
    <section id="service-strip" className="relative border-y border-[#E6E2D9] bg-[#F4F1EA] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
          {servicePillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 p-3 rounded-md bg-white border border-[#E6E2D9] hover:border-[#E96524]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded bg-[#F8F7F2] border border-[#E6E2D9] flex items-center justify-center text-[#E96524] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#252824] truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#6F746F] font-mono truncate">
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
