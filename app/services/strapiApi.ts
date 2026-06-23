import strapiApi from "../lib/strapi";
import { GalleryItem, JobPosition, FresherDrive } from "../types/drupal";

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  const response = await strapiApi.get<GalleryItem[]>("/api/galleries");
  return response.data;
};

export const fetchDirectLateralHiring = async (): Promise<JobPosition[]> => {
  const response = await strapiApi.get<Record<string, unknown>[]>(
    "/api/direct-lateral-hirings",
  );
  return (response.data || []).map((job) => ({
    ...job,
    jobId: (job.jobId || job.job_id || "").toString().trim(),
    contractPeriod: (job.contractPeriod || job.contract_period || "")
      .toString()
      .trim(),
    location: (job.location || "").toString().trim(),
    experience: (job.experience || "").toString().trim(),
    education: (job.education || "").toString().trim(),
    title: (job.title || "").toString().trim(),
  }));
};

export const fetchContractHiring = async (): Promise<JobPosition[]> => {
  const response = await strapiApi.get<Record<string, unknown>[]>(
    "/api/contract-hirings",
  );
  return (response.data || []).map((job) => ({
    ...job,
    jobId: (job.jobId || job.job_id || "").toString().trim(),
    contractPeriod: (job.contractPeriod || job.contract_period || "")
      .toString()
      .trim(),
    location: (job.location || "").toString().trim(),
    experience: (job.experience || "").toString().trim(),
    education: (job.education || "").toString().trim(),
    title: (job.title || "").toString().trim(),
  }));
};

export const fetchFresherDrives = async (): Promise<FresherDrive[]> => {
  const response = await strapiApi.get<FresherDrive[]>("/api/fresher-drives");
  return response.data;
};

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
