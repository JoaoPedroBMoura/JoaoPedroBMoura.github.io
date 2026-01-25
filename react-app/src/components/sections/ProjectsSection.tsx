/**
 * Seção de Projetos
 * Usa classes CSS originais
 */

import { useState, useEffect } from 'react';
import { getProjetosProgramacao, getProjetosAnaliseDados } from '../../services/api';
import { ProjectCard } from '../ui/ProjectCard';
import type { Projeto } from '../../types';

type ProjectCategory = 'sites' | 'api' | 'console' | 'analytics';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [projetosProg, setProjetosProg] = useState<any>(null);
  const [projetosAnalise, setProjetosAnalise] = useState<any>(null);

  useEffect(() => {
    getProjetosProgramacao().then(setProjetosProg);
    getProjetosAnaliseDados().then(setProjetosAnalise);
  }, []);

  const handleCategoryClick = (category: ProjectCategory) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setProjetos([]);
      return;
    }
    
    setActiveCategory(category);
    
    switch (category) {
      case 'sites':
        setProjetos(projetosProg?.sites || []);
        break;
      case 'api':
        setProjetos(projetosProg?.api || []);
        break;
      case 'console':
        setProjetos(projetosProg?.deConsole || []);
        break;
      case 'analytics':
        setProjetos(projetosAnalise?.analisesExcel || []);
        break;
    }
  };

  return (
    <section id="projetosPessoais" className="background-preto col-md-12 col-xl-12 col-lg-12 padding-acima padding-baixo-20">
      <h2 className="centro-titulo letra-caramelo" data-aos="fade-up">Projetos</h2>

      <nav className="button-menu letra-caramelo" data-aos="fade-up" data-aos-delay="100">
        <div className="row col-12 col-sm-12 col-md-12 col-lg-12 padding-esquerda-0">
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
            <button 
              id="projetosDeSite" 
              type="button" 
              className="btn button-text font-media dropdown-toggle"
              onClick={() => handleCategoryClick('sites')}
            >
              Sites
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
            <button 
              id="projetosApi" 
              type="button" 
              className="btn button-text font-media dropdown-toggle"
              onClick={() => handleCategoryClick('api')}
            >
              API
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
            <button 
              id="projetosConsole" 
              type="button" 
              className="btn button-text font-media dropdown-toggle"
              onClick={() => handleCategoryClick('console')}
            >
              Programas de Console
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
            <button 
              id="projetoAnalises" 
              type="button" 
              className="btn button-text font-media dropdown-toggle"
              onClick={() => handleCategoryClick('analytics')}
            >
              Análise de Dados
            </button>
          </div>
        </div>
      </nav>

      <section>
        <div id="divProjetos" className="centralizaImg">
          {projetos.length > 0 && (
            <section className="container row margem-esquerda-25 text-center col-md-12 col-lg-12">
              {projetos.map((projeto, index) => (
                <ProjectCard key={index} projeto={projeto} />
              ))}
            </section>
          )}
        </div>
      </section>
    </section>
  );
}

export default ProjectsSection;
