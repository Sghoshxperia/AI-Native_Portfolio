"use client";

import { useState, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

/* ── World TopoJSON (Natural Earth 110m, public domain) ──────── */
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/* ── Visited countries ──────────────────────────────────────────
   coordinates: [longitude, latitude]                             */
const VISITED: Array<{ name: string; coordinates: [number, number] }> = [
  { name: "India",          coordinates: [78.96,  20.59] },
  { name: "Thailand",       coordinates: [100.99, 15.87] },
  { name: "France",         coordinates: [2.21,   46.23] },
  { name: "Germany",        coordinates: [10.45,  51.17] },
  { name: "Italy",          coordinates: [12.57,  41.87] },
  { name: "United States",  coordinates: [-95.71, 37.09] },
  { name: "UAE",            coordinates: [53.85,  23.42] },
  { name: "Austria",        coordinates: [14.55,  47.52] },
  { name: "United Kingdom", coordinates: [-3.44,  55.38] },
  { name: "Switzerland",    coordinates: [8.23,   46.82] },
  { name: "Sweden",         coordinates: [18.64,  60.13] },
  { name: "Finland",        coordinates: [25.75,  61.92] },
];

/* ── Component ──────────────────────────────────────────────── */

export default function WorldMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Tooltip state */
  const [hovered, setHovered]   = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  /* Drop / roll-up animation */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("map-roll-up");
          el.classList.add("map-drop-in");
        } else if (el.classList.contains("map-drop-in")) {
          el.classList.remove("map-drop-in");
          el.classList.add("map-roll-up");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const trackMouse = (evt: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: evt.clientX - rect.left, y: evt.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/30"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-border">
        <p className="text-xs font-mono text-accent uppercase tracking-widest mb-1">
          Explorer
        </p>
        <h3 className="text-sm font-semibold text-text-primary">
          Perspective Beyond Code
        </h3>
        <p className="text-xs text-text-muted mt-0.5">
          {VISITED.length} countries &amp; counting
        </p>
      </div>

      {/* Map */}
      <div className="px-1 pb-1 pt-0" onMouseMove={trackMouse}>
        <ComposableMap
          projectionConfig={{ scale: 175, center: [10, 5] }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: { rsmKey: string }[] }) =>
              geographies.map((geo: { rsmKey: string }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="var(--color-surface-alt)"
                  stroke="var(--color-border)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover:   { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {VISITED.map(({ name, coordinates }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animated pulse ring */}
              <circle
                r={6}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1.5}
                className="marker-pulse"
                style={{ cursor: "pointer" }}
              />
              {/* Static glow halo */}
              <circle
                r={5}
                fill="var(--color-accent)"
                opacity={0.18}
                style={{ cursor: "pointer" }}
              />
              {/* X mark */}
              <line
                x1="-5" y1="-5" x2="5" y2="5"
                stroke="var(--color-accent)"
                strokeWidth={2}
                strokeLinecap="round"
                style={{ cursor: "pointer" }}
              />
              <line
                x1="5" y1="-5" x2="-5" y2="5"
                stroke="var(--color-accent)"
                strokeWidth={2}
                strokeLinecap="round"
                style={{ cursor: "pointer" }}
              />
            </Marker>
          ))}
        </ComposableMap>

        {/* Tooltip */}
        {hovered && (
          <div
            className="absolute z-20 pointer-events-none px-2.5 py-1 text-xs font-mono text-text-primary bg-surface border border-border/80 rounded-md shadow-lg whitespace-nowrap"
            style={{ left: mousePos.x + 12, top: mousePos.y - 34 }}
          >
            {hovered}
          </div>
        )}
      </div>
    </div>
  );
}
