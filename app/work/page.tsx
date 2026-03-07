import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudyListing from "@/components/CaseStudyListing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies — overlock.click",
  description:
    "Paid search and social case studies across streetwear ecommerce, sneaker retail, design services, and a non-profit cinema.",
  robots: { index: false, follow: false },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <CaseStudyListing />
      <Footer />
    </>
  );
}
