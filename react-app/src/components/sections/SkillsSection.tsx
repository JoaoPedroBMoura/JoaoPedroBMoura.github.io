/**
 * SkillsSection — Letreiro de tecnologias + soft/hard skills
 * Usa marquee-wrapper/marquee-track do index.css
 * Ícones via devicons CDN
 * Dados (techs/hardSkills/softSkills) vêm de src/data/skills.ts
 */

import { techs, hardSkills, softSkills, type Tech } from '../../data/skills';

// duplicado para o loop infinito (track contém 2x o array)
const doubled = [...techs, ...techs];

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '16px 20px',
        minWidth: '90px',
        flexShrink: 0,
      }}
    >
      <img
        src={tech.icon}
        alt={tech.name}
        width={48}
        height={48}
        style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        loading="lazy"
      />
      <span
        style={{
          color: 'var(--color-caramelo)',
          fontSize: '0.7rem',
          fontWeight: 600,
          textAlign: 'center',
          opacity: 0.85,
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skillsTecnologias"
      style={{
        background: 'var(--color-preto)',
        padding: '64px 0',
        borderTop: '1px solid rgba(208,142,108,0.2)',
      }}
    >
      {/* Título */}
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
        <h2
          data-aos="fade-up"
          style={{
            color: 'var(--color-caramelo)',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          Tecnologias &amp; Ferramentas
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ color: 'rgba(249,222,183,0.6)', fontSize: '0.95rem' }}
        >
          Stack que uso no dia a dia — analytics, backend e infra
        </p>
      </div>

      {/* Marquee */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="marquee-wrapper"
        style={{ marginBottom: '64px' }}
      >
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <TechCard key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Skills cards */}
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Hard Skills */}
        <div
          data-aos="fade-right"
          style={{
            background: 'rgba(208,142,108,0.08)',
            border: '1px solid rgba(208,142,108,0.3)',
            borderRadius: '12px',
            padding: '28px',
          }}
        >
          <h3
            style={{
              color: 'var(--color-laranja)',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Hard Skills
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {hardSkills.map((s) => (
              <li
                key={s}
                style={{
                  color: 'var(--color-caramelo)',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--color-laranja)', flexShrink: 0, marginTop: '2px' }}>▸</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          style={{
            background: 'rgba(208,142,108,0.08)',
            border: '1px solid rgba(208,142,108,0.3)',
            borderRadius: '12px',
            padding: '28px',
          }}
        >
          <h3
            style={{
              color: 'var(--color-laranja)',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Soft Skills
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {softSkills.map((s) => (
              <li
                key={s}
                style={{
                  color: 'var(--color-caramelo)',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--color-laranja)' }}>▸</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
