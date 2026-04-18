export type TrainAndHireStep = {
  icon: "users" | "bookOpen" | "handshake";
  title: string;
  description: string;
  highlighted: boolean;
};

export const trainAndHireSteps: TrainAndHireStep[] = [
  {
    icon: "users",
    title: "Precision Selection",
    description:
      "We identify raw potential through rigorous cognitive and cultural assessments, selecting only the top 5% of candidates.",
    highlighted: false,
  },
  {
    icon: "bookOpen",
    title: "Customized Training",
    description:
      "Tailored curriculum designed around your tech stack, domain expertise, and company culture for maximum impact.",
    highlighted: true,
  },
  {
    icon: "handshake",
    title: "Seamless Hiring",
    description:
      "A friction-less transition from academy to enterprise, with full administrative and onboarding support.",
    highlighted: false,
  },
];

export type WhyPoint = {
  title: string;
  description: string;
};

export const trainAndHireWhyPoints: WhyPoint[] = [
  {
    title: "Zero Hiring Risk",
    description:
      "Pre-trained, pre-assessed talent eliminates the uncertainty of traditional recruitment and reduces onboarding time by 60%.",
  },
  {
    title: "Industry-Ready Talent",
    description:
      "Our graduates arrive equipped with the exact technical and soft skills your projects demand, from day one on the job.",
  },
  {
    title: "Scalable Workforce",
    description:
      "Whether you need 5 or 500 professionals, our pipeline adapts to meet your growth trajectory without compromising quality.",
  },
];
