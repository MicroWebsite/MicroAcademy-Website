"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    handleScroll();
    const frameId = requestAnimationFrame(handleScroll);
    const timerId = setTimeout(handleScroll, 100);
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timerId);
    };
  }, [pathname]);

  return null;
}
