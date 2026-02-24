"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // ── Observer 1: fade-up reveals (fire once, never replay) ──
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    // ── Observer 2: section-header swipes (replay on re-entry) ─
    const swipeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in", entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );

    document
      .querySelectorAll<Element>(".reveal, .reveal-left")
      .forEach((el) => revealObserver.observe(el));

    document
      .querySelectorAll<Element>(".swipe-left, .swipe-right")
      .forEach((el) => swipeObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      swipeObserver.disconnect();
    };
  }, []);

  return null;
}
