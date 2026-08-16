/**
 * ProfilePhoto — foto de perfil com borda giratória e card de contato fixo.
 *
 * Layout:
 *   Desktop → card aparece à DIREITA da foto (flex row)
 *   Mobile  → card aparece ABAIXO da foto (flex column)
 *
 * O card está no fluxo do documento — empurra conteúdo, não sobrepõe.
 * Design segue o design system: fundo escuro, borda laranja, texto caramelo.
 */

import { contacts } from './contactsConfig';

// ── Componente ─────────────────────────────────────────────────────────────

export function ProfilePhoto() {
  return (
    /*
     * Wrapper em flex — muda de direção via CSS (row no desktop, column no mobile).
     * O card está NO FLUXO, então empurra o conteúdo adjacente.
     */
    <div className="profile-contact-wrapper">

      {/* ── Foto com borda giratória ── */}
      <div
        style={{
          position: 'relative',
          width: 220,
          height: 220,
          display: 'inline-block',
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
      </div>

      {/* ── Card de contato — sempre visível ── */}
      <div className="contact-slide-card open">
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
