"use client";

import { useEffect } from "react";

/**
 * Mounts on the home page only.
 * Adds "snap-home" class to <html> to activate scroll-snap,
 * and removes it on unmount when navigating away.
 */
export default function SnapScroll() {
  useEffect(() => {
    document.documentElement.classList.add("snap-home");
    return () => document.documentElement.classList.remove("snap-home");
  }, []);

  return null;
}
