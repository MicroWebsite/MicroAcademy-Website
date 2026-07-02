import { HeroProps } from "../types/hero";

export interface Capability {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  heroData: HeroProps;
}

export const capabilitiesData = {
  sectionTag: "OUR CORE CAPABILITIES",
  heading: "Tailored Solutions for IT Excellence",
  items: [
    {
      id: "train-hire",
      title: "Train and Hire",
      description:
        "We help address your need for 'Just in Time' hiring be it for fresh graduates. We source, screen, and train candidates on specialized technologies to make them day-one productive for the organization's requirements.",
      ctaLabel: "Explore Train and Hire",
      ctaHref: "/services/train-and-hire",
      highlighted: false,
      heroData: {
        badge: "MICRO ACADEMY EXCLUSIVE",
        titleLine1: "Train and Hire",
        titleAccent: "Model",
        description:
          "We transform raw talent into enterprise-ready professionals through our proprietary training methodology, delivering pre-vetted, job-ready candidates.",
        image: {
          src: "/assets/headers/train.png",
          alt: "Train and Hire Program at Micro Academy",
        },
      },
    },
    {
      id: "recruitment",
      title: "Recruitment",
      description:
        "End-to-end recruitment solutions — from direct/lateral hiring to contract staffing. We cater to all your IT recruitment requirements with a strong technical team, helping you find the best-suited candidates for your organization.",
      ctaLabel: "Explore Recruitment",
      ctaHref: "/services/recruitment",
      highlighted: true,
      heroData: {
        badge: "Recruitment Excellence",
        titleLine1: "Strategic Talent",
        titleAccent: "Solutions",
        description:
          "From strategic direct hires to agile contract staffing — we build the responsive human infrastructure that drives organizational growth through elite-level recruitment and scalable workforce deployment.",
        image: {
          src: "/assets/headers/DirectLateralHiring.png",
          alt: "IT Recruitment and Hiring Services",
        },
      },
    },
    {
      id: "corporate-training",
      title: "Corporate Training",
      description:
        "Having been in the IT training domain for over 3 decades, we have with us instructors/consultants, who specialize in a wide range of technologies and have rich domain experience helping us customize your training requirement.",
      ctaLabel: "Explore Corporate Training",
      ctaHref: "/services/corporate-training",
      highlighted: true,
      heroData: {
        badge: "The Strategic Framework",
        titleLine1: "Strategic Skill",
        titleAccent: "Architecture",
        description:
          "We architect enterprise-grade training ecosystems that transform your workforce into a competitive advantage. Our ISO-certified methodology ensures measurable skill elevation across all technology domains.",
        image: {
          src: "/assets/headers/Corporate.png",
          alt: "Corporate Training Programs at Micro Academy",
        },
      },
    },
  ],
};
