import { Metadata } from "next";
import ServicesHero from "../components/services/ServicesHero";
import CoreCapabilities from "../components/home/CoreCapabilities";

export const metadata: Metadata = {
    title: "Services | MicroAcademy",
    description: "Explore our comprehensive suite of talent development and organizational transformation services.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <CoreCapabilities />
        </>
    );
}
