import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | MicroAcademy",
  description: "Terms and conditions for using MicroAcademy services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] pt-12 pb-24 px-6 sm:px-12 lg:px-24 text-black dark:text-white mt-2">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-manrope tracking-tight text-text-dark dark:text-white">
            Terms & Conditions
          </h1>
          <p className="text-lg text-text-muted-alt font-manrope dark:text-gray-400">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the MicroAcademy website and services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              2. Services Description
            </h2>
            <p>
              MicroAcademy provides IT training, skill development, and
              recruitment solutions. We reserve the right to modify, suspend, or
              discontinue any part of our services at any time without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              3. User Responsibilities
            </h2>
            <p>
              Users agree to provide accurate information when registering for
              our programs or services. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content, training materials, logos, and intellectual property
              displayed on this website are the property of MicroAcademy. You
              may not reproduce, distribute, or create derivative works without
              our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              5. Payment and Refunds
            </h2>
            <p>
              Fees for our training programs and services are clearly stated
              before enrollment. Refund policies vary by program and are
              outlined in specific program agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              MicroAcademy shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-manrope text-text-dark dark:text-white mt-8 mb-4">
              7. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
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
