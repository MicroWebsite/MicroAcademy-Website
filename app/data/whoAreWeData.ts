export interface WhoAreWeData {
  heading: string;
  paragraphs: string[];
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const whoAreWeData: WhoAreWeData = {
  heading: "Who We Are",
  paragraphs: [
    "Founded in 1995 as a Corporate Training Organization, Micro Academy pioneered Train & Hire engagements in 2005. We have since trained and deployed over 25,000 candidates across 12+ locations in India, bridging the gap between talent and enterprise readiness.",
    "As a trusted L&D partner for leading IT multinationals, we hold a diverse pool of Subject Matter Experts (SMEs). This enables us to source, design, and deliver custom training in niche technologies within a turnaround time of less than a week.",
    "With a footprint spanning 20+ countries across South East Asia, the Middle East, Africa, and Eastern Europe, we are ISO 9001:2015 certified and fully compliant with all statutory regulations (GST, ESI, PF, PT, Shops & Establishments).",
  ],
  images: [
    {
      src: "/assets/about/group-success.jpg",
      alt: "Successful Micro Academy batch celebration",
    },
    {
      src: "/assets/about/classroom-group.jpg",
      alt: "Authentic technical training session at Micro Academy Bangalore",
    },
  ],
};
