/**
 * AboutSection — Resumo profissional.
 * Central de Custódia · Analista de Dados em formação.
 *
 * A bio é bilíngue. Para manter os destaques em negrito legíveis nos dados,
 * usamos o marcador **texto** e o helper renderRich() o converte em <strong>.
 */

import type { ReactNode } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import type { I18n } from '../../i18n/config';

// Converte "palavra **em negrito** aqui" numa lista de nós React,
// transformando o trecho entre ** em <strong>.
function renderRich(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

const paragrafos: I18n[] = [
  {
    en: 'I’m a Data Analyst at **Central de Custódia**, where I build Python automations and systems that are already in production internally, optimizing the performance of our processes. I’ve also built web dashboards and Power BI dashboards involving data pipelines and RAG using AWS Redshift and S3. The systems I built also serve critical external clients — the **Ministry of the Environment** and the **São Paulo State Government** — which put me early in front of problems that demand reliable code, not just functional code.',
    pt: 'Sou Analista de Dados na **Central de Custódia**, onde construo automações e sistemas em Python, que hoje já estão em produção de forma interna na empresa, e otimizando a perfórmance dos nossos processos. Também desenvolvi dashboards Web e também no Power BI que envolvem pipelines de dados e RAG usando AWS Redshift e S3. Os sistemas que desenvolvi atendem também clientes externos e críticos — o **Ministério do Meio Ambiente** e a **Secretaria do Estado de São Paulo** —, o que me colocou desde cedo diante de problemas que exigem código confiável, não apenas funcional.',
  },
  {
    en: 'I didn’t reach the data field by a straight path. I went through operational logistics and administrative support before finding my place in data and development. That journey gave me something most analysts don’t have: I understand the process before instrumenting it. Certified in **Lean Six Sigma Yellow Belt**, I always see data as a means to improve something concrete, not as an end in itself, understanding that it must serve processes and people, not the other way around.',
    pt: 'Não cheguei à área de dados por caminho direto. Passei por logística operacional e suporte administrativo antes de encontrar meu lugar na área de dados e desenvolvimento. Essa trajetória me deu algo que a maioria dos analistas não tem: entendo o processo antes de instrumentalizá-lo. Certificado em **Lean Six Sigma Yellow Belt**, enxergo os dados sempre como meio para melhorar algo concreto, não como fim em si, compreendendo que eles precisam servir a processos e pessoas, e não o contrário.',
  },
  {
    en: 'I’m already in the second half of my Information Systems degree at CEFET-NF and I already implement Clean Architecture and good software architectures, like Ports & Adapters, in projects that go to production. I’m moving toward data analysis and engineering — more robust pipelines, greater command of SQL and AWS, systems that scale. If you’ve made it this far, the projects below tell the rest.',
    pt: 'Estou já na segunda metade da graduação em Sistemas de Informação no CEFET-NF e já implemento Clean Architecture e boas arquiteturas de Software, como  Ports & Adapters, em projetos que vão para produção. Estou caminhando em direção à Analise e engenharia de dados — pipelines mais robustas, maior domínio de SQL e AWS, sistemas que escalam. Se chegou até aqui, os projetos abaixo contam o resto.',
  },
];

interface Highlight {
  label: I18n;
  value: I18n;
  sub: I18n;
}

const highlights: Highlight[] = [
  {
    label: { en: 'Projects in Production', pt: 'Projetos em Produção' },
    value: { en: '5+', pt: '5+' },
    sub: { en: 'Python, Power BI, AWS, Data, Web Dev', pt: 'Python, Power BI, AWS, Dados, Dev Web' },
  },
  {
    label: { en: 'Months of Experience', pt: 'Meses de Experiência' },
    value: { en: '24+', pt: '24+' },
    sub: { en: 'Data + Dev + Automation + AI', pt: 'Dados + Dev + Automação + IA' },
  },
  {
    label: { en: 'Agencies Served', pt: 'Órgãos Atendidos' },
    value: { en: '2', pt: '2' },
    sub: { en: 'MMA (federal) + SP Government (state)', pt: 'MMA (federal) + Governo SP (estadual)' },
  },
  {
    label: { en: 'Education', pt: 'Formação' },
    value: { en: 'Information Systems', pt: 'Sistemas de Informação' },
    sub: { en: 'CEFET-NF · 2023–2028', pt: 'CEFET-NF · 2023–2028' },
  },
];

const paragraphStyles = [
  { color: 'rgba(57,57,57,0.9)',  fontSize: '0.95rem', lineHeight: 1.75 },
  { color: 'rgba(57,57,57,0.85)', fontSize: '0.92rem', lineHeight: 1.72 },
  { color: 'rgba(57,57,57,0.75)', fontSize: '0.88rem', lineHeight: 1.65 },
];

export function AboutSection() {
  const { ui, L } = useLang();

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
              {ui.about.title}
            </h2>
            {paragrafos.map((p, i) => (
              <p key={i} style={{ ...paragraphStyles[i], marginBottom: '14px' }}>
                {renderRich(L(p))}
              </p>
            ))}
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
                  key={h.label.en}
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
                    {L(h.value)}
                  </div>
                  <div style={{ color: 'var(--color-preto)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '2px' }}>
                    {L(h.label)}
                  </div>
                  <div style={{ color: 'rgba(57,57,57,0.65)', fontSize: '0.7rem' }}>
                    {L(h.sub)}
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
