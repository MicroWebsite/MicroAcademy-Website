import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from "react";
import { useToast } from "@/app/context/ToastContext";
import {
  validateEmail,
  validateFile,
  validatePhone,
  validateRequired,
} from "@/app/utils/validation";
import {
  DriveFormData,
  DriveFormErrors,
  DriveFormStatus,
} from "@/app/types/driveRegistrationForm";

const initialFormData: DriveFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export function useDriveRegistrationForm(domainTitle: string) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<DriveFormData>(initialFormData);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<DriveFormErrors>({});
  const [status, setStatus] = useState<DriveFormStatus>("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const clearFieldError = (name: string) => {
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const setValidatedResume = (file: File) => {
    const error = validateFile(file, "Resume");
    if (error) {
      setErrors((prev) => ({ ...prev, resume: error }));
      setResume(null);
      return;
    }

    setResume(file);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    clearFieldError(name);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setValidatedResume(e.target.files[0]);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      setValidatedResume(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: DriveFormErrors = {};

    const firstNameErr = validateRequired(formData.firstName, "First Name");
    const lastNameErr = validateRequired(formData.lastName, "Last Name");
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const resumeErr = validateFile(resume, "Resume");

    if (firstNameErr) newErrors.firstName = firstNameErr;
    if (lastNameErr) newErrors.lastName = lastNameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (resumeErr) newErrors.resume = resumeErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      const body = new FormData();
      body.append("firstName", formData.firstName);
      body.append("lastName", formData.lastName);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("domain", domainTitle);
      if (resume) body.append("resume", resume);

      const res = await fetch("/api/freshers-drive", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      showToast("Your application has been submitted successfully!", "success");
      setFormData(initialFormData);
      setResume(null);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      showToast(msg, "error");
    }
  };

  return {
    errors,
    fileInputRef,
    formData,
    handleDrop,
    handleFileChange,
    handleInputChange,
    handleSubmit,
    resume,
    status,
  };
}
