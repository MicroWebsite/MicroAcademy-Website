import { CellDef } from "@/app/types/lifeAtAcedemy";

export const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const shimmerVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const cells: CellDef[] = [
  { gridColumn: "1", gridRow: "1 / span 2" },
  { gridColumn: "2", gridRow: "1" },
  { gridColumn: "3", gridRow: "1" },
  { gridColumn: "4", gridRow: "1 / span 2" },
  { gridColumn: "2", gridRow: "2" },
  { gridColumn: "3", gridRow: "2" },
  { gridColumn: "1", gridRow: "3" },
  { gridColumn: "2 / span 2", gridRow: "3" },
  { gridColumn: "4", gridRow: "3" },
];
