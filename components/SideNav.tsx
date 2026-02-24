import Link from "next/link";

const NAV_ITEMS = [
  { href: "/#home",     label: "Home",     Icon: HomeIcon },
  { href: "/#about",    label: "About",    Icon: UserIcon },
  { href: "/#projects", label: "Projects", Icon: CodeIcon },
  { href: "/#contact",  label: "Contact",  Icon: MailIcon },
];

export default function SideNav() {
  // All links are home-page anchors — no route-based active state needed
  const isActive = (_href: string) => false;

  return (
    <nav
      aria-label="Side navigation"
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex"
    >
      {/* Accent-coloured pill strip */}
      <div className="flex flex-col gap-1 bg-accent rounded-2xl p-2 shadow-lg shadow-accent/30">
        {NAV_ITEMS.map(({ href, label, Icon }) => (
          <div key={href} className="relative group">
            <Link
              href={href}
              aria-label={label}
              aria-current={isActive(href) ? "page" : undefined}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/15 transition-colors"
            >
              <Icon />
            </Link>
            {/* Tooltip */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded text-xs font-mono bg-surface border border-border text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}

/* ── Icons ─────────────────────────────────────────────────── */

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
