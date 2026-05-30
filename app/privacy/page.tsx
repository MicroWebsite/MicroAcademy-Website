import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Micro Academy",
  description: "Privacy policy and data handling practices for Micro Academy.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 text-black dark:text-white mt-2">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold font-manrope tracking-tight text-text-dark dark:text-white">
            Privacy Policy
          </h1>
        </div>

        <div className="max-w-none space-y-6 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              At Micro Academy, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our training and
              direct/lateral hiring services.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and professional details (resume, education) when
                you apply for courses or jobs.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including IP address, browser type, pages
                visited, and time spent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To provide and maintain our services.</li>
              <li>
                To evaluate your application for training programs or employment
                opportunities.
              </li>
              <li>
                To communicate with you regarding updates, offers, and services.
              </li>
              <li>To improve our website functionality and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal information to third parties. We may
              share your information with trusted partners (such as hiring
              companies) only with your explicit consent as part of our
              direct/lateral hiring and placement services.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. If you wish to exercise these rights, please contact
              us.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at:{" "}
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-block font-semibold"
              >
                Contact Us
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
