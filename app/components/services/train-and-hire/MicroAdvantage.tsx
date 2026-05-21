"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { microAdvantageData } from "@/app/data/microAdvantageData";
import { BookOpenCheck, LineChart, Target, HeartHandshake } from "lucide-react";

// Fallback if data exceeds our 4 icons
const defaultIcon = <Target className="w-6 h-6 text-white" />;

const iconMap: Record<string, React.ReactNode> = {
  lms: <BookOpenCheck className="w-6 h-6 text-white" />,
  "assessment-support": <LineChart className="w-6 h-6 text-white" />,
  "technical-labs": <Target className="w-6 h-6 text-white" />,
  counselling: <HeartHandshake className="w-6 h-6 text-white" />,
};

const MicroAdvantage: React.FC = () => {
  const { sectionTag, heading, items } = microAdvantageData;
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
      }, 3500); // 3.5 seconds interval
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
    <section className="w-full bg-bg-cream-alt py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col gap-4 max-w-[672px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-gold-alt text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              {sectionTag}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"
            >
              {heading}
            </motion.h2>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 -mx-4 px-4 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-start gap-4 rounded-3xl p-10 bg-white shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto shrink-0 w-[85vw] md:w-[360px] snap-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Yellow Icon Circle like in the image */}
              <div className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center mb-2 bg-[#fbe426] shadow-sm">
                {iconMap[item.id] || defaultIcon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#111827] mt-2 mb-1 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#4b5563] leading-[26px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroAdvantage;
