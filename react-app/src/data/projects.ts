/**
 * Projetos reais de João Pedro B. Moura — usados em ProjectsSection.
 *
 * Campos de texto são bilíngues (I18n) e resolvidos com L(...).
 * - techs: ficam em português como CHAVE do filtro; glossário traduz a exibição.
 * - status: chave fixa de estilo (não traduz); statusLabel é o texto exibido.
 * - os rótulos das categorias ficam em ui.projects.categories (um só lugar).
 */

import type { I18n } from '../i18n/config';

export type ProjectCategory = 'todos' | 'analytics' | 'web' | 'api' | 'console';

export interface Project {
  nome: I18n;
  descricao: I18n;
  detalhe?: I18n;
  status: 'producao' | 'concluido' | 'desenvolvimento';
  statusLabel: I18n;
  categoria: ProjectCategory[];
  techs: string[];
  github?: string;
  demo?: string;
  destaque?: I18n;
}

export const projects: Project[] = [
  // ── Analytics & Dados ──────────────────────────────────────────────────
  {
    nome: { en: 'Report Automation — MMA', pt: 'Automação de Relatórios — MMA' },
    descricao: {
      en: 'Python pipeline that automatically generates the official reverse-logistics reports delivered to the Ministry of the Environment and to every state in Brazil.',
      pt: 'Pipeline Python que gera automaticamente os relatórios oficiais de logística reversa entregues ao Ministério do Meio Ambiente e a todos os estados do Brasil.',
    },
    detalhe: {
      en: '~12,200 lines, 103 modules. Full ETL of the invoice databases with ~86 business indicators (valid, colliding, invalid, ownership, cooperatives). Dynamically fills a Word template with 19 formatted tables, 5 charts (Matplotlib + Seaborn) and 7 automated geographic maps (geopandas + geobr: a national choropleth by state and state-level maps with per-municipality markers). Table of contents and list of figures updated automatically. Clean Architecture in 3 layers (Domain, Application, Infrastructure) with SOLID, Dependency Injection, the Orchestrator pattern and a centralized Placeholder Registry. For tables with merged, colored cells I implemented an alternative path via COM/OLE preserving the Excel formatting. 69 automated tests with pytest running in ~7s. 28 documentation files with a ~1h onboarding. In one refactor I removed ~60% of duplicated code (~538 lines). Full report generation in ~30 seconds.',
      pt: '~12.200 linhas, 103 módulos. ETL completo das bases de notas fiscais com ~86 indicadores de negócio (válidas, colidentes, inválidas, titularidade, cooperativas). Preenche dinamicamente template Word com 19 tabelas formatadas, 5 gráficos (Matplotlib + Seaborn) e 7 mapas geográficos automatizados (geopandas + geobr: choropleth nacional por UF e mapas estaduais com marcadores por município). Sumário e lista de figuras atualizados automaticamente. Clean Architecture em 3 camadas (Domain, Application, Infrastructure) com SOLID, Dependency Injection, Orchestrator Pattern e Placeholder Registry centralizado. Para tabelas com células mescladas e cores, implementei caminho alternativo via COM/OLE preservando formatação do Excel. 69 testes automatizados com pytest rodando em ~7s. 28 arquivos de documentação com onboarding de ~1h. Numa refatoração eliminei ~60% de código duplicado (~538 linhas). Geração completa do relatório em ~30 segundos.',
    },
    status: 'producao',
    statusLabel: { en: 'In Production', pt: 'Em Produção' },
    categoria: ['analytics'],
    techs: ['Python', 'Clean Architecture', 'Matplotlib', 'Geopandas', 'Pytest', 'Word Automation', 'PDF'],
    destaque: {
      en: '103 modules · 69 tests · report in ~30s · 60% less code',
      pt: '103 módulos · 69 testes · relatório em ~30s · 60% menos código',
    },
  },
  {
    nome: { en: 'Audit Automation (AI)', pt: 'Automação da Auditoria (IA)' },
    descricao: {
      en: 'AI desktop application that automates data extraction from the audit documents of reverse-logistics operators, with batch processing and table generation.',
      pt: 'Aplicação desktop com IA que automatiza a extração de dados de documentos de auditoria de operadores de logística reversa, com processamento em batelada e geração de tabelas.',
    },
    detalhe: {
      en: '~7,360 lines, 28 Python modules. Adaptive extraction pipeline: digital PDFs go through text extraction (PyMuPDF); scanned ones are converted into up to 6 PNGs and sent with vision — the decision is automatic. Dual-backend LLM (Claude CLI via subprocess and the Anthropic API via SDK) behind an ILLMClient interface, letting the backend be swapped without touching business logic. Batch processing runs in a QThread with progress signals. Ports & Adapters with 6 ABC interfaces, Observer to propagate CNPJs automatically across 7 tabs, Facade as the single entry point. The user creates document types, defines extraction fields and edits prompt rules (.md) from inside the app. 12 visual themes, a notification system with a badge, a PDF viewer with zoom/pagination, form pre-filling and generation of DCO tables rendered in the viewer. Packaged as an executable via PyInstaller. In real use it saved days of work generating the state reports.',
      pt: '~7.360 linhas, 28 módulos Python. Pipeline adaptativo de extração: PDFs digitais passam por extração de texto (PyMuPDF); escaneados são convertidos em até 6 PNGs e enviados com visão — a decisão é automática. Dual-backend LLM (Claude CLI via subprocess e Anthropic API via SDK) atrás de uma interface ILLMClient, permitindo trocar backend sem tocar na lógica de negócio. Processamento em batelada roda em QThread com sinais de progresso. Ports & Adapters com 6 interfaces ABC, Observer para propagação automática de CNPJs entre 7 abas, Facade como único ponto de entrada. O usuário cria tipos de documento, define campos de extração e edita regras de prompt (.md) de dentro da aplicação. 12 temas visuais, sistema de notificações com badge, visualizador PDF com zoom/paginação, pré-preenchimento de formulários e geração de tabelas DCO renderizadas no visualizador. Empacotado como executável via PyInstaller. Em uso real, economizou dias de trabalho na geração dos relatórios estaduais.',
    },
    status: 'producao',
    statusLabel: { en: 'In Production', pt: 'Em Produção' },
    categoria: ['analytics'],
    techs: ['Python', 'PyQt5', 'Anthropic API', 'Ports & Adapters', 'PyMuPDF', 'PyInstaller'],
    destaque: {
      en: 'Dual-backend LLM · async batch · distributed executable',
      pt: 'Dual-backend LLM · batelada assíncrona · executável distribuído',
    },
  },
  {
    nome: { en: 'Power BI — MMA & SP Government', pt: 'Power BI — MMA & Governo SP' },
    descricao: {
      en: 'Power BI reports for government clients: the Ministry of the Environment and the State Government of São Paulo.',
      pt: 'Relatórios Power BI para clientes governamentais: Ministério do Meio Ambiente e Governo do Estado de São Paulo.',
    },
    detalhe: {
      en: 'Building management and compliance dashboards for reverse logistics for two major government clients. Data processed via SQL and integrated directly with Power BI.',
      pt: 'Construção de dashboards de gestão e conformidade de logística reversa para dois grandes clientes governamentais. Dados tratados via SQL e integrados diretamente com Power BI.',
    },
    status: 'producao',
    statusLabel: { en: 'In Production', pt: 'Em Produção' },
    categoria: ['analytics'],
    techs: ['Power BI', 'SQL', 'DAX', 'Visualização de Dados'],
    destaque: {
      en: 'Clients: Federal Government + SP State Government',
      pt: 'Clientes: Governo Federal + Governo Estadual SP',
    },
  },
  {
    nome: { en: 'Materials Price Dashboard', pt: 'Dashboard de Preço dos Materiais' },
    descricao: {
      en: 'Analytical web dashboard (vanilla JS + Chart.js) that monitors the price variation of reverse-logistics materials, consuming production data from MySQL/AWS.',
      pt: 'Dashboard analítico web (JS puro + Chart.js) que monitora variação de preços dos materiais da logística reversa, consumindo dados de produção em MySQL/AWS.',
    },
    detalhe: {
      en: '~7,600 lines of JS, 42 modules. Rebuilt an R/Shiny dashboard in vanilla JavaScript (no framework), connected directly to the production databases (MySQL via AWS RDS, 6 multi-tenant instances). Full ETL in the browser: normalization, enrichment, subcategory canonization via a dictionary (CSV→JSON), unit conversion (KG/TON/GR → R$/kg) and statistical winsorization (P1–P99 on rows, P99 on histograms, mass-weighted P2–P98 on KDE). Ports & Adapters with 6 layers (Domain, Adapters, Ports, Services, UI, Constants) and an AppOrchestrator singleton. 5 real-time KPIs, 6 chart types, tables with drag-resize, dynamic filters and two-layer caching (localStorage SWR + SQL on the server). The platform serves dashboards via an iframe srcdoc with a strict CSP — I solved it by inlining Chart.js UMD and exposing it via window, with no bundler. Part of a framework with 9 dashboards, 4 scaffold templates and an interactive CLI.',
      pt: '~7.600 linhas JS, 42 módulos. Reconstrução de um dashboard R/Shiny em JavaScript puro (sem framework), conectado diretamente às bases de produção (MySQL via AWS RDS, 6 instâncias multi-tenant). ETL completo no navegador: normalização, enriquecimento, canonização de subcategorias via dicionário (CSV→JSON), conversão de unidades (KG/TON/GR → R$/kg) e winsorização estatística (P1–P99 em linhas, P99 em histogramas, P2–P98 ponderada por massa em KDE). Ports & Adapters com 6 camadas (Domain, Adapters, Ports, Services, UI, Constants) e AppOrchestrator singleton. 5 KPIs em tempo real, 6 tipos de gráfico, tabelas com drag-resize, filtros dinâmicos e cache em duas camadas (localStorage SWR + SQL no servidor). Plataforma serve dashboards via iframe srcdoc com CSP restrita — resolvi embutindo Chart.js UMD inline e expondo via window, sem bundler. Parte de um framework com 9 dashboards, 4 templates de scaffold e CLI interativo.',
    },
    status: 'producao',
    statusLabel: { en: 'In Production', pt: 'Em Produção' },
    categoria: ['analytics'],
    techs: ['JavaScript', 'Chart.js', 'Node.js', 'AWS RDS', 'AWS S3', 'SQL', 'ETL'],
    destaque: {
      en: '42 modules · 6 multi-tenant instances · ETL in the browser',
      pt: '42 módulos · 6 instâncias multi-tenant · ETL no navegador',
    },
  },
  {
    nome: { en: 'PDF OCR — MTR and Invoices', pt: 'OCR de PDFs — MTR e NF' },
    descricao: {
      en: 'Automatic data extraction from Waste Transport Manifests (MTR) and invoices using Docling + Python.',
      pt: 'Extração automática de dados de Manifestos de Transporte de Resíduos (MTR) e Notas Fiscais usando Docling + Python.',
    },
    detalhe: {
      en: 'R&D and prototyping of an OCR pipeline to feed internal systems and RAG pipelines. I evaluated and tested Docling, pdfplumber, pdfminer and Landing AI, comparing free, paid and open-source options. First result: PDF conversion to Markdown and structured JSON (~95% accuracy). This work was the basis that evolved into the AI-powered Audit Automation.',
      pt: 'R&D e prototipagem de pipeline OCR para alimentar sistemas internos e pipelines de RAG. Avaliei e testei Docling, pdfplumber, pdfminer e Landing AI comparando opções gratuitas, pagas e open-source. Primeiro resultado: conversão de PDF para Markdown e JSON estruturado (~95% de precisão). Esse trabalho foi a base que evoluiu para a Automação da Auditoria com IA.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['analytics'],
    techs: ['Python', 'Docling', 'OCR', 'RAG', 'Pandas'],
    destaque: {
      en: '~95% accuracy · basis for the RAG pipeline',
      pt: '~95% de eficiência · base para pipeline de RAG',
    },
  },
  {
    nome: { en: 'Email Sending Automation', pt: 'Automação de Envio de E-mails' },
    descricao: {
      en: 'Python application with a GUI that automates personalized emails via the Outlook API, cross-referencing thousands of invoice rows per managing entity.',
      pt: 'Aplicação Python com interface gráfica que automatiza e-mails personalizados via Outlook API, cruzando milhares de linhas de NFs por entidade gestora.',
    },
    detalhe: {
      en: 'Every day it cross-references an xlsx base to map the colliding invoices of each Managing Entity and attaches the corresponding table per recipient. Send control (it doesn’t fire when there is nothing new), data persistence and Outlook integration via an access key. Ports & Adapters designed with future logging and persistence in mind. Packaged as an .exe (PyInstaller) with a friendly interface — non-technical users pick folders and the contacts table. Delivered in 6 days and validated by the stakeholder.',
      pt: 'Diariamente cruza uma base xlsx para mapear notas fiscais colidentes de cada Entidade Gestora e anexa a tabela correspondente por destinatário. Controle de envio (não dispara quando não há novidade), persistência de dados e integração com Outlook via chave de acesso. Ports & Adapters pensando em log e persistência futuros. Empacotado como .exe (PyInstaller) com interface amigável — usuários não técnicos escolhem pastas e tabela de contatos. Entregue em 6 dias e validado pela stakeholder.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed · Jul 2026', pt: 'Concluído · Jul 2026' },
    categoria: ['analytics'],
    techs: ['Python', 'Ports & Adapters', 'Outlook API', 'openpyxl', 'PyInstaller'],
    destaque: {
      en: 'Delivered in 6 days · distributed as an .exe',
      pt: 'Entregue em 6 dias · distribuído como .exe',
    },
  },
  {
    nome: { en: 'Daily Performance Analysis', pt: 'Análise de Desempenho Diário' },
    descricao: {
      en: 'On-demand analysis that gives managers a weighted view of team performance in Shopee Express’s logistics operation.',
      pt: 'Análise on demand que permite aos gestores visão ponderada sobre o desempenho da equipe na operação de logística da Shopee Express.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['analytics'],
    techs: ['Excel', 'Google Sheets', 'Análise de Dados'],
    github: 'https://github.com/JoaoPedroBMoura/Analise-de-Desempenho-diario',
  },

  // ── Web / Sites ────────────────────────────────────────────────────────
  {
    nome: { en: 'Personal Portfolio (this site)', pt: 'Portfólio Pessoal (este site)' },
    descricao: {
      en: 'Technical portfolio in React + TypeScript with an animated technologies marquee, an interactive academic section and AOS animations.',
      pt: 'Portfólio técnico em React + TypeScript com letreiro de tecnologias animado, seção acadêmica interativa e animações AOS.',
    },
    detalhe: {
      en: 'Deployed on GitHub Pages, published automatically via GitHub Actions on every push to main. Migrated from vanilla JavaScript + Bootstrap to React + Tailwind CSS. Icons via the devicons CDN.',
      pt: 'Deploy no GitHub Pages, publicado automaticamente via GitHub Actions a cada push na main. Migração de JavaScript vanilla + Bootstrap para React + Tailwind CSS. Ícones via devicons CDN.',
    },
    status: 'producao',
    statusLabel: { en: 'In Production', pt: 'Em Produção' },
    categoria: ['web'],
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AOS'],
    github: 'https://github.com/JoaoPedroBMoura/JoaoPedroBMoura.github.io',
    demo: 'https://joaopedrobmoura.github.io/',
  },
  {
    nome: { en: 'Movie Encyclopedia', pt: 'Enciclopédia de Filmes' },
    descricao: {
      en: 'A site that consumes a public movie API to show detailed information about any title. Focused on API consumption and DOM manipulation.',
      pt: 'Site que consome uma API pública de filmes para exibir informações detalhadas sobre qualquer título. Foco em consumo de API e manipulação de DOM.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['web'],
    techs: ['JavaScript', 'HTML5', 'CSS3', 'API REST'],
    github: 'https://github.com/JoaoPedroBMoura/API_filmes',
    demo: 'https://joaopedrobmoura.github.io/API_filmes/',
  },
  {
    nome: { en: 'Currency Converter', pt: 'Conversor de Moedas' },
    descricao: {
      en: 'Web tool that consumes a public exchange-rate API to convert values between different countries’ currencies in real time.',
      pt: 'Ferramenta web que consome API pública de câmbio para converter valores entre moedas de diferentes países em tempo real.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['web'],
    techs: ['JavaScript', 'HTML5', 'CSS3', 'API REST'],
    github: 'https://github.com/JoaoPedroBMoura/API_converte_moedas',
    demo: 'https://joaopedrobmoura.github.io/API_converte_moedas/',
  },
  {
    nome: { en: 'Contacts Site — ASP.NET', pt: 'Site de Contatos — ASP.NET' },
    descricao: {
      en: 'Web application to create and edit a contact list, connected to a database. Built with ASP.NET.',
      pt: 'Aplicação web que permite criar e editar uma lista de contatos, conectada a banco de dados. Desenvolvido em ASP.NET.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['web'],
    techs: ['ASP.NET', 'C#', 'HTML/CSS', 'SQL Server'],
    github: 'https://github.com/JoaoPedroBMoura/SiteDeContatos',
  },

  // ── APIs / Backend ─────────────────────────────────────────────────────
  {
    nome: { en: 'Net Worth Tracker', pt: 'Controle de Patrimônio' },
    descricao: {
      en: 'Offline-first personal app to track invested assets (stocks, REITs, ETFs, crypto, dollar) with real-time quotes and backup to Google Drive.',
      pt: 'App pessoal offline-first para acompanhar patrimônio investido (ações, FIIs, ETFs, cripto, dólar) com cotações em tempo real e backup em Google Drive.',
    },
    detalhe: {
      en: 'Offline-first approach: data in a local database on the device, backed up to a Google Drive folder chosen by the user to sync across devices. Quotes updated in real time via free APIs. The transactions screen is a CRUD and the single source of truth — every dashboard derives from it. Refactored following SOLID to ensure data integrity. CSV export/import. An MVP with a core requirement of zero operating cost after development.',
      pt: 'Abordagem offline-first: dados em banco local no dispositivo, backup em pasta do Google Drive escolhida pelo usuário para sincronizar entre aparelhos. Cotações atualizadas em tempo real via APIs gratuitas. Tela de transações é CRUD e fonte única de verdade — todos os dashboards derivam dela. Refatorado seguindo SOLID para garantir integridade dos dados. Exportação/importação CSV. MVP com requisito central de custo zero de operação após o desenvolvimento.',
    },
    status: 'desenvolvimento',
    statusLabel: { en: 'In Development', pt: 'Em desenvolvimento' },
    categoria: ['api'],
    techs: ['Python', 'SOLID', 'API REST', 'Google Drive', 'Banco de Dados Local'],
    destaque: {
      en: 'Offline-first · zero cost · real-time quotes',
      pt: 'Offline-first · custo zero · cotações em tempo real',
    },
  },
  {
    nome: { en: 'NoPreço', pt: 'NoPreço' },
    descricao: {
      en: 'Ideation and domain modeling of a community app to look up, compare and track the historical prices of grocery products.',
      pt: 'Ideação e modelagem de domínio de um app comunitário para consulta, comparação e rastreio histórico de preços de produtos de mercado.',
    },
    detalhe: {
      en: 'Current focus on architecture design and domain modeling applying Clean Architecture. Modeled entities: Customer, Product, Store, Price, Address, Purchase, Account, List, Category. Account tiers (Basic/Premium/Angel) controlled by an enum. Roadmap across three horizons: price tracking by category, alerts and favorites (short term); economical routes and shared lists (medium); bulk buying (long term). Includes an infrastructure decision study (AWS vs Azure) to make a low-cost product viable.',
      pt: 'Foco atual em design de arquitetura e modelagem de domínio aplicando Clean Architecture. Entidades modeladas: Cliente, Produto, Estabelecimento, Preço, Endereço, Compra, Conta, Lista, Categoria. Tiers de conta (Basic/Premium/Angel) controlados por enum. Roadmap em três horizontes: rastreio de preço por categoria, alertas e favoritos (curto prazo); rotas econômicas e listas compartilhadas (médio); compras em volume (longo). Inclui estudo de decisão de infraestrutura (AWS vs Azure) para viabilizar produto de baixo custo.',
    },
    status: 'desenvolvimento',
    statusLabel: { en: 'Ideation / modeling', pt: 'Em ideação / modelagem' },
    categoria: ['api'],
    techs: ['Clean Architecture', 'Modelagem de Domínio', 'C#'],
    destaque: {
      en: 'Modeling · Clean Architecture · 3-horizon roadmap',
      pt: 'Modelagem · Clean Architecture · roadmap 3 horizontes',
    },
  },
  {
    nome: { en: 'Contacts API', pt: 'API de Cadastro de Contatos' },
    descricao: {
      en: 'First REST API in C#. Create, list, update and delete contacts directly in the database.',
      pt: 'Primeira API REST em C#. Permite criar, listar, atualizar e remover contatos diretamente no banco de dados.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['api'],
    techs: ['C#', '.NET 6', 'REST API', 'SQL Server'],
    github: 'https://github.com/JoaoPedroBMoura/API-de-contatos',
  },
  {
    nome: { en: 'To-Do List API', pt: 'API Lista de Tarefas' },
    descricao: {
      en: 'REST API for task management — full CRUD operations integrated with a database.',
      pt: 'API REST para gerenciamento de tarefas — operações CRUD completas integradas com banco de dados.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['api'],
    techs: ['C#', '.NET 6', 'REST API', 'SQL Server'],
    github: 'https://github.com/JoaoPedroBMoura/Lista-de-tarefas',
  },

  // ── Console / C# ──────────────────────────────────────────────────────
  {
    nome: { en: 'Hotel Booking System', pt: 'Sistema de Hospedagem' },
    descricao: {
      en: 'Console system that simulates a hotel’s internal control — registering, listing and removing bookings with multiple guests.',
      pt: 'Sistema de console que simula o controle interno de um hotel — cadastro, listagem e remoção de reservas com múltiplos hóspedes.',
    },
    detalhe: {
      en: 'Built with C# / .NET 9.0. Implements Person, Suite and Booking classes. Automatic discount logic for bookings over 10 days (10% off). Interactive terminal interface.',
      pt: 'Desenvolvido com C# / .NET 9.0. Implementa classes Pessoa, Suite e Reserva. Lógica de desconto automático para reservas acima de 10 dias (10% off). Interface interativa no terminal.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['console'],
    techs: ['C#', '.NET 9', 'POO', 'Console App'],
    github: 'https://github.com/JoaoPedroBMoura/Sistema-de-hospedagem',
  },
  {
    nome: { en: 'Parking Control', pt: 'Controle de Estacionamento' },
    descricao: {
      en: 'Console system to manage vehicles in a parking lot — add, remove and list vehicles with hourly-fee calculation.',
      pt: 'Sistema de console para controle de veículos em um estacionamento — adiciona, remove e lista veículos com cálculo de tarifa por hora.',
    },
    status: 'concluido',
    statusLabel: { en: 'Completed', pt: 'Concluído' },
    categoria: ['console'],
    techs: ['C#', '.NET 9', 'POO', 'Console App'],
    github: 'https://github.com/JoaoPedroBMoura/Sistema-de-controle-estacionamento',
  },
];

// Ordem e lista das categorias de filtro. O rótulo exibido vem de
// ui.projects.categories[key] (um único lugar para traduzir).
export const projectCategories: { key: ProjectCategory }[] = [
  { key: 'todos' },
  { key: 'analytics' },
  { key: 'web' },
  { key: 'api' },
  { key: 'console' },
];

export default projects;
