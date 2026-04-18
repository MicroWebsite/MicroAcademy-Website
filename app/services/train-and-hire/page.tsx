import { Metadata } from "next";
import TrainAndHirePage from "../../components/services/TrainAndHirePage";

export const metadata: Metadata = {
  title: "Train & Hire | MicroAcademy",
  description:
    "Our Train to Hire model bridges the gap between raw talent and enterprise-ready professionals through a proprietary training methodology.",
};

export default function TrainAndHire() {
  return <TrainAndHirePage />;
}
