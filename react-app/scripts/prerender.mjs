/**
 * prerender.mjs — gera as páginas estáticas por idioma (roda após o build).
 *
 * Fluxo do build (ver package.json):
 *   1. vite build                → dist/ (bundle do cliente + dist/index.html com #root vazio)
 *   2. vite build --ssr ...       → dist-server/entry-server.js (função render(lang))
 *   3. node scripts/prerender.mjs → reescreve dist/index.html (EN) e cria dist/pt/index.html (PT)
 *
 * Para cada idioma: renderiza o App no servidor, injeta o HTML no #root e ajusta
 * o <head> (lang, title, description, OG, canonical e hreflang). Assim o buscador
 * recebe conteúdo real em cada URL; o cliente assume como SPA depois de carregar.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const SITE = 'https://joaopedrobmoura.github.io';

const { render } = await import(resolve(root, 'dist-server/entry-server.js'));

// SEO por idioma. Cada página estática leva o texto do seu próprio idioma.
const pages = [
  {
    lang: 'en',
    htmlLang: 'en',
    out: 'dist/index.html',
    url: `${SITE}/`,
    ogLocale: 'en_US',
    title: 'João Pedro B. Moura — Data Analyst & Full-Stack Developer',
    description:
      'Portfolio of João Pedro B. Moura — Data Analyst & Full-Stack Developer. Python, Power BI, SQL, AWS Redshift, React/TypeScript. CEFET-RJ.',
  },
  {
    lang: 'pt',
    htmlLang: 'pt-BR',
    out: 'dist/pt/index.html',
    url: `${SITE}/pt/`,
    ogLocale: 'pt_BR',
    title: 'João Pedro B. Moura — Analista de Dados e Desenvolvedor Full-Stack',
    description:
      'Portfólio de João Pedro B. Moura — Analista de Dados e Desenvolvedor Full-Stack. Automações Python, Power BI, SQL, AWS, React/TypeScript. CEFET-RJ.',
  },
];

// Substitui o content="" da <meta> que contém o atributo dado (ex.: name="description").
function setMetaContent(html, attr, value) {
  const re = new RegExp(`(<meta[^>]*${attr.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}[^>]*content=")[^"]*(")`);
  return html.replace(re, `$1${value}$2`);
}

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8');

for (const page of pages) {
  const appHtml = render(page.lang);

  let html = template;

  // Conteúdo renderizado dentro do #root.
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // <html lang> e <title> por idioma.
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${page.htmlLang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

  // Metas por idioma.
  html = setMetaContent(html, 'name="description"', page.description);
  html = setMetaContent(html, 'property="og:title"', page.title);
  html = setMetaContent(html, 'property="og:description"', page.description);
  html = setMetaContent(html, 'property="og:url"', page.url);
  html = setMetaContent(html, 'property="og:locale"', page.ogLocale);
  html = setMetaContent(html, 'name="twitter:title"', page.title);
  html = setMetaContent(html, 'name="twitter:description"', page.description);

  // canonical + hreflang (iguais nas duas páginas, apontando para cada versão).
  const headLinks =
    `    <link rel="canonical" href="${page.url}" />\n` +
    `    <link rel="alternate" hreflang="en" href="${SITE}/" />\n` +
    `    <link rel="alternate" hreflang="pt-BR" href="${SITE}/pt/" />\n` +
    `    <link rel="alternate" hreflang="x-default" href="${SITE}/" />\n` +
    `  </head>`;
  html = html.replace('</head>', headLinks);

  const outPath = resolve(root, page.out);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  console.log(`prerender: ${page.out}  (${appHtml.length} chars de conteúdo)`);
}

// ── sitemap.xml ────────────────────────────────────────────────────────────
// Gerado aqui (e não como arquivo fixo) para o lastmod se atualizar a cada
// build. Cada <url> lista as versões por idioma via xhtml:link (forma
// recomendada pelo Google para sites multilíngues).
const lastmod = new Date().toISOString().slice(0, 10); // AAAA-MM-DD
const alternates =
  `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/"/>\n` +
  `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE}/pt/"/>\n` +
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;

const urls = pages
  .map(
    (page) =>
      `  <url>\n` +
      `    <loc>${page.url}</loc>\n` +
      `${alternates}\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `  </url>`,
  )
  .join('\n');

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  `${urls}\n` +
  `</urlset>\n`;

writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap, 'utf-8');
console.log('prerender: dist/sitemap.xml');

console.log('prerender concluído.');
