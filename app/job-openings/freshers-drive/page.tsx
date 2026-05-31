import { Metadata } from "next";
import FreshersDriveContent from "../../components/freshers/FreshersDriveContent";

export const metadata: Metadata = {
  title: "Freshers Hiring",
  description:
    "Explore upcoming freshers drives at Micro Academy. Find eligibility criteria, job roles, and registration details for your career pathway.",
  alternates: {
    canonical: "/job-openings/freshers-drive",
  },
};

export default function FreshersDrive() {
  return <FreshersDriveContent />;
}
