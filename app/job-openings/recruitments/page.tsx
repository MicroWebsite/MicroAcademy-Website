import { Metadata } from "next";
import JobOpeningsPage from "@/app/components/jobs/JobOpeningsPage";

export const metadata: Metadata = {
  title: "Open Positions",
  description:
    "Explore full-time and contract job openings at Micro Academy. View our recruitment process and apply for positions that fit your skill set.",
  alternates: {
    canonical: "/job-openings/recruitments",
  },
};

export default function Recruitments() {
  return <JobOpeningsPage />;
}
