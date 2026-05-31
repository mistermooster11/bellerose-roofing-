import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Windows & Skylights — Bellerose Roofing & Siding | NYC, Nassau & Suffolk",
  description:
    "Window replacement and skylight installation across NYC, Nassau & Suffolk County. Improve energy efficiency and natural light. Free estimates. Call (516) 355-0977.",
};

export default function WindowsSkylightsPage() {
  return (
    <>
      <PageHeroSection
        title="Windows & Skylights"
        subtitle="Energy-efficient window replacement and skylight installation — properly flashed and sealed to last. Free estimates across NYC & Long Island."
        backgroundImage="/images/masthead-windows-skylights.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Windows & Skylights" },
        ]}
      />
      <ServiceDetailSection
        activeService="Windows & Skylights"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Window & Skylight Installation in NYC & Long Island"
        intro={[
          "Looking to replace drafty, single-pane windows or bring more natural light into your home with a skylight? Bellerose Roofing & Siding installs windows and skylights across the 5 boroughs, Nassau, and Suffolk County — with the same attention to detail we bring to every roofing and siding project.",
          "New windows and skylights improve energy efficiency, increase home value, and transform the feel of a room. We help you choose the right product and handle the full installation properly.",
        ]}
        whatWeDo={[
          "Single and double-hung, casement, and bay window replacement",
          "Skylight installation with full flashing and weatherproofing",
          "Energy-efficient glass options to reduce heating and cooling costs",
          "Proper sealing and insulation around every opening",
          "Free written estimate with product options before work begins",
        ]}
        whyChooseUs={[
          "35+ years of window and skylight installation experience",
          "Licensed in NYC, Nassau County, and Floral Park",
          "Fully insured on every job",
          "We flash and seal every skylight to prevent leaks — no shortcuts",
          "Full debris cleanup and walkthrough before we leave",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
