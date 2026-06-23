"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type ContactDropdownFieldProps = {
  id: string;
  name: string;
  label: string;
  options: { label: string; value: string }[];
  value: string;
  error?: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
};

export default function ContactDropdownField({
  id,
  name,
  label,
  options,
  value,
  error,
  onChange,
}: ContactDropdownFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange({ target: { name, value: val } });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-1.5 relative w-full" ref={dropdownRef}>
      <label
        htmlFor={id}
        className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
      >
        {label}
      </label>

      {/* Hidden input for HTML form accessibility/compatibility */}
      <input type="hidden" name={name} id={id} value={value} />

      {/* Redesigned Premium Custom Dropdown Box */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark text-left outline-none transition-all duration-200 cursor-pointer ${
          error
            ? "border-red-500 bg-red-50 focus:ring-1 focus:ring-red-500/30"
            : "border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/30"
        } ${isOpen ? "border-primary ring-1 ring-primary/30 shadow-sm" : ""}`}
      >
        <span className="truncate">{value || "Select a service..."}</span>
        <ChevronDown
          className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {/* Custom Options List Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-border rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-1.5 z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="max-h-60 overflow-y-auto scrollbar-none">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-primary/10 text-primary font-bold cursor-default"
                      : "text-text-dark hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && (
        <span className="text-[10px] text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
}
