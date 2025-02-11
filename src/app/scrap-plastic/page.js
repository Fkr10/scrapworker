"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components";
import "aos/dist/aos.css";
import AOS from "aos";
import { heroPlasticScrapProps } from "@/lib/content/scrapPlasticData";

export default function ScrapPlasticPage() {
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
      <HeroSection {...heroPlasticScrapProps} />
    </main>
  );
}
