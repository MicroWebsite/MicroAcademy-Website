export interface JobPosition {
  id: string;
  jobId: string;
  title: string;
  location: string;
  education: string;
  type: string;
  isNew?: boolean;
}

export const openPositionsData = {
  heading: "Open Positions",
  subheading: "Find your place in our evolving ecosystem.",
  jobs: [
    {
      id: "talent-acquisition-lead",
      jobId: "MC-HR-01",
      title: "Talent Acquisition Lead",
      location: "London, UK",
      education: "MBA (HR) / Post Graduate",
      type: "Full-time",
      isNew: true,
    },
    {
      id: "receptionist-guest-experience",
      jobId: "MC-OPS-02",
      title: "Receptionist & Guest Experience",
      location: "Singapore",
      education: "Graduate",
      type: "Full-time",
      isNew: false,
    },
    {
      id: "learning-development-specialist",
      jobId: "MC-L&D-03",
      title: "Learning & Development Specialist",
      location: "Remote",
      education: "Post Graduate / Certified Professional",
      type: "Full-time",
      isNew: false,
    },
    {
      id: "senior-hr-generalist",
      jobId: "MC-HR-04",
      title: "Senior HR Generalist",
      location: "New York, USA",
      education: "Graduate / Post Graduate",
      type: "Full-time",
      isNew: false,
    },
  ],
};

export const careerTableHeaders = [
  "Job ID",
  "Job Title",
  "Location",
  "Education",
  "Action",
];

export const TABLE_GRID_COLUMNS = "1fr 2.5fr 1.5fr 2fr 1fr";
