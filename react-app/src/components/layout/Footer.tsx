/**
 * Footer — rodapé do portfólio com lista de contatos.
 */

import { contacts } from '../ui/contactsData';

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-preto)',
        borderTop: '1px solid rgba(208,142,108,0.25)',
        padding: '40px 24px 24px',
      }}
    >
      {/* ── Contatos ── */}
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{
          color: 'rgba(249,222,183,0.45)',
          fontSize: '0.68rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '16px',
          textAlign: 'center',
        }}>
          Contatos
        </p>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
        }}>
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
                    gap: '8px',
                    color: 'var(--color-caramelo)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid rgba(208,142,108,0.25)',
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(208,142,108,0.12)';
                    el.style.borderColor = 'rgba(208,142,108,0.6)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.borderColor = 'rgba(208,142,108,0.25)';
                  }}
                >
                  <span style={{ color: 'var(--color-laranja)', flexShrink: 0 }}><Icon /></span>
                  {label}
                </a>
              ) : (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(249,222,183,0.55)',
                  fontSize: '0.82rem',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(208,142,108,0.15)',
                }}>
                  <span style={{ color: 'var(--color-laranja)', flexShrink: 0 }}><Icon /></span>
                  {label}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* ── Copyright ── */}
        <p style={{
          margin: 0,
          color: 'rgba(249,222,183,0.35)',
          fontWeight: 500,
          fontSize: '0.8rem',
          textAlign: 'center',
        }}>
          © 2026 João Pedro Barcellos Moura
        </p>
      </div>
    </footer>
  );
}

export default Footer;
