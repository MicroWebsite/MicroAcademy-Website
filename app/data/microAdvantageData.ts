export interface AdvantageItem {
  id: string;
  icon: string; // path to SVG/PNG icon
  title: string;
  description: string;
}

export const microAdvantageData = {
  sectionTag: "THE MICRO ADVANTAGE",
  heading: "Why Join Us",
  items: [
    {
      id: "professional-growth",
      icon: "/assets/career1.svg", // replace with your actual icon
      title: "Professional Growth",
      description:
        "Continuous learning paths designed for senior mastery and executive leadership. We don't just fill roles; we build careers.",
    },
    {
      id: "premium-benefits",
      icon: "/assets/career2.svg",
      title: "Premium Benefits",
      description:
        "Comprehensive healthcare, performance bonuses, and wellness programs designed for high-performance lifestyles.",
    },
    {
      id: "global-impact",
      icon: "/assets/career3.svg",
      title: "Global Impact",
      description:
        "Work on projects that influence global markets and professional standards across multiple industries.",
    },
  ],
};
