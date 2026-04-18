export type CardData = {
  id: number;
  icon: "Rocket" | "Eye" | "Sparkles";
  title: string;
  description: string;
};

export const missionVisionData: CardData[] = [
  {
    id: 1,
    icon: "Rocket",
    title: "Mission",
    description:
      "To empower global organizations by curating a legacy of elite, future-ready digital talent.",
  },
  {
    id: 2,
    icon: "Eye",
    title: "Vision",
    description:
      "To be the definitive global standard for workforce intelligence and strategic transformation.",
  },
  {
    id: 3,
    icon: "Sparkles",
    title: "Values",
    description:
      "Integrity in insight, precision in execution, and a relentless pursuit of human potential.",
  },
];
