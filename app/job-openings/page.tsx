import { Metadata } from "next";
import JobOpeningsPage from "../components/jobs/JobOpeningsPage";

export const metadata: Metadata = {
  title: "Job Openings",
  description:
    "Browse current full-time and contract job openings at MicroAcademy and apply directly to roles that match your profile.",
  alternates: {
    canonical: "/job-openings",
  },
};

export default function JobOpenings() {
  return <JobOpeningsPage />;
}
