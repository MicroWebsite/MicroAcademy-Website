import { Metadata } from "next";
import DirectLateralHiringPage from "../../components/services/DirectLateralHiringPage";

export const metadata: Metadata = {
  title: "Direct/lateral Hiring",
  description:
    "Strategic talent architecture — precision hiring pipelines connecting exceptional professionals with visionary organizations.",
  alternates: {
    canonical: "/services/direct-lateral-hiring",
  },
};

export default function DirectLateralHiring() {
  return <DirectLateralHiringPage />;
}
