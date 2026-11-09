/**
 * HeroSection — Banner principal.
 * Cards de atuação (roles) e o botão de CTA são bilíngues.
 */

import { ProfilePhoto } from '../ui/ProfilePhoto';
import { useLang } from '../../i18n/LanguageContext';
import type { I18n } from '../../i18n/config';

interface Role {
  label: I18n;
  icon: string;
  desc: I18n;
}

const roles: Role[] = [
  {
    label: { en: 'Mid-level Data Analyst', pt: 'Analista de Dados Pleno' },
    icon: '📊',
    desc: { en: 'Power BI · AWS Redshift & S3 · Python · SQL', pt: 'Power BI · AWS Redshift e S3 · Python · SQL' },
  },
  {
    label: { en: 'Full-Stack Dev', pt: 'Dev Full-Stack' },
    icon: '💻',
    desc: { en: 'React · TypeScript · C#/.NET · PostgreSQL · MySQL', pt: 'React · TypeScript · C#/.NET · PostgreSQL · MySql' },
  },
];

export function HeroSection() {
  const { ui, L } = useLang();

  return (
    <section
      id="inicio"
      style={{
        background: 'var(--color-preto)',
        padding: '64px 24px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        textAlign: 'center',
      }}
    >
      {/* Nome */}
      <div data-aos="fade-down">
        <h1
          style={{
            color: 'var(--color-caramelo)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          João Pedro<br />
          <span style={{ color: 'var(--color-laranja)' }}>Barcellos Moura</span>
        </h1>
        
      </div>

      {/* Foto */}
      <div data-aos="zoom-in" data-aos-delay="150">
        <ProfilePhoto />
      </div>

      {/* Cards de atuação */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '720px',
          width: '100%',
        }}
      >
        {roles.map((role, i) => (
          <div
            key={role.label.en}
            data-aos={i === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={String(100 + i * 100)}
            style={{
              flex: '1 1 280px',
              background: 'rgba(208,142,108,0.08)',
              border: '1px solid rgba(208,142,108,0.35)',
              borderRadius: '14px',
              padding: '24px',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-laranja)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(208,142,108,0.35)';
              (e.currentTarget as HTMLDivElement).style.transform = 'none';
            }}
          >
            <div aria-hidden="true" style={{ fontSize: '2rem', marginBottom: '10px' }}>{role.icon}</div>
            <h2
              style={{
                color: 'var(--color-caramelo)',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '6px',
              }}
            >
              {L(role.label)}
            </h2>
            <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.82rem' }}>{L(role.desc)}</p>
          </div>
        ))}
      </div>

      {/* CTA links */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a
          href="#projetosPessoais"
          style={{
            background: 'var(--color-laranja)',
            color: 'var(--color-preto)',
            padding: '10px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          {ui.hero.viewProjects}
        </a>
        <a
          href="https://linkedin.com/in/joaopedrobmoura"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid var(--color-laranja)',
            color: 'var(--color-caramelo)',
            padding: '10px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'rgba(208,142,108,0.15)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'transparent')}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/JoaoPedroBMoura"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid rgba(208,142,108,0.4)',
            color: 'var(--color-caramelo)',
            padding: '10px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'rgba(208,142,108,0.1)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'transparent')}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
