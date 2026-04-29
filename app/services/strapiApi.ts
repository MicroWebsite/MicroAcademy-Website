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

export const fetchRecruitment = async (): Promise<JobPosition[]> => {
  const response = await strapiApi.get<JobPosition[]>("/api/recruitments");
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
