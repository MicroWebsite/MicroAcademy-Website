// ─────────────────────────────────────────────────────────────────────────────
// FIX 1: StatsSection.tsx
// Issues fixed:
//   - Removed wrapping dark bg section (it was inside the hero which is light)
//   - Fixed typo: bg-[#F5F4EE]] (double bracket) 
//   - Stats now sit directly on the cream bg with a rounded card, matching design
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { Stat, statsData, StatsSectionData } from "@/app/data/statsData";
import React from "react";

interface StatCardProps {
  stat: Stat;
  isLast: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isLast }) => (
  <div
    className={`
      flex flex-col items-center justify-center gap-2 py-8 px-6
      ${!isLast ? "border-b sm:border-b-0 sm:border-r border-[#D9D2C3]" : ""}
    `}
  >
    <span className="text-[2.4rem] sm:text-[2.8rem] md:text-[3rem] font-bold text-[#7A6B1F] leading-none tracking-tight">
      {stat.value}
    </span>
    <span className="text-[9px] sm:text-[10px] font-semibold text-[#1A1A1A] tracking-[0.15em] uppercase mt-1 text-center">
      {stat.label}
    </span>
  </div>
);

interface StatsSectionProps {
  data?: StatsSectionData;
}

const StatsSection: React.FC<StatsSectionProps> = ({ data = statsData }) => {
  return (
    // No dark bg wrapper — inherits hero's #F5F4EE background
    <div className="w-full px-6 pb-10 pt-2">
      <div className="max-w-7xl mx-auto">
        {/* Rounded card sitting on the cream background */}
        <div className="bg-[#EEEADE] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {data.stats.map((stat, i) => (
              <StatCard
                key={stat.id}
                stat={stat}
                isLast={i === data.stats.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;