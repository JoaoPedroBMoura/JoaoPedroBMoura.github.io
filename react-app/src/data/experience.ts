/**
 * Experiências profissionais — usadas em FormationSection (timeline)
 */

export interface ExpItem {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
  projetos?: string[];
  techs?: string[];
  detalhe?: string;
}

export const experiencias: ExpItem[] = [
  {
    empresa: 'Central de Custódia',
    cargo: 'Estagiário — TI (Analise de Dados e Desenvolvimento)',
    periodo: 'Jun/2025 — Atual',
    descricao:
      'Desenvolvimento e manutenção de automações Python em produção, análise de dados e criação de dashboards para clientes internos, e extenos, federais e estaduais.',
    projetos: [
      'Automação de Relatórios para o MMA — Python, Automação Word, DDD , Clean Architecture',
      'Dashboard Web de Preços — JavaScript, HTML e CSS + AWS S3 + Redshift',
      'OCR de DCO e documentos legais — Automação de extração com IA, 95% de precisão',
      'Automação de E-mails — Ports & Adapters, distribuído como .exe, Outlook',
      'Relatório Power BI para Governo do Estado de SP',
    ],
    techs: ['Python', 'Power BI', 'AWS S3', 'Redshift', 'SQL', 'BI','BPMN','RAG','IA',
            'Docling','Análise de Dados', 'Clean Architecture','Diagrama de Classes',
            'JavaScript','OCR','Visualização de Dados','Ports & Adapters'],
    detalhe:
      'A Central de Custódia é uma validadora de Logística Reversa, uma ponte de segurança fiscal entre a logística reversa do país e as entidades governamentais.  Como estagiário no setor de TI tenho atuado em projetos de dados e desenvolvimento de aplicações, web e desktop e Machine Learning.\n\n' +
      'Desenvolvi algoritmos de ETL e extração de dados de diferentes tipos de documentação, atuando com RAG e IA nesse processo. Ajudamos a consolidar diferentes demandas, com foco atual na área de dado\n\n' +
      'Estou tendo a oportunidade de trabalhar com uma equipe dinâmica e colaborativa, além de participar de diversos times e também de participar das capacitações internas da empresa para desenvolver Soft Skill essenciais para minha carreira como: Inteligência emocional, comunicação assertiva, proatividade e protagonismo, empatia e pensamento analítico. Temos gerado valor para nossos clientes garantindo segurança e clareza em relatórios objetivos e acionáveis.',
  },
  {
    empresa: 'CCN Distribuidora',
    cargo: 'Auxiliar Administrativo',
    periodo: 'Fev/2025 — Jul/2025',
    descricao:
      'Suporte administrativo com análise de dados operacionais, em Excel e Power BI. Colaboração e aprimoramento dos processos internos da distribuidora em contato direto com a Gerência.',
    techs: ['Excel','Power BI','Modelagem de Dados', 'Dados Operacionais', 'Processos Internos'],
    detalhe:
      'Atuei no suporte administrativo da distribuidora, com análise de dados operacionais, extraidos e do banco de dados e alguns gerados por mim, em Dashboards Excel para apoiar decisões do dia a dia.\n\n' +
      'Não apenas como planilhas, mas também no Power BI, como informação estruturada que orienta a operação. Desenvolvi disciplina operacional, comunicação em contexto empresarial e a capacidade de identificar onde processos podiam ser mais eficientes. Experiência que complementa a visão que o Lean Six Sigma formalizaria depois.\n\n'+
      'Eu extraia dados diretamente da operação para poder desenvolver análises e relatórios para direcionar as melhores tomadas de decisões da alta gestão',
  },
  {
    empresa: 'Shopee Express',
    cargo: 'Auxiliar de Logística',
    periodo: 'Out/2023 — Nov/2024',
    descricao:
      'Recebimento, tratamento e expedição de encomendas. Apoio à gestão com análise de dados para aprimoramento de processos internos. Secretário da CIPA. Reconhecido duas vezes como "Funcionário Brilhou" de Last Mile.',
    techs: ['Análise de Dados', 'Excel', 'Gestão de Processos'],
    detalhe:
      'Foi aqui que comecei a perceber o valor dos dados como ferramenta de decisão. Experiência operacional que me deu uma visão que poucos analistas de dados têm: a do processo físico antes de qualquer dado ser gerado. Trabalhei no recebimento, tratamento e expedição de encomendas em uma operação de Last Mile logistics de alta demanda.\n\n' +
      'Como Secretário da CIPA (Comissão Interna de Prevenção de Acidentes), desenvolvi habilidades de comunicação com diferentes níveis da organização e responsabilidade formal com documentação e conformidade. Fui reconhecido duas vezes como "Funcionário Brilhou" na categoria Last Mile — reconhecimento dado por desempenho e comprometimento acima da média.\n\n' +
      'O mais relevante para minha trajetória: foi aqui que comecei a usar dados para apoiar decisões de gestão, criando análises de desempenho em Excel que passaram a ser utilizadas pelos supervisores da equipe.',
  },
];

export default experiencias;
