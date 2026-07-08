/**
 * ProjectsSection — Projetos reais de João Pedro B. Moura
 * Cards com "Ver mais" abrem DetailModal (painel 75% da tela).
 * Skill tags clicáveis abrem SkillFilterPanel via context.
 */

import { useState } from 'react';
import { projects, projectCategories as categories, type Project, type ProjectCategory as Category } from '../../data/projects';
import { useSkillFilter } from '../../context/SkillFilterContext';
import { DetailModal, type DetailContent } from '../ui/DetailModal';

function StatusBadge({ status, label }: { status: Project['status']; label: string }) {
  return <span className={`project-status-badge status-${status}`}>{label}</span>;
}

interface ProjectCardProps {
  project: Project;
  onOpen: (p: Project) => void;
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { openFilter } = useSkillFilter();

  return (
    <div className="project-card-modern">
      {/* Topo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <h3 style={{ color: 'var(--color-caramelo)', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.3 }}>
          {project.nome}
        </h3>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>

      {/* Descrição */}
      <p style={{ color: 'rgba(249,222,183,0.8)', fontSize: '0.85rem', lineHeight: 1.6, flexGrow: 1 }}>
        {project.descricao}
      </p>

      {/* Destaque */}
      {project.destaque && (
        <p style={{ color: 'var(--color-laranja)', fontSize: '0.75rem', fontWeight: 600, fontStyle: 'italic' }}>
          ✦ {project.destaque}
        </p>
      )}

      {/* Tech tags clicáveis */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {project.techs.map((t) => (
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

      {/* Ações */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        {project.detalhe && (
          <button
            onClick={() => onOpen(project)}
            style={{
              background: 'none',
              border: '1px solid rgba(208,142,108,0.4)',
              color: 'var(--color-caramelo)',
              padding: '5px 12px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-laranja)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(208,142,108,0.4)')}
          >
            Ver mais ›
          </button>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-laranja)', fontSize: '0.75rem', textDecoration: 'none' }}>
            GitHub →
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.75rem', textDecoration: 'none' }}>
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');
  const [modalContent, setModalContent] = useState<DetailContent | null>(null);

  const openProject = (p: Project) => {
    setModalContent({ type: 'project', data: p });
  };

  const filtered = activeCategory === 'todos'
    ? projects
    : projects.filter((p) => p.categoria.includes(activeCategory));

  return (
    <section
      id="projetosPessoais"
      style={{ background: '#2e2e2e', padding: '64px 0', borderTop: '1px solid rgba(208,142,108,0.2)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 data-aos="fade-up"
            style={{ color: 'var(--color-caramelo)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '8px' }}>
            Projetos
          </h2>
          <p data-aos="fade-up" data-aos-delay="100"
            style={{ color: 'rgba(249,222,183,0.6)', fontSize: '0.95rem' }}>
            Do governo federal a projetos de estudo — {projects.length} projetos documentados
          </p>
          <p data-aos="fade-up" data-aos-delay="150"
            style={{ color: 'rgba(249,222,183,0.4)', fontSize: '0.78rem', marginTop: '6px' }}>
            Clique em "Ver mais" para detalhes · Clique nas tags para filtrar habilidades
          </p>
        </div>

        {/* Filtros por categoria */}
        <div data-aos="fade-up" data-aos-delay="150"
          style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          {categories.map((cat) => (
            <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
              className={`semester-tab${activeCategory === cat.key ? ' active' : ''}`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {filtered.map((project, i) => (
            <div key={project.nome} data-aos="fade-up" data-aos-delay={String(Math.min(i, 4) * 60)}>
              <ProjectCard project={project} onOpen={openProject} />
            </div>
          ))}
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

export default ProjectsSection;
