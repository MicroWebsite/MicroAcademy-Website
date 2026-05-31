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
  heading: "Comprehensive Talent & Learning Solutions",
  items: [
    {
      id: "train-hire",
      title: "Train and Hire",
      description:
        "We source, assess, train, and deploy candidates based on your business requirements. Our Train and Hire model enables organizations to build a skilled workforce in niche technologies while reducing recruitment and training costs.",
      ctaLabel: "Explore Train and Hire",
      ctaHref: "/services/train-and-hire",
      highlighted: false,
      heroData: {
        badge: "TRAIN • ASSESS • DEPLOY",
        titleLine1: "Train and",
        titleAccent: "Hire",
        description:
          "From sourcing and assessment to customized technical training and final deployment, we deliver job-ready professionals aligned to your business needs.",
        image: {
          src: "/assets/headers/train.png",
          alt: "Train and Hire Program at Micro Academy",
        },
      },
    },
    {
      id: "direct-lateral-hiring",
      title: "Direct/Lateral Hiring",
      description:
        "Leveraging multiple sourcing channels, industry networks, advisory recommendations, and three decades of IT expertise, we help organizations hire the right talent across entry-level, mid-level, senior, and leadership positions.",
      ctaLabel: "Explore Direct/Lateral Hiring",
      ctaHref: "/services/direct-lateral-hiring",
      highlighted: true,
      heroData: {
        badge: "IT RECRUITMENT SPECIALISTS",
        titleLine1: "Direct/Lateral",
        titleAccent: "Hiring",
        description:
          "From software engineers and cloud specialists to architects and CXOs, we identify and deliver top-tier technology talent for long-term success.",
        image: {
          src: "/assets/headers/DirectLateralHiring.png",
          alt: "IT Recruitment and Direct/Lateral Hiring Services",
        },
      },
    },
    {
      id: "contract-hiring",
      title: "Contract Hiring",
      description:
        "We source and deploy skilled professionals on Micro Academy's payroll for the contract duration, providing clients with flexibility to directly absorb resources during or after the engagement period.",
      ctaLabel: "Explore Contract Hiring",
      ctaHref: "/services/contract-hiring",
      highlighted: false,
      heroData: {
        badge: "FLEXIBLE WORKFORCE SOLUTIONS",
        titleLine1: "Contract",
        titleAccent: "Hiring",
        description:
          "Scale your teams quickly with pre-screened IT professionals while retaining the flexibility to convert high-performing talent into full-time employees.",
        image: {
          src: "/assets/headers/Contract.png",
          alt: "Contract Hiring Staffing Solutions",
        },
      },
    },
    {
      id: "corporate-training",
      title: "Corporate Training",
      description:
        "With over 30 years of learning and development expertise, we deliver customized corporate, technical, certification-oriented, and soft-skills training programs across emerging and enterprise technologies.",
      ctaLabel: "Explore Corporate Training",
      ctaHref: "/services/corporate-training",
      highlighted: true,
      heroData: {
        badge: "30 YEARS OF LEARNING EXCELLENCE",
        titleLine1: "Corporate",
        titleAccent: "Training",
        description:
          "Empower your workforce with industry-relevant training in AI, Cloud, Cybersecurity, Full Stack Development, System Administration, Leadership, and more.",
        image: {
          src: "/assets/headers/Corporate.png",
          alt: "Corporate Training Programs at Micro Academy",
        },
      },
    },
  ],
};
