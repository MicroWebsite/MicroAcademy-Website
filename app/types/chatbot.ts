import { JobPosition, FresherDrive } from "./drupal";

export type ChatMessage = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export type StrapiData = {
  careers: JobPosition[];
  directLateralHiring: JobPosition[];
  contractHiring: JobPosition[];
  fresherDrives: FresherDrive[];
  isLoaded: boolean;
};
