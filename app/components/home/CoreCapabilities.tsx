import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { capabilitiesData } from "@/data/capabalitiesData";

interface CoreCapabilitiesProps {
  showAll?: boolean; // false = Home, true = Services
}

// ─── Train & Hire Card (White) ─────────────────────────────────────
const TrainHireCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}> = ({ icon, title, description, ctaLabel, ctaHref }) => (
  <div className="relative rounded-3xl bg-white p-8 lg:p-10 flex flex-col h-full shadow-[0_4px_25px_rgb(180,175,150,0.15)] overflow-hidden">
    <div
      className="absolute -bottom-10 -right-7.5 w-40 h-40 rounded-full bg-bg-card-alt"
      aria-hidden
    />

    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
      <Image
        src={icon}
        alt="Train & Hire"
        width={28}
        height={28}
        className="text-text-link"
      />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
      {description}
    </p>

    <Link
      href={ctaHref}
      className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
    >
      {ctaLabel}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </Link>
  </div>
);

const HighlightedCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
}> = ({ icon, title, description, ctaLabel, ctaHref, image }) => (
  <div className="relative rounded-3xl bg-bg-cream p-8 lg:p-10 overflow-hidden h-full flex flex-col">
    <div
      className="absolute -bottom-12.5 -right-12.5 w-48 h-48 rounded-full bg-bg-decor"
      aria-hidden
    />

    {image && (
      <div className="absolute -right-10 top-60 bottom-0 w-[32%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 90vw"
        />
      </div>
    )}

    <div className="pr-0 lg:pr-[45%] relative z-10 flex flex-col h-full">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
        <Image
          src={icon}
          alt={`${title} Icon`}
          width={28}
          height={28}
          className="w-12 h-12"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
        {description}
      </p>

      <Link
        href={ctaHref}
        className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full  bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
      >
        {ctaLabel}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  </div>
);

// ─── Corporate Training Card ─────────────────────────────────────
const CorporateTrainingCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  images?: string[];
}> = ({ icon, title, description, ctaLabel, ctaHref, images }) => (
  <div className="relative rounded-3xl bg-bg-cream p-8 lg:p-10 overflow-hidden">
    <div
      className="absolute -bottom-12.5 -right-12.5 w-44 h-44 rounded-full bg-bg-decor"
      aria-hidden
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center justify-center mb-6 ">
          <Image
            src={icon}
            alt="Corporate Training Icon"
            width={28}
            height={28}
            className="w-10 h-10"
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          {description}
        </p>

        <Link
          href={ctaHref}
          className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
        >
          {ctaLabel}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 lg:gap-6 relative">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg ${i === 0 ? "lg:-translate-y-4" : "lg:translate-y-4"}`}
            >
              <Image
                src={src}
                alt={`Training ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── Main Component ─────────────────────────────────────────────
const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({
  showAll = false,
}) => {
  const { sectionTag, heading, items } = capabilitiesData;

  const trainHire = items.find((i) => i.id === "train-hire");
  const recruitment = items.find((i) => i.id === "recruitment");
  const contractToHire = items.find((i) => i.id === "contract-to-hire");
  const corporate = items.find((i) => i.id === "corporate-training");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-gold-alt mb-3">
            {sectionTag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {heading}
          </h2>
        </div>

        {/* ==================== HOME PAGE LAYOUT ==================== */}
        {!showAll && (
          <>
            {/* First Row: 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {trainHire && (
                <TrainHireCard {...trainHire} icon="/assets/Overlay.svg" />
              )}
              {recruitment && (
                <HighlightedCard
                  {...recruitment}
                  icon="/assets/Overlay1.svg"
                  image={recruitment.image}
                />
              )}
            </div>

            {/* Second Row: Corporate Training */}
            {corporate && (
              <CorporateTrainingCard
                icon="/assets/Overlay3.svg"
                title={corporate.title}
                description={corporate.description}
                ctaLabel={corporate.ctaLabel}
                ctaHref={corporate.ctaHref}
                images={corporate.images}
              />
            )}
          </>
        )}

        {/* ==================== SERVICES PAGE LAYOUT (2x2 Grid) ==================== */}
        {showAll && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Row */}
            {trainHire && (
              <TrainHireCard {...trainHire} icon="/assets/Overlay.svg" />
            )}

            {recruitment && (
              <HighlightedCard
                {...recruitment}
                icon="/assets/Overlay1.svg"
                image={recruitment.image}
              />
            )}

            {/* Second Row */}
            {contractToHire && (
              <HighlightedCard
                {...contractToHire}
                icon="/assets/Overlay1.svg"
              />
            )}

            {corporate && (
              <CorporateTrainingCard
                icon="/assets/Overlay3.svg"
                title={corporate.title}
                description={corporate.description}
                ctaLabel={corporate.ctaLabel}
                ctaHref={corporate.ctaHref}
                images={corporate.images}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreCapabilities;
