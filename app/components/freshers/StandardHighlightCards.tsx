'use client';

import { GraduationCap, ShieldCheck, BadgePercent } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Train & Hire Model',
    description: 'Industry-certified training before deployment.',
  },
  {
    icon: ShieldCheck,
    title: 'Tier-1 IT Provider',
    description: 'Partnerships with global technology leaders.',
  },
  {
    icon: BadgePercent,
    title: 'Zero Registration Fees',
    description: 'No upfront costs for the recruitment process.',
  },
];

export default function StandardHighlightCards() {
  return (
    <section className="bg-white py-12 border-t border-[#E2E0D4]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, idx) => (
          <div key={idx} className="bg-[#FAF9F3] p-8 rounded-2xl flex flex-col items-center text-center gap-4 group hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6A5F00] shadow-sm">
              <item.icon size={24} />
            </div>
            <h3 className="font-bold text-[#1B1C19] text-xl">{item.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
