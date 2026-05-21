export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "1995",
    title: "Founded",
    description:
      "Established Micro Academy as a premier corporate training engine, engineering high-impact talent development frameworks for early digital architectures.",
    side: "left",
  },
  {
    year: "2003",
    title: "Trusted Training Partner",
    description:
      "Cemented tier-1 strategic partnerships, delivering enterprise-scale deep-tech training for industry leaders like Wipro, HP, IBM, Sun Microsystems, and Rational Software.",
    side: "right",
  },
  {
    year: "2005",
    title: "Train and Hire",
    description:
      "Engineered and scaled disruptive, end-to-end 'Train & Hire' models, pioneering accelerated bootcamps to deploy deployment-ready engineering cohorts.",
    side: "left",
  },
  {
    year: "2008",
    title: "Direct/lateral Hiring & Contract Hiring",
    description:
      "Expanded full-lifecycle talent capabilities, launching specialized direct/lateral hiring and agile contract staffing solutions to close high-end engineering gaps.",
    side: "right",
  },
  {
    year: "2013",
    title: "ISO Certified",
    description:
      "Achieved rigorous ISO certification, institutionalizing world-class quality management, pedagogical standards, and operational excellence.",
    side: "left",
  },
  {
    year: "2019",
    title: "Online Training",
    description:
      "Catalyzed a digital revolution by launching high-fidelity online learning platforms integrated with simulated Cloud Labs for hands-on sandbox environments.",
    side: "right",
  },
];

export const timelineHeader = {
  title: "A Thirty-Year Genesis",
  subtitle: "The milestones that shaped a future-ready workforce.",
};
