"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { clientsData, Client } from "@/app/data/clientsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

const ClientLogoCard: React.FC<{ client: Client; isSlider?: boolean }> = ({
  client,
  isSlider = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Helper to extract clean initials or style names for typographic fallbacks
  const getTypographicStyle = (id: string, name: string) => {
    if (id === "hp") return "hp";
    if (id === "emc") return "EMC²";
    if (id === "lnt") return "L&T";
    return name.split(" ")[0];
  };

  return (
    <motion.div
      variants={isSlider ? undefined : itemVariants}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 12px 30px rgba(106, 95, 0, 0.06)",
        borderColor: "var(--primary-light)",
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      className="relative w-full bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] border border-border-light flex items-center justify-center aspect-[4/3] overflow-hidden transition-all duration-300 select-none group cursor-pointer"
    >
      {/* Light accent hover background splash */}
      <div className="absolute inset-0 bg-primary/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-full flex items-center justify-center">
        {!imageError ? (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-2xl font-black text-primary/80 tracking-tight leading-none font-sans mb-1 transition-transform duration-300 group-hover:scale-110">
              {getTypographicStyle(client.id, client.name)}
            </span>
            <span className="text-[9px] font-bold text-text-gold-alt/70 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
              {client.name}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const OurClients: React.FC = () => {
  const { sectionTag, heading, clients } = clientsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, clients.length - visibleCount);

  // Derive a safe index that is always within bounds — no effect needed
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-bg-cream/40 py-10 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-sans">
            {sectionTag}
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            {heading}
          </h2>
        </motion.div>

        {/* Desktop Grid Layout (lg and up) */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-2xl py-4 bg-bg-cream-light/30">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                {clients.map((client) => (
                  <ClientLogoCard key={client.id} client={client} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Swipeable Slider (shows 1 logo on mobile, 2 logos on tablet) */}
        <div className="lg:hidden relative max-w-sm sm:max-w-2xl mx-auto px-10 sm:px-12">
          <div className="overflow-hidden w-full py-4">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(e, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="w-full sm:w-1/2 shrink-0 flex justify-center px-3 sm:px-4"
                >
                  <div className="w-full max-w-[240px] sm:max-w-[280px]">
                    <ClientLogoCard client={client} isSlider={true} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer z-10"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer z-10"
            aria-label="Next client"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Paginated Indicator Dots */}
          <div className="flex justify-center flex-wrap gap-1.5 mt-4 max-w-[280px] sm:max-w-[400px] mx-auto">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-4 bg-primary" : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
