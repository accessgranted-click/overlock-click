"use client";

import { motion } from "framer-motion";
import StitchDivider from "@/components/StitchDivider";

const heroStats = [
  { value: "4.2×", label: "Average ROAS" },
  { value: "$0.22", label: "Average CPC" },
  { value: "5×", label: "Donation conversion" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ink flex flex-col justify-center overflow-hidden">
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #71717A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 pt-32 pb-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xs font-sans uppercase tracking-[0.22em] text-slate mb-10"
        >
          Paid Search and Social
        </motion.p>

        {/* Headline */}
        <h1 className="mb-8" aria-label="Paid media that compounds.">
          {["Paid media", "that compounds."].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className={`block font-grotesk font-bold leading-[0.92] tracking-tight ${
                i === 1 ? "text-emerald" : "text-bone"
              }`}
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              {line}
            </motion.div>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-[42ch] text-base lg:text-lg text-slate font-sans leading-relaxed mb-12"
        >
          We run Google and Meta campaigns for independent retailers and nonprofits.
          Every campaign is built to generate measurable, compounding returns.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:hello@overlock.click"
            className="px-7 py-3 rounded-full bg-emerald text-ink text-sm font-grotesk font-semibold hover:bg-bone transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="text-sm font-sans text-slate hover:text-bone transition-colors duration-200"
          >
            View our work →
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 pt-8 border-t border-white/8 flex flex-wrap gap-10"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-grotesk font-bold text-emerald text-2xl tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-xs font-sans text-slate mt-1.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <StitchDivider stroke="#17171E" position="bottom" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-8 lg:left-12 flex items-center gap-2 text-slate/50 text-xs font-sans" aria-hidden="true">
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        <span className="uppercase tracking-[0.2em]">Scroll</span>
      </div>
    </section>
  );
}
