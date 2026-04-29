import { Metadata } from "next";
import RecruitmentPage from "../../components/services/RecruitmentPage";

export const metadata: Metadata = {
  title: "Recruitment Services",
  description:
    "Strategic talent architecture — precision recruitment pipelines connecting exceptional professionals with visionary organizations.",
  alternates: {
    canonical: "/services/recruitment",
  },
};

export default function Recruitment() {
  return <RecruitmentPage />;
}
