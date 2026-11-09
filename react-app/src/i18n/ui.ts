/**
 * ui — textos FIXOS de interface (botões, títulos de seção, rótulos).
 *
 * Diferença para os arquivos de /data:
 *   - /data guarda o CONTEÚDO (projetos, matérias...) — cada um já é bilíngue.
 *   - aqui ficam os textos "de cromo" da interface, reaproveitados em vários
 *     lugares (ex.: "Ver mais", "Tecnologias", nomes de categorias).
 *
 * Como usar no componente:
 *   const { ui } = useLang();
 *   <h2>{ui.projects.title}</h2>
 *
 * Trechos com número usam o marcador {n}, substituído no componente:
 *   ui.projects.subtitle.replace('{n}', String(total))
 *
 * `pt` é a fonte do formato. `en` é tipado como UIStrings, então o
 * TypeScript acusa erro se algum idioma esquecer uma chave.
 */

const pt = {
  header: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    langLabel: 'Idioma',
  },
  common: {
    seeMore: 'Ver mais ›',
    github: 'GitHub →',
    demo: 'Demo →',
    technologies: 'Tecnologias',
  },
  hero: {
    photoAlt: 'Foto de João Pedro Moura',
    viewProjects: 'Ver Projetos',
  },
  about: {
    title: 'Sobre mim',
  },
  formation: {
    academicTitle: 'Formação Acadêmica',
    experienceTitle: 'Experiência Profissional',
  },
  academic: {
    title: 'Vida Acadêmica',
    subtitle: 'CEFET-RJ · Bacharelado em Sistemas de Informação · Campus Nova Friburgo · 8 períodos',
    hint: 'Clique em qualquer matéria para ver detalhes · Clique nas tags para filtrar habilidades',
    disciplines: '{n} disciplinas',
    seeMoreSmall: 'ver mais ›',
  },
  status: {
    concluido: 'Concluído',
    cursando: 'Cursando',
    futuro: 'Futuro',
  },
  courses: {
    title: 'Cursos & Certificações',
    subtitle: 'Formação complementar em dados, programação e gestão',
    empty: 'Nenhum curso nesta categoria.',
    item: 'item',
    items: 'itens',
    categories: {
      todos: 'Todos',
      dotnet: '.NET & C#',
      gitGitHub: 'Git & GitHub',
      analiseDeDados: 'Análise de Dados',
      leanSixSigma: 'Lean Six Sigma',
      gestao: 'Gestão',
    },
  },
  skills: {
    title: 'Tecnologias & Ferramentas',
    subtitle: 'Stack que uso no dia a dia — analytics, backend e infra',
    hard: 'Hard Skills',
    soft: 'Soft Skills',
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Do governo federal a projetos de estudo — {n} projetos documentados',
    hint: 'Clique em "Ver mais" para detalhes · Clique nas tags para filtrar habilidades',
    categories: {
      todos: 'Todos',
      analytics: 'Analytics & Dados',
      web: 'Web & Sites',
      api: 'APIs & Apps',
      console: 'Console / C#',
    },
  },
  detail: {
    technicalDetails: 'Detalhes Técnicos',
    technologies: 'Tecnologias',
    projectsDeliveries: 'Projetos & Entregas',
    skillsWorked: 'Habilidades Trabalhadas',
    practicalProject: 'Projeto Prático',
    descriptionSoon: 'Descrição em breve.',
    seeWhereTag: 'Ver onde "{tag}" aparece',
    filterByTag: 'Filtrar por "{tag}"',
  },
  drawer: {
    close: 'Fechar',
  },
  recommendations: {
    title: 'Minhas Recomendações',
    intro: 'O que leio, assisto e acompanho — uma prova de que me mantenho atualizado além do que aparece no CV.',
  },
  skillFilter: {
    title: 'Filtrar por Habilidade',
    whereTitle: '"{skill}" — onde aparece',
    placeholder: 'Buscar habilidade...',
    skillSingular: 'habilidade',
    skillPlural: 'habilidades',
    clickToSee: 'clique para ver onde aparece',
    backToList: '← Voltar à lista',
    noSkillFound: 'Nenhuma habilidade encontrada para "{query}".',
    noOccurrences: 'Nenhuma ocorrência mapeada para esta habilidade ainda.',
    typeProjeto: '📁 Projeto',
    typeMateria: '🎓 Matéria',
    typeExperiencia: '💼 Experiência',
  },
  fab: {
    leituras: 'Leituras',
    habilidades: 'Habilidades',
    topo: 'Topo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  footer: {
    contacts: 'Contatos',
  },
  backToTop: {
    aria: 'Voltar ao topo',
  },
};

// O formato de `pt` vira o contrato que `en` precisa cumprir.
export type UIStrings = typeof pt;

const en: UIStrings = {
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'Language',
  },
  common: {
    seeMore: 'See more ›',
    github: 'GitHub →',
    demo: 'Demo →',
    technologies: 'Technologies',
  },
  hero: {
    photoAlt: 'Photo of João Pedro Moura',
    viewProjects: 'View Projects',
  },
  about: {
    title: 'About me',
  },
  formation: {
    academicTitle: 'Education',
    experienceTitle: 'Professional Experience',
  },
  academic: {
    title: 'Academic Life',
    subtitle: 'CEFET-RJ · B.Sc. in Information Systems · Nova Friburgo Campus · 8 semesters',
    hint: 'Click any course to see details · Click the tags to filter skills',
    disciplines: '{n} courses',
    seeMoreSmall: 'see more ›',
  },
  status: {
    concluido: 'Completed',
    cursando: 'In progress',
    futuro: 'Upcoming',
  },
  courses: {
    title: 'Courses & Certifications',
    subtitle: 'Complementary training in data, programming and management',
    empty: 'No courses in this category.',
    item: 'item',
    items: 'items',
    categories: {
      todos: 'All',
      dotnet: '.NET & C#',
      gitGitHub: 'Git & GitHub',
      analiseDeDados: 'Data Analysis',
      leanSixSigma: 'Lean Six Sigma',
      gestao: 'Management',
    },
  },
  skills: {
    title: 'Technologies & Tools',
    subtitle: 'The stack I use day to day — analytics, backend and infra',
    hard: 'Hard Skills',
    soft: 'Soft Skills',
  },
  projects: {
    title: 'Projects',
    subtitle: 'From the federal government to study projects — {n} documented projects',
    hint: 'Click "See more" for details · Click the tags to filter skills',
    categories: {
      todos: 'All',
      analytics: 'Analytics & Data',
      web: 'Web & Sites',
      api: 'APIs & Apps',
      console: 'Console / C#',
    },
  },
  detail: {
    technicalDetails: 'Technical Details',
    technologies: 'Technologies',
    projectsDeliveries: 'Projects & Deliverables',
    skillsWorked: 'Skills Applied',
    practicalProject: 'Practical Project',
    descriptionSoon: 'Description coming soon.',
    seeWhereTag: 'See where "{tag}" appears',
    filterByTag: 'Filter by "{tag}"',
  },
  drawer: {
    close: 'Close',
  },
  recommendations: {
    title: 'My Recommendations',
    intro: 'What I read, watch and follow — proof that I keep up to date beyond what the CV shows.',
  },
  skillFilter: {
    title: 'Filter by Skill',
    whereTitle: '"{skill}" — where it appears',
    placeholder: 'Search skill...',
    skillSingular: 'skill',
    skillPlural: 'skills',
    clickToSee: 'click to see where it appears',
    backToList: '← Back to list',
    noSkillFound: 'No skill found for "{query}".',
    noOccurrences: 'No occurrences mapped for this skill yet.',
    typeProjeto: '📁 Project',
    typeMateria: '🎓 Course',
    typeExperiencia: '💼 Experience',
  },
  fab: {
    leituras: 'Reading',
    habilidades: 'Skills',
    topo: 'Top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    contacts: 'Contacts',
  },
  backToTop: {
    aria: 'Back to top',
  },
};

export const uiStrings = { en, pt };
