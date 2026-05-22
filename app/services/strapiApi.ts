import strapiApi from "../lib/strapi";
import { GalleryItem, JobPosition, FresherDrive } from "../types/drupal";

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  const response = await strapiApi.get<GalleryItem[]>("/api/galleries");
  return response.data;
};

export const fetchCareers = async (): Promise<JobPosition[]> => {
  const response = await strapiApi.get<JobPosition[]>("/api/careers");
  return response.data;
};

export const fetchDirectLateralHiring = async (): Promise<JobPosition[]> => {
  const response = await strapiApi.get<JobPosition[]>(
    "/api/direct-lateral-hirings",
  );
  return response.data;
};

export const fetchContractHiring = async (): Promise<JobPosition[]> => {
  const response = await strapiApi.get<JobPosition[]>("/api/contract-hirings");
  return response.data;
};

export const fetchFresherDrives = async (): Promise<FresherDrive[]> => {
  const response = await strapiApi.get<FresherDrive[]>("/api/fresher-drives");
  return response.data;
};

export interface AnnouncementData {
  badgeText?: string;
  text: string;
  linkText?: string;
  linkUrl?: string;
  isActive: boolean;
}

export interface NavigationSubLink {
  label: string;
  href: string;
}

export interface NavigationItem {
  id?: number;
  label: string;
  href: string;
  order?: number;
  subLinks?: NavigationSubLink[] | null;
}

export const fetchAnnouncement = async (): Promise<AnnouncementData | null> => {
  const response = await strapiApi.get<AnnouncementData | null>(
    "/api/announcement",
  );
  return response.data;
};
