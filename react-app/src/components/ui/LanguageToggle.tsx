/**
 * LanguageToggle — seletor de idioma EN / PT no estilo "segmentado"
 * (dois botões lado a lado, o ativo destacado em laranja).
 *
 * Usa o LanguageContext: ler o idioma atual e trocá-lo. Como é um
 * controle do tipo "um de dois", usa role="group" + aria-pressed
 * para leitores de tela.
 */

import { useLang } from '../../i18n/LanguageContext';
import type { Locale } from '../../i18n/config';

// Rótulos curtos exibidos em cada botão.
const OPTIONS: { value: Locale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'pt', label: 'PT' },
];

export function LanguageToggle() {
  const { lang, setLang, ui } = useLang();

  return (
    <div
      role="group"
      aria-label={ui.header.langLabel}
      style={{
        display: 'inline-flex',
        gap: '2px',
        padding: '3px',
        borderRadius: '999px',
        background: 'rgba(0,0,0,0.25)',
        border: '1px solid rgba(208,142,108,0.45)',
      }}
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            style={{
              border: 'none',
              cursor: active ? 'default' : 'pointer',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.03em',
              fontFamily: 'inherit',
              background: active ? 'var(--color-laranja)' : 'transparent',
              color: active ? 'var(--color-preto)' : 'var(--color-caramelo)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(208,142,108,0.2)';
            }}
            onMouseLeave={(e) => {
              if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageToggle;
