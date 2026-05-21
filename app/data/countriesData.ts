export interface Country {
  name: string;
  label: string;
  image: string;
  region: "Asia" | "Africa" | "Europe" | "Middle East";
}

export const countriesData: Country[] = [
  // Asia
  {
    name: "Bangladesh",
    label: "Active Programs",
    image: "/assets/home/countries/Bangladesh_flag.png",
    region: "Asia",
  },
  {
    name: "China",
    label: "Active Programs",
    image: "/assets/home/countries/China_flag.png",
    region: "Asia",
  },
  {
    name: "Hong Kong",
    label: "Active Programs",
    image: "/assets/home/countries/Hong_Kong_flag.png",
    region: "Asia",
  },
  {
    name: "Indonesia",
    label: "Active Programs",
    image: "/assets/home/countries/Indonesia_flag.png",
    region: "Asia",
  },
  {
    name: "Korea",
    label: "Active Programs",
    image: "/assets/home/countries/Korea_flag.png",
    region: "Asia",
  },
  {
    name: "Malaysia",
    label: "Active Programs",
    image: "/assets/home/countries/Malaysia_flag.png",
    region: "Asia",
  },
  {
    name: "Singapore",
    label: "Active Programs",
    image: "/assets/home/countries/Singapore_flag.png",
    region: "Asia",
  },
  {
    name: "Philippines",
    label: "Active Programs",
    image: "/assets/home/countries/Philippines_flag.png",
    region: "Asia",
  },

  // Africa
  {
    name: "Ethiopia",
    label: "Active Programs",
    image: "/assets/home/countries/Ethiopia_flag.png",
    region: "Africa",
  },
  {
    name: "Ghana",
    label: "Active Programs",
    image: "/assets/home/countries/Ghana_flag.png",
    region: "Africa",
  },
  {
    name: "Nigeria",
    label: "Active Programs",
    image: "/assets/home/countries/Nigeria_flag.png",
    region: "Africa",
  },
  {
    name: "South Africa",
    label: "Active Programs",
    image: "/assets/home/countries/South_Africa_flag.png",
    region: "Africa",
  },
  {
    name: "Uganda",
    label: "Active Programs",
    image: "/assets/home/countries/Uganda_flag.png",
    region: "Africa",
  },

  // Europe
  {
    name: "Bulgaria",
    label: "Active Programs",
    image: "/assets/home/countries/Bulgaria_flag.png",
    region: "Europe",
  },
  {
    name: "Romania",
    label: "Active Programs",
    image: "/assets/home/countries/Romania_flag.png",
    region: "Europe",
  },
  {
    name: "Turkey",
    label: "Active Programs",
    image: "/assets/home/countries/Turkey_flag.png",
    region: "Europe",
  },

  // Middle East
  {
    name: "Bahrain",
    label: "Active Programs",
    image: "/assets/home/countries/Bahrain_flag.png",
    region: "Middle East",
  },
  {
    name: "Saudi Arabia",
    label: "Active Programs",
    image: "/assets/home/countries/Saudi_Arabia_flag.png",
    region: "Middle East",
  },
  {
    name: "Sultanate of Oman",
    label: "Active Programs",
    image: "/assets/home/countries/Sultanate_of_Oman_flag.png",
    region: "Middle East",
  },
  {
    name: "United Arab Emirates",
    label: "Active Programs",
    image: "/assets/home/countries/United_Arab_Emirates_flag.png",
    region: "Middle East",
  },
];
