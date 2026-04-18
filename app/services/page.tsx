import { Metadata } from "next";
import HomeTemplate from "../components/common/HeroSection";
import CoreCapabilities from "../components/home/CoreCapabilities";
import { servicesHeroData } from "../data/servicesHeroData";

export const metadata: Metadata = {
  title: "Services | MicroAcademy",
  description:
    "Explore our comprehensive suite of talent development and organizational transformation services.",
};

export default function ServicesPage() {
  const heroContent = {
    badge: servicesHeroData.badge,
    titleLine1: servicesHeroData.title,
    titleAccent: "", // Or split if needed
    description: servicesHeroData.description,
    primaryCTA: {
      label: servicesHeroData.ctaLabel,
      href: servicesHeroData.ctaHref,
    },
    image: servicesHeroData.image,
  };

  return (
    <>
      <HomeTemplate heroContent={heroContent} />
      <CoreCapabilities showAll={true} />
    </>
  );
}
