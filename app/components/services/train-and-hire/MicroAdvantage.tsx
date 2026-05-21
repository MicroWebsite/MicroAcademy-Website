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
    <section className="w-full bg-[#fbfbfa] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col items-center text-center gap-2 max-w-[760px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8c7b27] text-[11px] font-bold tracking-[0.38em] uppercase"
          >
            {sectionTag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111111] leading-[0.95] tracking-[-0.04em]"
          >
            {heading}
          </motion.h2>
        </div>

        <div className="hidden lg:block relative pt-10 pb-10">
          <svg
            className="absolute inset-x-0 top-8 h-[360px] w-full pointer-events-none"
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
                        isTop ? "-top-6" : "-bottom-6"
                      } h-36 w-36 rounded-full border-2 border-dashed ${accent.ring} bg-transparent`}
                    />
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#ffd43b] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                      <Icon className="h-7 w-7 text-[#111111]" />
                    </div>
                  </div>

                  <div className="mt-7 max-w-[210px]">
                    <h3 className="text-[28px] font-extrabold leading-[1.05] text-[#111111] tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.7] text-[#666666]">
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
            const accent = valueAccents[i % valueAccents.length];

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
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffd43b] text-[#111111] shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
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
