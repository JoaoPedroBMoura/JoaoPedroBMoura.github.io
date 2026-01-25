/**
 * Seção de Cursos - Exibe cursos por categoria
 * Usa classes CSS originais
 */

import { useState, useEffect } from 'react';
import { getCursosProgramacao, getCursosAnaliseDados, getCertificacoes } from '../../services/api';
import type { Curso } from '../../types';

type CursoCategory = 'dotnet' | 'gitGitHub' | 'analiseDeDados' | 'leanSixSigma';

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<CursoCategory | null>(null);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [cursosProg, setCursosProg] = useState<any>(null);
  const [cursosAnalise, setCursosAnalise] = useState<any>(null);
  const [certificacoes, setCertificacoes] = useState<any>(null);

  useEffect(() => {
    getCursosProgramacao().then(setCursosProg);
    getCursosAnaliseDados().then(setCursosAnalise);
    getCertificacoes().then(setCertificacoes);
  }, []);

  const handleCategoryClick = (category: CursoCategory) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setCursos([]);
      return;
    }
    
    setActiveCategory(category);
    
    switch (category) {
      case 'dotnet':
        setCursos(cursosProg?.dotNet || []);
        break;
      case 'gitGitHub':
        setCursos(cursosProg?.gitGitHub || []);
        break;
      case 'analiseDeDados':
        setCursos(cursosAnalise?.ComunidadeDs || []);
        break;
      case 'leanSixSigma':
        setCursos(certificacoes?.['gestao-projetos'] || []);
        break;
    }
  };

  return (
    <section 
      id="cursosCertificacoes" 
      className="letra-caramelo font-media col-sm-12 col-md-12 col-xl-12 col-lg-12 margem-esquerda-30 background-preto padding-esqueda-60 padding-baixo-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div>
        <h2 className="padding-acima padding-baixo-20">Cursos</h2>
        
        <nav className="button-menu">
          <div className="row col-12 col-sm-12 col-md-12 col-lg-12 padding-esquerda-0">
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
              <button 
                id="dotnet" 
                type="button" 
                className="btn button-text font-media negrito dropdown-toggle"
                onClick={() => handleCategoryClick('dotnet')}
              >
                .NET
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
              <button 
                id="cursosGitGitHub" 
                type="button" 
                className="btn button-text font-media negrito dropdown-toggle"
                onClick={() => handleCategoryClick('gitGitHub')}
              >
                Git &amp; GitHub
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
              <button 
                id="cursosAnaliseDeDados" 
                type="button" 
                className="btn button-text font-media negrito dropdown-toggle"
                onClick={() => handleCategoryClick('analiseDeDados')}
              >
                Análise de dados
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 centro-titulo">
              <button 
                id="cursosLeanSixSigma" 
                type="button" 
                className="btn button-text font-media negrito dropdown-toggle"
                onClick={() => handleCategoryClick('leanSixSigma')}
              >
                Lean Six Sigma
              </button>
            </div>
          </div>
        </nav>

        <div id="divCursos" className="padding-baixo-20">
          {cursos.length > 0 && (
            <div className="navbar-toggler dropdown no-break herda-cor padding-esquerda-0">
              <ul className="collapse show list-unstyled">
                {cursos.map((curso, index) => (
                  <li key={index} className="margin-list-10">
                    <a href={curso.link} className="herda-cor font-media" target="_blank" rel="noopener noreferrer">
                      {curso.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
