export interface AdvantageItem {
  id: string;
  icon: string; // path to SVG/PNG icon
  title: string;
  description: string;
}

export const microAdvantageData = {
  sectionTag: "THE MICRO ADVANTAGE",
  heading: "Our Core Value Adds",
  items: [
    {
      id: "lms",
      icon: "/assets/career/career1.svg", // Using existing icons for now, replace internally if needed
      title: "Learning Management System",
      description:
        "Comprehensive tracking with batch-wise/individual reports, reference materials, assignment scheduling, and rigorous assessments.",
    },
    {
      id: "assessment-support",
      icon: "/assets/career/career2.svg",
      title: "Support via Assessment",
      description:
        "Knowledge and software-based assessments alongside technical presentations, daily assignments, case studies, and capstone projects.",
    },
    {
      id: "technical-labs",
      icon: "/assets/career/career3.svg",
      title: "Technical Lab Support",
      description:
        "Dedicated technical labs available to candidates both during and after training hours to ensure hands-on mastery.",
    },
    {
      id: "counselling",
      icon: "/assets/career/career1.svg",
      title: "Counselling and Guidance",
      description:
        "Continuous performance monitoring with timely corrective actions and expert guidance provided throughout the training lifecycle.",
    },
  ],
};
