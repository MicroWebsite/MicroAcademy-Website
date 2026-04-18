import { ChangeEvent } from "react";

type ContactInputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ContactInputField({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  error,
  onChange,
}: ContactInputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
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
