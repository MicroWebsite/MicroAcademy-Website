"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Code2, Layers, Award, Cpu } from "lucide-react";
import { directLateralHiringExpertiseGroups } from "@/app/data/directLateralHiringInsightsData";

const iconMap = {
  crown: Crown,
  code2: Code2,
  layers: Layers,
  award: Award,
  cpu: Cpu,
} as const;

export default function DirectLateralHiringExpertiseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalCards = directLateralHiringExpertiseGroups.length;
  const totalSlides = Math.max(1, totalCards - cardsPerView + 1);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const cardGap = 16; // gap-4 = 1rem = 16px
    const container = scrollRef.current;
    const containerWidth = container.clientWidth;
    const cardWidth = containerWidth / cardsPerView;
    const scrollPosition = index * (cardWidth + cardGap);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalSlides;
        scrollToSlide(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="w-full bg-bg-cream px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted-alt mb-3">
            Direct/lateral Hiring Strength
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            Areas of Expertise
          </h2>
          <p className="text-sm text-text-muted-alt mt-3 max-w-2xl mx-auto">
            Specialized hiring support from entry-level technical roles to
            leadership positions across core and emerging IT domains.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-none snap-x snap-mandatory"
          >
            <div className="flex gap-4">
              {directLateralHiringExpertiseGroups.map((group, index) => {
                const Icon = iconMap[group.icon];
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="flex-shrink-0 snap-start bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    style={{
                      width: `calc((100% - ${16 * (cardsPerView - 1)}px) / ${cardsPerView})`,
                      minWidth: 0,
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-text-badge" />
                      </span>
                      <h3 className="text-sm font-bold text-text-dark font-manrope leading-tight">
                        {group.title}
                      </h3>
                    </div>

                    <ul className="space-y-1.5">
                      {group.roles.map((role) => (
                        <li
                          key={role}
                          className="text-xs text-text-muted-alt leading-5 flex items-start gap-1.5"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  scrollToSlide(index);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-6"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
