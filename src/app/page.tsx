import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutMe />
      <ExperienceEducation />
      <TechStack />
      <FeaturedProjects />
      <CTA />
      <Footer />
    </main>
  );
}
