export interface AdvantageItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const careerAdvantageData = {
  sectionTag: "THE MICRO ADVANTAGE",
  heading: "Why Join Us",
  items: [
    {
      id: "professional-growth",
      icon: "/assets/career/career1.svg",
      title: "Professional Growth",
      description:
        "Continuous learning paths designed for senior mastery and executive leadership. We don't just fill roles; we build careers.",
    },
    {
      id: "premium-benefits",
      icon: "/assets/career/career2.svg",
      title: "Premium Benefits",
      description:
        "Comprehensive healthcare, performance bonuses, and wellness programs designed for high-performance lifestyles.",
    },
    {
      id: "global-impact",
      icon: "/assets/career/career3.svg",
      title: "Global Impact",
      description:
        "Work on projects that influence global markets and professional standards across multiple industries.",
    },
  ],
};
