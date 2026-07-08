/**
 * FormationSection — Formação + Experiência Profissional
 * Timeline vertical com 3 empresas e projetos reais.
 * Dados de experiências vêm de src/data/experience.ts.
 * Tags de tech são clicáveis → abre SkillFilterPanel.
 * "Ver mais ›" → abre DetailModal com contexto de experiência.
 */

import { useState } from 'react';
import { experiencias, type ExpItem } from '../../data/experience';
import { useSkillFilter } from '../../context/SkillFilterContext';
import { DetailModal, type DetailContent } from '../ui/DetailModal';

// ── Card de experiência ────────────────────────────────────────────────────

interface ExperienceCardProps {
  exp: ExpItem;
  index: number;
  onOpen: (exp: ExpItem) => void;
}

function ExperienceCard({ exp, index, onOpen }: ExperienceCardProps) {
  const { openFilter } = useSkillFilter();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={String(index * 100)}
      style={{
        display: 'flex',
        gap: '20px',
        position: 'relative',
      }}
    >
      {/* Linha + ponto da timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div className="exp-dot" />
        {index < experiencias.length - 1 && (
          <div
            style={{
              width: '2px',
              flex: 1,
              background: 'linear-gradient(to bottom, var(--color-laranja), rgba(208,142,108,0.1))',
              marginTop: '4px',
              minHeight: '40px',
            }}
          />
        )}
      </div>

      {/* Conteúdo */}
      <div style={{ paddingBottom: '32px', flex: 1 }}>
        {/* Empresa + período */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
          <h3 style={{ color: 'var(--color-caramelo)', fontSize: '1rem', fontWeight: 700 }}>
            {exp.empresa}
          </h3>
          <span style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.78rem' }}>{exp.periodo}</span>
        </div>

        {/* Cargo */}
        <p style={{ color: 'var(--color-laranja)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
          {exp.cargo}
        </p>

        {/* Descrição */}
        <p style={{ color: 'rgba(249,222,183,0.75)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: exp.projetos ? '12px' : '8px' }}>
          {exp.descricao}
        </p>

        {/* Projetos (só Central de Custódia) */}
        {exp.projetos && (
          <ul style={{ margin: '0 0 12px', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {exp.projetos.map((p) => (
              <li key={p} style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.8rem', display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--color-laranja)', flexShrink: 0 }}>▸</span>
                {p}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags clicáveis */}
        {exp.techs && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
            {exp.techs.map((t) => (
              <button
                key={t}
                className="skill-tag"
                onClick={() => openFilter(t)}
                title={`Filtrar por "${t}"`}
                style={{ cursor: 'pointer' }}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* Botão "Ver mais" */}
        <button
          onClick={() => onOpen(exp)}
          style={{
            background: 'none',
            border: '1px solid rgba(208,142,108,0.4)',
            borderRadius: '6px',
            color: 'var(--color-laranja)',
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '5px 14px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(208,142,108,0.12)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-laranja)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'none';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(208,142,108,0.4)';
          }}
        >
          Ver mais ›
        </button>
      </div>
    </div>
  );
}

// ── Seção principal ────────────────────────────────────────────────────────

export function FormationSection() {
  const [modalContent, setModalContent] = useState<DetailContent | null>(null);

  const handleOpen = (exp: ExpItem) => {
    setModalContent({ type: 'experience', data: exp });
  };

  return (
    <section
      id="experienciaProfissional"
      style={{
        background: '#2e2e2e',
        padding: '64px 0',
        borderTop: '1px solid rgba(208,142,108,0.2)',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Formação Acadêmica */}
        <div data-aos="fade-right">
          <h2
            style={{
              color: 'var(--color-caramelo)',
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              fontWeight: 700,
              marginBottom: '32px',
            }}
          >
            Formação Acadêmica
          </h2>

          <div
            style={{
              background: 'rgba(208,142,108,0.08)',
              border: '1px solid rgba(208,142,108,0.3)',
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            <h3 style={{ color: 'var(--color-caramelo)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>
              Bacharelado em Sistemas de Informação
            </h3>
            <p style={{ color: 'var(--color-laranja)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              CEFET-RJ · Nova Friburgo
            </p>
            <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.8rem', marginBottom: '16px' }}>
              2023.1 — 2028.2 (previsão)
            </p>
            <p style={{ color: 'rgba(249,222,183,0.7)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Curso de 4,5 anos com foco em Análise e desenvolvimento de software, banco de dados, redes, Gestão de processos
               e Governança de TI. Paralelo à formação, atuo como estagiário aplicando o
              aprendizado em projetos reais de produção.
            </p>
          </div>
        </div>

        {/* Experiência Profissional */}
        <div data-aos="fade-left" data-aos-delay="100">
          <h2
            style={{
              color: 'var(--color-caramelo)',
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              fontWeight: 700,
              marginBottom: '32px',
            }}
          >
            Experiência Profissional
          </h2>

          <div>
            {experiencias.map((exp, i) => (
              <ExperienceCard
                key={exp.empresa}
                exp={exp}
                index={i}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalhes */}
      <DetailModal
        content={modalContent}
        onClose={() => setModalContent(null)}
      />
    </section>
  );
}

export default FormationSection;
