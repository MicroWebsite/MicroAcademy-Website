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
      icon: "/assets/career/career1.svg",
      title: "Learning Management System",
      description:
        "Comprehensive tracking with batch-wise/individual reports, remote access to reference materials, scheduling, and structured assessments.",
    },
    {
      id: "assessment-support",
      icon: "/assets/career/career2.svg",
      title: "Support via Assessment",
      description:
        "Knowledge and software-based assessments, technical presentations, capstone projects, and Micro Academy course completion certification.",
    },
    {
      id: "technical-labs",
      icon: "/assets/career/career3.svg",
      title: "Technical Lab Support",
      description:
        "Dedicated technical lab environments available during and after training hours, with lab support persisting post-completion of the program.",
    },
    {
      id: "counselling",
      icon: "/assets/career/career1.svg",
      title: "Counselling and Guidance",
      description:
        "Continuous performance monitoring with timely corrective actions, counselling, and guidance backed by our pan-India sourcing network and large pool of SMEs.",
    },
  ],
};
