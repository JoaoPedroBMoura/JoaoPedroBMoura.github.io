/**
 * Header — Navegação principal.
 *
 * Mobile  (<1024px): logo à esquerda + botão hamburger à direita.
 *                    Menu abre como drawer vertical abaixo do header.
 * Desktop (≥1024px): logo à esquerda + links centralizados + espaço direito.
 */

import { useState } from 'react';
import { navItems } from '../../data/navigation';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Barra principal */}
      <nav
        style={{
          background: 'var(--color-preto)',
          borderBottom: '2px solid var(--color-laranja)',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          minHeight: '56px',
        }}
      >
        {/* Logo — coluna esquerda */}
        <a
          href="#"
          onClick={closeMenu}
          style={{
            color: 'var(--color-caramelo)',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            justifySelf: 'start',
          }}
        >
          JP Moura
        </a>

        {/* Nav links — coluna central, só visível em desktop */}
        <ul className="nav-links-desktop">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                style={{
                  color: 'var(--color-caramelo)',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'background 0.2s',
                  display: 'block',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = 'rgba(208,142,108,0.2)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = 'transparent')
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Coluna direita: hamburger no mobile, vazio no desktop */}
        <div style={{ justifySelf: 'end' }}>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {/* Três linhas → X animado via CSS */}
            <span className={`hamburger-line ${menuOpen ? 'top-open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'mid-open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'bot-open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Drawer mobile — visível só quando menuOpen */}
      {menuOpen && (
        <div className="mobile-nav-drawer">
          <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    color: 'var(--color-caramelo)',
                    textDecoration: 'none',
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(208,142,108,0.1)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = 'rgba(208,142,108,0.12)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = 'transparent')
                  }
                >
                  {item.label}
                  {item.isExternal && (
                    <span style={{ fontSize: '0.7rem', opacity: 0.5, marginLeft: '6px' }}>↗</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
