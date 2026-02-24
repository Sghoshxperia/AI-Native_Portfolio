import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import ScrollCue from "./ScrollCue";

export default function ProjectsPreview() {
  return (
    <SectionWrapper
      id="projects"
      className="border-t border-border"
      fullScreen
      scrollCue={<ScrollCue href="#contact" label="Scroll to Contact section" />}
    >
      {/* Swipe-in header */}
      <div className="swipe-right mb-12">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
          What I&apos;ve built
        </p>
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-text-primary"
        >
          Projects
        </h2>
      </div>

      {/* Single featured project — split layout */}
      <div className="reveal flex flex-col md:flex-row rounded-xl overflow-hidden border border-border bg-surface hover:border-accent/50 transition-colors duration-300">
        {/* Left: image */}
        <div className="relative md:w-1/2 aspect-video md:aspect-auto bg-surface-alt flex-shrink-0">
          <Image
            src="/images/network-automation.png"
            alt="Multi-Vendor Network Automation Toolkit"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
          {/* Year badge */}
          <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono bg-background text-text-primary border border-border/60 shadow-sm">
            2025
          </span>
        </div>

        {/* Right: content + CTA */}
        <div className="flex flex-col gap-4 p-6 md:p-8 flex-1 justify-center">
          <h3 className="text-xl font-semibold text-text-primary">
            Multi-Vendor Network Automation Toolkit
          </h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Developed Python-based automation scripts to configure and monitor multi-vendor network devices using SSH and multiprocessing. Automated configuration workflows using Ansible across Linux and Cisco environments.
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Infrastructure Automation", "Python & Multiprocessing", "SSH & Config Management"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-300 text-zinc-900 transition-opacity duration-200 hover:opacity-70"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* CTA */}
          <Link
            href="/projects"
            className="mt-2 self-start inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border hover:border-accent text-text-secondary hover:text-accent text-sm font-medium transition-colors group"
            aria-label="View all projects"
          >
            View All Projects
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
      className="group-hover:translate-x-1 transition-transform"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
