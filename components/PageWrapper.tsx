import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollAnimations from "./ScrollAnimations";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main id="main-content" className="pt-16 min-h-screen page-enter">
        {children}
      </main>
      <Footer />
    </>
  );
}
