import { ChangeEvent, FormEvent } from "react";
import { UploadCloud } from "lucide-react";
import {
  DirectLateralHiringFormData,
  DirectLateralHiringFormErrors,
} from "@/app/types/directLateralHiringForm";

type ApplicationFormFieldsProps = {
  formData: DirectLateralHiringFormData;
  errors: DirectLateralHiringFormErrors;
  fileName: string;
  isSubmitting: boolean;
  onSubmit: (e: FormEvent) => Promise<void>;
  onChange: (field: keyof DirectLateralHiringFormData, value: string) => void;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ApplicationFormFields({
  formData,
  errors,
  fileName,
  isSubmitting,
  onSubmit,
  onChange,
  onFileChange,
}: ApplicationFormFieldsProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={`w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal border ${errors.firstName ? "border-red-500" : "border-transparent"}`}
          />
          {errors.firstName && (
            <span className="text-[10px] text-red-500 font-manrope mt-1">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={`w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal border ${errors.lastName ? "border-red-500" : "border-transparent"}`}
          />
          {errors.lastName && (
            <span className="text-[10px] text-red-500 font-manrope mt-1">
              {errors.lastName}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john.doe@executive.com"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={`w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal border ${errors.email ? "border-red-500" : "border-transparent"}`}
          />
          {errors.email && (
            <span className="text-[10px] text-red-500 font-manrope mt-1">
              {errors.email}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
            Contact Number
          </label>
          <input
            type="tel"
            placeholder="+91 00000 00000"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={`w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal border ${errors.phone ? "border-red-500" : "border-transparent"}`}
          />
          {errors.phone && (
            <span className="text-[10px] text-red-500 font-manrope mt-1">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
          Resume Upload
        </label>
        <label className="flex flex-col items-center justify-center gap-1 py-6 px-4 cursor-pointer transition-colors bg-bg-input-row border-2 border-dashed border-border-soft rounded-lg min-h-35">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onFileChange}
            className="hidden"
          />
          <UploadCloud className="w-10 h-10 text-text-muted-alt mb-2" />
          <p className="text-sm font-medium leading-4 text-text-muted-alt font-manrope text-center">
            {fileName || (
              <>
                <span className="font-bold">Drag and drop your CV</span> or{" "}
                <span className="text-primary underline">click to browse</span>
              </>
            )}
          </p>
          <p className="text-[10px] leading-3 opacity-70 text-text-muted-nav font-manrope">
            PDF, DOCX up to {errors.resume?.includes("5MB") ? "5MB" : "10MB"}
          </p>
        </label>
        {errors.resume && (
          <span className="text-[10px] text-red-500 font-manrope">
            {errors.resume}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
          Message / Cover Note
        </label>
        <textarea
          placeholder="Briefly describe your career objectives..."
          value={formData.message}
          onChange={(e) => onChange("message", e.target.value)}
          className="w-full px-3 py-2 text-sm outline-none resize-none bg-bg-input rounded-lg min-h-16 leading-5 text-text-dark font-manrope font-normal"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full flex items-center justify-center text-white font-extrabold hover:brightness-110 transition-all cursor-pointer bg-[#6A5F00] rounded-lg py-4 px-0 text-base leading-5 shadow-lg font-manrope disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
