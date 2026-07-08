/**
 * AboutSection — Resumo profissional atualizado
 * Central de Custódia · Analista de Dados em formação
 */

const highlights = [
  { label: 'Projetos em Produção', value: '5+', sub: 'Python, Power BI, AWS, Dados, Dev Web' },
  { label: 'Meses de Experiência', value: '24+', sub: 'Dados + Dev + Automação + IA' },
  { label: 'Órgãos Atendidos', value: '2', sub: 'MMA (federal) + Governo SP (estadual)' },
  { label: 'Formação', value: 'Sistemas de Informação', sub: 'CEFET-NF · 2023–2028' },
];

export function AboutSection() {
  return (
    <section
      id="resumoProfissional"
      style={{
        background: 'var(--color-laranja)',
        padding: '56px 24px',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Bio */}
          <div data-aos="fade-right">
            <h2
              style={{
                color: 'var(--color-preto)',
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Sobre mim
            </h2>
            <p
              style={{
                color: 'rgba(57,57,57,0.9)',
                fontSize: '0.95rem',
                lineHeight: 1.75,
                marginBottom: '14px',
              }}
            >
              Sou Analista de Dados na <strong>Central de Custódia</strong>, onde construo automações e sistemas em
              Python, que hoje já estão em produção de forma interna na empresa, e otimizando a perfórmance dos nossos
              processos. Também desenvolvi dashboards Web e também no Power BI que envolvem pipelines de dados e RAG usando
              AWS Redshift e S3. <br />
               Os sistemas que desenvolvi atendem também clientes externos e críticos — o <strong>Ministério do Meio Ambiente</strong> e a{' '}
              <strong>Secretaria do Estado de São Paulo</strong> —, o que me colocou desde cedo diante de problemas 
              que exigem código confiável, não apenas funcional.
            </p>
            <p
              style={{
                color: 'rgba(57,57,57,0.85)',
                fontSize: '0.92rem',
                lineHeight: 1.72,
                marginBottom: '14px',
              }}
            >
              Não cheguei à área de dados por caminho direto. Passei por logística operacional e
              suporte administrativo antes de encontrar meu lugar na área de dados e desenvolvimento. Essa
              trajetória me deu algo que a maioria dos analistas não tem: entendo o processo antes de
              instrumentalizá-lo. Certificado em <strong>Lean Six Sigma Yellow Belt</strong>, enxergo
              os dados sempre como meio para melhorar algo concreto, não como fim em si, compreendendo que 
              eles precisam servir a processos e pessoas, e não o contrário.
            </p>
            <p
              style={{
                color: 'rgba(57,57,57,0.75)',
                fontSize: '0.88rem',
                lineHeight: 1.65,
              }}
            >
              Estou já na segunda metade da graduação em Sistemas de Informação no CEFET-NF e já implemento Clean
              Architecture e boas arquiteturas de Software, como  Ports &amp; Adapters, em projetos que vão para produção.
              Estou caminhando em direção à Analise e engenharia de dados — pipelines mais robustas, maior domínio de SQL e
              AWS, sistemas que escalam. Se chegou até aqui, os projetos abaixo contam o resto.
            </p>
          </div>

          {/* Métricas */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    background: 'rgba(57,57,57,0.12)',
                    borderRadius: '10px',
                    padding: '16px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      color: 'var(--color-preto)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {h.value}
                  </div>
                  <div style={{ color: 'var(--color-preto)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '2px' }}>
                    {h.label}
                  </div>
                  <div style={{ color: 'rgba(57,57,57,0.65)', fontSize: '0.7rem' }}>
                    {h.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;