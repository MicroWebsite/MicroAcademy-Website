import { HeroProps } from "../types/hero";

export interface Capability {
  id: string;
  icon:
    | "train-hire"
    | "direct-lateral-hiring"
    | "corporate-training"
    | "contract-to-hire";
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  image?: string;
  images?: string[];
  heroData: HeroProps;
}

export const capabilitiesData: {
  sectionTag: string;
  heading: string;
  items: Capability[];
} = {
  sectionTag: "OUR CORE CAPABILITIES",
  heading: "Tailored Solutions for IT Excellence",
  items: [
    {
      id: "train-hire",
      icon: "train-hire",
      title: "Train and Hire Services",
      description:
        "We help address your need for 'Just in Time' hiring be it for fresh graduates or lateral.",
      ctaLabel: "Explore Train and Hire Services",
      ctaHref: "/services/train-and-hire",
      highlighted: false,
      heroData: {
        badge: "MICRO ACADEMY EXCLUSIVE",
        titleLine1: "Train to Hire",
        titleAccent: "Model",
        description:
          "We bridge the gap between raw talent and enterprise-ready professionals through our proprietary training methodology, delivering pre-vetted, job-ready candidates.",
        // primaryCTA: { label: "Partner With Us", href: "/contact" },
        // secondaryCTA: { label: "Explore Services", href: "/services" },
        image: {
          src: "/assets/headers/train.png",
          alt: "Authentic Technical Training Session at Micro Academy Bangalore",
        },
      },
    },
    {
      id: "direct-lateral-hiring",
      icon: "direct-lateral-hiring",
      title: "Direct/Lateral Hiring",
      description:
        "With the help of a strong technical team, we are in a position to cater to all your IT recruitment requirements and help find the candidate best suited for your organization and job role.",
      ctaLabel: "Explore Direct/Lateral Hiring",
      ctaHref: "/services/direct-lateral-hiring",
      highlighted: true,
      heroData: {
        badge: "Direct/Lateral Hiring Excellence",
        titleLine1: "Strategic Talent",
        titleAccent: "Architecture",
        description:
          "Bridging the gap between raw potential and industry mastery. We build the human infrastructure that drives organizational growth through curated, elite-level recruitment and headhunting.",
        // primaryCTA: { label: "Explore Services", href: "/contact" },
        // secondaryCTA: { label: "View Roles", href: "/services" },
        image: {
          src: "/assets/headers/DirectLateralHiring.png",
          alt: "Authentic Direct/Lateral Hiring Drive Event at Micro Academy",
        },
      },
    },
    {
      id: "contract-to-hire",
      icon: "contract-to-hire",
      title: "Contract to Hire",
      description:
        "Micro Academy will source the candidates for the client. On selection by the client, the candidates will be on Micro Academy's payroll for the contract period. Client can directly hire the contracted resource during or after the contract period.",
      ctaLabel: "Explore Contract to Hire",
      ctaHref: "/services/contract-hiring",
      highlighted: false,
      heroData: {
        badge: "AGILE STAFFING",
        titleLine1: "Contract",
        titleAccent: "Hiring Solutions",
        description:
          "Deploy pre-trained, enterprise-ready contract IT professionals to scale your workforce dynamically, bridging urgent skill gaps while minimizing attrition risks.",
        // primaryCTA: { label: "Hire Contractors", href: "/contact" },
        // secondaryCTA: { label: "Browse Roles", href: "/services" },
        image: {
          src: "/assets/headers/Contract.png",
          alt: "Diverse team at Micro Academy Bangalore office",
        },
      },
    },
    {
      id: "corporate-training",
      icon: "corporate-training",
      title: "Corporate Training",
      description:
        "Having been in the IT training domain for over 2 decades, we have with us instructors/consultants, who specialize in a wide range of technologies and have rich domain experience helping us customize your training requirement.",
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
          alt: "Corporate Training Facility at Micro Academy Bangalore",
        },
      },
    },
  ],
};
