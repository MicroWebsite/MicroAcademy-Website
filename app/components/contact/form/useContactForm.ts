import { ChangeEvent, FormEvent, useState, useEffect } from "react";
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
  reasonForContact: "General Enquiry",
  message: "",
};

const reasonMapping: Record<string, string> = {
  recruitment: "Recruitment",
  "train-and-hire": "Training",
  "corporate-training": "Training",
  other: "General Enquiry",
};

export function useContactForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactSubmitStatus>("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const reasonParam = params.get("reason");
      if (reasonParam && reasonMapping[reasonParam]) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData((prev) => ({
          ...prev,
          reasonForContact: reasonMapping[reasonParam],
        }));
      }
    }
  }, []);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | { target: { name: string; value: string } },
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
    const reasonErr = validateRequired(
      formData.reasonForContact,
      "Reason for Contact",
    );
    const messageErr = validateRequired(formData.message, "Message");

    if (nameErr) newErrors.fullName = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (reasonErr) newErrors.reasonForContact = reasonErr;
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
      showToast("Message sent successfully!", "success");
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
