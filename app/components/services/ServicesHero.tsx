import Image from 'next/image';
import Link from 'next/link';
import { servicesHeroData } from '@/app/data/servicesHeroData';

export default function ServicesHero() {
  const { badge, title, description, ctaLabel, ctaHref, image, stat } =
    servicesHeroData;

  return (
    <section className="w-full bg-bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-secondary text-text-badge text-xs font-bold tracking-[0.18em] uppercase">
            {badge}
          </span>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark leading-[1.1] tracking-tight">
              {title}
            </h1>
          </div>

          {/* Description */}
          <p className="text-base text-text-body leading-relaxed max-w-120">
            {description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:from-primary-dark hover:to-secondary transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        {/* ── Right: Image + Stat Card ── */}
        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">

            {/* Image */}
            {image?.src && image?.alt && (
              <>
                <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-[2rem] bg-secondary-dark/50" />
                <div className="relative z-10 rounded-3xl overflow-hidden w-full aspect-4/5 shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30rem"
                    className="object-cover"
                    priority
                  />
                </div>
              </>
            )}

            {/* Floating Stat Card */}
            {stat && (
              <div className="absolute -bottom-8 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-[220px] border border-border-stat">
                <p className="text-primary font-extrabold text-4xl leading-none">
                  {stat.value}
                </p>
                <p className="text-text-body font-semibold text-sm mt-1.5 leading-snug">
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

