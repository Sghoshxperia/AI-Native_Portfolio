import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import CursorGlow from "@/components/CursorGlow";
import ShootingStars from "@/components/ShootingStars";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soham Ghosh – Backend Software Engineer",
  description: "Backend Software Engineer building scalable systems and exploring agentic AI.",
  authors: [{ name: "Soham Ghosh" }],
  keywords: ["backend engineer", "software engineer", "Next.js portfolio", "Soham Ghosh", "network automation", "agentic AI"],
  openGraph: {
    title: "Soham Ghosh – Backend Software Engineer",
    description: "Backend Software Engineer building scalable systems and exploring agentic AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable}`}>
      <body>
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CursorGlow />
        <ShootingStars />
        <SideNav />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
