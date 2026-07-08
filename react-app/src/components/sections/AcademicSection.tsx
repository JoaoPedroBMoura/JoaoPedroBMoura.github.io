/**
 * AcademicSection — Vida Acadêmica CEFET-RJ
 * Cards de matérias clicáveis → abre DetailModal com descrição completa.
 * Skill tags clicáveis → abre SkillFilterPanel via context.
 */

import { useState } from 'react';
import { semesters, statusStyle, type Subject, type Semester } from '../../data/academic';
import { useSkillFilter } from '../../context/SkillFilterContext';
import { DetailModal, type DetailContent } from '../ui/DetailModal';

export function AcademicSection() {
  const [activePeriodo, setActivePeriodo] = useState(0);
  const [modalContent, setModalContent] = useState<DetailContent | null>(null);

  const { openFilter } = useSkillFilter();
  const sem = semesters[activePeriodo];
  const style = statusStyle[sem.status];

  const openSubject = (sub: Subject, semester: Semester) => {
    setModalContent({
      type: 'subject',
      data: sub,
      semesterLabel: semester.label,
      semesterStatus: semester.status,
    });
  };

  return (
    <section
      id="vidaAcademica"
      style={{ background: 'var(--color-preto)', padding: '64px 0', borderTop: '1px solid rgba(208,142,108,0.2)' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 data-aos="fade-up"
            style={{ color: 'var(--color-caramelo)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '8px' }}>
            Vida Acadêmica
          </h2>
          <p data-aos="fade-up" data-aos-delay="100"
            style={{ color: 'rgba(249,222,183,0.6)', fontSize: '0.95rem' }}>
            CEFET-RJ · Bacharelado em Sistemas de Informação · Campus Nova Friburgo · 8 períodos
          </p>
          <p data-aos="fade-up" data-aos-delay="150"
            style={{ color: 'rgba(249,222,183,0.4)', fontSize: '0.78rem', marginTop: '6px' }}>
            Clique em qualquer matéria para ver detalhes · Clique nas tags para filtrar habilidades
          </p>
        </div>

        {/* Tabs de período */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          style={{
            display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px',
            marginBottom: '28px', scrollbarWidth: 'none',
          }}
        >
          {semesters.map((s, i) => (
            <button
              key={s.periodo}
              onClick={() => setActivePeriodo(i)}
              className={`semester-tab${activePeriodo === i ? ' active' : ''}`}
              style={{ position: 'relative', flexShrink: 0 }}
            >
              {s.periodo}
              <span style={{
                display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%',
                background: statusStyle[s.status].dot, marginLeft: '6px', verticalAlign: 'middle',
              }} />
            </button>
          ))}
        </div>

        {/* Legenda */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {(['concluido', 'cursando', 'futuro'] as const).map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'rgba(249,222,183,0.65)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: statusStyle[s].dot, display: 'inline-block' }} />
              {statusStyle[s].label}
            </div>
          ))}
        </div>

        {/* Header do período ativo */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ color: 'var(--color-caramelo)', fontSize: '1.1rem', fontWeight: 700 }}>
              {sem.label}
            </h3>
            <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.78rem', marginTop: '2px' }}>
              {sem.subjects.length} disciplinas
            </p>
          </div>
          <span style={{
            padding: '4px 14px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700,
            background: style.badge, color: '#fff',
          }}>
            {style.label}
          </span>
        </div>

        {/* Grid de matérias */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
          {sem.subjects.map((sub) => (
            <button
              key={sub.nome}
              onClick={() => openSubject(sub, sem)}
              className="subject-card"
              style={{
                textAlign: 'left',
                width: '100%',
                background: 'none',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {/* Nome + carga horária */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
                <h4 style={{ color: 'var(--color-caramelo)', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.3 }}>
                  {sub.nome}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0 }}>
                  {sub.cargaHoraria && (
                    <span style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.68rem', marginTop: '2px' }}>
                      {sub.cargaHoraria}h
                    </span>
                  )}
                  {/* Indicador de que há detalhes */}
                  {sub.descricao && (
                    <span style={{ color: 'var(--color-laranja)', fontSize: '0.6rem', opacity: 0.7 }}>ver mais ›</span>
                  )}
                </div>
              </div>

              {/* Skill tags */}
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: (sub.projeto || sub.observacao) ? '10px' : '0' }}
                onClick={e => e.stopPropagation()}
              >
                {sub.skills.map((s) => (
                  <button
                    key={s}
                    className="skill-tag"
                    onClick={() => openFilter(s)}
                    title={`Filtrar por "${s}"`}
                    style={{ cursor: 'pointer' }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Observação */}
              {sub.observacao && (
                <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.72rem', lineHeight: 1.5, fontStyle: 'italic', marginBottom: sub.projeto ? '8px' : '0' }}>
                  {sub.observacao}
                </p>
              )}

              {/* Projetos */}
              {sub.projeto && (
                <div style={{ borderTop: '1px solid rgba(208,142,108,0.2)', paddingTop: '8px' }}>
                  {(Array.isArray(sub.projeto) ? sub.projeto : [sub.projeto]).map((p, i) => (
                    <p key={i} style={{ color: 'var(--color-laranja)', fontSize: '0.72rem', fontStyle: 'italic', margin: i > 0 ? '4px 0 0' : '0' }}>
                      ▸ {p}
                    </p>
                  ))}
                </div>
              )}
            </button>
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

export default AcademicSection;
