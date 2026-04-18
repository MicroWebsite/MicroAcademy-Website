"use client";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { X } from "lucide-react";
import { useToast } from "@/app/context/ToastContext";
import { JobPosition as StaticJobPosition } from "@/app/data/openPositionsData";
import { JobPosition as DrupalJobPosition } from "@/app/types/drupal";
import {
  validateEmail,
  validateFile,
  validatePhone,
  validateRequired,
} from "@/app/utils/validation";
import ApplicationFormFields, {
  CareerFormData,
  CareerFormErrors,
} from "./ApplicationFormFields";

type ApplicationFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPosition: StaticJobPosition | DrupalJobPosition | null;
};

export default function ApplicationFormModal({
  isOpen,
  onClose,
  selectedPosition,
}: ApplicationFormModalProps) {
  const [formData, setFormData] = useState<CareerFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState<CareerFormErrors>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (isOpen && selectedPosition) {
      setFormData((prev) => ({ ...prev, position: selectedPosition.title }));
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen, selectedPosition]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleFieldChange = (field: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: CareerFormErrors = {};
    const firstNameErr = validateRequired(formData.firstName, "First Name");
    const lastNameErr = validateRequired(formData.lastName, "Last Name");
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const resumeErr = validateFile(resumeFile, "Resume");

    if (firstNameErr) newErrors.firstName = firstNameErr;
    if (lastNameErr) newErrors.lastName = lastNameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (resumeErr) newErrors.resume = resumeErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("message", formData.message);
      if (resumeFile) {
        formDataToSend.append("resume", resumeFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      showToast("Application submitted successfully!", "success");
      onClose();
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: selectedPosition?.title || "",
        message: "",
      });
      setResumeFile(null);
      setFileName("");
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        "Failed to submit application. Please try again later.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-opacity duration-300 bg-black/70 backdrop-blur-sm"
        style={{ opacity: isAnimating ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-h-[95vh] overflow-y-auto transition-all duration-300 ease-out max-w-[640px] bg-bg-cream-alt rounded-3xl shadow-2xl"
        style={{
          transform: isAnimating
            ? "translateY(0) scale(1)"
            : "translateY(40px) scale(0.97)",
          opacity: isAnimating ? 1 : 0,
        }}
      >
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110 cursor-pointer bg-text-dark/10 hover:bg-text-dark/20"
          >
            <X className="w-5 h-5 text-text-dark" />
          </button>
        </div>

        <div className="p-8 sm:p-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-text-dark font-manrope whitespace-nowrap">
                Apply for {selectedPosition?.title || "Position"}
              </h2>
              <p className="text-base text-text-muted-alt font-manrope">
                Complete the form to initiate our curated selection process.
              </p>
            </div>

            <ApplicationFormFields
              formData={formData}
              errors={errors}
              fileName={fileName}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
              onChange={handleFieldChange}
              onFileChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
