/**
 * CoursesSection — Cursos e certificações
 *
 * Fluxo de dados:
 *   src/data/cursosProgramacao.json  ┐
 *   src/data/cursosAnaliseDados.json ├→ import direto no build (Vite) → filtro por categoria
 *   src/data/certificacoes.json      ┘
 *
 * Não há fetch em runtime: os dados são estáticos, então entram no bundle
 * já prontos. Isso elimina estado de loading/erro e dependência de rede.
 */

import { useState } from 'react';
import cursosProgramacao from '../../data/cursosProgramacao.json';
import cursosAnaliseDados from '../../data/cursosAnaliseDados.json';
import certificacoes from '../../data/certificacoes.json';
import type { Curso, CursoCategory } from '../../types';

type FiltroCategoria = 'todos' | CursoCategory;

interface CategoryConfig {
  key: FiltroCategoria;
  label: string;
  icon: string;
}

const categories: CategoryConfig[] = [
  { key: 'todos',          label: 'Todos',            icon: '📋' },
  { key: 'dotnet',         label: '.NET & C#',         icon: '⚙️' },
  { key: 'gitGitHub',      label: 'Git & GitHub',      icon: '🐙' },
  { key: 'analiseDeDados', label: 'Análise de Dados',  icon: '📊' },
  { key: 'leanSixSigma',   label: 'Lean Six Sigma',    icon: '🎯' },
  { key: 'gestao',         label: 'Gestão',             icon: '📁' },
];

// Os três JSONs já vêm com o campo `categoria` — só concatenar.
const allCursos: Curso[] = [
  ...(cursosProgramacao as Curso[]),
  ...(cursosAnaliseDados as Curso[]),
  ...(certificacoes as Curso[]),
];

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<FiltroCategoria>('todos');

  const filtered = activeCategory === 'todos'
    ? allCursos
    : allCursos.filter((c) => c.categoria === activeCategory);

  const currentCategory = categories.find((c) => c.key === activeCategory);

  return (
    <section
      id="cursosCertificacoes"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{ background: 'var(--color-preto)', padding: '64px 0', borderTop: '1px solid rgba(208,142,108,0.2)' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            color: 'var(--color-caramelo)',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: 8,
          }}>
            Cursos & Certificações
          </h2>
          <p style={{ color: 'rgba(249,222,183,0.6)', fontSize: '0.95rem' }}>
            Formação complementar em dados, programação e gestão
          </p>
        </div>

        {/* Filtros */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 36 }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`semester-tab${activeCategory === cat.key ? ' active' : ''}`}
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Lista */}
        <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(208,142,108,0.15)',
            borderRadius: 12,
            padding: '24px 28px',
          }}>
            {/* Cabeçalho da categoria ativa */}
            <p style={{
              color: 'var(--color-laranja)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}>
              <span aria-hidden="true">{currentCategory?.icon}</span> {currentCategory?.label} — {filtered.length} {filtered.length === 1 ? 'item' : 'itens'}
            </p>

            {filtered.length === 0 ? (
              <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.9rem' }}>
                Nenhum curso nesta categoria.
              </p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {filtered.map((curso, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      paddingBottom: 12,
                      borderBottom: i < filtered.length - 1 ? '1px solid rgba(208,142,108,0.1)' : 'none',
                    }}
                  >
                    <span style={{ color: 'var(--color-laranja)', marginTop: 2, flexShrink: 0 }}>▸</span>
                    <a
                      href={curso.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-caramelo)', fontSize: '0.9rem', textDecoration: 'none', lineHeight: 1.5, flex: 1 }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-laranja)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-caramelo)')}
                    >
                      {curso.nome}
                    </a>
                    {/* Badge de categoria visível no modo "Todos" */}
                    {activeCategory === 'todos' && (
                      <span className="skill-tag" style={{ marginLeft: 'auto', flexShrink: 0, fontSize: '0.7rem' }}>
                        {categories.find((c) => c.key === curso.categoria)?.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
      </div>
    </section>
  );
}

export default CoursesSection;
