"use client";

import { useToast } from "@/app/context/ToastContext";
import {
  validateEmail,
  validateFile,
  validatePhone,
  validateRequired,
} from "@/app/utils/validation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface RegistrationFormProps {
  domainTitle: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function DriveRegistrationForm({
  domainTitle,
}: RegistrationFormProps) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const error = validateFile(file, "Resume");
      if (error) {
        setErrors((prev) => ({ ...prev, resume: error }));
        setResume(null);
      } else {
        setResume(file);
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.resume;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const firstNameErr = validateRequired(formData.firstName, "First Name");
    if (firstNameErr) newErrors.firstName = firstNameErr;

    const lastNameErr = validateRequired(formData.lastName, "Last Name");
    if (lastNameErr) newErrors.lastName = lastNameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const resumeErr = validateFile(resume, "Resume");
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
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
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

  return (
    <div className="bg-white relative overflow-hidden rounded-[2.5rem] p-10 lg:p-14 shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-bg-cream-light rounded-full -mr-20 -mt-20 z-0" />

      <div className="relative z-10">
        <div className="text-center max-w-md mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Submit Your Application
          </h2>
          <p className="text-highlight-muted text-sm leading-relaxed font-medium">
            Complete the form below with your professional profile for immediate
            consideration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-5 py-4 rounded-[1.25rem] bg-bg-input-alt border-none text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
                  errors.firstName
                    ? "ring-2 ring-red-500 bg-red-50"
                    : "focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.firstName && (
                <span className="text-[10px] text-red-500 font-medium px-1">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-5 py-4 rounded-[1.25rem] bg-bg-input-alt border-none text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
                  errors.lastName
                    ? "ring-2 ring-red-500 bg-red-50"
                    : "focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.lastName && (
                <span className="text-[10px] text-red-500 font-medium px-1">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@university.edu"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-5 py-4 rounded-[1.25rem] bg-bg-input-alt border-none text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
                  errors.email
                    ? "ring-2 ring-red-500 bg-red-50"
                    : "focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.email && (
                <span className="text-[10px] text-red-500 font-medium px-1">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-5 py-4 rounded-[1.25rem] bg-bg-input-alt border-none text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
                  errors.phone
                    ? "ring-2 ring-red-500 bg-red-50"
                    : "focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.phone && (
                <span className="text-[10px] text-red-500 font-medium px-1">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
              Resume Upload
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDragLeave={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  const file = e.dataTransfer.files[0];
                  const error = validateFile(file, "Resume");
                  if (error) setErrors((prev) => ({ ...prev, resume: error }));
                  else {
                    setResume(file);
                    setErrors((prev) => {
                      const n = { ...prev };
                      delete n.resume;
                      return n;
                    });
                  }
                }
              }}
              className={`w-full border-2 border-dashed rounded-[1.5rem] p-12 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${
                errors.resume
                  ? "border-red-500 bg-red-50"
                  : "border-border hover:border-primary bg-transparent"
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
              <div className="w-12 h-12 rounded-xl bg-bg-cream flex items-center justify-center text-primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3-3 3 3" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-text-dark font-bold text-sm">
                  {resume ? resume.name : "Click to upload or drag and drop"}
                </p>
                <p className="text-[10px] text-text-label-alt font-bold mt-1 uppercase tracking-tight">
                  PDF, DOCX (MAX. 5MB)
                </p>
              </div>
            </div>
            {errors.resume && (
              <span className="text-[10px] text-red-500 font-medium px-1">
                {errors.resume}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-5 mt-4 rounded-xl bg-primary text-white text-base font-bold hover:bg-primary-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-primary/20"
          >
            {status === "loading"
              ? "Submitting Application..."
              : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
