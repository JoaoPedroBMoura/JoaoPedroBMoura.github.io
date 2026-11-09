/**
 * config — tipos base do sistema de idiomas (i18n).
 *
 * Todo o site é bilíngue (inglês / português). Para evitar duplicar
 * estruturas de dados inteiras, cada texto de CONTEÚDO vira um objeto
 * com as duas versões: { en: '...', pt: '...' }.
 *
 * - Locale  → os dois idiomas possíveis.
 * - I18n<T> → um valor que existe nos dois idiomas (texto, lista, etc.).
 *
 * Exemplo:
 *   const titulo: I18n = { en: 'Projects', pt: 'Projetos' };
 *   // no componente: L(titulo) devolve 'Projects' ou 'Projetos'
 *   // conforme o idioma ativo (ver LanguageContext).
 */

export type Locale = 'en' | 'pt';

export type I18n<T = string> = {
  en: T;
  pt: T;
};
