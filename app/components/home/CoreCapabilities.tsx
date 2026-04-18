import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { capabilitiesData } from "@/data/capabalitiesData";

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
  ctaLabel,
  ctaHref,
  highlighted,
}) => (
  <div
    className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full overflow-hidden ${
      highlighted
        ? "bg-bg-cream"
        : "bg-white shadow-[0_4px_25px_rgb(180,175,150,0.15)]"
    }`}
  >
    {/* Diagonal accent — bottom-right */}
    <div
      className={`absolute -bottom-10 -right-7.5 w-40 h-40 rounded-full ${
        highlighted ? "bg-bg-decor" : "bg-bg-card-alt"
      }`}
      aria-hidden
    />

    <div className="relative z-10 flex flex-col h-full">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
        <Image src={icon} alt={`${title} icon`} width={28} height={28} />
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
  </div>
);

const iconMap: Record<string, string> = {
  "train-hire": "/assets/trainandhire.svg",
  recruitment: "/assets/re.svg",
  "contract-to-hire": "/assets/trainandhire.svg",
  "corporate-training": "/assets/co.svg",
};

const CoreCapabilities: React.FC = () => {
  const { sectionTag, heading, items } = capabilitiesData;

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-gold-alt mb-3">
            {sectionTag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <CapabilityCard key={item.id} {...item} icon={iconMap[item.id]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
