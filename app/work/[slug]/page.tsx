import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  return {
    title: study ? `${study.detailHeadline} — overlock.click` : "Case Study — overlock.click",
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <CaseStudyDetail slug={slug} />
      <Footer />
    </>
  );
}
