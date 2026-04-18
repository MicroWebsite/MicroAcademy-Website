"use client";

import { motion } from "framer-motion";
import {
  timelineHeader,
  TimelineMilestone,
  timelineMilestones,
} from "@/app/data/timelineMilestones";

interface MilestoneCardProps {
  milestone: TimelineMilestone;
}

function MilestoneCard({ milestone }: MilestoneCardProps) {
  const isLeft = milestone.side === "left";
  return (
    <div
      className={`
        relative flex flex-col items-start gap-4
        md:flex-row md:items-center md:gap-0
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
      `}
    >
      {/* ── Text block ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`
          w-full
          md:w-[calc(50%-2rem)]
          ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}
        `}
      >
        {/* Year */}
        <span
          className="
            block font-serif text-3xl sm:text-4xl font-bold tracking-tight
            text-[#8a7a1a] leading-none mb-2
          "
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {milestone.year}
        </span>

        {/* Title */}
        <h3
          className="
            text-sm sm:text-base font-semibold text-[#1a1a0e] mb-1.5
            tracking-wide uppercase
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
      <div className="hidden md:flex md:w-16 md:flex-col md:items-center md:shrink-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="
            w-3 h-3 rounded-full bg-[#8a7a1a]
            ring-4 ring-[#f5f0e8] ring-offset-0
            shadow-md z-10
          "
        />
      </div>

      {/* Mobile-only dot */}
      <div className="flex md:hidden items-center gap-3 -mt-1">
        <div className="w-2.5 h-2.5 rounded-full bg-[#8a7a1a] shrink-0" />
        <span
          className="text-[10px] text-[#8a7a1a] uppercase tracking-widest font-semibold"
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
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#f5f0e8] py-16 px-4 sm:px-8
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
          className="mb-16 text-center"
        >
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a0e]
              leading-tight tracking-tight mb-4
            "
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {timelineHeader.title}
          </h1>
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
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="
              hidden md:block
              absolute left-1/2 top-0 bottom-0 w-px
              bg-linear-to-b from-transparent via-[#c5b84a] to-transparent
              -translate-x-1/2
            "
          />

          {/* Vertical left border line – mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="
              block md:hidden
              absolute left-1 top-0 bottom-0 w-px
              bg-linear-to-b from-transparent via-[#c5b84a] to-transparent
            "
          />

          {/* Milestones */}
          <div className="flex flex-col gap-16 sm:gap-20 pl-7 md:pl-0">
            {timelineMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <MilestoneCard milestone={milestone} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
