interface WordmarkProps {
  className?: string;
}

export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <a
      href="/"
      className={`font-grotesk font-semibold tracking-tight select-none ${className}`}
      aria-label="overlock.click home"
    >
      <span className="text-bone">overlock</span>
      <span className="text-volt">.click</span>
    </a>
  );
}
