import { Metadata } from "next";
import ContractHiringPage from "../../components/services/ContractHiringPage";

export const metadata: Metadata = {
    title: "Contract Hiring | MicroAcademy",
    description:
        "Agile and scalable contractual hiring solutions to meet your dynamic project requirements with pre-vetted, enterprise-ready professionals.",
};

export default function ContractHiring() {
    return <ContractHiringPage />;
}
