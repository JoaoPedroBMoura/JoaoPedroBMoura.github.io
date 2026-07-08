/**
 * FAB — Floating Action Button com speed dial.
 * Ícone: folha (mesmo símbolo do favicon do site).
 *
 * Sub-ações (expandem para cima ao clicar na folha):
 *   ⬆ Topo           → scroll para o início
 *   🔍 Habilidades   → abre SkillFilterPanel (via context)
 *   in  LinkedIn     → link externo
 *   <>  GitHub       → link externo
 *   ★  Leituras      → abre RecommendationsPanel
 */

import { useState, useEffect } from 'react';
import { useSkillFilter } from '../../context/SkillFilterContext';
import { RecommendationsPanel } from './RecommendationsPanel';
import { SkillFilterPanel } from './SkillFilterPanel';

// ── Ícones inline ─────────────────────────────────────────────────────────────

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-5-1z"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>
);

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// ── Sub-botão ─────────────────────────────────────────────────────────────────

interface FabItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  delay: number;
  visible: boolean;
  as?: 'button' | 'a';
  href?: string;
}

function FabItem({ icon, label, onClick, delay, visible, as = 'button', href }: FabItemProps) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#2a2a2a',
    border: '1.5px solid rgba(208,142,108,0.45)',
    color: 'var(--color-caramelo)',
    cursor: 'pointer',
    textDecoration: 'none',
    flexShrink: 0 as const,
  };

  const icon_el = as === 'a' ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
    </a>
  ) : (
    <button
      onClick={onClick}
      style={{ ...style, border: '1.5px solid rgba(208,142,108,0.45)', background: '#2a2a2a' }}
      aria-label={label}
    >
      {icon}
    </button>
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.2s ease ${delay}ms, transform 0.2s ease ${delay}ms`,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Label */}
      <span
        style={{
          background: '#1e1e1e',
          border: '1px solid rgba(208,142,108,0.3)',
          color: 'var(--color-caramelo)',
          fontSize: '0.72rem',
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      {icon_el}
    </div>
  );
}

// ── FAB principal ─────────────────────────────────────────────────────────────

export function FAB() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [recsOpen, setRecsOpen] = useState(false);

  const { openFilter, filterOpen } = useSkillFilter();

  // Aparece após 100px de scroll (mesmo comportamento do BackToTop)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha speed dial se qualquer painel abrir
  useEffect(() => {
    if (filterOpen || recsOpen) setOpen(false);
  }, [filterOpen, recsOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Speed dial container */}
      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
          opacity: visible ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s',
        }}
      >
        {/* Sub-ações (animam de baixo para cima, por isso a ordem é invertida) */}
        <FabItem
          icon={<StarIcon />}
          label="Leituras"
          onClick={() => { setRecsOpen(true); setOpen(false); }}
          delay={0}
          visible={open}
        />
        <FabItem
          icon={<GitHubIcon />}
          label="GitHub"
          as="a"
          href="https://github.com/JoaoPedroBMoura"
          onClick={() => setOpen(false)}
          delay={40}
          visible={open}
        />
        <FabItem
          icon={<LinkedInIcon />}
          label="LinkedIn"
          as="a"
          href="https://linkedin.com/in/joaopedrobmoura"
          onClick={() => setOpen(false)}
          delay={80}
          visible={open}
        />
        <FabItem
          icon={<FilterIcon />}
          label="Habilidades"
          onClick={() => { openFilter(); setOpen(false); }}
          delay={120}
          visible={open}
        />
        <FabItem
          icon={<ArrowUpIcon />}
          label="Topo"
          onClick={scrollToTop}
          delay={160}
          visible={open}
        />

        {/* Botão principal — folha */}
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: 'none',
            background: 'var(--color-laranja)',
            color: 'var(--color-preto)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            transform: open ? 'rotate(30deg)' : 'rotate(0deg)',
            transition: 'background 0.2s, transform 0.3s ease',
            flexShrink: 0,
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--color-ferrugem)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = open ? 'var(--color-ferrugem)' : 'var(--color-laranja)')}
        >
          <LeafIcon />
        </button>
      </div>

      {/* Painéis */}
      <SkillFilterPanel />
      <RecommendationsPanel open={recsOpen} onClose={() => setRecsOpen(false)} />
    </>
  );
}

export default FAB;
