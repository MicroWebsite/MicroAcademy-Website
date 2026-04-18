import Link from 'next/link';
import Image from 'next/image';
import { HeroProps } from '@/app/types/hero';

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
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          {badge && (
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-secondary text-text-badge text-xs font-bold tracking-[0.18em] uppercase">
            {badge}
          </span>
          )}

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
                className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:from-primary-dark hover:to-secondary transition-colors"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA?.href && secondaryCTA?.label && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-bg-dark hover:text-white transition-colors"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">
            {/* Image card */}
            {image?.src && image?.alt && (
              <div className="relative z-10 rounded-3xl overflow-hidden w-full aspect-4/5 shadow-none">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}