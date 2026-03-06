"use client";

import { motion } from "framer-motion";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";

export default function Contact() {
  const { ref, isInView } = useScrollIntoView<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-ink py-28 lg:py-40 border-t border-white/8"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <p className="text-xs font-sans uppercase tracking-[0.22em] text-slate mb-8">
          Contact
        </p>

        <motion.h2
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          className="font-grotesk font-bold text-bone tracking-tight leading-[0.9] mb-12"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Ready to grow?
        </motion.h2>

        <a
          href="mailto:hello@overlock.click"
          className="group inline-flex items-center gap-3 font-grotesk font-semibold text-bone hover:text-emerald transition-colors duration-200"
          style={{ fontSize: "clamp(1.1rem, 3vw, 2.5rem)" }}
        >
          hello@overlock.click
          <span
            aria-hidden="true"
            className="inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
          >
            ↗
          </span>
        </a>

        {/* Founder */}
        <div className="mt-20 pt-10 border-t border-white/6 flex items-center gap-4">
          <div
            aria-hidden="true"
            className="w-9 h-9 rounded-full bg-white/6 border border-white/8 flex items-center justify-center font-grotesk font-semibold text-bone text-xs select-none flex-shrink-0"
          >
            GW
          </div>
          <div>
            <div className="font-grotesk font-medium text-bone text-sm">Grant Wuerslin</div>
            <div className="font-sans text-slate text-xs mt-0.5">Founder, overlock.click</div>
          </div>
        </div>
      </div>
    </section>
  );
}
