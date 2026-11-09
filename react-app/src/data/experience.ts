/**
 * Experiências profissionais — usadas em FormationSection (timeline).
 *
 * Campos de texto são bilíngues (I18n): o componente resolve com L(...).
 * - empresa: nome próprio, não traduz.
 * - techs: ficam em português como CHAVE do filtro; o glossário traduz a exibição.
 */

import type { I18n } from '../i18n/config';

export interface ExpItem {
  empresa: string;
  cargo: I18n;
  periodo: I18n;
  descricao: I18n;
  projetos?: I18n<string[]>;
  techs?: string[];
  detalhe?: I18n;
}

export const experiencias: ExpItem[] = [
  {
    empresa: 'Central de Custódia',
    cargo: {
      en: 'Intern — IT (Data Analysis & Development)',
      pt: 'Estagiário — TI (Analise de Dados e Desenvolvimento)',
    },
    periodo: { en: 'Jun 2025 — Present', pt: 'Jun/2025 — Atual' },
    descricao: {
      en: 'Development and maintenance of Python automations in production, data analysis and dashboard creation for internal and external clients, both federal and state-level.',
      pt: 'Desenvolvimento e manutenção de automações Python em produção, análise de dados e criação de dashboards para clientes internos, e extenos, federais e estaduais.',
    },
    projetos: {
      en: [
        'Report automation for the MMA (Ministry of the Environment) — Python, Word automation, DDD, Clean Architecture',
        'Web price dashboard — JavaScript, HTML & CSS + AWS S3 + Redshift',
        'OCR of DCO and legal documents — AI-powered extraction, 95% accuracy',
        'Email automation — Ports & Adapters, distributed as an .exe, Outlook',
        'Power BI report for the State Government of São Paulo',
      ],
      pt: [
        'Automação de Relatórios para o MMA — Python, Automação Word, DDD , Clean Architecture',
        'Dashboard Web de Preços — JavaScript, HTML e CSS + AWS S3 + Redshift',
        'OCR de DCO e documentos legais — Automação de extração com IA, 95% de precisão',
        'Automação de E-mails — Ports & Adapters, distribuído como .exe, Outlook',
        'Relatório Power BI para Governo do Estado de SP',
      ],
    },
    techs: ['Python', 'Power BI', 'AWS S3', 'Redshift', 'SQL', 'BI','BPMN','RAG','IA',
            'Docling','Análise de Dados', 'Clean Architecture','Diagrama de Classes',
            'JavaScript','OCR','Visualização de Dados','Ports & Adapters'],
    detalhe: {
      en:
        'Central de Custódia is a reverse-logistics validator — a fiscal-security bridge between the country’s reverse logistics and government agencies. As an intern in the IT department, I have worked on data projects and on building web and desktop applications and Machine Learning.\n\n' +
        'I built ETL and data-extraction algorithms for different kinds of documents, using RAG and AI in the process. We help consolidate a range of demands, with my current focus on the data area.\n\n' +
        'I have the chance to work with a dynamic, collaborative team, take part in several squads and in the company’s internal training to develop soft skills that are essential to my career: emotional intelligence, assertive communication, proactivity and ownership, empathy and analytical thinking. We generate value for our clients by ensuring security and clarity in objective, actionable reports.',
      pt:
        'A Central de Custódia é uma validadora de Logística Reversa, uma ponte de segurança fiscal entre a logística reversa do país e as entidades governamentais.  Como estagiário no setor de TI tenho atuado em projetos de dados e desenvolvimento de aplicações, web e desktop e Machine Learning.\n\n' +
        'Desenvolvi algoritmos de ETL e extração de dados de diferentes tipos de documentação, atuando com RAG e IA nesse processo. Ajudamos a consolidar diferentes demandas, com foco atual na área de dado\n\n' +
        'Estou tendo a oportunidade de trabalhar com uma equipe dinâmica e colaborativa, além de participar de diversos times e também de participar das capacitações internas da empresa para desenvolver Soft Skill essenciais para minha carreira como: Inteligência emocional, comunicação assertiva, proatividade e protagonismo, empatia e pensamento analítico. Temos gerado valor para nossos clientes garantindo segurança e clareza em relatórios objetivos e acionáveis.',
    },
  },
  {
    empresa: 'CCN Distribuidora',
    cargo: { en: 'Administrative Assistant', pt: 'Auxiliar Administrativo' },
    periodo: { en: 'Feb 2025 — Jul 2025', pt: 'Fev/2025 — Jul/2025' },
    descricao: {
      en: 'Administrative support with operational data analysis in Excel and Power BI. Collaborated on and improved the distributor’s internal processes in direct contact with management.',
      pt: 'Suporte administrativo com análise de dados operacionais, em Excel e Power BI. Colaboração e aprimoramento dos processos internos da distribuidora em contato direto com a Gerência.',
    },
    techs: ['Excel','Power BI','Modelagem de Dados', 'Dados Operacionais', 'Processos Internos'],
    detalhe: {
      en:
        'I worked in the distributor’s administrative support, analyzing operational data — pulled from the database and some generated by me — in Excel dashboards to support day-to-day decisions.\n\n' +
        'Not only as spreadsheets, but also in Power BI, as structured information that guides the operation. I developed operational discipline, communication in a business context and the ability to spot where processes could be more efficient. Experience that complements the mindset Lean Six Sigma would later formalize.\n\n' +
        'I pulled data directly from the operation to build analyses and reports that steered senior management toward better decisions.',
      pt:
        'Atuei no suporte administrativo da distribuidora, com análise de dados operacionais, extraidos e do banco de dados e alguns gerados por mim, em Dashboards Excel para apoiar decisões do dia a dia.\n\n' +
        'Não apenas como planilhas, mas também no Power BI, como informação estruturada que orienta a operação. Desenvolvi disciplina operacional, comunicação em contexto empresarial e a capacidade de identificar onde processos podiam ser mais eficientes. Experiência que complementa a visão que o Lean Six Sigma formalizaria depois.\n\n' +
        'Eu extraia dados diretamente da operação para poder desenvolver análises e relatórios para direcionar as melhores tomadas de decisões da alta gestão',
    },
  },
  {
    empresa: 'Shopee Express',
    cargo: { en: 'Logistics Assistant', pt: 'Auxiliar de Logística' },
    periodo: { en: 'Oct 2023 — Nov 2024', pt: 'Out/2023 — Nov/2024' },
    descricao: {
      en: 'Receiving, handling and dispatching parcels. Supported management with data analysis to improve internal processes. CIPA secretary (internal accident-prevention committee). Recognized twice as "Standout Employee" in Last Mile.',
      pt: 'Recebimento, tratamento e expedição de encomendas. Apoio à gestão com análise de dados para aprimoramento de processos internos. Secretário da CIPA. Reconhecido duas vezes como "Funcionário Brilhou" de Last Mile.',
    },
    techs: ['Análise de Dados', 'Excel', 'Gestão de Processos'],
    detalhe: {
      en:
        'This is where I first understood the value of data as a decision-making tool. Operational experience that gave me a perspective few data analysts have: the physical process before any data is generated. I worked on receiving, handling and dispatching parcels in a high-demand last-mile logistics operation.\n\n' +
        'As secretary of CIPA (the internal accident-prevention committee), I developed communication skills across different levels of the organization and formal responsibility for documentation and compliance. I was recognized twice as a "Standout Employee" (Funcionário Brilhou) in the Last Mile category — an award given for above-average performance and commitment.\n\n' +
        'The most relevant part for my path: this is where I began using data to support management decisions, creating performance analyses in Excel that the team’s supervisors came to rely on.',
      pt:
        'Foi aqui que comecei a perceber o valor dos dados como ferramenta de decisão. Experiência operacional que me deu uma visão que poucos analistas de dados têm: a do processo físico antes de qualquer dado ser gerado. Trabalhei no recebimento, tratamento e expedição de encomendas em uma operação de Last Mile logistics de alta demanda.\n\n' +
        'Como Secretário da CIPA (Comissão Interna de Prevenção de Acidentes), desenvolvi habilidades de comunicação com diferentes níveis da organização e responsabilidade formal com documentação e conformidade. Fui reconhecido duas vezes como "Funcionário Brilhou" na categoria Last Mile — reconhecimento dado por desempenho e comprometimento acima da média.\n\n' +
        'O mais relevante para minha trajetória: foi aqui que comecei a usar dados para apoiar decisões de gestão, criando análises de desempenho em Excel que passaram a ser utilizadas pelos supervisores da equipe.',
    },
  },
];

export default experiencias;
