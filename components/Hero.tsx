"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollCue from "./ScrollCue";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  /* Staggered entrance on mount */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-hero-item]");
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 120 * i);
    });
  }, []);

  const heroItemStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center px-4 pt-16"
    >
      {/* Subtle radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="mx-auto w-full max-w-container flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 py-16"
      >
        {/* Text block */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
          <p
            data-hero-item
            style={heroItemStyle}
            className="font-mono text-accent text-sm tracking-widest uppercase"
          >
            Compiling...
          </p>

          <h1
            id="hero-heading"
            data-hero-item
            style={heroItemStyle}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-text-primary"
          >
            Soham Ghosh
          </h1>

          <p
            data-hero-item
            style={heroItemStyle}
            className="text-xl sm:text-2xl font-medium text-text-secondary"
          >
            Backend Software Engineer
          </p>

          <p
            data-hero-item
            style={heroItemStyle}
            className="text-text-secondary leading-relaxed max-w-xl mx-auto md:mx-0 text-justify"
          >
            Hi! I am Soham. As a backend software engineer I build systems that simplify complex problems, focusing on scalable automation and production reliability — while exploring agentic AI to create more adaptive, decision-driven software systems.
          </p>

          {/* CTAs */}
          <div
            data-hero-item
            style={heroItemStyle}
            className="flex flex-wrap gap-3 justify-center md:justify-start mt-2"
          >
            <a
              href="/Soham_Ghosh_CV.pdf"
              download="Soham_Ghosh_CV.pdf"
              aria-label="Download CV"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent-hover"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector<HTMLElement>("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-accent text-text-primary text-sm font-semibold transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social row */}
          <div
            data-hero-item
            style={heroItemStyle}
            className="flex gap-4 justify-center md:justify-start mt-1"
          >
            <SocialLink href="https://github.com/Sghoshxperia" label="GitHub profile">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/the-soham-ghosh" label="LinkedIn profile">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/_soham.ghosh_/" label="Instagram profile">
              <InstagramIcon />
            </SocialLink>
          </div>
        </div>

        {/* Profile image */}
        <div
          data-hero-item
          style={heroItemStyle}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-[360px] sm:w-[300px] sm:h-[440px] rounded-[2rem] overflow-hidden ring-2 ring-border">
            <Image
              src="/images/profile.jpeg"
              alt="Profile photo of Soham Ghosh"
              fill
              priority
              sizes="(max-width: 640px) 288px, 360px"
              className="object-cover object-[62%_0%]"
            />
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <ScrollCue href="#about" label="Scroll to About section" />
    </section>
  );
}

/* ── Icon atoms ────────────────────────────────────────────── */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent transition-colors"
    >
      {children}
    </a>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

