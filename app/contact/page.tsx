import { Metadata } from "next";
import HomeTemplate from "../components/common/HeroSection";
import ContactForm from "../components/contact/ContactForm";
import OfficeDetails from "../components/contact/OfficeDetails";
import GoogleMap from "../components/contact/GoogleMap";
import { contactHeroData } from "../data/contactHeroData";

export const metadata: Metadata = {
    title: "Contact Us | MicroAcademy",
    description:
        "Get in touch with MicroAcademy. Reach out for enquiries about our corporate training programs, workforce solutions, and more.",
};

export default function ContactPage() {
    return (
        <>
            <HomeTemplate heroContent={contactHeroData} />
            <section className="w-full bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <OfficeDetails />
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
