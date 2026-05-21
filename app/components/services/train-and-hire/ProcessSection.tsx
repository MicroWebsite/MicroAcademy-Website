"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { trainAndHireSteps } from "@/app/data/trainAndHirePageData";
import {
  BookOpen,
  Handshake,
  Users,
  Search,
  Filter,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const iconByType = {
  users: Users,
  bookOpen: BookOpen,
  handshake: Handshake,
  search: Search,
  filter: Filter,
  checkCircle: CheckCircle,
  briefcase: Briefcase,
} as const;

export default function ProcessSection() {
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
          const scrollAmount = firstChild ? firstChild.clientWidth + 24 : 350; // 24 is roughly the gap
          scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000); // 3 seconds interval
    };

    const stopAutoScroll = () => clearInterval(interval);

    startAutoScroll();

    // Pause auto-scroll on hover or touch
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
    <section className="w-full bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col gap-4 max-w-[672px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
              The Architectural Blueprint
            </h2>
            <p className="text-lg leading-7 text-text-muted-alt font-manrope">
              Our five-phase methodology transforms high-potential individuals
              into enterprise-grade professionals, precisely calibrated to your
              organizational DNA.
            </p>
          </div>

          <div className="flex items-start gap-2 pb-2">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 -mx-4 px-4 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {trainAndHireSteps.map((step, i) => {
            const Icon = iconByType[step.icon];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col items-start gap-4 rounded-3xl overflow-hidden p-10 shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto shrink-0 w-[85vw] md:w-[360px] snap-center ${
                  step.highlighted
                    ? "bg-linear-to-r from-primary to-secondary min-h-[336px]"
                    : "bg-bg-cream-alt min-h-[320px]"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-2xl ${
                    step.highlighted
                      ? "w-[58.8px] h-[58.8px] bg-white/20 text-white"
                      : "w-[56px] h-[56px] bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="pt-4">
                  <h3
                    className={`text-2xl leading-8 font-manrope font-normal ${
                      step.highlighted ? "text-white" : "text-text-dark"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <p
                  className={`text-base leading-[26px] font-manrope ${
                    step.highlighted ? "text-white/90" : "text-text-muted-alt"
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
