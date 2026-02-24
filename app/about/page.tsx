import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About – Soham Ghosh",
  description: "Learn about Soham Ghosh — backend engineer, systems thinker, and robotics enthusiast.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
}
