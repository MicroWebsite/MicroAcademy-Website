"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Code2, Layers, Award, Cpu } from "lucide-react";
import { recruitmentExpertiseGroups } from "@/app/data/recruitmentInsightsData";

const iconMap = {
  crown: Crown,
  code2: Code2,
  layers: Layers,
  award: Award,
  cpu: Cpu,
} as const;

export default function RecruitmentExpertiseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let interval: NodeJS.Timeout;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

        // If at the end, jump back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll smoothly by the width of one item
          const firstChild = scrollContainer.children[0] as HTMLElement;
          const scrollAmount = firstChild ? firstChild.clientWidth + 24 : 350; // 24 is gap
          scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000); // 3 seconds interval
    };

    const stopAutoScroll = () => clearInterval(interval);

    startAutoScroll();

    scrollContainer.addEventListener("mouseenter", stopAutoScroll);
    scrollContainer.addEventListener("mouseleave", startAutoScroll);
    scrollContainer.addEventListener("touchstart", stopAutoScroll, {
      passive: true,
    });
    scrollContainer.addEventListener("touchend", startAutoScroll);

    return () => {
      stopAutoScroll();
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
      scrollContainer.removeEventListener("touchstart", stopAutoScroll);
      scrollContainer.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  return (
    <section className="w-full bg-bg-cream px-8 py-24">
      <div className="max-w-[1216px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted-alt mb-3">
            Recruitment Strength
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-manrope">
            Areas of Expertise
          </h2>
          <p className="text-text-muted-alt mt-4 max-w-3xl mx-auto">
            Specialized hiring support from entry-level technical roles to
            leadership positions across core and emerging IT domains.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 -mx-4 px-4 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {recruitmentExpertiseGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-md shrink-0 w-[85vw] md:w-[360px] lg:w-[380px] snap-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-text-badge" />
                  </span>
                  <h3 className="text-lg font-bold text-text-dark font-manrope leading-tight">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="text-sm text-text-muted-alt leading-6 flex items-start gap-2"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
