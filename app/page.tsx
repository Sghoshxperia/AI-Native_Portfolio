import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import AboutPreview     from "@/components/AboutPreview";
import ProjectsPreview  from "@/components/ProjectsPreview";
import Contact          from "@/components/Contact";
import Footer           from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import SnapScroll       from "@/components/SnapScroll";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <SnapScroll />
      <Navbar />
      <main id="main-content" className="page-enter">
        <Hero />
        <AboutPreview />
        <ProjectsPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
