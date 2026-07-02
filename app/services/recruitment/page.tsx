import { Metadata } from "next";
import RecruitmentPage from "../../components/services/RecruitmentPage";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "End-to-end recruitment solutions — direct/lateral hiring, contract staffing, and strategic talent acquisition connecting exceptional professionals with leading enterprises.",
  alternates: {
    canonical: "/services/recruitment",
  },
};

export default function Recruitment() {
  return <RecruitmentPage />;
}
