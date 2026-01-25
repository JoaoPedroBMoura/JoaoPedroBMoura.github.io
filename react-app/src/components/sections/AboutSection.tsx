/**
 * Seção Sobre Mim - Resumo profissional
 * Usa classes CSS originais
 */

import { useState } from 'react';

export function AboutSection() {
  const [showComunidade, setShowComunidade] = useState(false);
  const [showDio, setShowDio] = useState(false);

  return (
    <section id="resumoProfissional" className="row item margem-0 lado-a-lado background-laranja">
      <section className="letra-preto col-md-12 col-lg-12 zera-margem-esquerda">
        <section className="row">
          {/* Sobre mim */}
          <div className="font-20 col-md-3 col-lg-3 borda-direita" data-aos="fade-up">
            <h4 className="centro-titulo">Sobre mim</h4>
            <p>
              Profissional com visão analítica madura, mentalidade ágil, facilidade de aprendizado e com
              foco em resolução de problemas. Minhas maiores qualidade são o aprendizado contínuo e proatividade.
            </p>
          </div>

          {/* Experiências */}
          <div className="font-20 col-md-4 col-lg-4 borda-direita" data-aos="fade-up" data-aos-delay="100">
            <h4 className="centro-titulo">Experiências</h4>
            <p>
              SQL • Power BI • ETL • Excel • Google Sheets • DBeaver • 
              tarefas sobre demandas • tratar dados para geração de insight's • 
              métricas de negócios • controle de KPI • desenvolvimento web • construção e 
              consumo de API
            </p>
          </div>

          {/* Estudos */}
          <div className="font-20 col-md-5 col-lg-5" data-aos="fade-up" data-aos-delay="200">
            <h4 className="centro-titulo">Estudos</h4>
            <div className="row">
              <div className="col-md-6 col-lg-6 text-center button-menu">
                <button 
                  className="btn letra-preta dropdown-toggle button-text" 
                  type="button"
                  onClick={() => setShowComunidade(!showComunidade)}
                >
                  Comunidade DS
                </button>
                {showComunidade && (
                  <p id="comunidadeDsDescript">
                    Formação prática como Analista de Dados. Conclusão 
                    prevista para fevereiro de 2025.
                  </p>
                )}
              </div>

              <div className="col-md-6 col-lg-6 text-center button-menu">
                <button 
                  className="btn letra-preta dropdown-toggle button-text" 
                  type="button"
                  onClick={() => setShowDio(!showDio)}
                >
                  Dio.me
                </button>
                {showDio && (
                  <p id="dioDescript">
                    Dio - Acesso vitalício a uma plataforma com centenas de formações em centenas 
                    de tecnologias diferentes, com foco principal em programação
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default AboutSection;
