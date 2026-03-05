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
    headline: "Sold out a limited drop in 72 hours.",
    detail:
      "Hyperlocal targeting across three metro markets drove simultaneous foot traffic and online conversion. We built a full creative sequence from teaser to drop day — CPM dropped 62% mid-flight as the algorithm found its stride.",
    stat: "4.2×",
    statLabel: "ROAS",
    accent: "volt",
  },
  {
    client: "Ground Level Collective",
    type: "Non-Profit",
    channel: "Google Grants / SEM",
    headline: "5× donation conversion via Google Ad Grants.",
    detail:
      "Mission-aligned keyword strategy and compliant $10k/month Grant account management. Average CPC of $0.22 — sustained, scalable, and built to outlast any single campaign.",
    stat: "5×",
    statLabel: "Conversion rate",
    accent: "mango",
  },
  {
    client: "Bloc Goods",
    type: "Streetwear",
    channel: "SEM + Meta",
    headline: "First-ever positive ROAS on paid channels.",
    detail:
      "Full-funnel build from zero: Google Shopping plus Meta retargeting that turned a brand with no paid history into a compounding performance machine.",
    stat: "38%",
    statLabel: "YoY revenue growth",
    accent: "volt",
  },
];

export default function Work() {
  const { ref, isInView } = useScrollIntoView<HTMLElement>();

  return (
    <section id="work" ref={ref} className="bg-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header — iOS Finder breadcrumb style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-white/6 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-sans uppercase tracking-[0.18em] text-slate/50 mb-2"
            >
              overlock.click&nbsp;/&nbsp;work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-grotesk font-bold text-bone tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Work that hit.
            </motion.h2>
          </div>
          <motion.a
            href="/work"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-slate text-xs font-sans hover:text-bone hover:bg-white/10 hover:border-white/14 transition-all duration-200 self-start sm:self-auto"
          >
            Full case studies
            <span aria-hidden="true" className="text-volt text-sm">›</span>
          </motion.a>
        </div>

        {/* Finder-style file grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Featured card — spans 2 columns */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-mid/70 backdrop-blur-sm rounded-3xl border border-white/8 p-8 lg:p-10 overflow-hidden hover:border-white/14 hover:bg-mid/90 transition-all duration-300"
          >
            <CaseCard study={caseStudies[0]} featured />
          </motion.article>

          {/* Right column — two stacked cards */}
          <div className="flex flex-col gap-3">
            {caseStudies.slice(1).map((study, i) => (
              <motion.article
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.38 + i * 0.14,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex-1 bg-mid/70 backdrop-blur-sm rounded-3xl border border-white/8 p-6 lg:p-8 overflow-hidden hover:border-white/14 hover:bg-mid/90 transition-all duration-300"
              >
                <CaseCard study={study} featured={false} />
              </motion.article>
            ))}
          </div>
        </div>

        {/* iOS Finder-style status bar */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mt-5 text-xs font-sans text-slate/40 tracking-wide"
        >
          {caseStudies.length} items&nbsp;·&nbsp;SEM + Meta
        </motion.p>
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
      {/* Top: badge + headline + detail */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span
            className={`px-2.5 py-0.5 rounded-md text-xs font-sans uppercase tracking-widest ${colors.badge}`}
          >
            {study.type}
          </span>
          <span className="text-xs text-slate/60 font-sans">{study.channel}</span>
        </div>

        <h3
          className={`font-grotesk font-semibold text-bone tracking-tight leading-tight mb-3 ${
            featured ? "text-2xl lg:text-[1.65rem]" : "text-lg lg:text-xl"
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

      {/* Bottom: stat + client */}
      <div className="flex items-end justify-between mt-6 pt-5 border-t border-white/6">
        <div>
          <div
            className={`font-grotesk font-bold tracking-tight leading-none ${
              featured ? "text-5xl lg:text-6xl" : "text-4xl"
            } ${colors.text}`}
          >
            {study.stat}
          </div>
          <div className="text-xs font-sans text-slate mt-2">
            {study.statLabel}
          </div>
        </div>
        <div className="text-right">
          <div className="text-slate/60 font-sans text-xs uppercase tracking-[0.12em]">
            {study.client}
          </div>
        </div>
      </div>
    </div>
  );
}
