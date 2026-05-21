export type TrainAndHireStep = {
  icon:
    | "users"
    | "bookOpen"
    | "handshake"
    | "search"
    | "filter"
    | "checkCircle"
    | "briefcase";
  title: string;
  description: string;
  highlighted: boolean;
};

export const trainAndHireSteps: TrainAndHireStep[] = [
  {
    icon: "search",
    title: "Sourcing",
    description:
      "Candidates are strategically sourced and shortlisted based strictly on your precise technical and cultural criteria.",
    highlighted: false,
  },
  {
    icon: "filter",
    title: "Pre-Selection",
    description:
      "A rigorous pre-selection by your team, encompassing aptitude, technical capability, and HR round evaluations.",
    highlighted: true,
  },
  {
    icon: "bookOpen",
    title: "Training",
    description:
      "Pre-selected candidates undergo intensive, customized training with Micro Academy tailored exactly to your business needs.",
    highlighted: false,
  },
  {
    icon: "checkCircle",
    title: "Assessment",
    description:
      "Comprehensive final assessment conducted by your team to validate readiness before formal induction.",
    highlighted: true,
  },
  {
    icon: "briefcase",
    title: "Job Placement",
    description:
      "Selected candidates are smoothly boarded by the client as Full-Time Employees (FTE) or on a Contract-to-Hire (C2H) basis.",
    highlighted: false,
  },
];

export type WhyPoint = {
  title: string;
  description: string;
};

export const trainAndHireWhyPoints: WhyPoint[] = [
  {
    title: "Maximizing Cost Benefits",
    description:
      "Mitigate capital risk with zero employee costs during training. We handle recruitment and up-skilling, eliminating early attrition overheads.",
  },
  {
    title: "Hiring & Training Flexibility",
    description:
      "Offer customized and certified trainings under one roof. Hire candidates directly post-training or transition them smoothly via Contract-to-Hire (C2H).",
  },
  {
    title: "Necessity-Driven Standardization",
    description:
      "Standardize training curriculum across global locations. Only candidates meeting your strict post-training evaluation criteria are recruited.",
  },
  {
    title: "Seamless Enterprise Scalability",
    description:
      "Ramp up large delivery cohorts quickly in niche, hard-to-get skills. Deploy level 1 resources ready to perform from day one.",
  },
];

export type LMSFeature = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "BarChart3" | "BookOpen" | "Code2" | "GraduationCap" | "Calendar";
};

export const lmsFeatures: LMSFeature[] = [
  {
    id: "reports",
    title: "Batchwise & Individual Reports",
    subtitle: "Real-time Progress & Metrics",
    description:
      "Provides granular performance analytics covering student sprints, module proficiencies, capstone assessments, and continuous attendance tracking.",
    iconName: "BarChart3",
  },
  {
    id: "reference",
    title: "Reference Material",
    subtitle: "On-Demand Resource Access",
    description:
      "Hosts an extensive, persistent technical repository with high-fidelity PDFs, custom guides, and recorded developer video lectures accessible 24/7.",
    iconName: "BookOpen",
  },
  {
    id: "assignments",
    title: "Assignments & Capstones",
    subtitle: "Production-Simulated Projects",
    description:
      "Assigns daily industry-standard coding tasks, multi-layered real-world case studies, and extensive full-stack capstone projects.",
    iconName: "Code2",
  },
  {
    id: "assessments",
    title: "Milestone Assessments",
    subtitle: "Rigorous Capability Checks",
    description:
      "Conducts automated unit tests, comprehensive knowledge-based diagnostic exams, and technical interviews to validate candidate readiness.",
    iconName: "GraduationCap",
  },
  {
    id: "scheduling",
    title: "Session Scheduling",
    subtitle: "Cohort Coordination & Sync",
    description:
      "Facilitates seamless, automated scheduling of live classes, tech cohort check-ins, and individual assessments with calendar integrations.",
    iconName: "Calendar",
  },
];
