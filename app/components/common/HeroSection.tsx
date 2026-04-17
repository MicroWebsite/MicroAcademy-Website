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
    <section className="w-full bg-[#F5F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-[#FBE426] text-[#3a3800] text-xs font-bold tracking-[0.18em] uppercase">
            {badge}
          </span>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C19] leading-[1.1] tracking-tight">
              {titleLine1}
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#6A5F00] leading-[1.1] tracking-tight">
              {titleAccent}
            </h1>
          </div>

          <p className="text-base text-[#4a4a4a] leading-relaxed max-w-120">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            {primaryCTA?.href && primaryCTA?.label && (
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-[#6A5F00] to-[#FBE426] text-white text-sm font-semibold hover:from-[#5C5300] hover:to-[#FBE426] transition-colors"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA?.href && secondaryCTA?.label && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center px-6 py-3 rounded-full border border-[#6A5F00] text-[#6A5F00] text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-[2rem] bg-[#F8E122]/50" />
            
            {/* Image card */}
            {image?.src && image?.alt && (
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
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
