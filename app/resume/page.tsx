import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume – [[HERO_NAME]]",
  description: "[[META_DESCRIPTION]]",
};

export default function ResumePage() {
  return (
    <PageWrapper>
      <Resume />
    </PageWrapper>
  );
}
