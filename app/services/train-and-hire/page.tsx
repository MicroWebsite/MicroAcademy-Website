import { Metadata } from "next";
import TrainAndHirePage from "../../components/services/TrainAndHirePage";

export const metadata: Metadata = {
  title: "Train & Hire",
  description:
    "Our Train to Hire model transforms raw talent into enterprise-ready professionals through a proprietary training methodology.",
  alternates: {
    canonical: "/services/train-and-hire",
  },
};

export default function TrainAndHire() {
  return <TrainAndHirePage />;
}
