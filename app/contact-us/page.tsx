import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Bellerose Roofing & Siding | Free Estimate",
  description:
    "Contact Bellerose Roofing & Siding for a free estimate. Serving NYC, Nassau & Suffolk County. Call (516) 355-0977 or fill out the form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Request a free estimate — we inspect, document with photos, and give you a written quote before any work begins."
        backgroundImage="/images/masthead-contact.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Bellerose Roofing &amp; Siding Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d-73.7155!3d40.7165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c263b2d5b7bc97%3A0xf2d7f7e404985a16!2sBellerose%20Roofing%20%26%20Siding!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
