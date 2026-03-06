"use client";

import { motion } from "framer-motion";
import StitchDivider from "@/components/StitchDivider";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";

export default function Contact() {
  const { ref, isInView } = useScrollIntoView<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-volt py-24 lg:py-36 relative overflow-hidden"
    >
      <StitchDivider stroke="#0A0A0F" strokeOpacity={0.12} position="top" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{}}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-ink/50 mb-6"
        >
          <span aria-hidden="true" className="inline-block w-6 h-px bg-ink/25" />
          Let&apos;s connect
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-grotesk font-bold text-ink tracking-tighter leading-[0.9] mb-10"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          Let&apos;s work.
        </motion.h2>

        {/* Email link */}
        <motion.a
          initial={{ y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          href="mailto:hello@overlock.click"
          className="group inline-flex items-center gap-4 font-grotesk font-semibold text-ink hover:text-ink/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-sm"
          style={{ fontSize: "clamp(1.25rem, 4vw, 3rem)" }}
        >
          hello@overlock.click
          <span
            aria-hidden="true"
            className="inline-block text-[0.8em] group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-200"
          >
            ↗
          </span>
        </motion.a>

        {/* Founder card */}
        <motion.div
          initial={{}}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-ink/15 flex items-center gap-4"
        >
          <div
            aria-hidden="true"
            className="w-10 h-10 rounded-full bg-ink/8 border border-ink/12 flex items-center justify-center font-grotesk font-semibold text-ink text-sm select-none flex-shrink-0"
          >
            GW
          </div>
          <div>
            <div className="font-grotesk font-semibold text-ink text-sm">
              Grant Wuerslin
            </div>
            <div className="font-sans text-ink/50 text-xs mt-0.5">
              Founder, overlock.click
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
