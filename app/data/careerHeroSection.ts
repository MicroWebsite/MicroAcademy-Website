import { HeroProps } from "@/app/types/hero";

export const careerHeroSection: HeroProps = {
  badge: "Our Careers",
  titleLine1: "Build Your Career at",
  titleAccent: "Micro Academy.",
  description:
    "Join a collective of visionary professionals dedicated to redefining the architectural standards of modern training and recruitment.",
  image: {
    src: "/assets/headers/Career.png",
    alt: "Future professionals at Micro Academy",
  },
  primaryCTA: { label: "Explore Positions", href: "/explore-positions" },
  secondaryCTA: { label: "Our philosophy", href: "/our-philosophy" },
};
