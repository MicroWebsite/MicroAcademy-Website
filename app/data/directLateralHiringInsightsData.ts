export type DirectLateralHiringExpertiseGroup = {
  title: string;
  icon: "crown" | "code2" | "layers" | "award" | "cpu";
  roles: string[];
};

export const directLateralHiringExpertiseGroups: DirectLateralHiringExpertiseGroup[] =
  [
    {
      title: "Hiring Expertise",
      icon: "award",
      roles: ["Entry Level", "Mid Level", "Senior Level", "Leadership"],
    },
    {
      title: "Core Competencies",
      icon: "cpu",
      roles: [
        "IT",
        "BFSI",
        "Engineering Services",
        "Automotive",
        "ERP",
        "Healthcare",
      ],
    },
  ];

export type DirectLateralHiringSource = {
  title: string;
  description: string;
};

export const directLateralHiringSources: DirectLateralHiringSource[] = [
  {
    title: "Major Hiring Portals",
    description:
      "Have access to all the major hiring portals to keep pipelines active across multiple skill bands.",
  },
  {
    title: "Advisory Recommendations",
    description:
      "For most of our leadership talent requirements, we have a panel of advisors from leading IT services companies who were in leadership positions with over 30 years of experience, who identify, recommend, and guide the right candidates.",
  },
  {
    title: "Associate Referrals",
    description:
      "References from the large pool of candidates whom we have sourced, trained, and placed since 1995, who are at different levels in various multinationals.",
  },
  {
    title: "Voluntary Applicants",
    description:
      "Having been in the industry for close to 3 decades, we receive many voluntary applications.",
  },
  {
    title: "Internal Searches",
    description:
      "Structured internal search workflows to quickly map profile-to-role alignment for urgent demands.",
  },
  {
    title: "Social Media & Networking",
    description:
      "Proactive engagement across professional networks and tech communities to attract high-quality passive candidates.",
  },
];

export const directLateralHiringAdvantages: string[] = [
  "3 decades in the IT Industry",
  "Multiple Sourcing channels",
  "Hiring Flexibility with multiple hiring models: Direct/Lateral Hire, Contract Hiring, Train to Hire",
  "Strong Technical Knowledge to help better understanding of client requirement",
  "Timely supply of resources at all levels",
];
