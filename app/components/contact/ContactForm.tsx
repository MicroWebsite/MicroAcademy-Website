'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { validateEmail, validatePhone, validateRequired } from '@/app/utils/validation';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
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
    
    const nameErr = validateRequired(formData.fullName, 'Full Name');
    if (nameErr) newErrors.fullName = nameErr;
    
    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;
    
    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;
    
    const messageErr = validateRequired(formData.message, 'Message');
    if (messageErr) newErrors.message = messageErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', message: '' });

      // Reset success message after 5s
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to send message'
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1C19] mb-8">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6A5F00]"
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
              className={`w-full px-4 py-3 rounded-lg bg-[#F5F4EE] border text-sm text-[#1B1C19] placeholder:text-[#9a9a9a] outline-none transition-all ${
                errors.fullName ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00] focus:ring-1 focus:ring-[#6A5F00]/30'
              }`}
            />
            {errors.fullName && <span className="text-[10px] text-red-500 font-medium">{errors.fullName}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6A5F00]"
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
              className={`w-full px-4 py-3 rounded-lg bg-[#F5F4EE] border text-sm text-[#1B1C19] placeholder:text-[#9a9a9a] outline-none transition-all ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00] focus:ring-1 focus:ring-[#6A5F00]/30'
              }`}
            />
            {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6A5F00]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 000-0000000"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#F5F4EE] border text-sm text-[#1B1C19] placeholder:text-[#9a9a9a] outline-none transition-all ${
              errors.phone ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00] focus:ring-1 focus:ring-[#6A5F00]/30'
            }`}
          />
          {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6A5F00]"
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
            className={`w-full px-4 py-3 rounded-lg bg-[#F5F4EE] border text-sm text-[#1B1C19] placeholder:text-[#9a9a9a] outline-none transition-all resize-none ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00] focus:ring-1 focus:ring-[#6A5F00]/30'
            }`}
          />
          {errors.message && <span className="text-[10px] text-red-500 font-medium">{errors.message}</span>}
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-50 border border-green-200">
            <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-green-700 font-medium">
              Message sent successfully! We&apos;ll get back to you soon.
            </span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200">
            <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-red-700 font-medium">
              {errorMessage}
            </span>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="self-start inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#5C5E00] text-white text-sm font-semibold hover:bg-[#4a4c00] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
