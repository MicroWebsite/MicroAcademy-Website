"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  timelineHeader,
  TimelineMilestone,
  timelineMilestones,
} from "@/app/data/timelineMilestones";
import SectionHeader from "@/app/components/common/SectionHeader";
function DigitRoller({ digit, active }: { digit: string; active: boolean }) {
  const num = parseInt(digit);
  if (isNaN(num)) return <span>{digit}</span>;

  return (
    <div className="relative h-[1.1em] overflow-hidden inline-block">
      <motion.div
        animate={{ y: active ? `-${num * 10}%` : "0%" }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: active ? 0.2 : 0,
        }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="flex items-center justify-center h-[1.1em]">
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function YearCounter({ year, active }: { year: string; active: boolean }) {
  return (
    <div
      className="
        inline-flex font-serif text-3xl sm:text-4xl font-bold tracking-tight
        text-[#8a7a1a] leading-none mb-2
      "
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {year.split("").map((digit, i) => (
        <DigitRoller key={i} digit={digit} active={active} />
      ))}
    </div>
  );
}

function MilestoneCard({
  milestone,
  isFirst,
  isLast,
}: {
  milestone: TimelineMilestone;
  isFirst: boolean;
  isLast: boolean;
}) {
  const isLeft = milestone.side === "left";
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.4]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0.9, 0.95, 1, 0.95, 0.9],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLeft ? -50 : 50, 0, isLeft ? -20 : 20],
  );

  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest >= 0.48 && latest <= 0.6) {
        setIsActive(true);
      } else if (latest < 0.2 || latest > 0.8) {
      }
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={cardRef}
      className={`
        relative py-6 md:py-6
        md:flex md:flex-row md:items-center md:gap-0
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
        z-10
      `}
    >
      {isFirst && (
        <div className="absolute top-0 bottom-1/2 left-1/2 -translate-x-1/2 w-[6px] bg-bg-cream z-[1] hidden md:block" />
      )}
      {isLast && (
        <div className="absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2 w-[6px] bg-bg-cream z-[1] hidden md:block" />
      )}
      {isFirst && (
        <div className="absolute top-0 h-[30px] left-[16px] -translate-x-1/2 w-[4px] bg-bg-cream z-[1] md:hidden" />
      )}
      {isLast && (
        <div className="absolute bottom-0 h-1/2 left-[16px] -translate-x-1/2 w-[4px] bg-bg-cream z-[1] md:hidden" />
      )}
      <div className="flex flex-row items-start gap-4 md:hidden w-full">
        <div
          className="flex flex-col items-center shrink-0 pt-1 relative z-10"
          style={{ width: "32px" }}
        >
          <div
            className={`w-3 h-3 rounded-full ring-4 ring-bg-cream transition-colors duration-500 ${isActive ? "bg-[#8a7a1a]" : "bg-gray-300"}`}
          />
        </div>
        <motion.div style={{ opacity, scale }} className="flex-1 min-w-0">
          <YearCounter year={milestone.year} active={isActive} />
          <h3
            className={`text-sm font-semibold mb-1.5 tracking-wide uppercase transition-colors duration-500 ${isActive ? "text-[#1a1a0e]" : "text-[#6a6a50]"}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            {milestone.title}
          </h3>
          <p
            className="text-xs text-[#4a4a3a] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {milestone.description}
          </p>
        </motion.div>
      </div>

      {/* ── Desktop Layout ── */}
      <motion.div
        style={{ opacity, scale, x }}
        className={`hidden md:block md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
      >
        <YearCounter year={milestone.year} active={isActive} />
        <h3
          className={`text-sm sm:text-base font-semibold mb-1.5 tracking-wide uppercase transition-colors duration-500 ${isActive ? "text-[#1a1a0e]" : "text-[#6a6a50]"}`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          {milestone.title}
        </h3>
        <p
          className={`text-xs sm:text-sm text-[#4a4a3a] leading-relaxed max-w-xs ${isLeft ? "md:ml-auto" : ""}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {milestone.description}
        </p>
      </motion.div>

      {/* Desktop center dot */}
      <div className="hidden md:flex md:w-16 md:flex-col md:items-center md:shrink-0 relative z-10">
        <motion.div
          animate={{
            scale: isActive ? 1.5 : 1,
            backgroundColor: isActive ? "#8a7a1a" : "#d1d5db",
            boxShadow: isActive ? "0 0 15px rgba(138, 122, 26, 0.4)" : "none",
          }}
          className="w-3 h-3 rounded-full ring-4 ring-bg-cream ring-offset-0 z-10"
        />
      </div>
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function ThirtyYearGenesis() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="
        relative min-h-screen w-full overflow-hidden
        bg-bg-cream py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20
      "
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center lg:mb-14"
        >
          <SectionHeader eyebrow="Our Journey" title={timelineHeader.title} />
        </motion.div>

        <div className="relative">
          <div
            className="
              hidden md:block
              absolute left-1/2 top-0 bottom-0 w-0.5
              bg-gray-200/50 -translate-x-1/2 overflow-hidden
            "
          >
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-linear-to-b from-[#8a7a1a] via-[#c5b84a] to-[#8a7a1a]"
            />
          </div>

          <div
            className="
              block md:hidden
              absolute left-[16px] top-0 bottom-0 w-0.5
              bg-gray-200/50 overflow-hidden
            "
          >
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-linear-to-b from-[#8a7a1a] via-[#c5b84a] to-[#8a7a1a]"
            />
          </div>

          <div className="flex flex-col gap-0 md:gap-0 md:pl-0">
            {timelineMilestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.year}
                milestone={milestone}
                isFirst={index === 0}
                isLast={index === timelineMilestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
