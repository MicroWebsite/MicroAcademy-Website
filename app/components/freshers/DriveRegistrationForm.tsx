"use client";

import TextField from "./drive-registration/TextField";
import ResumeUploadField from "./drive-registration/ResumeUploadField";
import { useDriveRegistrationForm } from "./drive-registration/useDriveRegistrationForm";

interface RegistrationFormProps {
  domainTitle: string;
  onSuccess?: () => void;
}

export default function DriveRegistrationForm({
  domainTitle,
  onSuccess,
}: RegistrationFormProps) {
  const {
    errors,
    fileInputRef,
    formData,
    handleDrop,
    handleFileChange,
    handleInputChange,
    handleSubmit,
    resume,
    status,
  } = useDriveRegistrationForm(domainTitle, onSuccess);

  return (
    <div className="bg-white relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-14 shadow-[0_10px_60px_rgba(0,0,0,0.08)] border border-border">
      <div className="absolute top-0 right-0 w-48 h-48 bg-bg-cream-light rounded-full -mr-20 -mt-20 z-0" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            {domainTitle === "fresh enquiry"
              ? "Register for Future Drives"
              : "Begin Your Career Journey"}
          </h2>
          <p className="text-highlight-muted text-sm leading-relaxed font-medium">
            {domainTitle === "fresh enquiry"
              ? "Fill out the registration form below so we can keep in touch and fast-track you for upcoming placement drives."
              : `Fill out the registration form below to participate in the ${domainTitle}.`}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              error={errors.firstName}
              onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              error={errors.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField
              label="Email Address"
              name="email"
              type="email"
              placeholder="email@university.edu"
              value={formData.email}
              error={errors.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Contact Number"
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={formData.phone}
              error={errors.phone}
              onChange={handleInputChange}
            />
          </div>

          <ResumeUploadField
            fileName={resume?.name}
            error={errors.resume}
            fileInputRef={fileInputRef}
            onFileChange={handleFileChange}
            onDrop={handleDrop}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-5 mt-4 rounded-xl bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-base font-bold hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-primary/20 active:scale-[0.99]"
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
