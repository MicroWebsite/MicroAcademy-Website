import { Metadata } from "next";
import JobOpportunitiesPage from "../components/jobs/JobOpportunitiesPage";

export const metadata: Metadata = {
  title: "Job Opportunities",
  description:
    "Browse current full-time and contract job opportunities at MicroAcademy and apply directly to roles that match your profile.",
  alternates: {
    canonical: "/job-opportunities",
  },
};

export default function JobOpportunities() {
  return <JobOpportunitiesPage />;
}
