import { HeroSection } from "@/components";
import AboutUsSection from "@/components/AboutSection";
import Stats from "@/components/Stats";
import { heroProps, statsData } from "@/lib/content/homePageData";

export default function Home() {
  return (
    <div className="Homepage">
      <main className="main">
        <HeroSection {...heroProps} />
        <AboutUsSection />
        <Stats
          stats={statsData}
          title="Our Achievements"
          className="custom-class"
        />
      </main>
    </div>
  );
}
