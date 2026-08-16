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
      {
        title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
        author: 'Zeno Rocha',
        url: 'https://www.amazon.com.br/14-H%C3%A1bitos-Desenvolvedores-Altamente-Produtivos-ebook/dp/B08BF7PZZX/ref=sr_1_1?adgrpid=1146791622109689&dib=eyJ2IjoiMSJ9.L0vesxbko0SshpU0kXXjzuwKCLflkE-WcHKu0M7x2Ys.OlUu4M6xqs0HXYO_jgNgUQeS7uSC0-WAfk5CRnHGNI4&dib_tag=se&hvadid=71674645615363&hvbmt=bp&hvdev=c&hvlocphy=147803&hvnetw=o&hvqmt=p&hvtargid=kwd-71675180298300%3Aloc-20&hydadcr=5660_13210562&keywords=14+h%C3%A1bitos+de+desenvolvedores&mcid=4d4b953a5fe937bf8bf0c18f153adad3&qid=1786912954&sr=8-1',
        description: 'Este livro não oferece um caminho definitivo ou fórmula predefinida de sucesso. Esse livro é o resultado de uma busca',
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
      {
        title: 'Eslen Delanogaren',
        url:'https://www.youtube.com/@CanaldoEslen',
        description: 'Canal falanso sobre Neurociência, Psicologia e Desenvolvimento Pessoal. Conteúdo de qualidade, com base científica e aplicável no dia a dia.',
      },
      {
        title: 'Renato Augusto',
        url:'https://www.youtube.com/@RenatoAugustoTech',
        description: 'Um engenheiro de software que compartilha conhecimento de forma clara e prática. Foco em desenvolvimento web e boas práticas.',
      },
      {
        title: 'Fábio Akita',
        url:'https://www.youtube.com/@Akitando',
        description: 'Se não conhece o mestre fábio, você tá perdendo tempo. Conteúdo de qualidade sobre desenvolvimento, carreira e mercado de tecnologia. Sempre com uma visão realista e honesta.',
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
