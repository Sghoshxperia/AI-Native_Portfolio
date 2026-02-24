import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects – Soham Ghosh",
  description: "Explore projects by Soham Ghosh — from network automation toolkits to robotics and AI systems.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Projects />
    </PageWrapper>
  );
}
