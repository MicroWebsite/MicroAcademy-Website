import { ChangeEvent } from "react";

type ContactTextareaFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ContactTextareaField({
  id,
  name,
  label,
  placeholder,
  rows = 5,
  value,
  error,
  onChange,
}: ContactTextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark placeholder:text-text-label outline-none transition-all resize-none ${
          error
            ? "border-red-500 bg-red-50"
            : "border-border focus:border-primary focus:ring-1 focus:ring-primary/30"
        }`}
      />
      {error && (
        <span className="text-[10px] text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
}
