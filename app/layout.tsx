import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import "@/styles/client-theme.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bellerose Roofing & Siding — Roofing, Siding & Windows in NYC & Long Island",
  description:
    "Family-owned roofing, siding, and window company with 35+ years of experience. Fully licensed & insured in NYC, Nassau, and Suffolk. Free honest estimates — call (516) 355-0977.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
