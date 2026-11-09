/**
 * DetailModal — painel expandido para projetos, matérias e experiências.
 * Usa o Drawer como base. Aceita três tipos de conteúdo via union type.
 * Todo o texto é resolvido no idioma atual (L / ui) e as tags técnicas
 * têm a exibição traduzida pelo glossário (chave do filtro continua em PT).
 */

import { Drawer } from './Drawer';
import { useSkillFilter } from '../../context/SkillFilterContext';
import { useLang } from '../../i18n/LanguageContext';
import { translateTag } from '../../i18n/glossary';
import type { I18n } from '../../i18n/config';
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
  semesterLabel: I18n;
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
  const { lang, L, ui } = useLang();

  if (!content) return null;

  // ── Projeto ────────────────────────────────────────────────────────────────
  if (content.type === 'project') {
    const p = content.data;
    return (
      <Drawer open title={L(p.nome)} onClose={onClose}>
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
            {L(p.statusLabel)}
          </span>
        </div>

        {/* Descrição */}
        <p style={{ color: 'rgba(249,222,183,0.9)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '20px' }}>
          {L(p.descricao)}
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
              {ui.detail.technicalDetails}
            </h4>
            <p style={{ color: 'rgba(249,222,183,0.8)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
              {L(p.detalhe)}
            </p>
          </div>
        )}

        {/* Destaque */}
        {p.destaque && (
          <p style={{ color: 'var(--color-laranja)', fontSize: '0.85rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '20px' }}>
            ✦ {L(p.destaque)}
          </p>
        )}

        {/* Tech tags clicáveis */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            {ui.detail.technologies}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {p.techs.map(t => (
              <button
                key={t}
                className="skill-tag"
                onClick={() => { onClose(); setTimeout(() => openFilter(t), 100); }}
                title={ui.detail.seeWhereTag.replace('{tag}', translateTag(t, lang))}
                style={{ cursor: 'pointer' }}
              >
                {translateTag(t, lang)}
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
              {ui.common.github}
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
              {ui.common.demo}
            </a>
          )}
        </div>
      </Drawer>
    );
  }

  // ── Experiência ───────────────────────────────────────────────────────────
  if (content.type === 'experience') {
    const exp = content.data;
    const projetos = exp.projetos ? L(exp.projetos) : [];
    return (
      <Drawer open title={exp.empresa} onClose={onClose}>
        {/* Cargo + Período */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: 'var(--color-laranja)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>
            {L(exp.cargo)}
          </p>
          <p style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.8rem' }}>
            {L(exp.periodo)}
          </p>
        </div>

        {/* Texto detalhado — parágrafos separados por \n\n */}
        <div style={{ marginBottom: '20px' }}>
          {L(exp.detalhe ?? exp.descricao).split('\n\n').map((paragrafo, i) => (
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
        {projetos.length > 0 && (
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
              {ui.detail.projectsDeliveries}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {projetos.map(proj => (
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
              {ui.detail.technologies}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {exp.techs.map(t => (
                <button
                  key={t}
                  className="skill-tag"
                  onClick={() => { onClose(); setTimeout(() => openFilter(t), 100); }}
                  title={ui.detail.seeWhereTag.replace('{tag}', translateTag(t, lang))}
                  style={{ cursor: 'pointer' }}
                >
                  {translateTag(t, lang)}
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
  const statusLabel = ui.status[semesterStatus];
  const statusColor = semesterStatusColors[semesterStatus] ?? '#374151';
  const projeto = sub.projeto ? L(sub.projeto) : [];

  return (
    <Drawer open title={L(sub.nome)} onClose={onClose}>
      {/* Meta info */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px', alignItems: 'center' }}>
        <span style={{ color: 'rgba(249,222,183,0.6)', fontSize: '0.8rem' }}>{L(semesterLabel)}</span>
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
          {L(sub.descricao)}
        </p>
      ) : (
        <p style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
          {ui.detail.descriptionSoon}
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
            💡 {L(sub.observacao)}
          </p>
        </div>
      )}

      {/* Projeto prático */}
      {projeto.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: 'var(--color-laranja)', fontSize: '0.78rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {ui.detail.practicalProject}
          </h4>
          {projeto.map((proj, i) => (
            <p key={i} style={{ color: 'rgba(249,222,183,0.8)', fontSize: '0.88rem', lineHeight: 1.65, margin: i > 0 ? '6px 0 0' : '0' }}>
              {proj}
            </p>
          ))}
        </div>
      )}

      {/* Skill tags clicáveis */}
      <div>
        <h4 style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
          {ui.detail.skillsWorked}
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {sub.skills.map(s => (
            <button
              key={s}
              className="skill-tag"
              onClick={() => { onClose(); setTimeout(() => openFilter(s), 100); }}
              title={ui.detail.seeWhereTag.replace('{tag}', translateTag(s, lang))}
              style={{ cursor: 'pointer' }}
            >
              {translateTag(s, lang)}
            </button>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default DetailModal;
