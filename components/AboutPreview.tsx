import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import ScrollCue from "./ScrollCue";

export default function AboutPreview() {
  return (
    <SectionWrapper
      id="about"
      className="border-t border-border"
      fullScreen
      scrollCue={<ScrollCue href="#projects" label="Scroll to Projects section" />}
    >
      <div className="flex items-center gap-16 xl:gap-28 w-full">

        {/* Robotic arm — hidden on small screens */}
        <div className="hidden md:flex flex-shrink-0 items-end">
          <RoboticArm />
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-5 max-w-xl">
          <div className="swipe-left">
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
              Get to know me
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-text-primary"
            >
              About Me
            </h2>
          </div>

          <p className="reveal reveal-delay-1 text-text-secondary leading-relaxed">
            Engineering scalable systems today, building intelligent ones for tomorrow.
          </p>

          <div className="reveal reveal-delay-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border hover:border-accent text-text-secondary hover:text-accent text-sm font-medium transition-colors group"
              aria-label="Go to full About page"
            >
              Learn More
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

/* ── Robotic Arm — pick-and-place sequence ───────────────────── */
/*
  13-keyframe cycle (18 s):
  0.00 → home (upright, at rest)
  0.07 → scan-left (arm sweeps left to inspect)
  0.14 → scan-right (arm sweeps right to inspect)
  0.23 → approach pickup (reaching right-down, claws open)
  0.35 → arrived at pickup  ← pause, claws close
  0.44 → lifting up high
  0.52 → high-arc transport (arm up, sweeping left)
  0.60 → lowering to place (left side)
  0.70 → arrived at place  ← pause, claws open
  0.78 → retract upward after release
  0.85 → swinging back right
  0.93 → almost home
  1.00 → home (loop)
*/

const KT = "0; 0.07; 0.14; 0.23; 0.35; 0.44; 0.52; 0.60; 0.70; 0.78; 0.85; 0.93; 1";
const KS = "0.42 0 0.58 1; " // each transition ease-in-out
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1; "
           + "0.42 0 0.58 1";

function RoboticArm() {
  return (
    <svg
      viewBox="0 0 160 310"
      width="150"
      height="290"
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <filter id="robo-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orb-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── pickup orb (right side) — visible before grip, hidden after ── */}
      <circle cx="128" cy="228" r="5" fill="#6366f1" filter="url(#orb-glow)" opacity="0.9">
        {/* visible during home→reach→arrive, fades as gripper closes */}
        <animate attributeName="opacity"
          values="0.9; 0.9; 0.9; 0.5; 0; 0; 0; 0; 0; 0; 0; 0.9; 0.9"
          keyTimes={KT} dur="18s" repeatCount="indefinite"
          calcMode="spline" keySplines={KS} />
        <animate attributeName="r"
          values="5; 5; 5; 3; 0; 0; 0; 0; 0; 0; 0; 5; 5"
          keyTimes={KT} dur="18s" repeatCount="indefinite"
          calcMode="spline" keySplines={KS} />
      </circle>

      {/* ── place orb (left side) — appears as gripper opens ── */}
      <circle cx="32" cy="228" r="0" fill="#818cf8" filter="url(#orb-glow)" opacity="0">
        <animate attributeName="opacity"
          values="0; 0; 0; 0; 0; 0; 0; 0; 0.8; 0.8; 0.4; 0; 0"
          keyTimes={KT} dur="18s" repeatCount="indefinite"
          calcMode="spline" keySplines={KS} />
        <animate attributeName="r"
          values="0; 0; 0; 0; 0; 0; 0; 0; 5; 5; 3; 0; 0"
          keyTimes={KT} dur="18s" repeatCount="indefinite"
          calcMode="spline" keySplines={KS} />
      </circle>

      {/* ── Base platform ── */}
      <rect x="15" y="283" width="130" height="20" rx="6"
        fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />
      <line x1="42"  y1="283" x2="42"  y2="303" stroke="#2a2a38" strokeWidth="1" />
      <line x1="118" y1="283" x2="118" y2="303" stroke="#2a2a38" strokeWidth="1" />
      <rect x="25"  y="289" width="18" height="6" rx="2" fill="#1a1a24" />
      <rect x="117" y="289" width="18" height="6" rx="2" fill="#1a1a24" />

      {/* ── Shoulder mount ── */}
      <rect x="66" y="257" width="28" height="30" rx="5"
        fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />
      <rect x="71" y="262" width="18" height="9" rx="3" fill="#1a1a24" />

      {/* ══════════════════════════════════════════════════════════
          LOWER ARM GROUP — rotates around shoulder (80, 262)
          Sequence: home → reach-right-down → hold → lift →
                    transport-left → lower-left → hold → return
          ══════════════════════════════════════════════════════ */}
      <g>
        {/* Lower arm body */}
        <rect x="72" y="180" width="16" height="84" rx="6"
          fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />
        <rect x="75" y="194" width="10" height="48" rx="2" fill="#16161f" />
        <line x1="80" y1="202" x2="80" y2="236" stroke="#2a2a38"
          strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="74" cy="197" r="1.5" fill="#2a2a38" />
        <circle cx="86" cy="197" r="1.5" fill="#2a2a38" />
        <circle cx="74" cy="237" r="1.5" fill="#2a2a38" />
        <circle cx="86" cy="237" r="1.5" fill="#2a2a38" />

        {/* Elbow housing */}
        <circle cx="80" cy="180" r="12" fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />

        {/* ══════════════════════════════════════════════════════════
            UPPER ARM GROUP — rotates around elbow (80, 180)
            Counter-motion gives natural arm arc
            ══════════════════════════════════════════════════════ */}
        <g>
          {/* Upper arm body */}
          <rect x="74" y="113" width="12" height="69" rx="5"
            fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />
          <rect x="76" y="124" width="8" height="44" rx="2" fill="#16161f" />
          <line x1="80" y1="130" x2="80" y2="162" stroke="#2a2a38"
            strokeWidth="1" strokeDasharray="2 5" />
          <circle cx="75.5" cy="127" r="1.5" fill="#2a2a38" />
          <circle cx="84.5" cy="127" r="1.5" fill="#2a2a38" />

          {/* Wrist housing */}
          <circle cx="80" cy="113" r="10" fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />

          {/* ══════════════════════════════════════════════════════════
              GRIPPER GROUP — rotates around wrist (80, 113)
              Claws also individually translate to open/close
              ══════════════════════════════════════════════════════ */}
          <g>
            {/* Gripper crossbar */}
            <rect x="61" y="95" width="38" height="11" rx="4"
              fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />
            <rect x="68" y="98" width="24" height="5" rx="2" fill="#16161f" />

            {/* Left claw — translates left (open) / right (close) */}
            <rect x="58" y="69" width="11" height="30" rx="5"
              fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5">
              {/* open wide on reach, close on grip, open on release */}
              <animateTransform attributeName="transform" type="translate"
                values="0 0; 0 0; 0 0; -5 0; 4 0; 4 0; 4 0; 4 0; -5 0; -5 0; 0 0; 0 0; 0 0"
                keyTimes={KT} dur="18s" repeatCount="indefinite"
                calcMode="spline" keySplines={KS} additive="sum" />
            </rect>
            <rect x="61" y="74" width="5" height="18" rx="2"
              fill="#6366f1" opacity="0.35">
              <animateTransform attributeName="transform" type="translate"
                values="0 0; 0 0; 0 0; -5 0; 4 0; 4 0; 4 0; 4 0; -5 0; -5 0; 0 0; 0 0; 0 0"
                keyTimes={KT} dur="18s" repeatCount="indefinite"
                calcMode="spline" keySplines={KS} additive="sum" />
            </rect>
            <circle cx="63.5" cy="73" r="2" fill="#6366f1" opacity="0.7">
              <animateTransform attributeName="transform" type="translate"
                values="0 0; 0 0; 0 0; -5 0; 4 0; 4 0; 4 0; 4 0; -5 0; -5 0; 0 0; 0 0; 0 0"
                keyTimes={KT} dur="18s" repeatCount="indefinite"
                calcMode="spline" keySplines={KS} additive="sum" />
            </circle>

            {/* Right claw — translates right (open) / left (close) */}
            <rect x="91" y="69" width="11" height="30" rx="5"
              fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5">
              <animateTransform attributeName="transform" type="translate"
                values="0 0; 0 0; 0 0; 5 0; -4 0; -4 0; -4 0; -4 0; 5 0; 5 0; 0 0; 0 0; 0 0"
                keyTimes={KT} dur="18s" repeatCount="indefinite"
                calcMode="spline" keySplines={KS} additive="sum" />
            </rect>
            <rect x="94" y="74" width="5" height="18" rx="2"
              fill="#6366f1" opacity="0.35">
              <animateTransform attributeName="transform" type="translate"
                values="0 0; 0 0; 0 0; 5 0; -4 0; -4 0; -4 0; -4 0; 5 0; 5 0; 0 0; 0 0; 0 0"
                keyTimes={KT} dur="18s" repeatCount="indefinite"
                calcMode="spline" keySplines={KS} additive="sum" />
            </rect>
            <circle cx="96.5" cy="73" r="2" fill="#6366f1" opacity="0.7">
              <animateTransform attributeName="transform" type="translate"
                values="0 0; 0 0; 0 0; 5 0; -4 0; -4 0; -4 0; -4 0; 5 0; 5 0; 0 0; 0 0; 0 0"
                keyTimes={KT} dur="18s" repeatCount="indefinite"
                calcMode="spline" keySplines={KS} additive="sum" />
            </circle>

            {/* Centre tip glow */}
            <circle cx="80" cy="66" r="3.5" fill="#818cf8"
              filter="url(#robo-glow)" opacity="0.9" />

            {/* Wrist rotation */}
            <animateTransform attributeName="transform" type="rotate"
              values="-3 80 113; 10 80 113; -10 80 113; -45 80 113; -52 80 113; -15 80 113; 5 80 113; -45 80 113; -50 80 113; -10 80 113; -5 80 113; -1 80 113; -3 80 113"
              keyTimes={KT} dur="18s" repeatCount="indefinite"
              calcMode="spline" keySplines={KS} />
          </g>

          {/* Wrist accent */}
          <circle cx="80" cy="113" r="5.5" fill="#818cf8" filter="url(#robo-glow)" />

          {/* Elbow rotation — counter-swings for natural arc */}
          <animateTransform attributeName="transform" type="rotate"
            values="8 80 180; 5 80 180; 5 80 180; 55 80 180; 62 80 180; 20 80 180; 5 80 180; 55 80 180; 60 80 180; 20 80 180; 10 80 180; 6 80 180; 8 80 180"
            keyTimes={KT} dur="18s" repeatCount="indefinite"
            calcMode="spline" keySplines={KS} />
        </g>

        {/* Elbow accent */}
        <circle cx="80" cy="180" r="6.5" fill="#6366f1" filter="url(#robo-glow)" />

        {/* Shoulder rotation */}
        <animateTransform attributeName="transform" type="rotate"
          values="-5 80 262; -30 80 262; 20 80 262; 30 80 262; 32 80 262; 15 80 262; -15 80 262; -25 80 262; -28 80 262; -20 80 262; 0 80 262; -3 80 262; -5 80 262"
          keyTimes={KT} dur="18s" repeatCount="indefinite"
          calcMode="spline" keySplines={KS} />
      </g>

      {/* ── Shoulder joint — always on top ── */}
      <circle cx="80" cy="262" r="14" fill="#111118" stroke="#2a2a38" strokeWidth="1.5" />
      <circle cx="80" cy="262" r="7" fill="#6366f1" filter="url(#robo-glow)" />
      <circle cx="80" cy="262" r="14" fill="none"
        stroke="#6366f1" strokeWidth="1.5" className="joint-pulse-ring" />
    </svg>
  );
}

/* ── Icons ───────────────────────────────────────────────────── */

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
