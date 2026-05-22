import { Metadata } from "next";
import JobOpeningsLanding from "../components/jobs/JobOpeningsLanding";

export const metadata: Metadata = {
  title: "Job Openings",
  description:
    "Explore job openings and freshers drives at Micro Academy. Find recruitment details for full-time/contract roles or register for upcoming freshers placement drives.",
  alternates: {
    canonical: "/job-openings",
  },
};

export default function JobOpenings() {
  return <JobOpeningsLanding />;
}
