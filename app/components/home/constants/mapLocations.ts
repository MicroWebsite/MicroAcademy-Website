export interface MapLocation {
  name: string;
  coordinates: [number, number];
  labelOffset: [number, number];
}

export const mapLocations: MapLocation[] = [
  { name: "Bulgaria", coordinates: [25.48, 42.73], labelOffset: [-65, -25] },
  { name: "Romania", coordinates: [24.97, 45.94], labelOffset: [-65, -5] },
  { name: "Turkey", coordinates: [35.24, 38.96], labelOffset: [-5, -40] },
  {
    name: "United Arab Emirates",
    coordinates: [53.85, 23.42],
    labelOffset: [-5, -45],
  },
  { name: "Bahrain", coordinates: [50.56, 26.07], labelOffset: [-50, -18] },
  { name: "Saudi Arabia", coordinates: [45.08, 23.89], labelOffset: [-45, 35] },
  {
    name: "Sultanate of Oman",
    coordinates: [58.92, 21.47],
    labelOffset: [45, 25],
  },
  { name: "Ghana", coordinates: [-1.02, 7.95], labelOffset: [-60, 5] },
  { name: "Nigeria", coordinates: [8.68, 9.08], labelOffset: [-60, -30] },
  { name: "Ethiopia", coordinates: [40.49, 9.15], labelOffset: [50, 15] },
  { name: "Uganda", coordinates: [32.29, 1.37], labelOffset: [50, 40] },
  { name: "South Africa", coordinates: [25.05, -29.09], labelOffset: [0, 40] },
  { name: "China", coordinates: [104.2, 35.86], labelOffset: [0, -45] },
  { name: "Bangladesh", coordinates: [90.36, 23.69], labelOffset: [-45, -30] },
  { name: "Korea", coordinates: [127.77, 35.91], labelOffset: [55, -30] },
  { name: "Hong Kong", coordinates: [114.17, 22.32], labelOffset: [65, -5] },
  { name: "Philippines", coordinates: [121.77, 12.88], labelOffset: [65, 15] },
  { name: "Singapore", coordinates: [103.82, 1.35], labelOffset: [65, 35] },
  { name: "Malaysia", coordinates: [101.98, 4.21], labelOffset: [65, 55] },
  { name: "Indonesia", coordinates: [113.92, -0.79], labelOffset: [-10, 50] },
];
