import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About – [[HERO_NAME]]",
  description: "[[META_DESCRIPTION]]",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
}
