import { ChangeEvent, DragEvent, RefObject } from "react";

type ResumeUploadFieldProps = {
  fileName?: string;
  error?: string;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
};

export default function ResumeUploadField({
  fileName,
  error,
  fileInputRef,
  onFileChange,
  onDrop,
}: ResumeUploadFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
        Resume Upload
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={`w-full border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${
          error
            ? "border-red-500 bg-red-50"
            : "border-border hover:border-primary bg-transparent"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileChange}
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
            {fileName || "Click to upload or drag and drop"}
          </p>
          <p className="text-[10px] text-text-label-alt font-bold mt-1 uppercase tracking-tight">
            PDF, DOCX (MAX. 5MB)
          </p>
        </div>
      </div>

      {error && (
        <span className="text-[10px] text-red-500 font-medium px-1">
          {error}
        </span>
      )}
    </div>
  );
}
