/**
 * LanguageContext — estado global do idioma (en / pt).
 *
 * MODELO POR URL (para SEO bilíngue com prerender):
 *   - '/'     → inglês   (página pré-renderizada em EN)
 *   - '/pt/'  → português (página pré-renderizada em PT)
 *   A URL é a fonte da verdade do idioma. O seletor troca a URL (sem recarregar
 *   a página — vira SPA), e os botões voltar/avançar do navegador funcionam.
 *
 * Por que não localStorage? Com páginas estáticas por idioma, o idioma precisa
 * bater com a URL que o buscador indexou. Guardar em localStorage poderia
 * divergir da URL (e quebrar a hidratação/prerender). A URL já "lembra".
 *
 * SSR-safe: no prerender (Node, sem window), o idioma vem da prop initialLang;
 * acessos a window/document são protegidos ou ficam em effects (que não rodam
 * no servidor).
 */

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Locale, I18n } from './config';
import { uiStrings, type UIStrings } from './ui';

const DEFAULT_LANG: Locale = 'en';

/** Descobre o idioma a partir do caminho da URL ('/pt/...' → pt, resto → en). */
function langFromPath(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
  return path.startsWith('pt') ? 'pt' : 'en';
}

/** Caminho correspondente a cada idioma. */
function pathForLang(lang: Locale): string {
  return lang === 'pt' ? '/pt/' : '/';
}

interface LanguageContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
  ui: UIStrings;
  L: <T>(field: I18n<T>) => T;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Locale; // usado só no prerender (servidor) para fixar o idioma
}) {
  const [lang, setLangState] = useState<Locale>(initialLang ?? langFromPath());

  // Mantém o atributo <html lang> coerente (acessibilidade + SEO).
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Sincroniza o idioma quando o usuário usa voltar/avançar do navegador.
  useEffect(() => {
    const onPop = () => setLangState(langFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Troca o idioma E a URL (sem recarregar a página).
  const setLang = (next: Locale) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      const target = pathForLang(next);
      if (window.location.pathname !== target) {
        window.history.pushState(null, '', target);
      }
    }
  };

  const L = <T,>(field: I18n<T>): T => field[lang];

  const value: LanguageContextType = { lang, setLang, ui: uiStrings[lang], L };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang deve ser usado dentro de LanguageProvider');
  return ctx;
}
