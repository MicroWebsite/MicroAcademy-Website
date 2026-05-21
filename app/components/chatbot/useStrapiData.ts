"use client";

import { useState, useEffect } from "react";
import { StrapiData } from "@/app/types/chatbot";
import {
  fetchCareers,
  fetchDirectLateralHiring,
  fetchContractHiring,
  fetchFresherDrives,
} from "@/app/services/strapiApi";

const emptyStrapiData: StrapiData = {
  careers: [],
  directLateralHiring: [],
  contractHiring: [],
  fresherDrives: [],
  isLoaded: false,
};

export default function useStrapiData(): StrapiData {
  const [data, setData] = useState<StrapiData>(emptyStrapiData);

  useEffect(() => {
    const loadAll = async () => {
      const [careers, directLateralHiring, contractHiring, fresherDrives] =
        await Promise.allSettled([
          fetchCareers(),
          fetchDirectLateralHiring(),
          fetchContractHiring(),
          fetchFresherDrives(),
        ]);

      setData({
        careers: careers.status === "fulfilled" ? careers.value : [],
        directLateralHiring:
          directLateralHiring.status === "fulfilled"
            ? directLateralHiring.value
            : [],
        contractHiring:
          contractHiring.status === "fulfilled" ? contractHiring.value : [],
        fresherDrives:
          fresherDrives.status === "fulfilled" ? fresherDrives.value : [],
        isLoaded: true,
      });
    };

    loadAll();
  }, []);

  return data;
}
