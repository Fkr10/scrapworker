"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components";
import "aos/dist/aos.css";
import AOS from "aos";
import { heroMetalScrapProps } from "@/lib/content/scrapMetalData";

export default function ScrapMetalPage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <main className="main">
      <HeroSection {...heroMetalScrapProps} />
    </main>
  );
}
