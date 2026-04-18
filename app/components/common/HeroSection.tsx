"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroProps } from "@/app/types/hero";

interface HomeTemplateProps {
  heroContent: HeroProps;
}

export default function HomeTemplate({ heroContent }: HomeTemplateProps) {
  const {
    badge,
    titleLine1,
    titleAccent,
    description,
    primaryCTA,
    secondaryCTA,
    image,
  } = heroContent;

  return (
    <section className="w-full bg-bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 min-h-[60vh]">
        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">
          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-secondary text-text-badge text-xs font-bold tracking-[0.18em] uppercase">
            {badge}
          </span>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark leading-[1.1] tracking-tight">
              {titleLine1}
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
              {titleAccent}
            </h1>
          </div>

          <p className="text-base text-text-body leading-relaxed max-w-120">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            {primaryCTA?.href && primaryCTA?.label && (
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:from-primary-dark hover:to-secondary transition-all"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA?.href && secondaryCTA?.label && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-bg-dark hover:text-white transition-all shadow-sm"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-[2rem] bg-secondary-dark/50" />

            {/* Image card */}
            {image?.src && image?.alt && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-3xl overflow-hidden w-full aspect-4/5 shadow-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30rem"
                  unoptimized={
                    image.src.startsWith("http://127.0.0.1") ||
                    image.src.startsWith("http://localhost")
                  }
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
