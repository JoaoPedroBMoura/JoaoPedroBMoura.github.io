/**
 * App Principal - Portfólio João Pedro Barcellos Moura
 * React + TypeScript + Tailwind CSS
 */

import { useEffect } from 'react';
import { Header, Footer } from './components/layout';
import {
  HeroSection,
  AboutSection,
  FormationSection,
  AcademicSection,
  CoursesSection,
  SkillsSection,
  ProjectsSection
} from './components/sections';
import { FAB } from './components/ui';
import { SkillFilterProvider } from './context/SkillFilterContext';

// Importar AOS para animações de scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <SkillFilterProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <FormationSection />
          <AcademicSection />
          <CoursesSection />
          <SkillsSection />
          <ProjectsSection />
        </main>

        <Footer />
        <FAB />
      </div>
    </SkillFilterProvider>
  );
}

export default App;
