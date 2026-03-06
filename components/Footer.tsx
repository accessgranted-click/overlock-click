import Wordmark from "@/components/Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-smoke border-t border-white/6 py-8">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Wordmark className="text-sm" />

        <p className="text-slate text-xs font-sans text-center order-last sm:order-none">
          © {year} overlock.click
        </p>

        <a
          href="mailto:hello@overlock.click"
          className="text-slate hover:text-bone text-xs font-sans transition-colors duration-200"
        >
          hello@overlock.click
        </a>
      </div>
    </footer>
  );
}
