import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — Bellerose Roofing & Siding | 35+ Years in NYC & Long Island",
  description:
    "Learn about Bellerose Roofing & Siding — a family-owned roofing, siding, and window company serving NYC, Nassau & Suffolk County for over 35 years.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Family-owned roofing, siding, and window specialists serving the 5 boroughs, Nassau, and Suffolk County for over 35 years."
        backgroundImage="/images/masthead-about.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
