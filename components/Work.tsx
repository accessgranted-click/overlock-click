"use client";

import { motion } from "framer-motion";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";
import { accentMap, type AccentColor } from "@/lib/accent";

interface CaseStudy {
  client: string;
  type: "Streetwear" | "Non-Profit";
  channel: string;
  headline: string;
  detail: string;
  stat: string;
  statLabel: string;
  accent: AccentColor;
}

const caseStudies: CaseStudy[] = [
  {
    client: "Asphalt Supply Co.",
    type: "Streetwear",
    channel: "Meta Ads",
    headline: "Limited drop sold out in 72 hours.",
    detail:
      "Hyperlocal targeting across three metro markets drove simultaneous foot traffic and online conversion. A full creative sequence from teaser to drop day — CPM fell 62% mid-flight as the algorithm refined its audience.",
    stat: "4.2×",
    statLabel: "ROAS",
    accent: "emerald",
  },
  {
    client: "Ground Level Collective",
    type: "Non-Profit",
    channel: "Google Ad Grants",
    headline: "Donation conversion increased fivefold.",
    detail:
      "Mission-aligned keyword strategy and compliant $10k/month Grant management. Average CPC of $0.22 — sustained, scalable, built for the long run.",
    stat: "5×",
    statLabel: "Conversion rate",
    accent: "ember",
  },
  {
    client: "Bloc Goods",
    type: "Streetwear",
    channel: "SEM + Meta",
    headline: "First profitable paid channel in brand history.",
    detail:
      "Full-funnel build from zero: Google Shopping and Meta retargeting that turned a brand with no paid history into a compounding performance program.",
    stat: "38%",
    statLabel: "YoY revenue growth",
    accent: "emerald",
  },
];

export default function Work() {
  const { ref, isInView } = useScrollIntoView<HTMLElement>();

  return (
    <section id="work" ref={ref} className="bg-ink py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/8 gap-4">
          <div>
            <motion.p
              initial={{ y: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 1 }}
              className="text-xs font-sans uppercase tracking-[0.22em] text-slate mb-3"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              className="font-grotesk font-bold text-bone tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Results that speak.
            </motion.h2>
          </div>
          <a
            href="/work"
            className="text-sm font-sans text-slate hover:text-bone transition-colors duration-200 self-start sm:self-auto"
          >
            All case studies →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/6 rounded-2xl overflow-hidden">
          {/* Featured card */}
          <motion.article
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            className="lg:col-span-2 bg-mid p-10 lg:p-14 hover:bg-surface transition-colors duration-300"
          >
            <CaseCard study={caseStudies[0]} featured />
          </motion.article>

          {/* Right column */}
          <div className="flex flex-col gap-px">
            {caseStudies.slice(1).map((study) => (
              <motion.article
                key={study.client}
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                className="flex-1 bg-mid p-8 lg:p-10 hover:bg-surface transition-colors duration-300"
              >
                <CaseCard study={study} featured={false} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  study,
  featured,
}: {
  study: CaseStudy;
  featured: boolean;
}) {
  const colors = accentMap[study.accent];

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className={`px-2.5 py-0.5 rounded text-xs font-sans uppercase tracking-widest ${colors.badge}`}>
            {study.type}
          </span>
          <span className="text-xs text-slate font-sans">{study.channel}</span>
        </div>

        <h3
          className={`font-grotesk font-semibold text-bone tracking-tight leading-tight mb-4 ${
            featured ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
          }`}
        >
          {study.headline}
        </h3>

        {featured && (
          <p className="text-slate font-sans text-sm leading-relaxed">
            {study.detail}
          </p>
        )}
      </div>

      <div className="flex items-end justify-between mt-8 pt-6 border-t border-white/6">
        <div>
          <div className={`font-grotesk font-bold tracking-tight leading-none ${
            featured ? "text-5xl lg:text-6xl" : "text-4xl"
          } ${colors.text}`}>
            {study.stat}
          </div>
          <div className="text-xs font-sans text-slate mt-2">{study.statLabel}</div>
        </div>
        <div className="text-xs font-sans text-slate/50 uppercase tracking-[0.12em] text-right">
          {study.client}
        </div>
      </div>
    </div>
  );
}
