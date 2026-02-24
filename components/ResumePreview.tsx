import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function ResumePreview() {
  return (
    <SectionWrapper id="resume" className="border-t border-border">
      <div className="max-w-2xl mx-auto">
        {/* Swipe-in header */}
        <div className="swipe-left mb-12 text-center">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            My journey
          </p>
          <h2
            id="resume-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary"
          >
            Resume
          </h2>
        </div>

        {/* Latest role card */}
        <div className="reveal mb-6 p-5 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
            <div>
              <p className="text-base font-semibold text-text-primary">[[JOB_1_TITLE]]</p>
              <p className="text-sm text-accent">[[JOB_1_COMPANY]]</p>
            </div>
            <span className="text-xs font-mono text-text-muted">[[JOB_1_PERIOD]]</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">[[JOB_1_BULLET_1]]</p>
        </div>

        {/* Education quick-stat */}
        <div className="reveal reveal-delay-1 mb-10 p-5 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <p className="text-base font-semibold text-text-primary">B.Tech — Electronics and Communication Engineering</p>
              <p className="text-sm text-accent">Manipal Institute of Technology</p>
            </div>
            <span className="text-xs font-mono text-text-muted">2019 – 2023</span>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-2 text-center">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border hover:border-accent text-text-secondary hover:text-accent text-sm font-medium transition-colors group"
            aria-label="View full resume"
          >
            See Full Resume
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
