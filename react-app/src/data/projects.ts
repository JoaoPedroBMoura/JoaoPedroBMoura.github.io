/**
 * Projetos reais de João Pedro B. Moura — usados em ProjectsSection
 */

export type ProjectCategory = 'todos' | 'analytics' | 'web' | 'api' | 'console';

export interface Project {
  nome: string;
  descricao: string;
  detalhe?: string;
  status: 'producao' | 'concluido' | 'desenvolvimento';
  statusLabel: string;
  categoria: ProjectCategory[];
  techs: string[];
  github?: string;
  demo?: string;
  destaque?: string;
}

export const projects: Project[] = [
  // ── Analytics & Dados ──────────────────────────────────────────────────
  {
    nome: 'Automação de Relatórios — MMA',
    descricao: 'Pipeline Python que gera automaticamente os relatórios oficiais de logística reversa entregues ao Ministério do Meio Ambiente e a todos os estados do Brasil.',
    detalhe:
      '~12.200 linhas, 103 módulos. ETL completo das bases de notas fiscais com ~86 indicadores de negócio (válidas, colidentes, inválidas, titularidade, cooperativas). Preenche dinamicamente template Word com 19 tabelas formatadas, 5 gráficos (Matplotlib + Seaborn) e 7 mapas geográficos automatizados (geopandas + geobr: choropleth nacional por UF e mapas estaduais com marcadores por município). Sumário e lista de figuras atualizados automaticamente. Clean Architecture em 3 camadas (Domain, Application, Infrastructure) com SOLID, Dependency Injection, Orchestrator Pattern e Placeholder Registry centralizado. Para tabelas com células mescladas e cores, implementei caminho alternativo via COM/OLE preservando formatação do Excel. 69 testes automatizados com pytest rodando em ~7s. 28 arquivos de documentação com onboarding de ~1h. Numa refatoração eliminei ~60% de código duplicado (~538 linhas). Geração completa do relatório em ~30 segundos.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['analytics'],
    techs: ['Python', 'Clean Architecture', 'Matplotlib', 'Geopandas', 'Pytest', 'Word Automation', 'PDF'],
    destaque: '103 módulos · 69 testes · relatório em ~30s · 60% menos código',
  },
  {
    nome: 'Automação da Auditoria (IA)',
    descricao: 'Aplicação desktop com IA que automatiza a extração de dados de documentos de auditoria de operadores de logística reversa, com processamento em batelada e geração de tabelas.',
    detalhe:
      '~7.360 linhas, 28 módulos Python. Pipeline adaptativo de extração: PDFs digitais passam por extração de texto (PyMuPDF); escaneados são convertidos em até 6 PNGs e enviados com visão — a decisão é automática. Dual-backend LLM (Claude CLI via subprocess e Anthropic API via SDK) atrás de uma interface ILLMClient, permitindo trocar backend sem tocar na lógica de negócio. Processamento em batelada roda em QThread com sinais de progresso. Ports & Adapters com 6 interfaces ABC, Observer para propagação automática de CNPJs entre 7 abas, Facade como único ponto de entrada. O usuário cria tipos de documento, define campos de extração e edita regras de prompt (.md) de dentro da aplicação. 12 temas visuais, sistema de notificações com badge, visualizador PDF com zoom/paginação, pré-preenchimento de formulários e geração de tabelas DCO renderizadas no visualizador. Empacotado como executável via PyInstaller. Em uso real, economizou dias de trabalho na geração dos relatórios estaduais.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['analytics'],
    techs: ['Python', 'PyQt5', 'Anthropic API', 'Ports & Adapters', 'PyMuPDF', 'PyInstaller'],
    destaque: 'Dual-backend LLM · batelada assíncrona · executável distribuído',
  },
  {
    nome: 'Power BI — MMA & Governo SP',
    descricao: 'Relatórios Power BI para clientes governamentais: Ministério do Meio Ambiente e Governo do Estado de São Paulo.',
    detalhe: 'Construção de dashboards de gestão e conformidade de logística reversa para dois grandes clientes governamentais. Dados tratados via SQL e integrados diretamente com Power BI.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['analytics'],
    techs: ['Power BI', 'SQL', 'DAX', 'Visualização de Dados'],
    destaque: 'Clientes: Governo Federal + Governo Estadual SP',
  },
  {
    nome: 'Dashboard de Preço dos Materiais',
    descricao: 'Dashboard analítico web (JS puro + Chart.js) que monitora variação de preços dos materiais da logística reversa, consumindo dados de produção em MySQL/AWS.',
    detalhe:
      '~7.600 linhas JS, 42 módulos. Reconstrução de um dashboard R/Shiny em JavaScript puro (sem framework), conectado diretamente às bases de produção (MySQL via AWS RDS, 6 instâncias multi-tenant). ETL completo no navegador: normalização, enriquecimento, canonização de subcategorias via dicionário (CSV→JSON), conversão de unidades (KG/TON/GR → R$/kg) e winsorização estatística (P1–P99 em linhas, P99 em histogramas, P2–P98 ponderada por massa em KDE). Ports & Adapters com 6 camadas (Domain, Adapters, Ports, Services, UI, Constants) e AppOrchestrator singleton. 5 KPIs em tempo real, 6 tipos de gráfico, tabelas com drag-resize, filtros dinâmicos e cache em duas camadas (localStorage SWR + SQL no servidor). Plataforma serve dashboards via iframe srcdoc com CSP restrita — resolvi embutindo Chart.js UMD inline e expondo via window, sem bundler. Parte de um framework com 9 dashboards, 4 templates de scaffold e CLI interativo.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['analytics'],
    techs: ['JavaScript', 'Chart.js', 'Node.js', 'AWS RDS', 'AWS S3', 'SQL', 'ETL'],
    destaque: '42 módulos · 6 instâncias multi-tenant · ETL no navegador',
  },
  {
    nome: 'OCR de PDFs — MTR e NF',
    descricao: 'Extração automática de dados de Manifestos de Transporte de Resíduos (MTR) e Notas Fiscais usando Docling + Python.',
    detalhe:
      'R&D e prototipagem de pipeline OCR para alimentar sistemas internos e pipelines de RAG. Avaliei e testei Docling, pdfplumber, pdfminer e Landing AI comparando opções gratuitas, pagas e open-source. Primeiro resultado: conversão de PDF para Markdown e JSON estruturado (~95% de precisão). Esse trabalho foi a base que evoluiu para a Automação da Auditoria com IA.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['analytics'],
    techs: ['Python', 'Docling', 'OCR', 'RAG', 'Pandas'],
    destaque: '~95% de eficiência · base para pipeline de RAG',
  },
  {
    nome: 'Automação de Envio de E-mails',
    descricao: 'Aplicação Python com interface gráfica que automatiza e-mails personalizados via Outlook API, cruzando milhares de linhas de NFs por entidade gestora.',
    detalhe:
      'Diariamente cruza uma base xlsx para mapear notas fiscais colidentes de cada Entidade Gestora e anexa a tabela correspondente por destinatário. Controle de envio (não dispara quando não há novidade), persistência de dados e integração com Outlook via chave de acesso. Ports & Adapters pensando em log e persistência futuros. Empacotado como .exe (PyInstaller) com interface amigável — usuários não técnicos escolhem pastas e tabela de contatos. Entregue em 6 dias e validado pela stakeholder.',
    status: 'concluido',
    statusLabel: 'Concluído · Jul 2026',
    categoria: ['analytics'],
    techs: ['Python', 'Ports & Adapters', 'Outlook API', 'openpyxl', 'PyInstaller'],
    destaque: 'Entregue em 6 dias · distribuído como .exe',
  },
  {
    nome: 'Análise de Desempenho Diário',
    descricao: 'Análise on demand que permite aos gestores visão ponderada sobre o desempenho da equipe na operação de logística da Shopee Express.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['analytics'],
    techs: ['Excel', 'Google Sheets', 'Análise de Dados'],
    github: 'https://github.com/JoaoPedroBMoura/Analise-de-Desempenho-diario',
  },

  // ── Web / Sites ────────────────────────────────────────────────────────
  {
    nome: 'Portfólio Pessoal (este site)',
    descricao: 'Portfólio técnico em React + TypeScript com letreiro de tecnologias animado, seção acadêmica interativa e animações AOS.',
    detalhe: 'Deploy no GitHub Pages, publicado automaticamente via GitHub Actions a cada push na main. Migração de JavaScript vanilla + Bootstrap para React + Tailwind CSS. Ícones via devicons CDN.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['web'],
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AOS'],
    github: 'https://github.com/JoaoPedroBMoura/JoaoPedroBMoura.github.io',
    demo: 'https://joaopedrobmoura.github.io/',
  },
  {
    nome: 'Enciclopédia de Filmes',
    descricao: 'Site que consome uma API pública de filmes para exibir informações detalhadas sobre qualquer título. Foco em consumo de API e manipulação de DOM.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['web'],
    techs: ['JavaScript', 'HTML5', 'CSS3', 'API REST'],
    github: 'https://github.com/JoaoPedroBMoura/API_filmes',
    demo: 'https://joaopedrobmoura.github.io/API_filmes/',
  },
  {
    nome: 'Conversor de Moedas',
    descricao: 'Ferramenta web que consome API pública de câmbio para converter valores entre moedas de diferentes países em tempo real.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['web'],
    techs: ['JavaScript', 'HTML5', 'CSS3', 'API REST'],
    github: 'https://github.com/JoaoPedroBMoura/API_converte_moedas',
    demo: 'https://joaopedrobmoura.github.io/API_converte_moedas/',
  },
  {
    nome: 'Site de Contatos — ASP.NET',
    descricao: 'Aplicação web que permite criar e editar uma lista de contatos, conectada a banco de dados. Desenvolvido em ASP.NET.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['web'],
    techs: ['ASP.NET', 'C#', 'HTML/CSS', 'SQL Server'],
    github: 'https://github.com/JoaoPedroBMoura/SiteDeContatos',
  },

  // ── APIs / Backend ─────────────────────────────────────────────────────
  {
    nome: 'Controle de Patrimônio',
    descricao: 'App pessoal offline-first para acompanhar patrimônio investido (ações, FIIs, ETFs, cripto, dólar) com cotações em tempo real e backup em Google Drive.',
    detalhe:
      'Abordagem offline-first: dados em banco local no dispositivo, backup em pasta do Google Drive escolhida pelo usuário para sincronizar entre aparelhos. Cotações atualizadas em tempo real via APIs gratuitas. Tela de transações é CRUD e fonte única de verdade — todos os dashboards derivam dela. Refatorado seguindo SOLID para garantir integridade dos dados. Exportação/importação CSV. MVP com requisito central de custo zero de operação após o desenvolvimento.',
    status: 'desenvolvimento',
    statusLabel: 'Em desenvolvimento',
    categoria: ['api'],
    techs: ['Python', 'SOLID', 'API REST', 'Google Drive', 'Banco de Dados Local'],
    destaque: 'Offline-first · custo zero · cotações em tempo real',
  },
  {
    nome: 'NoPreço',
    descricao: 'Ideação e modelagem de domínio de um app comunitário para consulta, comparação e rastreio histórico de preços de produtos de mercado.',
    detalhe:
      'Foco atual em design de arquitetura e modelagem de domínio aplicando Clean Architecture. Entidades modeladas: Cliente, Produto, Estabelecimento, Preço, Endereço, Compra, Conta, Lista, Categoria. Tiers de conta (Basic/Premium/Angel) controlados por enum. Roadmap em três horizontes: rastreio de preço por categoria, alertas e favoritos (curto prazo); rotas econômicas e listas compartilhadas (médio); compras em volume (longo). Inclui estudo de decisão de infraestrutura (AWS vs Azure) para viabilizar produto de baixo custo.',
    status: 'desenvolvimento',
    statusLabel: 'Em ideação / modelagem',
    categoria: ['api'],
    techs: ['Clean Architecture', 'Modelagem de Domínio', 'C#'],
    destaque: 'Modelagem · Clean Architecture · roadmap 3 horizontes',
  },
  {
    nome: 'API de Cadastro de Contatos',
    descricao: 'Primeira API REST em C#. Permite criar, listar, atualizar e remover contatos diretamente no banco de dados.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['api'],
    techs: ['C#', '.NET 6', 'REST API', 'SQL Server'],
    github: 'https://github.com/JoaoPedroBMoura/API-de-contatos',
  },
  {
    nome: 'API Lista de Tarefas',
    descricao: 'API REST para gerenciamento de tarefas — operações CRUD completas integradas com banco de dados.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['api'],
    techs: ['C#', '.NET 6', 'REST API', 'SQL Server'],
    github: 'https://github.com/JoaoPedroBMoura/Lista-de-tarefas',
  },

  // ── Console / C# ──────────────────────────────────────────────────────
  {
    nome: 'Sistema de Hospedagem',
    descricao: 'Sistema de console que simula o controle interno de um hotel — cadastro, listagem e remoção de reservas com múltiplos hóspedes.',
    detalhe: 'Desenvolvido com C# / .NET 9.0. Implementa classes Pessoa, Suite e Reserva. Lógica de desconto automático para reservas acima de 10 dias (10% off). Interface interativa no terminal.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['console'],
    techs: ['C#', '.NET 9', 'POO', 'Console App'],
    github: 'https://github.com/JoaoPedroBMoura/Sistema-de-hospedagem',
  },
  {
    nome: 'Controle de Estacionamento',
    descricao: 'Sistema de console para controle de veículos em um estacionamento — adiciona, remove e lista veículos com cálculo de tarifa por hora.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['console'],
    techs: ['C#', '.NET 9', 'POO', 'Console App'],
    github: 'https://github.com/JoaoPedroBMoura/Sistema-de-controle-estacionamento',
  },
];

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'analytics', label: 'Analytics & Dados' },
  { key: 'web', label: 'Web & Sites' },
  { key: 'api', label: 'APIs & Apps' },
  { key: 'console', label: 'Console / C#' },
];

export default projects;
