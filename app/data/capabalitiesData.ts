export interface Capability {
  id: string;
  icon:
    | "train-hire"
    | "recruitment"
    | "corporate-training"
    | "contract-to-hire";
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  image?: string;
  images?: string[];
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
    },
    {
      id: "recruitment",
      icon: "recruitment",
      title: "Recruitment Services",
      description:
        "With the help of a strong technical team, we are in a position to cater to all your IT requirements and help find the candidate best suited for your organization and job role.",
      ctaLabel: "Explore Recruitment Services",
      ctaHref: "/services/recruitment",
      highlighted: true,
      image: "/assets/Interview.svg",
    },
    {
      id: "contract-to-hire",
      icon: "contract-to-hire",
      title: "Contract to Hire",
      description:
        "MicroAcademy will source the candidates for the client. On selection by the client, the candidates will be on MicroAcademy's payroll for the contract period. Client can directly hire the contracted resource during or after the contract period.",
      ctaLabel: "Explore Contract to Hire",
      ctaHref: "/services/contract-to-hire",
      highlighted: false,
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
      images: ["/assets/Office.svg", "/assets/Workshop.svg"],
    },
  ],
};
