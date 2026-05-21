import { DirectLateralHiringPosition } from "@/app/data/directLateralHiringPageData";
import { JobPosition } from "./drupal";

export type DirectLateralHiringFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

export type DirectLateralHiringFormErrors = Record<string, string>;

export type DirectLateralHiringModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPosition: DirectLateralHiringPosition | JobPosition | null;
};
