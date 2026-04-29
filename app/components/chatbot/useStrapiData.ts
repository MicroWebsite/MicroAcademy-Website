"use client";

import { useState, useEffect } from "react";
import { StrapiData } from "@/app/types/chatbot";
import {
  fetchCareers,
  fetchRecruitment,
  fetchContractHiring,
  fetchFresherDrives,
} from "@/app/services/strapiApi";

const emptyStrapiData: StrapiData = {
  careers: [],
  recruitment: [],
  contractHiring: [],
  fresherDrives: [],
  isLoaded: false,
};

export default function useStrapiData(): StrapiData {
  const [data, setData] = useState<StrapiData>(emptyStrapiData);

  useEffect(() => {
    const loadAll = async () => {
      const [careers, recruitment, contractHiring, fresherDrives] =
        await Promise.allSettled([
          fetchCareers(),
          fetchRecruitment(),
          fetchContractHiring(),
          fetchFresherDrives(),
        ]);

      setData({
        careers: careers.status === "fulfilled" ? careers.value : [],
        recruitment:
          recruitment.status === "fulfilled" ? recruitment.value : [],
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
