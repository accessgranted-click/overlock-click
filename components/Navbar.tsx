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
      initial={{ y: -16 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-12 h-16 flex items-center justify-between">
        <Wordmark className="text-[1rem]" />

        <a
          href="mailto:hello@overlock.click"
          className="text-sm font-sans text-slate hover:text-bone transition-colors duration-200"
        >
          hello@overlock.click
        </a>
      </div>
    </motion.header>
  );
}
