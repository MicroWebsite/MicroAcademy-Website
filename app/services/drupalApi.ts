import drupalApi from "../lib/axios";
import { GalleryItem, JobPosition, FresherDrive } from "../types/drupal";

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  const response = await drupalApi.get<GalleryItem[]>("/api/gallery");
  return response.data;
};

export const fetchCareers = async (): Promise<JobPosition[]> => {
  const response = await drupalApi.get<JobPosition[]>("/api/careers");
  return response.data;
};

export const fetchLateralHiring = async (): Promise<JobPosition[]> => {
  const response = await drupalApi.get<JobPosition[]>("/api/lateral-hiring");
  return response.data;
};

export const fetchContractHiring = async (): Promise<JobPosition[]> => {
  const response = await drupalApi.get<JobPosition[]>("/api/contract-hiring");
  return response.data;
};

export const fetchFresherDrives = async (): Promise<FresherDrive[]> => {
  const response = await drupalApi.get<FresherDrive[]>("/api/fresher-drive");
  return response.data;
};
