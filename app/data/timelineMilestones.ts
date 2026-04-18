export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "1994",
    title: "The Foundation",
    description:
      "Micro Academy established as a pioneer in niche technology training, addressing the early digital gap.",
    side: "left",
  },
  {
    year: "2008",
    title: "Strategic Expansion",
    description:
      "Launched global corporate partnerships, transitioning from individual training to enterprise intelligence solutions.",
    side: "right",
  },
  {
    year: "2024",
    title: "The Future Narrative",
    description:
      "Pioneering AI-integrated curricula and curated talent pipelines for the next industrial era.",
    side: "left",
  },
];

export const timelineHeader = {
  title: "A Thirty-Year Genesis",
  subtitle: "The milestones that shaped a future-ready workforce.",
};
