/**
 * ProfilePhoto — foto de perfil com borda giratória e card de contato.
 *
 * Comportamento:
 *   Desktop (hover: hover) → card abre/fecha ao passar o mouse sobre o wrapper
 *   Mobile (touch)         → card abre/fecha ao clicar na foto
 *
 * Layout:
 *   Desktop → card aparece à DIREITA da foto (flex row, max-width animado)
 *   Mobile  → card aparece ABAIXO da foto (flex column, max-height animado)
 *
 * O card está no fluxo do documento — empurra conteúdo, não sobrepõe.
 * Design segue o design system: fundo escuro, borda laranja, texto caramelo.
 */

import { useState } from 'react';

// ── Ícones SVG inline ──────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

// ── Dados de contato ───────────────────────────────────────────────────────

const contacts = [
  { Icon: WhatsAppIcon,  label: 'WhatsApp',                  href: 'https://wa.me/5521987421561' },
  { Icon: EmailIcon,     label: 'E-mail',                    href: 'mailto:joaopedrobarcelllosmoura@gmail.com' },
  { Icon: LinkedInIcon,  label: 'LinkedIn',                  href: 'https://www.linkedin.com/in/joaopedrobmoura/' },
  { Icon: GitHubIcon,    label: 'GitHub',                    href: 'https://github.com/JoaoPedroBMoura' },
  { Icon: GlobeIcon,     label: 'Inglês intermediário',      href: null },
];

// ── Componente ─────────────────────────────────────────────────────────────

export function ProfilePhoto() {
  const [showCard, setShowCard] = useState(false);

  // Hover só funciona em dispositivos que suportam (desktop/trackpad)
  const isHoverDevice = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  const handleMouseEnter = () => { if (isHoverDevice()) setShowCard(true); };
  const handleMouseLeave = () => { if (isHoverDevice()) setShowCard(false); };
  // Click funciona em touch (mobile) e também serve como fallback
  const handleClick = () => { if (!isHoverDevice()) setShowCard(prev => !prev); };

  return (
    /*
     * Wrapper em flex — muda de direção via CSS (row no desktop, column no mobile).
     * O card está NO FLUXO, então empurra o conteúdo adjacente.
     */
    <div
      className="profile-contact-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Foto com borda giratória ── */}
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={showCard}
        aria-label="Ver informações de contato"
        title="Clique para ver contatos"
        style={{
          position: 'relative',
          width: 220,
          height: 220,
          cursor: 'pointer',
          display: 'inline-block',
          background: 'none',
          border: 'none',
          padding: 0,
          flexShrink: 0,
        }}
      >
        {/* Anel giratório */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, var(--color-laranja), var(--color-ferrugem), var(--color-caramelo), var(--color-laranja))',
            animation: 'profileSpin 4s linear infinite',
          }}
        />
        {/* Foto — parada, por cima do anel */}
        <img
          src="/assets/images/profile/Foto_séria_quadrada-transformed.jpeg"
          alt="Foto de João Pedro Moura"
          width={210}
          height={210}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 5,
            left: 5,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </button>

      {/* ── Card de contato (em fluxo, não absoluto) ── */}
      <div className={`contact-slide-card${showCard ? ' open' : ''}`} aria-hidden={!showCard}>
        <div className="contact-slide-inner">
          <p style={{
            color: 'rgba(249,222,183,0.5)',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '14px',
          }}>
            Contatos
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {contacts.map(({ Icon, label, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--color-caramelo)',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      padding: '6px 8px',
                      borderRadius: '6px',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(208,142,108,0.15)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                  >
                    <span style={{ color: 'var(--color-laranja)', flexShrink: 0 }}><Icon /></span>
                    {label}
                    <span style={{ color: 'rgba(208,142,108,0.5)', marginLeft: 'auto', fontSize: '0.7rem' }}>↗</span>
                  </a>
                ) : (
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(249,222,183,0.65)',
                    fontSize: '0.82rem',
                    padding: '6px 8px',
                  }}>
                    <span style={{ color: 'var(--color-laranja)', flexShrink: 0 }}><Icon /></span>
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes profileSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ProfilePhoto;
