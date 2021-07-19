import React from 'react';

import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
// import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import Services from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Services />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}

export default Home;
