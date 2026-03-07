"use client";

import { motion } from "framer-motion";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";
import { accentMap, type AccentColor } from "@/lib/accent";

interface Service {
  id: string;
  title: string;
  description: string;
  accent: AccentColor;
}

const services: Service[] = [
  {
    id: "sem",
    title: "Search Engine Marketing",
    description:
      "Google Ads campaigns built for local impact. From Ad Grants for nonprofits to Shopping and Search for independent retailers, every campaign is built around one goal: profitable, scalable growth.",
    accent: "emerald",
  },
  {
    id: "meta",
    title: "Meta Advertising",
    description:
      "Instagram and Facebook campaigns that put your brand in front of the right people at the right time. We handle creative strategy, audience targeting, and ongoing optimization — so your budget works harder every week.",
    accent: "ember",
  },
];

const capabilities = [
  "Campaign Strategy",
  "Analytics & Reporting",
  "Creative Direction",
  "Feed Architecture",
  "Audience Development",
  "Performance Benchmarking",
];

export default function Services() {
  const { ref, isInView } = useScrollIntoView<HTMLElement>();

  return (
    <section id="services" ref={ref} className="bg-smoke py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/8 gap-4">
          <div>
            <motion.p
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              className="text-xs font-sans uppercase tracking-[0.22em] text-slate mb-3"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              className="font-grotesk font-bold text-bone tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Two channels.<br />One strategy.
            </motion.h2>
          </div>
          <p className="text-slate text-sm font-sans max-w-[30ch] leading-relaxed">
            We focus on the channels that move the needle for independent brands. Nothing else.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/6 rounded-2xl overflow-hidden mb-16">
          {services.map((service) => {
            const colors = accentMap[service.accent];
            return (
              <div
                key={service.id}
                className="bg-mid p-10 lg:p-12 hover:bg-surface transition-colors duration-300"
              >
                <div className="flex items-center gap-2.5 mb-8">
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} aria-hidden="true" />
                  <span className="text-xs font-sans uppercase tracking-[0.18em] text-slate">
                    {service.title}
                  </span>
                </div>

                <p className="text-bone/80 font-sans leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Capabilities */}
        <div>
          <p className="text-xs font-sans uppercase tracking-[0.22em] text-slate mb-6">
            Capabilities
          </p>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="px-4 py-2 rounded-full border border-white/8 text-slate text-xs font-sans"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
