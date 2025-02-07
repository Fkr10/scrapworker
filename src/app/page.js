import {
  AboutUsSection,
  AppointmentForm,
  ContactUs,
  Faq,
  HeroSection,
  ServicesSection,
  Stats,
  Gallery,
  Testimonal,
} from "@/components";
import {
  faqData,
  heroProps,
  servicesData,
  statsData,
} from "@/lib/content/homePageData";

export default function Home() {
  return (
    <div className="Homepage">
      <main className="main">
        <HeroSection {...heroProps} />
        <AboutUsSection />
        <ServicesSection
          title="Scrap Collection Services"
          description="Efficient and eco-friendly solutions for the collection, disposal, and recycling of various scrap materials."
          services={servicesData}
        />
        <Stats
          stats={statsData}
          title="Our Achievements"
          className="custom-class"
        />
        <AppointmentForm />
        <ContactUs />
        <Gallery />
        <Testimonal />
        <Faq
          title="Frequently Asked Questions"
          description="Learn everything you need to know about scrap metal recycling, electronic waste disposal, and sustainable recycling practices."
          faqs={faqData}
        />
      </main>
    </div>
  );
}
