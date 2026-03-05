export type AccentColor = "volt" | "mango";

export const accentMap = {
  volt: {
    text: "text-volt",
    dot: "bg-volt",
    bg: "bg-volt/5",
    badge: "bg-volt/10 text-volt",
  },
  mango: {
    text: "text-mango",
    dot: "bg-mango",
    bg: "bg-mango/5",
    badge: "bg-mango/10 text-mango",
  },
} as const;
