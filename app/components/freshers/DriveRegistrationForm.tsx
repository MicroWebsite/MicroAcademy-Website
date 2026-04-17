'use client';

import { useToast } from '@/app/context/ToastContext';
import { validateEmail, validateFile, validatePhone, validateRequired } from '@/app/utils/validation';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface RegistrationFormProps {
  domainTitle: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function DriveRegistrationForm({ domainTitle }: RegistrationFormProps) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Numeric only for phone
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const error = validateFile(file, 'Resume');
      if (error) {
        setErrors(prev => ({ ...prev, resume: error }));
        setResume(null);
      } else {
        setResume(file);
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.resume;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};

    const firstNameErr = validateRequired(formData.firstName, 'First Name');
    if (firstNameErr) newErrors.firstName = firstNameErr;

    const lastNameErr = validateRequired(formData.lastName, 'Last Name');
    if (lastNameErr) newErrors.lastName = lastNameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const resumeErr = validateFile(resume, 'Resume');
    if (resumeErr) newErrors.resume = resumeErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    try {
      const body = new FormData();
      body.append('firstName', formData.firstName);
      body.append('lastName', formData.lastName);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('domain', domainTitle);
      if (resume) body.append('resume', resume);

      const res = await fetch('/api/freshers-drive', {
        method: 'POST',
        body,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      showToast('Your application has been submitted successfully!', 'success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      setResume(null);

      // Reset status after delay
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      const msg = err.message || 'Something went wrong. Please try again.';
      showToast(msg, 'error');
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-14 shadow-[0_4px_40px_rgba(0,0,0,0.06)] border border-[#E2E0D4]">
      <div className="text-center max-w-lg mx-auto mb-12">
        <h2 className="text-4xl font-bold text-[#1B1C19] mb-4">Register Interest</h2>
        <p className="text-[#666] leading-relaxed">
          Submit your professional profile for immediate consideration in the drive.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-extrabold tracking-widest text-[#666] uppercase">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-5 py-4 rounded-xl bg-[#F5F4EE] border outline-none transition-all ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00]'
                }`}
            />
            {errors.firstName && <span className="text-xs text-red-500">{errors.firstName}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-extrabold tracking-widest text-[#666] uppercase">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-5 py-4 rounded-xl bg-[#F5F4EE] border outline-none transition-all ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00]'
                }`}
            />
            {errors.lastName && <span className="text-xs text-red-500">{errors.lastName}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-extrabold tracking-widest text-[#666] uppercase">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="email@university.edu"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-5 py-4 rounded-xl bg-[#F5F4EE] border outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00]'
                }`}
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-extrabold tracking-widest text-[#666] uppercase">Contact Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="00000 00000"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-5 py-4 rounded-xl bg-[#F5F4EE] border outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] focus:border-[#6A5F00]'
                }`}
            />
            {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-extrabold tracking-widest text-[#666] uppercase">Resume Upload</label>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-[#6A5F00]'); }}
            onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove('border-[#6A5F00]'); }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove('border-[#6A5F00]');
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                const file = e.dataTransfer.files[0];
                const error = validateFile(file, 'Resume');
                if (error) setErrors(prev => ({ ...prev, resume: error }));
                else { setResume(file); setErrors(prev => { const n = { ...prev }; delete n.resume; return n; }); }
              }
            }}
            className={`w-full border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${errors.resume ? 'border-red-500 bg-red-50' : 'border-[#E2E0D4] bg-[#F9F9F7] hover:border-[#6A5F00]'
              }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#6A5F00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[#1B1C19] font-bold">
                {resume ? resume.name : 'Click to upload or drag and drop'}
              </p>
              <p className="text-xs text-[#999] mt-1">PDF, DOCX (MAX. 5MB)</p>
            </div>
          </div>
          {errors.resume && <span className="text-xs text-red-500">{errors.resume}</span>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-5 rounded-2xl bg-[#5C5E00] text-white text-lg font-bold hover:bg-[#4a4c00] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#5C5E00]/20"
        >
          {status === 'loading' ? 'Submitting Application...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
