import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Siding Repairs — Bellerose Roofing & Siding | NYC, Nassau & Suffolk",
  description:
    "Vinyl, aluminum, and wood siding repairs across NYC, Nassau & Suffolk County. Free estimates. Licensed & insured. 35+ years of experience. Call (516) 355-0977.",
};

export default function SidingRepairsPage() {
  return (
    <>
      <PageHeroSection
        title="Siding Repairs"
        subtitle="Vinyl, aluminum, and wood siding repairs across the 5 boroughs, Nassau, and Suffolk — protecting your home and boosting curb appeal."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Siding Repairs" },
        ]}
      />
      <ServiceDetailSection
        activeService="Siding Repairs"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Siding Repair & Replacement in NYC & Long Island"
        intro={[
          "From repairing rotten wood siding to replacing cracked or missing vinyl panels, Bellerose Roofing & Siding handles all types of exterior siding work across the 5 boroughs, Nassau, and Suffolk County. New siding protects your home from the elements and can add thousands to resale value.",
          "We've been doing siding work in New York for over 35 years and understand exactly what holds up in this climate and what doesn't.",
        ]}
        whatWeDo={[
          "Vinyl, aluminum, and wood siding repair and replacement",
          "Matching existing siding material on partial replacements",
          "Inspection of the wall behind damaged panels for moisture damage",
          "Soffit and fascia repair",
          "Free written estimate with photos before any work begins",
        ]}
        whyChooseUs={[
          "35+ years of siding experience across the NYC metro area",
          "Licensed in NYC, Nassau County, and Floral Park",
          "Fully insured on every job",
          "We never replace panels over a wet or damaged wall",
          "Full debris cleanup and walkthrough before we leave",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
