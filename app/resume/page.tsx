import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume – Soham Ghosh",
  description: "Resume of Soham Ghosh — backend software engineer with experience at Nokia and Juniper Networks.",
};

export default function ResumePage() {
  return (
    <PageWrapper>
      <Resume />
    </PageWrapper>
  );
}
