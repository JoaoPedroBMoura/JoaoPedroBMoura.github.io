# Portfólio Pessoal — João Pedro B. Moura

> React 19 · TypeScript · Vite · Tailwind CSS · AOS · GitHub Pages (deploy via GitHub Actions)

Site em produção: **[joaopedrobmoura.github.io](https://joaopedrobmoura.github.io/)**

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Stack Tecnológica](#stack-tecnológica)
3. [Arquitetura do Projeto](#arquitetura-do-projeto)
4. [Mapa de Pastas e Arquivos](#mapa-de-pastas-e-arquivos)
5. [Design System — Paleta e CSS](#design-system--paleta-e-css)
6. [Como Rodar Localmente](#como-rodar-localmente)
7. [Como Funciona o Deploy](#como-funciona-o-deploy)
8. [Guia de Manutenção](#guia-de-manutenção)
9. [Dados do Site — src/data/](#dados-do-site--srcdata)

---

## Visão Geral

Portfólio pessoal completo construído como **Single Page Application (SPA)** em React. Cada seção da página é um componente independente e autocontido. O objetivo é expor de forma completa carreira, projetos, vida acadêmica e tecnologias dominadas.

**Migrado** do JavaScript vanilla + Bootstrap para React + TypeScript + Tailwind CSS em 2025/2026.

---

## Stack Tecnológica

| Tecnologia | Versão | Papel |
|---|---|---|
| React | 19 | Framework de UI — componentes e estado |
| TypeScript | 5.9 | Tipagem estática — segurança no desenvolvimento |
| Vite | 8 | Bundler e servidor de desenvolvimento |
| Tailwind CSS | v4 | Utilitários CSS (breakpoints responsivos: `lg:`, etc.) |
| AOS | — | Animações de scroll (Animate On Scroll) |
| devicons CDN | latest | Ícones de tecnologias no marquee |
| GitHub Actions | — | CI/CD: lint + build + deploy automático a cada push na `main` |

---

## Arquitetura do Projeto

O projeto separa **dados** de **apresentação**: nenhum componente de seção guarda um array de conteúdo gigante misturado com JSX. Cada seção só sabe renderizar; os dados vêm de `src/data/`.

```
Dados (src/data/)
    ├── *.json    → conteúdo que pode mudar por fora do código (cursos, certificações)
    └── *.ts      → conteúdo tipado versionado com o código (projetos, vida acadêmica, etc.)

Apresentação (components/)
    ├── layout/    → estrutura persistente da página (Header, Footer)
    ├── sections/  → cada bloco de conteúdo da página (Hero, Projetos, etc.) — só JSX + estado de UI
    └── ui/        → peças reutilizáveis menores (foto de perfil, botão voltar ao topo)

Tipos (types/)
    └── contratos TypeScript compartilhados entre 2+ arquivos (NavItem, Curso)
```

### Por que isso importa

Antes, seções como `AcademicSection.tsx` (397 linhas) e `ProjectsSection.tsx` (307 linhas) misturavam ~250 linhas de dados hardcoded com a lógica de renderização no mesmo arquivo. Isso dificultava manutenção (mudar um dado exigia navegar por JSX) e ia contra a Clean Architecture que o site anuncia como skill. Agora:

- Quer mudar um projeto? Vai em `src/data/projects.ts` — não precisa tocar em JSX.
- Quer mudar a lógica visual do card? Vai em `ProjectsSection.tsx` — não precisa navegar por 15 objetos de dados.

### Fluxo de dados de Cursos & Certificações (único com JSON)

```
src/data/cursosProgramacao.json   ┐
src/data/cursosAnaliseDados.json  ├→ import direto no build (Vite) → CoursesSection.tsx
src/data/certificacoes.json       ┘
```

Os três JSONs são **importados no build**, não buscados via `fetch` em runtime. Isso elimina estado de loading/erro e qualquer dependência de rede para o site funcionar — tudo já vem pronto no bundle.

### Fluxo de renderização da página

```
main.tsx
  └── App.tsx
        ├── <Header />              (fixo no topo)
        ├── <HeroSection />         (banner + CTAs)
        ├── <AboutSection />        (bio + métricas)
        ├── <FormationSection />    (timeline de experiências)
        ├── <AcademicSection />     (vida acadêmica por período)
        ├── <CoursesSection />      (cursos e certificações)
        ├── <SkillsSection />       (marquee de tecnologias)
        ├── <ProjectsSection />     (grid de projetos com filtro)
        ├── <Footer />
        └── <BackToTop />
```

---

## Mapa de Pastas e Arquivos

```
react-app/
│
├── public/
│   └── assets/                    # Imagens servidas como estão (favicon, foto de perfil)
│
├── src/
│   ├── main.tsx                   # Ponto de entrada — monta <App /> no DOM
│   ├── App.tsx                    # ⭐ Raiz — define ORDEM e COMPOSIÇÃO das seções
│   ├── index.css                  # ⭐ @import "tailwindcss" + design tokens + classes utilitárias
│   │
│   ├── components/
│   │   ├── layout/                # Componentes que PERSISTEM em toda a página
│   │   │   ├── Header.tsx         # Navbar sticky: logo, links de navegação, hamburger mobile
│   │   │   ├── Footer.tsx         # Rodapé: copyright
│   │   │   └── index.ts           # Barrel export
│   │   │
│   │   ├── sections/              # ⭐ Um arquivo = uma seção visível na página (só apresentação)
│   │   │   ├── index.ts
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── FormationSection.tsx  # usa src/data/experience.ts
│   │   │   ├── AcademicSection.tsx   # usa src/data/academic.ts
│   │   │   ├── SkillsSection.tsx     # usa src/data/skills.ts
│   │   │   ├── ProjectsSection.tsx   # usa src/data/projects.ts
│   │   │   └── CoursesSection.tsx    # usa src/data/cursos*.json + certificacoes.json
│   │   │
│   │   └── ui/
│   │       ├── index.ts
│   │       ├── ProfilePhoto.tsx   # Foto de perfil (botão acessível por teclado) + card de contato
│   │       └── BackToTop.tsx      # Botão flutuante "voltar ao topo" (SVG inline, sem asset externo)
│   │
│   ├── data/                      # ⭐ TODO o conteúdo do site mora aqui, separado da apresentação
│   │   ├── navigation.ts          # Itens do menu (Header)
│   │   ├── skills.ts              # Techs do marquee + hard/soft skills
│   │   ├── experience.ts          # Timeline de experiências profissionais
│   │   ├── projects.ts            # Todos os projetos + categorias de filtro
│   │   ├── academic.ts            # 8 períodos do CEFET-RJ + matérias
│   │   ├── cursosProgramacao.json
│   │   ├── cursosAnaliseDados.json
│   │   └── certificacoes.json
│   │
│   └── types/
│       └── index.ts               # Contratos usados em 2+ lugares: NavItem, Curso/CursoCategory
│
├── vite.config.ts                 # ⭐ base: '/' (site na raiz) + plugin do Tailwind
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js
└── package.json
```

---

## Design System — Paleta e CSS

### Tokens de cor

Definidos em `src/index.css` no bloco `:root { }`:

```css
--color-caramelo: #f9deb7   /* Texto principal, títulos */
--color-laranja:  #D08E6C   /* Destaques, bordas ativas, botões, CTAs */
--color-preto:    #393939   /* Fundo principal das seções escuras */
--color-ferrugem: #AB594B   /* Acentos secundários */
--color-branco:   #ffffff   /* Texto em fundos claros */
```

**Regra:** sempre use `var(--color-*)` nos `style={}` dos componentes. Nunca hardcode `#393939` ou similar diretamente.

### Duas fontes de estilo, por design

O site usa **Tailwind** só para os poucos utilitários responsivos que já existiam (`hidden lg:flex`, `lg:hidden`, `min-h-screen flex flex-col`) e **classes CSS customizadas** (`index.css`) para tudo que é específico do design (cards, badges, marquee, tabs). Não foi feita uma migração completa de estilos inline para Tailwind — isso é uma melhoria futura opcional, não um bug.

### Classes CSS globais (definidas em `index.css`)

| Classe | Propósito |
|---|---|
| `.marquee-wrapper` / `.marquee-track` | Letreiro animado de tecnologias |
| `.semester-tab` / `.semester-tab.active` | Botão de tab (períodos e filtros) |
| `.skill-tag` | Pílula de tecnologia/habilidade |
| `.subject-card` | Card de matéria acadêmica com hover |
| `.project-card-modern` | Card de projeto com hover + sombra |
| `.project-status-badge` + `.status-*` | Badge de status do projeto |
| `.hamburger-line` | Linha do botão hamburger mobile |
| `.exp-dot` | Ponto da timeline de experiência |
| `.back-to-top` / `.back-to-top.show` | Botão flutuante "voltar ao topo" |

---

## Como Rodar Localmente

```bash
cd react-app
npm install       # primeira vez ou após alterar package.json
npm run dev       # → http://localhost:5173/
```

> Use sempre `npm run dev` — nunca Live Server. Ele não compila TypeScript/JSX.

---

## Como Funciona o Deploy

O deploy é **automático via GitHub Actions** (`.github/workflows/deploy.yml`), sem passo manual:

1. Push (ou merge) na branch `main`.
2. O workflow entra em `react-app/`, roda `npm ci`, `npm run lint`, `npm run build`.
3. Se tudo passar, publica o conteúdo de `react-app/dist/` no GitHub Pages.

**Configuração única no GitHub** (já deve estar feita, mas confira se o site não atualizar):
Settings → Pages → Build and deployment → Source = **"GitHub Actions"** (não "Deploy from a branch").

### Por que `base: '/'` em `vite.config.ts`?

O site é publicado na raiz do domínio (`joaopedrobmoura.github.io/`), não em uma subpasta. `base: '/'` garante que os caminhos de assets gerados (`/assets/...`) apontem para o lugar certo.

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
```

---

## Guia de Manutenção

### Adicionar um novo projeto

Abrir `src/data/projects.ts`, inserir no array `projects`:

```ts
{
  nome: 'Nome do Projeto',
  descricao: 'Frase curta — o que o projeto faz.',
  detalhe: 'Parágrafo com detalhes técnicos (aparece ao clicar em "Detalhes").',
  status: 'producao',           // 'producao' | 'concluido' | 'desenvolvimento'
  statusLabel: 'Em Produção',
  categoria: ['analytics'],     // um ou mais: 'analytics' | 'web' | 'api' | 'console'
  techs: ['Python', 'SQL'],
  github: 'https://github.com/JoaoPedroBMoura/...',  // opcional
  demo: 'https://...',          // opcional
  destaque: 'Métrica principal — ex: 60% de redução', // opcional
},
```

### Atualizar a vida acadêmica

Abrir `src/data/academic.ts`, array `semesters`. Para mudar o status de um período: `status: 'concluido' | 'cursando' | 'futuro'`.

### Adicionar um novo curso/certificação

Abrir o JSON correspondente em `src/data/` (`cursosProgramacao.json`, `cursosAnaliseDados.json` ou `certificacoes.json`) e adicionar um objeto `{ "nome", "link", "categoria" }`. `categoria` precisa ser uma das chaves definidas em `CursoCategory` (`src/types/index.ts`): `dotnet | gitGitHub | analiseDeDados | leanSixSigma | gestao`.

### Adicionar uma nova seção à página

1. Criar `src/components/sections/NomeDaSecao.tsx` com `export function NomeDaSecao()`
2. Se tiver dados próprios, criar `src/data/nomeDaSecao.ts` e importar
3. Adicionar o export em `src/components/sections/index.ts`
4. Importar e posicionar em `src/App.tsx`
5. Adicionar o link no array `navItems` em `src/data/navigation.ts`

### Atualizar tecnologias, experiências ou skills

- Marquee de tecnologias → `src/data/skills.ts` (array `techs`)
- Hard/soft skills → `src/data/skills.ts` (`hardSkills` / `softSkills`)
- Experiências profissionais → `src/data/experience.ts`

---

## Dados do Site — src/data/

| Arquivo | Conteúdo | Usado por |
|---|---|---|
| `navigation.ts` | Itens do menu principal | Header |
| `skills.ts` | Techs do marquee + hard/soft skills | SkillsSection |
| `experience.ts` | Timeline de experiências profissionais | FormationSection |
| `projects.ts` | Todos os projetos + categorias de filtro | ProjectsSection |
| `academic.ts` | 8 períodos do CEFET-RJ + matérias | AcademicSection |
| `cursosProgramacao.json` | Cursos .NET, Git/GitHub | CoursesSection |
| `cursosAnaliseDados.json` | Cursos Comunidade DS + DIO | CoursesSection |
| `certificacoes.json` | Lean Six Sigma, Gestão de Projetos/Pessoas | CoursesSection |

> Os projetos antigos (`projetosProgramacao.json`, `projetosAnaliseDados.json`, na raiz do repositório fora de `react-app/`) não são usados pelo site — ficam só como histórico e não entram no build.

---

*Última atualização: julho/2026 · João Pedro B. Moura*
