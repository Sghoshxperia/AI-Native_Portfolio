import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import CursorGlow from "@/components/CursorGlow";
import ShootingStars from "@/components/ShootingStars";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  keywords: ["[[META_KEYWORD_1]]", "[[META_KEYWORD_2]]", "[[META_KEYWORD_3]]"],
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
      </body>
    </html>
  );
}
