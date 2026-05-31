import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Blog — Bellerose Roofing & Siding | Roofing Tips & Resources",
  description:
    "Roofing tips, maintenance guides, and resources from the team at Bellerose Roofing & Siding — serving NYC, Nassau & Suffolk for 35+ years.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Roofing Blog"
        subtitle="Tips, guides, and resources from the team at Bellerose Roofing & Siding."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <CTAFormSection />
    </>
  );
}
