import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQ — Bellerose Roofing & Siding | Frequently Asked Questions",
  description:
    "Common questions about roofing, siding, and window services from Bellerose Roofing & Siding. Serving NYC, Nassau & Suffolk for 35+ years.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeroSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our roofing, siding, and window services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      {/* <NeedServicesSection /> */}
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
