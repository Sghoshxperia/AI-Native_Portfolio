"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollCue from "./ScrollCue";
import { GithubIcon, LinkedinIcon, InstagramIcon, DownloadIcon } from "@/components/icons";

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

