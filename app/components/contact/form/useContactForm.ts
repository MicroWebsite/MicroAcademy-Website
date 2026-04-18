import { ChangeEvent, FormEvent, useState } from "react";
import { useToast } from "@/app/context/ToastContext";
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from "@/app/utils/validation";
import {
  ContactFormData,
  ContactFormErrors,
  ContactSubmitStatus,
} from "@/app/types/contactForm";

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

export function useContactForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactSubmitStatus>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({ ...prev, [name]: nextValue }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: ContactFormErrors = {};
    const nameErr = validateRequired(formData.fullName, "Full Name");
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const messageErr = validateRequired(formData.message, "Message");

    if (nameErr) newErrors.fullName = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
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
      setFormData(initialFormData);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to send message";
      showToast(msg, "error");
    }
  };

  return {
    errors,
    formData,
    handleChange,
    handleSubmit,
    status,
  };
}
