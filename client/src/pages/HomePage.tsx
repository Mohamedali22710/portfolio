import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { HowIBuildSection } from '../components/sections/HowIBuildSection';
import { GisPipelineSection } from '../components/sections/GisPipelineSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/sections/Footer';

interface HomePageProps {
  onOpenTerminal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenTerminal }) => {
  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased selection:bg-accent/25 selection:text-accent relative">
      {/* 3D Interactive Three.js Background from stitch_markdown_design_system (16) */}
     

      {/* 1. Header (Navbar) */}
      <Navbar onOpenTerminal={onOpenTerminal} />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onOpenTerminal={onOpenTerminal} />

        {/* 2. About Section: Story + 4 Stat Cards */}
        <AboutSection />

        {/* 3. Education Section (Screenshot_2026-11-07_000303.png) */}
        <EducationSection />

        {/* 4. Services Section (serv.png, serves.png) */}
        <ServicesSection />

        {/* 5. Skills Section (skills.png - circular progress rings) */}
        <SkillsSection />

        {/* 6. Featured Projects (Bento Grid layout from stitch 15) */}
        <FeaturedProjectsSection />

        {/* 7. How I Build / Engineering Process (stitch 15 Process section) */}
        <HowIBuildSection />

        {/* 8. GIS & Spatial Pipeline Section (stitch 15 GIS section) */}
        <GisPipelineSection />

        {/* 9. Experience & Journey Timeline (stitch 15 Experience UI) */}
        <ExperienceSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer (with mono telemetry status strip) */}
      <Footer />
    </div>
  );
};
