export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface StatsSectionData {
  stats: Stat[];
}

export const statsData: StatsSectionData = {
  stats: [
    { id: "years", value: "30+", label: "YEARS EXPERIENCED" },
    { id: "trainings", value: "3500+", label: "TRAININGS DELIVERED" },
    { id: "people", value: "25000+", label: "PEOPLE TRAINED" },
    { id: "clients", value: "30+", label: "CLIENTS GLOBALLY" },
  ],
};
