"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import ScrollCue from "./ScrollCue";

const BLOGS: { title: string; excerpt: string; thumbnail: string | null; url: string }[] = [
  {
    title: "8 Production Patterns for Token-Efficient Agentic AI",
    excerpt: "Practical design patterns for shipping agentic AI systems that stay lean in production — covering dynamic context pruning, prompt compression, and smarter tool-call orchestration to cut token costs without sacrificing capability.",
    thumbnail: "/images/8 tips blog (1).png",
    url: "https://medium.com/p/3764030a81c3",
  },
  {
    title: "Self-Correcting Multi-Agent AI Systems: Building Pipelines That Fix Themselves",
    excerpt: "A look at how to architect multi-agent pipelines with built-in error detection and recovery loops, so your AI systems can identify failures, diagnose root causes, and course-correct — without human intervention.",
    thumbnail: "/images/multi agent blog.png",
    url: "https://medium.com/p/010786bae2db",
  },
  {
    title: "More articles coming soon",
    excerpt: "Stay tuned for more writing on agentic AI, distributed systems, and the engineering behind intelligent automation.",
    thumbnail: null, // no image yet
    url: "#",
  },
  {
    title: "More articles coming soon",
    excerpt: "Stay tuned for more writing on agentic AI, distributed systems, and the engineering behind intelligent automation.",
    thumbnail: null, // no image yet
    url: "#",
  },
  {
    title: "More articles coming soon",
    excerpt: "Stay tuned for more writing on agentic AI, distributed systems, and the engineering behind intelligent automation.",
    thumbnail: null, // no image yet
    url: "#",
  },
];

const N   = BLOGS.length;
const GAP = 20; // matches gap-5 (1.25rem at 16px base)

export default function BlogPreview() {
  const [startIndex, setStartIndex] = useState(0);
  const [extraX, setExtraX]         = useState(0);   // px added to resting offset during slide
  const [animated, setAnimated]     = useState(true); // whether CSS transition is on
  const [cardWidth, setCardWidth]   = useState(0);   // measured on mount / resize
  const containerRef                = useRef<HTMLDivElement>(null);
  const animating                   = useRef(false);

  // ── Measure card width from the live DOM ─────────────────────────
  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const cols =
      window.innerWidth >= 1024 ? 3 :
      window.innerWidth >= 768  ? 2 : 1;
    setAnimated(false);                                      // suppress transition on resize
    setExtraX(0);
    setCardWidth((el.offsetWidth - GAP * (cols - 1)) / cols);
    animating.current = false;
    requestAnimationFrame(() => setAnimated(true));
  }, []);

  // useLayoutEffect: synchronous before first paint — no FOUC
  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // ── Navigation ────────────────────────────────────────────────────
  const navigate = (direction: "next" | "prev") => {
    if (animating.current || cardWidth === 0) return;
    animating.current = true;

    const slide = cardWidth + GAP;

    setAnimated(true);
    setExtraX(direction === "next" ? -slide : slide);

    setTimeout(() => {
      // Disable transition, reset transform, advance index — all in one render
      setAnimated(false);
      setExtraX(0);
      setStartIndex(i =>
        direction === "next" ? (i + 1) % N : (i - 1 + N) % N
      );
      // Re-enable transition after the DOM has been repainted at the new position
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          animating.current = false;
        })
      );
    }, 520);
  };

  // ── Track items: leftGuard + 3 visible + rightGuard ──────────────
  // Key by startIndex+offset so cards remount together with the index
  // reset — the visual content is identical, so the swap is invisible.
  const items = [-1, 0, 1, 2, 3].map(off => ({
    blog: BLOGS[(startIndex + off + N) % N],
    key:  `${startIndex}:${off}`,
  }));

  // Resting offset hides the leftGuard (one card-width + gap to the left)
  const restingX = -(cardWidth + GAP);
  const totalX   =  restingX + extraX;

  return (
    <SectionWrapper
      id="blog"
      className="border-t border-border"
      fullScreen
      scrollCue={<ScrollCue href="#contact" label="Scroll to Contact section" />}
    >
      {/* Section header */}
      <div className="swipe-left mb-12">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
          Engineering Insights
        </p>
        <h2
          id="blog-heading"
          className="text-3xl sm:text-4xl font-bold text-text-primary"
        >
          Blogs
        </h2>
      </div>

      {/* Carousel shell */}
      <div className="flex items-center gap-4">

        {/* ← Prev */}
        <button
          onClick={() => navigate("prev")}
          aria-label="Previous blogs"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-border hover:border-accent text-text-muted hover:text-accent transition-colors flex items-center justify-center"
        >
          <ChevronLeftIcon />
        </button>

        {/* Clipping window */}
        <div ref={containerRef} className="flex-1 overflow-hidden">
          {cardWidth > 0 ? (
            /* ── Sliding track ─────────────────────────────────── */
            <div
              className="flex"
              style={{
                gap:        `${GAP}px`,
                transform:  `translateX(${totalX}px)`,
                transition: animated
                  ? "transform 0.52s cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
              }}
            >
              {items.map(({ blog, key }) => (
                <a
                  key={key}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: cardWidth, flexShrink: 0 }}
                  className="group flex flex-col rounded-xl overflow-hidden border border-border bg-surface hover:border-accent/50 transition-colors duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-surface-alt flex-shrink-0">
                    {blog.thumbnail ? (
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        loading="lazy"
                      />
                    ) : (
                      /* Placeholder shown until a real thumbnail is available */
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-xs text-text-muted tracking-widest uppercase opacity-40">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent mt-auto">
                      Read More
                      <ArrowRightSmIcon />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            /* Skeleton shown for the single frame before measurement */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[0, 1, 2].map(i => (
                <div key={i} className="aspect-video rounded-xl bg-surface animate-pulse" />
              ))}
            </div>
          )}
        </div>

        {/* Next → */}
        <button
          onClick={() => navigate("next")}
          aria-label="Next blogs"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-border hover:border-accent text-text-muted hover:text-accent transition-colors flex items-center justify-center"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </SectionWrapper>
  );
}

/* ── Icons ──────────────────────────────────────────────────── */

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ArrowRightSmIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
      className="group-hover:translate-x-0.5 transition-transform">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
