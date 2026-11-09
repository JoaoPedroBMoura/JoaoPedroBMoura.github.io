/**
 * entry-server — ponto de entrada do PRERENDER (build, roda no Node).
 *
 * Exporta render(lang): devolve o HTML do App já no idioma pedido, como string.
 * O script scripts/prerender.mjs chama isto para gerar:
 *   - dist/index.html      (inglês)
 *   - dist/pt/index.html   (português)
 *
 * Não importa CSS nem AOS (isso é client-only, fica em main.tsx / App effect),
 * para o render no servidor não depender de APIs de navegador.
 */

import { renderToString } from 'react-dom/server';
import App from './App';
import type { Locale } from './i18n/config';

export function render(lang: Locale): string {
  return renderToString(<App initialLang={lang} />);
}
