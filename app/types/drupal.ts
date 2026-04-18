export interface GalleryItem {
  id: number;
  images: string[];
}

export interface JobPosition {
  id?: string;
  job_id?: string;
  jobId?: string;
  title: string;
  location: string;
  education: string;
  apply_link: string;
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
  eligibility: string;
  notes: string;
  venue: string;
  landmark: string;
  contact: string;
}
