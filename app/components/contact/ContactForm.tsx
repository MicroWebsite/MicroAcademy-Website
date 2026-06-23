"use client";

import { useEffect } from "react";
import ContactInputField from "./form/ContactInputField";
import ContactDropdownField from "./form/ContactDropdownField";
import ContactTextareaField from "./form/ContactTextareaField";
import SubmitButton from "./form/SubmitButton";
import { useContactForm } from "./form/useContactForm";
import SectionHeader from "../common/SectionHeader";

const serviceOptions = [
  { label: "Direct/Lateral Hiring", value: "Direct/Lateral Hiring" },
  { label: "Contract Hiring", value: "Contract Hiring" },
  { label: "Train and Hire", value: "Train and Hire" },
  { label: "Corporate Training", value: "Corporate Training" },
  { label: "Other / General Inquiry", value: "Other / General Inquiry" },
];

export default function ContactForm() {
  const { errors, formData, handleChange, handleSubmit, status } =
    useContactForm();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("reason")) {
        const timer = setTimeout(() => {
          const element = document.getElementById("contact-form");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div
      id="contact-form"
      className="scroll-mt-24 md:scroll-mt-28 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
    >
      <SectionHeader title="Contact Form" align="left" className="mb-8" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <ContactInputField
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            error={errors.fullName}
            onChange={handleChange}
          />
          <ContactInputField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <ContactInputField
            id="phone"
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="+91 00000 00000"
            value={formData.phone}
            error={errors.phone}
            onChange={handleChange}
          />
          <ContactDropdownField
            id="reasonForContact"
            name="reasonForContact"
            label="Reason for Contact"
            options={serviceOptions}
            value={formData.reasonForContact}
            error={errors.reasonForContact}
            onChange={handleChange}
          />
        </div>

        <ContactTextareaField
          id="message"
          name="message"
          label="Your Message"
          placeholder="How can we help you?"
          value={formData.message}
          error={errors.message}
          onChange={handleChange}
        />

        <SubmitButton status={status} />
      </form>
    </div>
  );
}
