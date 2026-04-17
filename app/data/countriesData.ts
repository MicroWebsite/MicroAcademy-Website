export interface Country {
  name: string;
  label: string;
  image: string;
  region: "Asia" | "Africa" | "Europe" | "Middle East";
}

export const countriesData: Country[] = [
  // Asia
  { name: "Bangladesh", label: "Active Programs", image: "/assets/Bangladesh_flag.png", region: "Asia" },
  { name: "China", label: "Active Programs", image: "/assets/China_flag.png", region: "Asia" },
  { name: "Hong Kong", label: "Active Programs", image: "/assets/Hong_Kong_flag.png", region: "Asia" },
  { name: "Indonesia", label: "Active Programs", image: "/assets/Indonesia_flag.png", region: "Asia" },
  { name: "Korea", label: "Active Programs", image: "/assets/Korea_flag.png", region: "Asia" },
  { name: "Malaysia", label: "Active Programs", image: "/assets/Malaysia_flag.png", region: "Asia" },
  { name: "Singapore", label: "Active Programs", image: "/assets/Singapore_flag.png", region: "Asia" },

  // Africa
  { name: "Ethiopia", label: "Active Programs", image: "/assets/Ethiopia_flag.png", region: "Africa" },
  { name: "Ghana", label: "Active Programs", image: "/assets/Ghana_flag.png", region: "Africa" },
  { name: "Nigeria", label: "Active Programs", image: "/assets/Nigeria_flag.png", region: "Africa" },
  { name: "South Africa", label: "Active Programs", image: "/assets/South_Africa_flag.png", region: "Africa" },
  { name: "Uganda", label: "Active Programs", image: "/assets/Uganda_flag.png", region: "Africa" },

  // Europe
  { name: "Bulgaria", label: "Active Programs", image: "/assets/Bulgaria_flag.png", region: "Europe" },
  { name: "Romania", label: "Active Programs", image: "/assets/Romania_flag.png", region: "Europe" },
  { name: "Turkey", label: "Active Programs", image: "/assets/Turkey_flag.png", region: "Europe" },

  // Middle East
  { name: "Bahrain", label: "Active Programs", image: "/assets/Bahrain_flag.png", region: "Middle East" },
  { name: "Saudi Arabia", label: "Active Programs", image: "/assets/Saudi_Arabia_flag.png", region: "Middle East" },
  { name: "Sultanate of Oman", label: "Active Programs", image: "/assets/Sultanate_of_Oman_flag.png", region: "Middle East" },
  { name: "United Arab Emirates", label: "Active Programs", image: "/assets/United_Arab_Emirates_flag.png", region: "Middle East" },
];
