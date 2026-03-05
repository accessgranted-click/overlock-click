"use client";

import { motion } from "framer-motion";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";
import { accentMap, type AccentColor } from "@/lib/accent";

interface Service {
  id: string;
  short: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  accent: AccentColor;
}

const services: Service[] = [
  {
    id: "sem",
    short: "SEM",
    title: "Search Engine Marketing",
    description:
      "Google Ads campaigns built for local impact. From Google Ad Grants for nonprofits to Shopping and Search for streetwear boutiques — we make every dollar find the right person at the right moment.",
    stats: [
      { value: "$0.22", label: "Avg. CPC (Grants)" },
      { value: "8.1×", label: "Avg. ROAS" },
    ],
    accent: "volt",
  },
  {
    id: "meta",
    short: "Meta",
    title: "Meta Advertising",
    description:
      "Instagram and Facebook campaigns that move inventory and build community. We combine creative strategy with precision targeting to turn browsers into buyers — and followers into donors.",
    stats: [
      { value: "4.2×", label: "Avg. ROAS" },
      { value: "62%", label: "Lower CPM" },
    ],
    accent: "mango",
  },
];

const features = [
  { icon: "◎", label: "Campaign Strategy" },
  { icon: "▦", label: "Analytics & Reporting" },
  { icon: "✦", label: "Creative Direction" },
];

export default function Services() {
  const { ref, isInView } = useScrollIntoView<HTMLElement>();

  return (
    <section id="services" ref={ref} className="bg-smoke py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header — iOS grouped section label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-white/6 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-sans uppercase tracking-[0.18em] text-slate/50 mb-2"
            >
              overlock.click&nbsp;/&nbsp;services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-grotesk font-bold text-bone tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              What we do.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate/60 text-xs font-sans uppercase tracking-[0.18em]"
          >
            Two channels. One strategy.
          </motion.p>
        </div>

        {/* Main service cards — iOS grouped style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
          {services.map((service, i) => {
            const colors = accentMap[service.accent];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.65 }}
                className={`group relative bg-mid/70 backdrop-blur-sm rounded-3xl border border-white/8 p-8 lg:p-10 overflow-hidden hover:border-white/14 hover:bg-mid/90 transition-all duration-300 ${colors.bg}`}
              >
                {/* Background watermark text */}
                <div
                  aria-hidden="true"
                  className={`absolute -right-3 -top-3 text-[7rem] font-grotesk font-bold leading-none opacity-[0.05] pointer-events-none select-none ${colors.text}`}
                >
                  {service.short}
                </div>

                <div className="relative z-10">
                  {/* Label row */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <span
                      className={`w-2 h-2 rounded-full ${colors.dot}`}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-sans uppercase tracking-[0.18em] text-slate/70">
                      {service.short}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-[1.75rem] font-grotesk font-semibold text-bone mb-4 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate font-sans leading-relaxed text-sm lg:text-base mb-8">
                    {service.description}
                  </p>

                  {/* Stats — iOS separator style */}
                  <div className="flex gap-0 border-t border-white/6 pt-6">
                    {service.stats.map((stat, si) => (
                      <div
                        key={stat.label}
                        className={`flex-1 ${si > 0 ? "pl-6 border-l border-white/6" : "pr-6"}`}
                      >
                        <div
                          className={`text-3xl font-grotesk font-bold tracking-tight ${colors.text}`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs font-sans text-slate/60 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature pills row — iOS segment control style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
              className="bg-mid/50 backdrop-blur-sm rounded-2xl border border-white/6 px-6 py-4 flex items-center gap-4"
            >
              <span
                className="text-volt text-lg leading-none"
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <span className="font-grotesk font-medium text-bone text-sm">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
