import { ChangeEvent } from "react";

type TextFieldProps = {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold tracking-[0.15em] text-text-label-alt uppercase px-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-5 py-4 rounded-[1.25rem] bg-bg-input-alt border-none text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
          error
            ? "ring-2 ring-red-500 bg-red-50"
            : "focus:ring-2 focus:ring-primary/20"
        }`}
      />
      {error && (
        <span className="text-[10px] text-red-500 font-medium px-1">
          {error}
        </span>
      )}
    </div>
  );
}
