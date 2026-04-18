export type RecruitmentServiceCard = {
  icon: "briefcase" | "users";
  title: string;
  description: string;
};

export const recruitmentServiceCards: RecruitmentServiceCard[] = [
  {
    icon: "briefcase",
    title: "Contractual Hiring Services",
    description:
      "Micro Academy provides agile, specialized staffing solutions for project-based requirements. We handle the complexities of short-term expert placement, ensuring your operations never miss a beat.",
  },
  {
    icon: "users",
    title: "Lateral Hiring Expertise",
    description:
      "Our strategic headhunting team focuses on middle to senior-level management transitions. We act as a surgical instrument in the talent market, identifying and securing leaders who align with your long-term vision.",
  },
];

export type RecruitmentPosition = {
  jobId: string;
  title: string;
  location: string;
  experience: string;
  education: string;
  type: "Full-Time";
};

export const recruitmentPositions: RecruitmentPosition[] = [
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

export const recruitmentTableHeaders = [
  "Job ID",
  "Job Title",
  "Location",
  "Experience",
  "Education",
  "Action",
];

export const TABLE_GRID_COLUMNS = "1fr 2fr 1.5fr 1.5fr 1.8fr 1fr";
