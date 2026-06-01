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
      id: "direct-lateral-hiring",
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
          "From raw potential to industry mastery — we build the human infrastructure that drives organizational growth through curated, elite-level recruitment and headhunting.",
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
        "Micro Academy will source the candidates for the client. On selection by the client, the candidates will be on Micro Academy's payroll for the contract period. Client can directly hire the contracted resource during or after the contract period.",
      ctaLabel: "Explore Contract Hiring",
      ctaHref: "/services/contract-hiring",
      highlighted: false,
      heroData: {
        badge: "FLEXIBLE WORKFORCE SOLUTIONS",
        titleLine1: "Contract",
        titleAccent: "Hiring Solutions",
        description:
          "Deploy pre-trained, enterprise-ready contract IT professionals to scale your workforce dynamically, closing urgent skill gaps while minimizing attrition risks.",
        image: {
          src: "/assets/headers/Contract.png",
          alt: "Contract Hiring Solutions",
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
