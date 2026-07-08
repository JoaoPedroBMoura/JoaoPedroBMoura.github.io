/**
 * RecommendationsPanel — painel com recomendações pessoais de livros,
 * YouTube, newsletters e perfis. Controlado pelo FAB.
 */

import { Drawer } from './Drawer';
import { recommendations } from '../../data/recommendations';

interface RecommendationsPanelProps {
  open: boolean;
  onClose: () => void;
}

export function RecommendationsPanel({ open, onClose }: RecommendationsPanelProps) {
  return (
    <Drawer open={open} onClose={onClose} title="Minhas Recomendações">
      <p style={{ color: 'rgba(249,222,183,0.55)', fontSize: '0.82rem', marginBottom: '28px', lineHeight: 1.6 }}>
        O que leio, assisto e acompanho — uma prova de que me mantenho atualizado além do que aparece no CV.
      </p>

      {recommendations.map(category => (
        <div key={category.label} style={{ marginBottom: '32px' }}>
          <h3 style={{
            color: 'var(--color-laranja)',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '14px',
          }}>
            {category.icon} {category.label}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {category.items.map(item => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(208,142,108,0.2)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-laranja)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(208,142,108,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(208,142,108,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--color-caramelo)', fontSize: '0.88rem', fontWeight: 600 }}>
                    {item.title}
                  </span>
                  <span style={{ color: 'var(--color-laranja)', fontSize: '0.75rem', flexShrink: 0 }}>↗</span>
                </div>
                {item.author && (
                  <span style={{ color: 'rgba(249,222,183,0.45)', fontSize: '0.72rem', display: 'block', marginBottom: '6px' }}>
                    {item.author}
                  </span>
                )}
                <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.8rem', lineHeight: 1.55, margin: 0 }}>
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </Drawer>
  );
}

export default RecommendationsPanel;
