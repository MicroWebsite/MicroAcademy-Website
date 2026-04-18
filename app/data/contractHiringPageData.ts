export type ContractBenefit = {
  icon: "clock" | "trendingUp" | "shield" | "briefcase";
  title: string;
  description: string;
};

export const contractBenefits: ContractBenefit[] = [
  {
    icon: "clock",
    title: "Rapid Deployment",
    description:
      "Bypass lengthy recruitment cycles. We provide vetted talent ready to onboard and contribute within 48 to 72 hours.",
  },
  {
    icon: "trendingUp",
    title: "Elastic Scalability",
    description:
      "Scale your engineering or operations teams up or down instantly based on project demands without overhead liabilities.",
  },
  {
    icon: "shield",
    title: "Compliance & Payroll",
    description:
      "We handle all statutory compliances, payroll management, and legal formalities, minimizing your administrative burden.",
  },
  {
    icon: "briefcase",
    title: "Niche Expertise on Demand",
    description:
      "Access highly specialized skills for short-term critical projects without committing to full-time hires.",
  },
];

export type ContractProcessStep = {
  title: string;
  description: string;
};

export const contractProcessSteps: ContractProcessStep[] = [
  {
    title: "Requirement Analysis",
    description:
      "We deeply understand your technical stack, project timeline, and specific gap requirements.",
  },
  {
    title: "Profile Sourcing & Curation",
    description:
      "Our talent engine identifies and pre-screens candidates from our ready-to-deploy talent pool.",
  },
  {
    title: "Client Interview",
    description:
      "You interview a curated shortlist of top-tier professionals to ensure cultural and technical fit.",
  },
  {
    title: "Rapid Onboarding",
    description:
      "We handle all paperwork and logistics, ensuring the candidate integrates seamlessly with your team.",
  },
];

export type ContractDomain = {
  icon: "cpu" | "target" | "briefcase" | "shield" | "users2" | "zap";
  name: string;
};

export const contractDomains: ContractDomain[] = [
  { icon: "cpu", name: "Software Engineering (Frontend/Backend)" },
  { icon: "target", name: "QA & Automation Testing" },
  { icon: "briefcase", name: "Project & Product Management" },
  { icon: "shield", name: "Cybersecurity & InfoSec" },
  { icon: "users2", name: "Data Engineering & Analytics" },
  { icon: "zap", name: "Cloud & DevOps Solutions" },
];

export type ContractPosition = {
  jobId: string;
  title: string;
  location: string;
  experience: string;
  education: string;
  type: "Contract";
};

export const contractPositions: ContractPosition[] = [
  {
    jobId: "MC101",
    title: "Senior React Developer",
    location: "Remote / Bangalore",
    experience: "5 - 8 Years",
    education: "B.E / B.Tech / MCA",
    type: "Contract",
  },
  {
    jobId: "MC102",
    title: "Node.js Backend Engineer",
    location: "Hyderabad",
    experience: "4 - 7 Years",
    education: "Graduate",
    type: "Contract",
  },
  {
    jobId: "MC103",
    title: "DevOps Architect",
    location: "Pune, India",
    experience: "8 - 12 Years",
    education: "Graduate",
    type: "Contract",
  },
  {
    jobId: "MC104",
    title: "QA Automation Lead",
    location: "Chennai",
    experience: "6 - 10 Years",
    education: "Graduate",
    type: "Contract",
  },
];

export const contractTableHeaders = [
  "Job ID",
  "Job Title",
  "Location",
  "Experience",
  "Education",
  "Action",
];

export const TABLE_GRID_COLUMNS = "1fr 2fr 1.5fr 1.5fr 1.8fr 1fr";
