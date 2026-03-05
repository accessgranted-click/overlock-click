import Wordmark from "@/components/Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-mid py-7">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Wordmark className="text-sm" />

        <p className="text-slate text-xs font-sans text-center order-last sm:order-none">
          © {year} overlock.click — All rights reserved
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
