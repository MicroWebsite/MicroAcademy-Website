import { Metadata } from "next";
import FreshersDriveContent from "../../components/freshers/FreshersDriveContent";

export const metadata: Metadata = {
  title: "Freshers Drive",
  description:
    "Explore upcoming freshers drives at MicroAcademy. Find eligibility criteria, job roles, and registration details for your career pathway.",
  alternates: {
    canonical: "/job-openings/freshers-drive",
  },
};

export default function FreshersDrive() {
  return <FreshersDriveContent />;
}
