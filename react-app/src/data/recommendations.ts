/**
 * Minhas recomendações pessoais de leitura, estudo e acompanhamento.
 * Conteúdo placeholder — substitua com suas recomendações reais.
 */

export interface Recommendation {
  title: string;
  author?: string;
  url: string;
  description: string;
}

export interface RecommendationCategory {
  label: string;
  icon: string;
  items: Recommendation[];
}

export const recommendations: RecommendationCategory[] = [
  {
    label: 'Livros',
    icon: '📖',
    items: [
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        url: 'https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
        description: 'O livro que me fez entender que código é lido muito mais do que escrito. Mudou como penso sobre legibilidade e responsabilidade.',
      },
      {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
        description: 'A referência de engenharia de dados — bancos, pipelines, consistência e escalabilidade. Denso, mas cada capítulo vale muito.',
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt & David Thomas',
        url: 'https://www.amazon.com.br/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
        description: 'Mentalidade de programador profissional, não só técnica. Conselhos atemporais sobre carreira, hábitos e código.',
      },
    ],
  },
  {
    label: 'YouTube',
    icon: '🎬',
    items: [
      {
        title: 'Código Fonte TV',
        url: 'https://www.youtube.com/@codigofontetv',
        description: 'O melhor canal de tecnologia em português — explicações profundas, sem superficialidade. Dictionary of programming.',
      },
      {
        title: 'Filipe Deschamps',
        url: 'https://www.youtube.com/@FilipeDeschamps',
        description: 'Programação e carreira com uma abordagem que vai além do código. Muito sobre fundamentos e mentalidade.',
      },
      {
        title: 'ByteByteGo',
        url: 'https://www.youtube.com/@ByteByteGo',
        description: 'System design visual — essencial para entender arquitetura de sistemas em escala. Aprendo algo novo a cada vídeo.',
      },
    ],
  },
  {
    label: 'Newsletters',
    icon: '📧',
    items: [
      {
        title: 'The Pragmatic Engineer',
        author: 'Gergely Orosz',
        url: 'https://newsletter.pragmaticengineer.com/',
        description: 'A newsletter mais lida entre engenheiros de software sênior. Mercado, salários, carreira real — sem filtro.',
      },
      {
        title: 'ByteByteGo Newsletter',
        url: 'https://blog.bytebytego.com/',
        description: 'System design semanal com diagramas. Aprendo algo novo toda semana sobre como sistemas reais funcionam em escala.',
      },
    ],
  },
  {
    label: 'Perfis',
    icon: '📱',
    items: [
      {
        title: '@rocketseat',
        url: 'https://www.instagram.com/rocketseat_oficial/',
        description: 'Conteúdo de desenvolvimento com qualidade e consistência. Muito bom para acompanhar tendências de stack.',
      },
      {
        title: '@primotech',
        url: 'https://www.instagram.com/primotech/',
        description: 'Tecnologia e carreira de forma acessível e honesta. Um dos poucos perfis que faz isso sem superficialidade.',
      },
    ],
  },
];
