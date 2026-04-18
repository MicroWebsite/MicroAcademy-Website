import { RecruitmentPosition } from "@/app/data/recruitmentPageData";

export type RecruitmentFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

export type RecruitmentFormErrors = Record<string, string>;

export type RecruitmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPosition: RecruitmentPosition | null;
};
