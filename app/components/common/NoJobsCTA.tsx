"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NoJobsCTAProps {
  title?: string;
  titleAccent?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function NoJobsCTA({
  title = "No Jobs",
  titleAccent = "Currently Available",
  description = "Our hiring drives are highly sought after and fill up quickly. Get in touch with us to be notified when the next window opens.",
  primaryCTA = { label: "Contact Us", href: "/contact" },
  secondaryCTA,
}: NoJobsCTAProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-bg-muted via-bg-cream to-bg-muted rounded-[2rem] md:rounded-[3rem] p-8 lg:p-24 text-center shadow-[0_20px_80px_rgba(0,0,0,0.04)] ring-1 ring-black/5 relative overflow-hidden group"
      >
        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-text-dark mb-6 md:mb-8 tracking-tight leading-[1.15]">
            {title} <span className="text-primary">{titleAccent}</span>
          </h2>
          <p className="text-text-muted text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 sm:mb-0">
            <Link
              href={primaryCTA.href}
              className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-base font-bold rounded-full hover:brightness-110 transition-all shadow-xl shadow-primary/10 hover:-translate-y-1 active:scale-95"
            >
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-white/50 backdrop-blur-sm text-text-dark text-base font-bold rounded-full border border-black/10 hover:bg-white transition-all hover:-translate-y-1 active:scale-95"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
