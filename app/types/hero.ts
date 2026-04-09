export interface HeroProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleAccent?: string;
  description?: string;
  primaryCTA?: { label: string; href: string } | undefined;
  secondaryCTA?: { label: string; href: string };
  image?: { src: string; alt: string };
}
