import Image from 'next/image';
import Link from 'next/link';
import { servicesHeroData } from '@/app/data/servicesHeroData';

export default function ServicesHero() {
  const { badge, title, description, ctaLabel, ctaHref, image, stat } =
    servicesHeroData;

  return (
    <section className="w-full bg-[#F5F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-[#FBE426] text-[#3a3800] text-xs font-bold tracking-[0.18em] uppercase">
            {badge}
          </span>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1B1C19] leading-[1.05] tracking-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg text-[#4a4a4a] leading-relaxed max-w-xl">
            {description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6A5F00] to-[#FBE426] text-white text-sm font-semibold shadow-lg hover:from-[#5C5300] hover:to-[#FBE426] hover:shadow-xl transition-all duration-300"
            >
              {ctaLabel}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Right: Image + Stat Card ── */}
        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-[480px]">

            {/* Glow behind image */}
            <div className="absolute -inset-6 bg-[#FBE426]/15 blur-3xl rounded-full pointer-events-none" />

            {/* Image */}
            {image?.src && image?.alt && (
              <div className="relative z-10 rounded-2xl overflow-hidden w-full aspect-square shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Floating Stat Card */}
            {stat && (
              <div className="absolute -bottom-8 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-[220px] border border-[#e8e5d8]">
                <p className="text-[#6A5F00] font-extrabold text-4xl leading-none">
                  {stat.value}
                </p>
                <p className="text-[#4a4a4a] font-semibold text-sm mt-1.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
