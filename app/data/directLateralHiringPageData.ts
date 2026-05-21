export type DirectLateralHiringServiceCard = {
  icon: "briefcase" | "users";
  title: string;
  description: string;
};

export const directLateralHiringServiceCards: DirectLateralHiringServiceCard[] =
  [
    {
      icon: "users",
      title: "Permanent Hire",
      description:
        "Based on client requirements, Micro Academy will source the right candidate for the role, ensuring a perfect professional and organizational fit.",
    },
    {
      icon: "briefcase",
      title: "Contract to Hire",
      description:
        "Micro Academy will source the candidates for the client. On selection by the client, the candidates will be on Micro Academy’s payroll for the contract period. The client can directly hire the contracted resource during or after the contract period.",
    },
  ];

export type DirectLateralHiringPosition = {
  jobId: string;
  title: string;
  location: string;
  experience: string;
  education: string;
  type: "Full-Time";
};

export const directLateralHiringPositions: DirectLateralHiringPosition[] = [
  {
    jobId: "MC006",
    title: "Sr. Service Desk Analyst",
    location: "Chennai",
    experience: "3 - 10 Years",
    education: "Graduate / Under Graduate",
    type: "Full-Time",
  },
  {
    jobId: "MC002",
    title: "Recruiter",
    location: "Bangalore",
    experience: "1 Year",
    education: "Graduate",
    type: "Full-Time",
  },
  {
    jobId: "MC007",
    title: "Exchange and Windows AD",
    location: "Chennai",
    experience: "6 - 15 Years",
    education: "Graduate",
    type: "Full-Time",
  },
  {
    jobId: "MC008",
    title: "HR Operations Specialist",
    location: "Mumbai, India",
    experience: "2 - 5 Years",
    education: "Graduate",
    type: "Full-Time",
  },
];

export const directLateralHiringTableHeaders = [
  "Job ID",
  "Job Title",
  "Location",
  "Experience",
  "Education",
  "Action",
];

export const TABLE_GRID_COLUMNS = "1fr 2fr 1.5fr 1.5fr 1.8fr 1fr";
