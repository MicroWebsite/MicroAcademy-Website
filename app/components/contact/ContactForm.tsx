"use client";

import ContactInputField from "./form/ContactInputField";
import ContactTextareaField from "./form/ContactTextareaField";
import SubmitButton from "./form/SubmitButton";
import { useContactForm } from "./form/useContactForm";
import SectionHeader from "../common/SectionHeader";

export default function ContactForm() {
  const { errors, formData, handleChange, handleSubmit, status } =
    useContactForm();

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <SectionHeader
        eyebrow="Contact Form"
        title="Send a Message"
        align="left"
        className="mb-8"
      />

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
