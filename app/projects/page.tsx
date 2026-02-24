import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects – [[HERO_NAME]]",
  description: "[[META_DESCRIPTION]]",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Projects />
    </PageWrapper>
  );
}
