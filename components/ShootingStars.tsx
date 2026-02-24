"use client";

/* Shooting stars — diagonal accent effect.
   Each star: gradient trail + tip glow, fires occasionally.
   Trail rotated 45 ° around its left edge; tip dot placed at
   the computed end-point of the rotated line.                  */

const STARS: Array<{
  top: string; left: string;
  delay: string; dur: string;
  len: number;
}> = [
  { top: "4%",  left: "10%", delay: "0s",   dur: "10s", len: 120 },
  { top: "10%", left: "58%", delay: "3.0s", dur: "9s",  len: 90  },
  { top: "2%",  left: "78%", delay: "6.5s", dur: "11s", len: 145 },
  { top: "30%", left: "20%", delay: "1.2s", dur: "10s", len: 105 },
  { top: "8%",  left: "88%", delay: "4.8s", dur: "8s",  len: 80  },
  { top: "42%", left: "65%", delay: "8.5s", dur: "11s", len: 130 },
  { top: "22%", left: "40%", delay: "5.5s", dur: "12s", len: 100 },
];

export default function ShootingStars() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {STARS.map((s, i) => {
        // After rotate(45deg) around the left-center of the trail,
        // the right end of the line lands at (len×cos45, len×sin45).
        const tip = Math.round(s.len * 0.707);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: s.top,
              left: s.left,
              animation: `shootingStar ${s.dur} linear ${s.delay} infinite`,
              opacity: 0,
            }}
          >
            {/* Gradient trail */}
            <div
              style={{
                width: s.len,
                height: "1.5px",
                background:
                  "linear-gradient(to right, transparent, rgba(148,150,255,0.80))",
                transform: "rotate(45deg)",
                transformOrigin: "0 50%",
                borderRadius: "2px",
              }}
            />

            {/* Tip — bright glow orb */}
            <div
              style={{
                position: "absolute",
                left: tip - 2,
                top: tip - 2,
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(215, 218, 255, 1)",
                boxShadow:
                  "0 0 5px 1px rgba(148,150,255,0.95), " +
                  "0 0 12px 4px rgba(99,102,241,0.50), " +
                  "0 0 22px 7px rgba(99,102,241,0.18)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
