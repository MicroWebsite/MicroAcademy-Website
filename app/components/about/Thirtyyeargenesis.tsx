"use client";

import {
  timelineHeader,
  TimelineMilestone,
  timelineMilestones,
} from "@/app/data/timelineMilestones";

// ─── Sub-component: single milestone card ───────────────────────────────────

interface MilestoneCardProps {
  milestone: TimelineMilestone;
  index: number;
}

function MilestoneCard({ milestone, index }: MilestoneCardProps) {
  const isLeft = milestone.side === "left";

  return (
    /**
     * Layout per breakpoint:
     *  mobile  – stack vertically, always left-aligned, dot above text
     *  md+     – two-column layout alternating left / right
     */
    <div
      className={`
        relative flex flex-col items-start gap-4
        md:flex-row md:items-center md:gap-0
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
      `}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* ── Text block ── */}
      <div
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
      </div>

      {/* ── Centre dot + vertical line connector ── */}
      {/* On mobile the dot sits in-line with a left border line */}
      <div className="hidden md:flex md:w-16 md:flex-col md:items-center md:shrink-0">
        <div
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

      {/* ── Google Fonts ── */}
      {/* Add to your _app.tsx / layout.tsx instead for production */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease both;
        }
      `}</style>

      <div className="relative mx-auto max-w-4xl">
        {/* ── Header ── */}
        <div className="mb-16 text-center animate-fade-up">
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
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical centre line – desktop */}
          <div
            className="
              hidden md:block
              absolute left-1/2 top-0 bottom-0 w-px
              bg-linear-to-b from-transparent via-[#c5b84a] to-transparent
              -translate-x-1/2
            "
          />

          {/* Vertical left border line – mobile */}
          <div
            className="
              block md:hidden
              absolute left-1 top-0 bottom-0 w-px
              bg-linear-to-b from-transparent via-[#c5b84a] to-transparent
            "
          />

          {/* Milestones */}
          <div className="flex flex-col gap-16 sm:gap-20 pl-7 md:pl-0">
            {timelineMilestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 180}ms` }}
              >
                <MilestoneCard milestone={milestone} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
