/**
 * Header — Navegação principal.
 * Mobile: links de navegação ocultos (o FAB cobre topo + contatos).
 * Desktop: todos os links visíveis na barra.
 */

import { navItems } from '../../data/navigation';

export function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
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
        {/* Logo / nome — coluna esquerda */}
        <a
          href="#"
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

        {/* Nav links — coluna central (centralizado de verdade) */}
        <ul
          style={{
            display: 'flex',
            gap: '4px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden lg:flex"
        >
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
                  ((e.target as HTMLElement).style.background = 'rgba(208,142,108,0.2)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.background = 'transparent')
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Coluna direita vazia — mantém o logo na esquerda e os links centrados */}
        <span aria-hidden="true" />
      </nav>
    </header>
  );
}

export default Header;
