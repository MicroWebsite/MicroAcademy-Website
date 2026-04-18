export type DriveFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type DriveFormErrors = Record<string, string>;

export type DriveFormStatus = "idle" | "loading" | "success" | "error";
