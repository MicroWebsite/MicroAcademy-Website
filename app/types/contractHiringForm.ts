import { ContractPosition } from "@/app/data/contractHiringPageData";

export type ContractFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

export type ContractModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPosition: ContractPosition | null;
};
