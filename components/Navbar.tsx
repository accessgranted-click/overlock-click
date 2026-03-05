"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Wordmark from "@/components/Wordmark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 border-white/8"
          : "bg-ink/55 border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Wordmark className="text-[1.05rem]" />

        {/* Email CTA — iOS pill button */}
        <a
          href="mailto:hello@overlock.click"
          className="group flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/8 text-sm font-sans text-slate hover:text-bone hover:bg-white/10 hover:border-white/14 transition-all duration-200"
        >
          <span>hello@overlock.click</span>
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-volt group-hover:scale-150 transition-transform duration-200 flex-shrink-0"
          />
        </a>
      </div>
    </motion.header>
  );
}
