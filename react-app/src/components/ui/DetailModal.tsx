/**
 * DetailModal — painel expandido para projetos, matérias e experiências.
 * Usa o Drawer como base. Aceita três tipos de conteúdo via union type.
 */

import { Drawer } from './Drawer';
import { useSkillFilter } from '../../context/SkillFilterContext';
import type { Project } from '../../data/projects';
import type { Subject, Semester } from '../../data/academic';
import type { ExpItem } from '../../data/experience';

// ── Tipos de conteúdo ────────────────────────────────────────────────────────

type ProjectContent = {
  type: 'project';
  data: Project;
};

type SubjectContent = {
  type: 'subject';
  data: Subject;
  semesterLabel: string;
  semesterStatus: Semester['status'];
};

type ExperienceContent = {
  type: 'experience';
  data: ExpItem;
};

export type DetailContent = ProjectContent | SubjectContent | ExperienceContent;

// ── Componente ────────────────────────────────────────────────────────────────

interface DetailModalProps {
  content: DetailContent | null;
  onClose: () => void;
}

const statusColors: Record<string, string> = {
  producao:     '#166534',
  concluido:    '#1e40af',
  desenvolvimento: '#92400e',
};

const semesterStatusColors: Record<string, string> = {
  concluido: '#166534',
  cursando:  '#92400e',
  futuro:    '#1e3a5f',
};

export function DetailModal({ content, onClose }: DetailModalProps) {
  const { openFilter } = useSkillFilter();

  if (!content) return null;

  // ── Projeto ────────────────────────────────────────────────────────────────
  if (content.type === 'project') {
    const p = content.data;
    return (
      <Drawer open title={p.nome} onClose={onClose}>
        {/* Badge de status */}
        <div style={{ marginBottom: '20px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              background: statusColors[p.status] ?? '#374151',
              color: '#fff',
            }}
          >
            {p.statusLabel}
          </span>
        </div>

        {/* Descrição */}
        <p style={{ color: 'rgba(249,222,183,0.9)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '20px' }}>
          {p.descricao}
        </p>

        {/* Detalhes técnicos */}
        {p.detalhe && (
          <div
            style={{
              background: 'rgba(208,142,108,0.08)',
              border: '1px solid rgba(208,142,108,0.3)',
              borderRadius: '10px',
              padding: '16px 20px',
              marginBottom: '20px',
            }}
          >
            <h4 style={{ color: 'var(--color-laranja)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Detalhes Técnicos
            </h4>
            <p style={{ color: 'rgba(249,222,183,0.8)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
              {p.detalhe}
            </p>
          </div>
        )}

        {/* Destaque */}
        {p.destaque && (
          <p style={{ color: 'var(--color-laranja)', fontSize: '0.85rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '20px' }}>
            ✦ {p.destaque}
          </p>
        )}

        {/* Tech tags clicáveis */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            Tecnologias
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {p.techs.map(t => (
              <button
                key={t}
                className="skill-tag"
                onClick={() => { onClose(); setTimeout(() => openFilter(t), 100); }}
                title={`Ver onde "${t}" aparece`}
                style={{ cursor: 'pointer' }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'var(--color-laranja)',
                color: 'var(--color-preto)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              GitHub →
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid rgba(208,142,108,0.5)',
                color: 'var(--color-caramelo)',
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              Demo →
            </a>
          )}
        </div>
      </Drawer>
    );
  }

  // ── Experiência ───────────────────────────────────────────────────────────
  if (content.type === 'experience') {
    const exp = content.data;
    return (
      <Drawer open title={exp.empresa} onClose={onClose}>
        {/* Cargo + Período */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: 'var(--color-laranja)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>
            {exp.cargo}
          </p>
          <p style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.8rem' }}>
            {exp.periodo}
          </p>
        </div>

        {/* Texto detalhado — parágrafos separados por \n\n */}
        <div style={{ marginBottom: '20px' }}>
          {(exp.detalhe ?? exp.descricao).split('\n\n').map((paragrafo, i) => (
            <p
              key={i}
              style={{
                color: 'rgba(249,222,183,0.85)',
                fontSize: '0.92rem',
                lineHeight: 1.75,
                marginBottom: '14px',
              }}
            >
              {paragrafo}
            </p>
          ))}
        </div>

        {/* Projetos notáveis */}
        {exp.projetos && exp.projetos.length > 0 && (
          <div
            style={{
              background: 'rgba(208,142,108,0.08)',
              border: '1px solid rgba(208,142,108,0.3)',
              borderRadius: '10px',
              padding: '16px 20px',
              marginBottom: '20px',
            }}
          >
            <h4 style={{ color: 'var(--color-laranja)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Projetos & Entregas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {exp.projetos.map(proj => (
                <li key={proj} style={{ display: 'flex', gap: '8px', color: 'rgba(249,222,183,0.75)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--color-laranja)', flexShrink: 0 }}>▸</span>
                  {proj}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech tags clicáveis */}
        {exp.techs && exp.techs.length > 0 && (
          <div>
            <h4 style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Tecnologias
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {exp.techs.map(t => (
                <button
                  key={t}
                  className="skill-tag"
                  onClick={() => { onClose(); setTimeout(() => openFilter(t), 100); }}
                  title={`Ver onde "${t}" aparece`}
                  style={{ cursor: 'pointer' }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </Drawer>
    );
  }

  // ── Matéria ────────────────────────────────────────────────────────────────
  const { data: sub, semesterLabel, semesterStatus } = content;
  const statusLabel = semesterStatus === 'concluido' ? 'Concluído' : semesterStatus === 'cursando' ? 'Cursando' : 'Futuro';
  const statusColor = semesterStatusColors[semesterStatus] ?? '#374151';

  return (
    <Drawer open title={sub.nome} onClose={onClose}>
      {/* Meta info */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px', alignItems: 'center' }}>
        <span style={{ color: 'rgba(249,222,183,0.6)', fontSize: '0.8rem' }}>{semesterLabel}</span>
        {sub.cargaHoraria && (
          <span style={{ color: 'rgba(249,222,183,0.4)', fontSize: '0.78rem' }}>· {sub.cargaHoraria}h</span>
        )}
        <span
          style={{
            display: 'inline-block',
            padding: '3px 12px',
            borderRadius: '999px',
            fontSize: '0.7rem',
            fontWeight: 700,
            background: statusColor,
            color: '#fff',
          }}
        >
          {statusLabel}
        </span>
      </div>

      {/* Descrição */}
      {sub.descricao ? (
        <p style={{ color: 'rgba(249,222,183,0.9)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '20px' }}>
          {sub.descricao}
        </p>
      ) : (
        <p style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
          Descrição em breve.
        </p>
      )}

      {/* Observação especial */}
      {sub.observacao && (
        <div
          style={{
            background: 'rgba(208,142,108,0.08)',
            border: '1px solid rgba(208,142,108,0.3)',
            borderRadius: '10px',
            padding: '14px 18px',
            marginBottom: '20px',
          }}
        >
          <p style={{ color: 'rgba(249,222,183,0.8)', fontSize: '0.85rem', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
            💡 {sub.observacao}
          </p>
        </div>
      )}

      {/* Projeto prático */}
      {sub.projeto && (
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: 'var(--color-laranja)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Projeto Prático
          </h4>
          <p style={{ color: 'rgba(249,222,183,0.8)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
            {sub.projeto}
          </p>
        </div>
      )}

      {/* Skill tags clicáveis */}
      <div>
        <h4 style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
          Habilidades Trabalhadas
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {sub.skills.map(s => (
            <button
              key={s}
              className="skill-tag"
              onClick={() => { onClose(); setTimeout(() => openFilter(s), 100); }}
              title={`Ver onde "${s}" aparece`}
              style={{ cursor: 'pointer' }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default DetailModal;
