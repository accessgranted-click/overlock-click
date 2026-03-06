interface StitchDividerProps {
  stroke?: string;
  strokeOpacity?: number;
  position?: "top" | "bottom";
}

export default function StitchDivider({
  stroke = "#17171E",
  strokeOpacity = 1,
  position = "bottom",
}: StitchDividerProps) {
  const posClass =
    position === "bottom"
      ? "absolute bottom-0 left-0 right-0"
      : "absolute top-0 left-0 right-0";

  return (
    <div aria-hidden="true" className={posClass}>
      <svg
        viewBox="0 0 1440 4"
        preserveAspectRatio="none"
        className="w-full h-1"
      >
        <line
          x1="0"
          y1="2"
          x2="1440"
          y2="2"
          stroke={stroke}
          strokeWidth="2"
          strokeOpacity={strokeOpacity}
          strokeDasharray="10 5"
        />
      </svg>
    </div>
  );
}
