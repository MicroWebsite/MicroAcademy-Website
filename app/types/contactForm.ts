export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactSubmitStatus = "idle" | "loading" | "success" | "error";

export type ContactFormErrors = Record<string, string>;
