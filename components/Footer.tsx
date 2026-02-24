export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-container px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-muted">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Soham Ghosh
        </p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Next.js official site"
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Tailwind CSS official site"
          >
            Tailwind CSS
          </a>
        </p>
        <a
          href="#home"
          aria-label="Scroll back to top"
          className="hover:text-accent transition-colors flex items-center gap-1.5"
        >
          <ChevronUpIcon />
          Back to top
        </a>
      </div>
    </footer>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}
