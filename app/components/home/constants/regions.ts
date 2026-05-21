export interface Region {
  name: string;
  scale: number;
  center: [number, number];
}

export const regions: Region[] = [
  { name: "All Regions", scale: 230, center: [55, 12] },
  { name: "Asia", scale: 420, center: [108, 15] },
  { name: "Middle East", scale: 580, center: [52, 24] },
  { name: "Africa", scale: 380, center: [22, 0] },
  { name: "Europe", scale: 500, center: [25, 45] },
];
