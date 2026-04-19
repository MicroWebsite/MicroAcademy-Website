"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  timelineHeader,
  TimelineMilestone,
  timelineMilestones,
} from "@/app/data/timelineMilestones";

// ─── Sub-components for Odometer Effect ─────────────────────────────────────

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

// ─── Sub-component: single milestone card ───────────────────────────────────

function MilestoneCard({ milestone }: { milestone: TimelineMilestone }) {
  const isLeft = milestone.side === "left";
  const cardRef = useRef<HTMLDivElement>(null);

  // Individual scroll progress for each card to handle proximity activation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });

  // Opacity: 0 (at bottom) -> 1 (at center) -> 0.3 (at top)
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.4]);
  // Scale: 0.9 -> 1 -> 0.9
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0.9, 0.95, 1, 0.95, 0.9],
  );
  // Slide effect: Subtle shift based on position
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLeft ? -50 : 50, 0, isLeft ? -20 : 20],
  );

  // Detect when active based on scroll (using state for the odometer)
  const [isActive, setIsActive] = React.useState(false);

  // Update active state based on scrollYProgress reaching the center
  React.useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest >= 0.48 && latest <= 0.6) {
        setIsActive(true);
      } else if (latest < 0.2 || latest > 0.8) {
        // Option to reset if we want it to roll again when re-scrolling
        // setIsActive(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={cardRef}
      className={`
        relative flex flex-col items-start gap-4 py-12
        md:flex-row md:items-center md:gap-0
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
      `}
    >
      {/* ── Text block ── */}
      <motion.div
        style={{ opacity, scale, x }}
        className={`
          w-full
          md:w-[calc(50%-2rem)]
          ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}
        `}
      >
        {/* Year with Odometer Effect triggered by proximity */}
        <YearCounter year={milestone.year} active={isActive} />

        {/* Title */}
        <h3
          className="
            text-sm sm:text-base font-semibold text-[#1a1a0e] mb-1.5
            tracking-wide uppercase transition-colors duration-500
            ${isActive ? 'text-[#1a1a0e]' : 'text-[#6a6a50]'}
          "
          style={{
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          {milestone.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-xs sm:text-sm text-[#4a4a3a] leading-relaxed max-w-xs
            ${isLeft ? 'md:ml-auto' : ''}
          "
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {milestone.description}
        </p>
      </motion.div>

      {/* ── Centre dot ── */}
      <div className="hidden md:flex md:w-16 md:flex-col md:items-center md:shrink-0 relative z-10">
        <motion.div
          animate={{
            scale: isActive ? 1.5 : 1,
            backgroundColor: isActive ? "#8a7a1a" : "#d1d5db",
            boxShadow: isActive ? "0 0 15px rgba(138, 122, 26, 0.4)" : "none",
          }}
          className="
            w-3 h-3 rounded-full 
            ring-4 ring-bg-cream ring-offset-0
            z-10
          "
        />
      </div>

      {/* Mobile-only dot */}
      <div className="flex md:hidden items-center gap-3 -mt-1 relative z-10">
        <div
          className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-500 ${isActive ? "bg-[#8a7a1a]" : "bg-gray-300"}`}
        />
        <span
          className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-500 ${isActive ? "text-[#8a7a1a]" : "text-gray-400"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Milestone
        </span>
      </div>

      {/* Spacer on the opposite side (desktop only) */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

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
        bg-bg-cream py-24 px-4 sm:px-8
      "
    >
      {/* Subtle grain texture overlay */}
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
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2
            className="
              text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a0e]
              leading-tight tracking-tight mb-4
            "
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {timelineHeader.title}
          </h2>
          <p
            className="text-sm sm:text-base text-[#6a6a50] max-w-sm mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {timelineHeader.subtitle}
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical centre line – desktop */}
          <div
            className="
              hidden md:block
              absolute left-1/2 top-0 bottom-0 w-[2px]
              bg-gray-200/50 -translate-x-1/2 overflow-hidden
            "
          >
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-linear-to-b from-[#8a7a1a] via-[#c5b84a] to-[#8a7a1a]"
            />
          </div>

          {/* Vertical left border line – mobile */}
          <div
            className="
              block md:hidden
              absolute left-[5px] top-0 bottom-0 w-[2px]
              bg-gray-200/50 overflow-hidden
            "
          >
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-linear-to-b from-[#8a7a1a] via-[#c5b84a] to-[#8a7a1a]"
            />
          </div>

          {/* Milestones */}
          <div className="flex flex-col gap-0 md:gap-0 pl-7 md:pl-0">
            {timelineMilestones.map((milestone) => (
              <MilestoneCard key={milestone.year} milestone={milestone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
