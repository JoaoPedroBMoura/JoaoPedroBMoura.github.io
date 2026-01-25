/**
 * Componente Header - Barra de navegação principal
 * Usa classes CSS originais do Bootstrap + custom
 */

import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Construção Profissional', href: '#formacaoes' },
  { label: 'Habilidades', href: '#skillsTecnologias' },
  { label: 'Projetos', href: '#projetosPessoais' },
  { label: 'O que recomenda?', href: 'https://forms.gle/gh22A2sfco1L7S8c7', isExternal: true },
  { label: 'FAQ', href: '/pages/faq.html' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="margem-button-on">
      <nav className="navbar navbar-expand-lg navbar-light navbar-brown margem-0 menu-fixo">
        <div>
          <img 
            id="imagemCentral" 
            src="https://joaopedrobmoura.github.io/assets/images/icons/teste.png" 
            alt="folha" 
            className="img-fluid img-para-esquerda" 
            width="45"
          />
          
          <button 
            className="navbar-toggler letra-preta"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>Menu
          </button>

          <div 
            id="navBarCollapsavel" 
            className={`letra-branca font-menu ${isMenuOpen ? '' : 'collapse'} d-lg-flex margem-esquerda-20`}
          >
            <ul className="navbar-nav mr-auto">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item no-break borda-menu">
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
