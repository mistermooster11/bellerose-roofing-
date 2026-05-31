import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — Bellerose Roofing & Siding | NYC & Long Island",
  description:
    "Roofing repairs, siding repairs, full roof replacements, and window & skylight installation across NYC, Nassau & Suffolk County. Free estimates.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Roofing, siding, and window services for residential and commercial properties across the 5 boroughs, Nassau County, and Suffolk County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
