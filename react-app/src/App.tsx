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
  CoursesSection, 
  SkillsSection, 
  ProjectsSection 
} from './components/sections';
import { BackToTop } from './components/ui';

// Importar AOS para animações de scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FormationSection />
        <CoursesSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
