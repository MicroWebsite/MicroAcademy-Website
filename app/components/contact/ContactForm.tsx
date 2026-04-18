"use client";

import { useToast } from "@/app/context/ToastContext";
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from "@/app/utils/validation";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Numeric only for phone
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};

    const nameErr = validateRequired(formData.fullName, "Full Name");
    if (nameErr) newErrors.fullName = nameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const messageErr = validateRequired(formData.message, "Message");
    if (messageErr) newErrors.message = messageErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      showToast(
        "Message sent successfully! We'll get back to you soon.",
        "success",
      );
      setFormData({ fullName: "", email: "", phone: "", message: "" });

      // Reset status after 5s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to send message";
      showToast(msg, "error");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-8">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
                errors.fullName
                  ? "border-red-500 bg-red-50"
                  : "border-border focus:border-primary focus:ring-1 focus:ring-primary/30"
              }`}
            />
            {errors.fullName && (
              <span className="text-[10px] text-red-500 font-medium">
                {errors.fullName}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-border focus:border-primary focus:ring-1 focus:ring-primary/30"
              }`}
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 font-medium">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="000 000 0000"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark placeholder:text-text-label outline-none transition-all ${
              errors.phone
                ? "border-red-500 bg-red-50"
                : "border-border focus:border-primary focus:ring-1 focus:ring-primary/30"
            }`}
          />
          {errors.phone && (
            <span className="text-[10px] text-red-500 font-medium">
              {errors.phone}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-semibold tracking-[0.12em] uppercase text-primary"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-bg-cream border text-sm text-text-dark placeholder:text-text-label outline-none transition-all resize-none ${
              errors.message
                ? "border-red-500 bg-red-50"
                : "border-border focus:border-primary focus:ring-1 focus:ring-primary/30"
            }`}
          />
          {errors.message && (
            <span className="text-[10px] text-red-500 font-medium">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="self-start inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-btn-primary text-white text-sm font-semibold hover:bg-btn-primary-hover active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
