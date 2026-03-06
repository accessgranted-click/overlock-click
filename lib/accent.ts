export type AccentColor = "emerald" | "ember";

export const accentMap = {
  emerald: {
    text: "text-emerald",
    dot: "bg-emerald",
    bg: "bg-emerald/5",
    badge: "bg-emerald/10 text-emerald",
  },
  ember: {
    text: "text-ember",
    dot: "bg-ember",
    bg: "bg-ember/5",
    badge: "bg-ember/10 text-ember",
  },
} as const;
