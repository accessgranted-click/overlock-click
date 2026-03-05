"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

// Shared options — module-level constant prevents re-subscription on each render
const IN_VIEW_OPTIONS = { once: true, margin: "-80px" } as const;

export function useScrollIntoView<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, IN_VIEW_OPTIONS);
  return { ref, isInView };
}
