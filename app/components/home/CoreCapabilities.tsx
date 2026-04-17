import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { capabilitiesData } from "@/data/capabalitiesData";

// ─── Icons (your SVG files) ────────────────────────────────────────────────
const iconMap: Record<string, string> = {
  "train-hire": "/assets/Interview.svg",     // assuming this is for Train & Hire
  recruitment: "/assets/Overlay.svg",        // or Overlay1.svg — you can change
  "corporate-training": "/assets/Workshop.svg",
};

// ─── Train & Hire Card (White background + Olive pill button) ───────────────
const TrainHireCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}> = ({ icon, title, description, ctaLabel, ctaHref }) => (
  <div className="relative rounded-3xl bg-white p-8 lg:p-10 flex flex-col h-full shadow-[0_4px_25px_rgb(180,175,150,0.15)] overflow-hidden">
    {/* Decorative blob */}
    <div 
      className="absolute -bottom-10 -right-7.5 w-40 h-40 rounded-full bg-[#EDECD6]" 
      aria-hidden 
    />

    {/* Icon */}
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
      <Image 
        src={icon} 
        alt="Train & Hire Icon" 
        width={28} 
        height={28} 
        className="text-[#5a5215] w-12 h-12"
      />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-[15px] leading-relaxed flex-1">{description}</p>

    <Link
      href={ctaHref}
      className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#7A6F1E] text-white text-sm font-semibold hover:bg-[#5a5215] transition-all group"
    >
      {ctaLabel}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </Link>
  </div>
);

// ─── Recruitment Card (Beige + Woman image on right) ───────────────────────
const RecruitmentCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;           // This is the woman photo, not the icon
}> = ({ icon, title, description, ctaLabel, ctaHref, image }) => (
  <div className="relative rounded-3xl bg-[#F5F4EE] p-8 lg:p-10 overflow-hidden h-full flex flex-col">
    {/* Decorative circle */}
    <div 
      className="absolute -bottom-12.5 -right-12.5 w-48 h-48 rounded-full bg-[#E3E0CF]" 
      aria-hidden 
    />

    {/* Woman / Person Image on the right */}
    {image && (
      <div className="absolute -right-10 top-60 bottom-0 w-[32%]  overflow-hidden">
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
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
        <Image 
          src={icon} 
          alt="Recruitment Icon" 
          width={28} 
          height={28} 
          className="w-12 h-12"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed flex-1">{description}</p>

      <Link
        href={ctaHref}
        className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#7A6F1E] text-white text-sm font-semibold hover:bg-[#5a5215] transition-all group"
      >
        {ctaLabel}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  </div>
);

// ─── Corporate Training Card (Full width with two images) ───────────────────
const CorporateTrainingCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  images?: string[];
}> = ({ icon, title, description, ctaLabel, ctaHref, images }) => (
  <div className="relative rounded-3xl bg-[#F5F4EE] p-8 lg:p-10 overflow-hidden">
    <div 
      className="absolute -bottom-12.5 -right-12.5 w-44 h-44 rounded-full bg-[#E3E0CF]" 
      aria-hidden 
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        {/* Icon */}
        <div className="inline-flex items-center justify-center mb-6">
          <Image 
            src={icon} 
            alt="Corporate Training Icon" 
            width={28} 
            height={28}
            className="w-10 h-10" 
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">{description}</p>

        <Link
          href={ctaHref}
          className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#7A6F1E] text-white text-sm font-semibold hover:bg-[#5a5215] transition-all group"
        >
          {ctaLabel}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Right: Two images */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 lg:gap-6 relative">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg ${
                i === 0 ? "lg:-translate-y-4" : "lg:translate-y-4"
              }`}
            >
              <Image
                src={src}
                alt={`Corporate training visual ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 22vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── Main Section ──────────────────────────────────────────────────────────
const CoreCapabilities: React.FC = () => {
  const { sectionTag, heading, items } = capabilitiesData;

  const trainHire = items.find((i) => i.id === "train-hire");
  const recruitment = items.find((i) => i.id === "recruitment");
  const corporate = items.find((i) => i.id === "corporate-training");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B7B1A] mb-3">
            {sectionTag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {heading}
          </h2>
        </div>

        {/* Top Row: Train & Hire + Recruitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {trainHire && (
            <TrainHireCard
              icon={"/assets/Overlay.svg"}
              title={trainHire.title}
              description={trainHire.description}
              ctaLabel={trainHire.ctaLabel}
              ctaHref={trainHire.ctaHref}
            />
          )}

          {recruitment && (
            <RecruitmentCard
              icon={"/assets/Overlay1.svg"}
              title={recruitment.title}
              description={recruitment.description}
              ctaLabel={recruitment.ctaLabel}
              ctaHref={recruitment.ctaHref}
              image={recruitment.image}   // woman photo
            />
          )}
        </div>

        {/* Bottom: Corporate Training */}
        {corporate && (
          <CorporateTrainingCard
            icon={"/assets/Overlay3.svg"}
            title={corporate.title}
            description={corporate.description}
            ctaLabel={corporate.ctaLabel}
            ctaHref={corporate.ctaHref}
            images={[
              "/assets/Office.svg",
              "/assets/Workshop.svg",
            ]}
          />
        )}
      </div>
    </section>
  );
};

export default CoreCapabilities;