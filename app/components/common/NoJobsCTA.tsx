"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  description = "Our recruitment drives are highly sought after and fill up quickly. Get in touch with us to be notified when the next window opens.",
  primaryCTA = { label: "Contact Us", href: "/contact" },
  secondaryCTA,
}: NoJobsCTAProps) {
  return (
    <section className="w-full bg-white px-4 md:px-8 pt-4 pb-12 md:pt-6 md:pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-304 mx-auto rounded-3xl md:rounded-4xl overflow-hidden p-8 md:p-16 bg-cta-card-bg shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto group"
      >
        {/* Decorative glows */}
        <div className="absolute pointer-events-none w-48 h-48 md:w-64 md:h-64 -right-10 -top-10 md:-right-20 md:-top-20 blur-[32px] rounded-full z-0 bg-primary/10" />
        <div className="absolute pointer-events-none w-48 h-48 md:w-64 md:h-64 -left-10 -bottom-10 md:-left-20 md:-bottom-20 blur-[32px] rounded-full z-0 bg-primary/10" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-manrope text-text-dark">
            {title} <span className="text-primary">{titleAccent}</span>
          </h2>
          <div className="max-w-200">
            <p className="text-center text-base md:text-lg leading-7 md:leading-8 font-manrope text-text-muted-alt">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href={primaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center gap-2 justify-center rounded-full font-bold transition-all hover:brightness-110 font-manrope text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 active:scale-[0.98] text-white bg-linear-to-r from-primary to-btn-grad-end-alt shadow-lg hover:shadow-xl"
            >
              {primaryCTA.label}
              <span className="w-5 h-5 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="w-full sm:w-auto inline-flex items-center gap-2 justify-center rounded-full font-bold transition-all hover:brightness-110 font-manrope text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 active:scale-[0.98] bg-white/50 backdrop-blur-sm text-text-dark border border-black/10 hover:bg-white"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
