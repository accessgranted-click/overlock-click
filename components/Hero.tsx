"use client";

import { motion } from "framer-motion";
import StitchDivider from "@/components/StitchDivider";

const headlineWords = ["We lock", "in the", "clicks."];

// Hoisted to module scope — no new object on each render
const DOT_GRID_STYLE = {
  backgroundImage: "radial-gradient(circle, #8B8B95 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

const heroStats = [
  { value: "4.2×", label: "Avg. ROAS" },
  { value: "$0.22", label: "Avg. CPC" },
  { value: "5×", label: "Donation CVR" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ink flex flex-col justify-center overflow-hidden">
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055]"
        style={DOT_GRID_STYLE}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Eyebrow — iOS system tag style */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/6 border border-white/10 mb-10"
        >
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-volt flex-shrink-0" />
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-slate">
            SEM + Meta Ads Agency
          </span>
        </motion.div>

        {/* Headline — single <h1> with animated <span> lines */}
        <h1
          className="mb-8"
          aria-label="We lock in the clicks."
        >
          {headlineWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.13,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block font-grotesk font-bold leading-[0.9] tracking-tighter ${
                  word === "clicks." ? "text-volt" : "text-bone"
                }`}
                style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-[38ch] text-base lg:text-lg text-slate font-sans leading-relaxed mb-10"
        >
          Performance advertising for brick&#8209;and&#8209;mortar streetwear
          brands and nonprofits that refuse to be ignored.
        </motion.p>

        {/* Tags + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/4 text-slate text-xs font-sans uppercase tracking-widest">
            Streetwear
          </span>
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/4 text-slate text-xs font-sans uppercase tracking-widest">
            Non&#8209;Profit
          </span>
          <a
            href="mailto:hello@overlock.click"
            className="px-6 py-2.5 rounded-full bg-volt text-ink text-sm font-grotesk font-semibold hover:bg-bone transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Start a conversation
          </a>
        </motion.div>

        {/* iOS Finder-style stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-16 pt-5 border-t border-white/6 flex items-center gap-8"
        >
          {heroStats.map((stat, i) => (
            <div key={stat.label} className={`${i > 0 ? "pl-8 border-l border-white/6" : ""}`}>
              <div className="font-grotesk font-bold text-volt text-2xl tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-xs font-sans text-slate mt-1.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <StitchDivider stroke="#1C1C28" position="bottom" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-2 text-slate text-xs font-sans"
        aria-hidden="true"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        <span className="uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
}
