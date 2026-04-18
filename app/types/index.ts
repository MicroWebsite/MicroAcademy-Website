export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface HeroProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  image: { src: string; alt: string };
}
