import { Metadata } from "next";
import HomeTemplate from "../components/common/HeroSection";
import ContactForm from "../components/contact/ContactForm";
import OfficeDetails from "../components/contact/OfficeDetails";
import GoogleMap from "../components/contact/GoogleMap";
import { contactHeroData } from "../data/contactHeroData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Micro Academy. Reach out for enquiries about our corporate training programs, workforce solutions, and more.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <HomeTemplate heroContent={contactHeroData} />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-30">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <OfficeDetails />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-bg-white px-4 lg:px-8 pb-20 pt-10">
        <div className="max-w-7xl mx-auto">
          <GoogleMap />
        </div>
      </section>
    </>
  );
}
