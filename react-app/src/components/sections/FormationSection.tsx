/**
 * Seção de Formação Acadêmica e Experiência Profissional
 * Usa classes CSS originais
 */

export function FormationSection() {
  return (
    <section id="formacaoes" className="background-preto container margem-0 row text-center col-md-12 col-lg-12 padding-acima margem-baixo-30">
      {/* Formação Acadêmica */}
      <section 
        id="formacaoAcademica" 
        className="letra-caramelo font-media col-sm-12 col-md-12 col-xl-6 col-lg-6 margem-esquerda-30 background-preto borda-direita"
        data-aos="fade-right"
      >
        <h2 className="padding-acima">Formação acadêmica</h2>
        <h4 className="margem-cima-30">Bacharelado em Sistemas de Informação</h4>
        <p className="padding-baixo-20">
          Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/NF) • 2023.1 - 2027.1
        </p>
      </section>

      {/* Experiência Profissional */}
      <section 
        id="experienciaProfissional" 
        className="letra-caramelo font-media col-sm-12 col-md-12 col-xl-6 col-lg-6 margem-esquerda-30 background-preto borda-direita"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <h2 className="padding-acima">Experiência Profissional</h2>
        <h4 className="margem-cima-30">Shopee Express</h4>
        <li className="no-link-style">Auxiliar de Logistica • Out/2023 - Nov/2024</li>
        <p className="padding-baixo-20">
          Atuava no recebimento, tratamento e expedição de encomendas. Atuei em
          tarefas de confiança auxiliando a gestão no aprimoramento de processos
          internos através de analise de dados e atuei temporariamente como
          Analista de Reversa. Fui eleito secretário da CIPA e escolhido duas vezes
          como funcionário brilhou da equipe de Last Mile.
        </p>
      </section>
    </section>
  );
}

export default FormationSection;
