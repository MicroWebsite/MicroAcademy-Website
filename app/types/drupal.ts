export interface GalleryItem {
  id: number;
  title: string;
  images: string[];
}

export interface JobPosition {
  id?: string;
  job_id?: string;
  jobId?: string;
  title: string;
  location: string;
  education: string;
  experience?: string;
  type?: string;
}

export interface FresherDrive {
  title: string;
  image: string;
  description: string;
  domain: string;
  salary: string;
  location: string;
  designation: string;
  selection_process: string;
  training: string;
  academic_year: string;
  degree_requirement: string;
  minimum_aggregate: string;
  education_gap: string;
  core_competency: string;
  flexibility: string;
  notes: string;
  venue: string;
  landmark: string;
  contact: string;
}
