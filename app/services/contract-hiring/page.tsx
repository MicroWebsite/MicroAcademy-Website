import ContractHiringPage from "@/app/components/services/ContractHiringPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Hiring",
  description:
    "Agile and scalable contractual hiring solutions to meet your dynamic project requirements with pre-vetted, enterprise-ready professionals.",
  alternates: {
    canonical: "/services/contract-hiring",
  },
};

export default function ContractHiring() {
  return <ContractHiringPage />;
}
