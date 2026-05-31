import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Roofing Tear-Offs & New Installs — Bellerose Roofing & Siding | NYC & Long Island",
  description:
    "Full roof replacements across NYC, Nassau & Suffolk. We tear off the old roof, inspect the deck, and install a fully new system. Free estimates. Call (516) 355-0977.",
};

export default function RoofingTearOffsPage() {
  return (
    <>
      <PageHeroSection
        title="Roofing Tear-Offs & New Installs"
        subtitle="Full roof replacements done right — tear-off, deck inspection, and a brand-new system installed to spec. Free estimates across NYC & Long Island."
        backgroundImage="/images/masthead-roofing-tear-offs.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roofing Tear-Offs & New Installs" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roofing Tear-Offs & New Installs"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Full Roof Replacement in NYC & Long Island"
        intro={[
          "When repair isn't cost-effective, Bellerose Roofing & Siding tears off the old roof down to the deck and installs a fully new system — with a deck inspection included. A new roof is one of the best investments a homeowner can make, offering improved energy efficiency, lower insurance rates, and decades of protection.",
          "We install all major roofing types and help you select the right material for your home, budget, and local climate. Fully licensed and insured across NYC, Nassau, and Suffolk.",
        ]}
        whatWeDo={[
          "Full tear-off of old roofing system down to the deck",
          "Deck inspection and replacement of any damaged sections",
          "Asphalt shingle, ceramic tile, synthetic slate, and rubber (EPDM) installs",
          "New underlayment, flashing, and drip edge installation",
          "Free written estimate with material options before work begins",
        ]}
        whyChooseUs={[
          "35+ years of full replacement experience in the NYC metro area",
          "Licensed in NYC, Nassau County, and Floral Park",
          "Fully insured on every job",
          "We never install over a damaged deck — problems get fixed first",
          "Free anti-mold and anti-moss strips included with every new roof",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
