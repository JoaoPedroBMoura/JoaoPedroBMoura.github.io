/**
 * App Principal - Portfólio João Pedro Barcellos Moura
 * React + TypeScript + Tailwind CSS
 *
 * initialLang: usado apenas pelo prerender (entry-server) para fixar o idioma
 * da página estática. No cliente, App é renderizado sem a prop e o idioma vem
 * da URL (ver LanguageContext).
 *
 * O AOS (animações de scroll) é SÓ visual e client-only: carregado via import
 * dinâmico dentro de um effect, então NÃO entra no prerender do servidor.
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
import { LanguageProvider } from './i18n/LanguageContext';
import type { Locale } from './i18n/config';

function App({ initialLang }: { initialLang?: Locale }) {
  useEffect(() => {
    let active = true;
    // Import dinâmico: AOS só existe no cliente, nunca no prerender.
    import('aos').then((mod) => {
      if (active) {
        mod.default.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
      }
    });
    return () => { active = false; };
  }, []);

  return (
    <LanguageProvider initialLang={initialLang}>
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
    </LanguageProvider>
  );
}

export default App;
