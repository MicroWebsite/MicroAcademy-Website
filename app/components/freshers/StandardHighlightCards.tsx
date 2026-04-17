'use client';

import { GraduationCap, ShieldCheck, BadgePercent } from 'lucide-react';

const highlightModels = [
  {
    icon: GraduationCap,
    title: 'Train & Hire Model',
    description: 'Industry-certified training and immediate deployment with leading IT companies.',
  },
  {
    icon: ShieldCheck,
    title: 'Tier-1 IT Provider',
    description: 'Direct partnerships with global Tier-1 technology leaders and enterprises.',
  },
  {
    icon: BadgePercent,
    title: 'Zero Registration Fees',
    description: 'Absolutely no upfront costs or hidden registration fees for the entire process.',
  },
];

export default function StandardHighlightCards() {
  return (
    <section className="bg-[#1B1C19] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Drive Highlights</h2>
          <p className="text-[#888] text-lg leading-relaxed">
            We bridge the gap between academic learning and industry requirements with our unique recruitment philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightModels.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#242521] p-10 rounded-[2.5rem] flex flex-col items-start text-left gap-6 group hover:bg-[#2a2b27] transition-all border border-white/5"
            >
              <div className="w-14 h-14 rounded-full bg-[#6A5F00] flex items-center justify-center text-white shadow-lg overflow-hidden">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-white text-2xl tracking-tight">{item.title}</h3>
                <p className="text-[#888] leading-relaxed text-sm font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
