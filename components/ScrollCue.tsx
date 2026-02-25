export default function ScrollCue({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-text-muted hover:text-accent transition-colors"
    >
      <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="animate-bounce"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </a>
  );
}
