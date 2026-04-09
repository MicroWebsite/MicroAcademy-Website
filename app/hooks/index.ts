// Custom React hooks
"use client";

import { usePathname } from "next/navigation";

export const useActiveLink = (href: string): boolean => {
  const pathname = usePathname();
  return pathname === href;
};
