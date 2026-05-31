import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Roofing Repairs — Bellerose Roofing & Siding | NYC, Nassau & Suffolk",
  description:
    "Expert roofing repairs for all roof types across NYC, Nassau & Suffolk. Free estimates, licensed & insured. 35+ years of experience. Call (516) 355-0977.",
};

export default function RoofingRepairsPage() {
  return (
    <>
      <PageHeroSection
        title="Roofing Repairs"
        subtitle="Expert repairs for all roof types across NYC, Nassau & Suffolk County — with free estimates and no pressure."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roofing Repairs" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roofing Repairs"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Roof Repair Specialists in NYC & Long Island"
        intro={[
          "Bellerose Roofing & Siding specializes in repairing roofs of all styles — asphalt shingle, ceramic tile, synthetic slate, and rubber. With over 35 years of experience in the NYC metro area, we know exactly how local weather, freeze-thaw cycles, and aging affect each roof type.",
          "Whether you have a few missing shingles after a storm or a persistent leak you can't find the source of, we diagnose the full roof — not just the obvious damage — and repair what's actually wrong.",
        ]}
        whatWeDo={[
          "Asphalt shingle, ceramic tile, synthetic slate, and rubber (EPDM) repairs",
          "Storm damage assessment and repair",
          "Flashing repairs around chimneys, walls, and vents",
          "Leak diagnosis and permanent fixes",
          "Free written estimate with photos before any work begins",
        ]}
        whyChooseUs={[
          "35+ years of experience in the NYC metro area",
          "Licensed in NYC, Nassau County, and Floral Park",
          "Fully insured on every job",
          "We discuss every issue with you before proceeding",
          "Free anti-mold and anti-moss strips with every roofing job",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
