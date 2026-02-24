import SectionWrapper from "./SectionWrapper";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="border-t border-border" fullScreen>
      {/* Swipe-in section header */}
      <div className="swipe-right mb-12 text-center">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
          Say hello
        </p>
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
        >
          Get In Touch
        </h2>
        <p className="text-text-secondary leading-relaxed max-w-xl mx-auto">
          Open to new opportunities and meaningful collaborations.
        </p>
      </div>

      {/* Email CTA */}
      <div className="reveal reveal-delay-1 text-center mb-12">
        <a
          href="https://mail.google.com/mail/?view=cm&to=sghoshxperia@gmail.com&su=Let%27s%20Connect&body=Hi%20Soham%2C"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-border hover:border-accent bg-surface hover:bg-surface-alt text-text-primary hover:text-accent text-lg font-medium transition-all duration-300 group"
          aria-label="Send an email to sghoshxperia@gmail.com"
        >
          <EnvelopeIcon />
          sghoshxperia@gmail.com
          <ExternalIcon />
        </a>
      </div>

      {/* Social links */}
      <div className="reveal reveal-delay-2 flex flex-wrap gap-4 justify-center">
        {[
          { label: "GitHub",    href: "https://github.com/Sghoshxperia",                  icon: <GithubIcon /> },
          { label: "LinkedIn",  href: "https://www.linkedin.com/in/the-soham-ghosh",       icon: <LinkedinIcon /> },
          { label: "Instagram", href: "https://www.instagram.com/_soham.ghosh_/",          icon: <InstagramIcon /> },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${label} profile`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border hover:border-accent text-text-muted hover:text-accent transition-colors text-sm font-medium"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
