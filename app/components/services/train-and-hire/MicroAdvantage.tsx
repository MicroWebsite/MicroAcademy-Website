"use client";

import { motion } from "framer-motion";
import { microAdvantageData } from "@/app/data/microAdvantageData";
import {
  BookOpenCheck,
  HeartHandshake,
  LineChart,
  Target,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  lms: BookOpenCheck,
  "assessment-support": LineChart,
  "technical-labs": Target,
  counselling: HeartHandshake,
};

const valueAccents = [
  {
    ring: "border-rose-300",
  },
  {
    ring: "border-amber-300",
  },
  {
    ring: "border-emerald-300",
  },
  {
    ring: "border-sky-300",
  },
];

export default function MicroAdvantage() {
  const { sectionTag, heading, items } = microAdvantageData;

  return (
    <section className="w-full bg-[#fbfbfa] py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20 overflow-hidden">
      <div className="max-w-295 mx-auto flex flex-col gap-10 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader eyebrow={sectionTag} title={heading} />
        </motion.div>

        <div className="hidden lg:block relative pt-10 pb-10">
          <svg
            className="absolute inset-x-0 top-4 h-90 w-full pointer-events-none"
            viewBox="0 0 1180 360"
            fill="none"
          >
            <path
              d="M165 112 C220 112, 230 250, 330 250"
              stroke="#dad3bf"
              strokeWidth="2"
              strokeDasharray="5 8"
            />
            <path
              d="M440 250 C520 250, 525 112, 630 112"
              stroke="#dad3bf"
              strokeWidth="2"
              strokeDasharray="5 8"
            />
            <path
              d="M770 112 C835 112, 845 250, 955 250"
              stroke="#dad3bf"
              strokeWidth="2"
              strokeDasharray="5 8"
            />
          </svg>

          <div className="grid grid-cols-4 gap-6 items-start relative z-10">
            {items.map((item, i) => {
              const Icon = iconMap[item.id] || Target;
              const accent = valueAccents[i % valueAccents.length];
              const isTop = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: isTop ? 24 : -24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`relative flex flex-col items-center text-center ${
                    isTop ? "pt-0" : "pt-20"
                  }`}
                >
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 ${
                        isTop ? "-top-4" : "-bottom-4"
                      } h-24 w-24 rounded-full border-2 border-dashed ${accent.ring} bg-transparent`}
                    />
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd43b] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-200">
                      <Icon className="h-5 w-5 text-[#111111]" />
                    </div>
                  </div>

                  <div className="mt-5 max-w-52.5">
                    <h3 className="text-lg lg:text-xl font-bold leading-snug text-[#111111] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.6] text-[#666666]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 lg:hidden">
          {items.map((item, i) => {
            const Icon = iconMap[item.id] || Target;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd43b] text-[#111111] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
