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
    "Established as a Corporate Training Organization in 1995, Micro Academy has been a frontrunner in launching and delivering Train and Hire engagements since 2005. Over our three-decade history, we have trained and deployed over 25,000 candidates across more than a dozen locations in India.",
    "As a trusted training partner for multiple leading IT multinationals both in India and abroad, we hold a large pool of highly experienced and diversified Subject Matter Experts (SMEs). This enables us to design and execute flexible, tailor-made training programs in on-demand and niche technologies.",
    "Our operations are backed by strong global experience, having conducted training in over 20 countries in South East Asia, the Middle East, Africa, and Eastern Europe. We maintain strict compliance, being ISO 9001:2015 certified and fully registered with all statutory requirements such as GST, ESI, PF, Professional Tax, and Shops & Establishments.",
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
