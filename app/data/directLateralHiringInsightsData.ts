export type DirectLateralHiringExpertiseGroup = {
  title: string;
  icon: "crown" | "code2" | "layers" | "award" | "cpu";
  roles: string[];
};

export const directLateralHiringExpertiseGroups: DirectLateralHiringExpertiseGroup[] =
  [
    {
      title: "Management and Leadership Positions",
      icon: "crown",
      roles: [
        "IT Director",
        "Chief Technology Officer (CTO)",
        "Chief Information Security Officer (CISO)",
        "Site / DC Head",
        "Head of Finance / Legal / Facilities",
      ],
    },
    {
      title: "Level 1 and 2 Tech Roles",
      icon: "code2",
      roles: ["Entry-Level Developer", "IT Support Specialist"],
    },
    {
      title: "Mid-Level (L3) Positions",
      icon: "layers",
      roles: [
        "Software Developer",
        "System Administrator",
        "Network Engineer",
        "Database Administrator",
      ],
    },
    {
      title: "Senior-Level Positions",
      icon: "award",
      roles: [
        "Senior Software / Systems Engineer",
        "Domain Specialist (ERP / CRM / Database)",
        "IT Manager / Program Manager / Solution Architect",
        "Quality and Compliance Managers",
      ],
    },
    {
      title: "Specialized Positions",
      icon: "cpu",
      roles: [
        "Data Scientist",
        "Cybersecurity Specialist",
        "Cloud Engineer",
        "DevOps Engineer",
        "Blockchain Specialist",
        "Web3 Engineer",
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
      "Access to all major hiring platforms to keep pipelines active across multiple skill bands.",
  },
  {
    title: "Advisory Recommendations",
    description:
      "Guidance from leadership advisors with 30+ years of IT experience to recommend role-fit candidates.",
  },
  {
    title: "Associate Referrals",
    description:
      "Strong referral network from candidates sourced, trained, and placed by us since 1995.",
  },
  {
    title: "Voluntary Applicants",
    description:
      "Steady inflow of direct applications built through long-standing industry presence and trust.",
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
  "3 decades in the IT industry",
  "Multiple sourcing channels",
  "Hiring flexibility: Permanent Hire, C2H, and T2H",
  "Strong technical knowledge to understand client requirements",
  "Timely supply of resources across levels",
];
