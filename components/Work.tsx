"use client";

import { motion } from "framer-motion";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";

const clients = [
  { name: "Asphalt Supply Co.", type: "Streetwear", channel: "Meta Ads" },
  { name: "Ground Level Collective", type: "Non-Profit", channel: "Google Ad Grants" },
  { name: "Bloc Goods", type: "Streetwear", channel: "SEM + Meta" },
];

export default function Work() {
  const { ref } = useScrollIntoView<HTMLElement>();

  return (
    <section id="work" ref={ref} className="bg-smoke py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/8 gap-4">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.22em] text-slate mb-3">
              Selected Work
            </p>
            <motion.h2
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              className="font-grotesk font-bold text-bone tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Results you can read.
            </motion.h2>
          </div>
          <a
            href="/work"
            className="px-6 py-2.5 rounded-full border border-white/12 text-sm font-sans text-slate hover:text-bone hover:border-white/24 transition-colors duration-200 self-start sm:self-auto"
          >
            View case studies →
          </a>
        </div>

        <div className="divide-y divide-white/6">
          {clients.map((client) => (
            <a
              key={client.name}
              href="/work"
              className="group flex items-center justify-between py-6 hover:text-bone transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="text-bone font-grotesk font-medium text-lg group-hover:text-emerald transition-colors duration-200">
                  {client.name}
                </span>
                <span className="hidden sm:inline text-xs font-sans text-slate uppercase tracking-[0.14em]">
                  {client.type}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-sans text-slate">{client.channel}</span>
                <span className="text-slate group-hover:text-bone transition-colors duration-200 text-sm" aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
