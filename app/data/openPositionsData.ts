export interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  isNew?: boolean;
}

export const openPositionsData = {
  heading: "Open Positions",
  subheading: "Find your place in our evolving ecosystem.",
  searchPlaceholder: "Search roles (e.g. Talent Acquisition)",
  jobs: [
    {
      id: "talent-acquisition-lead",
      title: "Talent Acquisition Lead",
      location: "London, UK",
      type: "Full-time",
      isNew: true,
    },
    {
      id: "receptionist-guest-experience",
      title: "Receptionist & Guest Experience",
      location: "Singapore",
      type: "Full-time",
      isNew: false,
    },
    {
      id: "learning-development-specialist",
      title: "Learning & Development Specialist",
      location: "Remote",
      type: "Full-time",
      isNew: false,
    },
    {
      id: "senior-hr-generalist",
      title: "Senior HR Generalist",
      location: "New York, USA",
      type: "Full-time",
      isNew: false,
    },
  ],
};
