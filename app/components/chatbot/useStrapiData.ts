"use client";

import { useState, useEffect } from "react";
import { StrapiData } from "@/app/types/chatbot";
import {
  fetchDirectLateralHiring,
  fetchContractHiring,
  fetchFresherDrives,
} from "@/app/services/strapiApi";

const emptyStrapiData: StrapiData = {
  directLateralHiring: [],
  contractHiring: [],
  fresherDrives: [],
  isLoaded: false,
};

export default function useStrapiData(): StrapiData {
  const [data, setData] = useState<StrapiData>(emptyStrapiData);

  useEffect(() => {
    const loadAll = async () => {
      const [directLateralHiring, contractHiring, fresherDrives] =
        await Promise.allSettled([
          fetchDirectLateralHiring(),
          fetchContractHiring(),
          fetchFresherDrives(),
        ]);

      setData({
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
