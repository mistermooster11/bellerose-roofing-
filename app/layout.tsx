import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import "@/styles/client-theme.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import SalePopup from "@/components/custom/popup/SalePopup";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bellerose Roofing & Siding — Roofing, Siding & Windows in NYC & Long Island",
  description:
    "Family-owned roofing, siding, and window company with 35+ years of experience. Fully licensed & insured in NYC, Nassau, and Suffolk. Free honest estimates — call (516) 355-0977.",
  openGraph: {
    title: "Bellerose Roofing & Siding — Roofing, Siding & Windows in NYC & Long Island",
    description:
      "Family-owned roofing, siding, and window company with 35+ years of experience. Fully licensed & insured in NYC, Nassau, and Suffolk. Free honest estimates.",
    url: "https://www.belleroseroofing.com",
    siteName: "Bellerose Roofing & Siding",
    images: [
      {
        url: "https://www.belleroseroofing.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Bellerose Roofing & Siding — NYC & Long Island",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellerose Roofing & Siding — Roofing, Siding & Windows in NYC & Long Island",
    description:
      "Family-owned roofing, siding, and window company with 35+ years of experience. Free estimates — call (516) 355-0977.",
    images: ["https://www.belleroseroofing.com/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Bellerose Roofing & Siding",
    "url": "https://www.belleroseroofing.com",
    "telephone": "+15163550977",
    "email": "info@belleroseroofing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "92 Chestnut Ave",
      "addressLocality": "Floral Park",
      "addressRegion": "NY",
      "postalCode": "11001",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7223,
      "longitude": -73.7020,
    },
    "openingHours": "Mo-Sa 08:00-18:00",
    "priceRange": "$$",
    "description":
      "Family-owned roofing, siding, and window company serving NYC, Nassau & Suffolk County for 35+ years. Licensed & insured. Free estimates.",
    "areaServed": [
      "Queens, NY", "Brooklyn, NY", "Bronx, NY", "Manhattan, NY",
      "Staten Island, NY", "Nassau County, NY", "Suffolk County, NY",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing & Siding Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing Tear-Offs & New Installs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows & Skylights" } },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "19",
    },
    "sameAs": [
      "https://www.facebook.com/belleroseroofing/",
      "https://www.instagram.com/belleroseroofing/",
    ],
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <PageTransition />
        <SalePopup businessName="Bellerose Roofing & Siding" expiryDate="June 15, 2026" trade="roofers" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
