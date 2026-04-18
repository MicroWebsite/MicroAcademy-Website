import { Metadata } from "next";
import RecruitmentPage from "../../components/services/RecruitmentPage";

export const metadata: Metadata = {
  title: "Recruitment Services | MicroAcademy",
  description:
    "Strategic talent architecture — precision recruitment pipelines connecting exceptional professionals with visionary organizations.",
};

export default function Recruitment() {
  return <RecruitmentPage />;
}
