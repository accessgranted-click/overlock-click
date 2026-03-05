import type { Metadata } from "next";
import {
  Instrument_Serif,
  Source_Serif_4,
  JetBrains_Mono,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

// These fonts are self-hosted by Next.js at build time.
// next/font/google downloads them and injects @font-face rules —
// no runtime requests to fonts.googleapis.com are made.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"], // italic used in evolution phase notes
  display: "swap",
  variable: "--font-source-serif-4",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Case Studies — overlock.click",
  description:
    "Fashion and streetwear paid search case studies. PMax, Standard Shopping, and Search campaigns benchmarked against 2025 industry data with year-over-year trend analysis.",
  robots: { index: false, follow: false }, // Keep client data private from search engines
};

export default function WorkPage() {
  return (
    // Applying font variables ensures @font-face rules are injected for this page.
    // The CaseStudies component references fonts by name in inline styles, which
    // works because Next.js has declared them via @font-face at this scope.
    <div
      className={`${instrumentSerif.variable} ${sourceSerif4.variable} ${jetbrainsMono.variable}`}
    >
      <Navbar />
      <CaseStudies />
      <Footer />
    </div>
  );
}
