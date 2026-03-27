import { useEffect } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/Footer"
import { useIntersectionObserver } from "@/hooks/useScrollAnimations"

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"
    
    // Core Layout Classes for Sections
    const sections = document.querySelectorAll("section")
    sections.forEach((el) => {
      el.classList.add("section-scene")
      el.classList.add("snap-start")
    })

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="h-screen !bg-transparent text-white overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
