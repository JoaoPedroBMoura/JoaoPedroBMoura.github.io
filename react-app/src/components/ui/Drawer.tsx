/**
 * Drawer — painel deslizante reutilizável (slide from right).
 * Usado por: DetailModal, SkillFilterPanel, RecommendationsPanel.
 * Fecha ao clicar no backdrop ou apertar Escape.
 */

import { useEffect, type ReactNode } from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** Largura no desktop. Padrão: 75% */
  width?: string;
}

export function Drawer({ open, onClose, title, children, width = '75%' }: DrawerProps) {
  // Fecha com Escape + trava scroll do body
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
          zIndex: 200,
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* Painel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: `min(${width}, 100%)`,
          background: '#1e1e1e',
          borderLeft: '2px solid var(--color-laranja)',
          zIndex: 201,
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInRight 0.28s ease',
          overflow: 'hidden',
        }}
      >
        {/* Header do painel */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 24px',
            borderBottom: '1px solid rgba(208,142,108,0.25)',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              color: 'var(--color-caramelo)',
              fontSize: '1.05rem',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-caramelo)',
              fontSize: '1.4rem',
              cursor: 'pointer',
              lineHeight: 1,
              opacity: 0.7,
              padding: '4px 8px',
              borderRadius: '4px',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
          >
            ✕
          </button>
        </div>

        {/* Conteúdo com scroll */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Drawer;
