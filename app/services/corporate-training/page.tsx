import { Metadata } from "next";
import CorporateTrainingPage from "../../components/services/CorporateTrainingPage";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "We architect enterprise-grade training ecosystems that transform your workforce into a competitive advantage across all technology domains.",
  alternates: {
    canonical: "/services/corporate-training",
  },
};

export default function CorporateTraining() {
  return <CorporateTrainingPage />;
}
