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
    descricao: 'Sistema Python que gera relatórios PDF automáticos para todos os estados do Brasil, entregues ao Ministério do Meio Ambiente.',
    detalhe: '9+ meses de desenvolvimento. Implementa lógica de negócio de NF (colidência e invalidade), geração de documentos Word/PDF via Matplotlib. Redução de 60% no código (538 linhas eliminadas). Clean Architecture.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['analytics'],
    techs: ['Python', 'Clean Architecture', 'Matplotlib', 'Word Automation', 'PDF'],
    destaque: '60% redução de código · 26 estados cobertos',
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
    descricao: 'Dashboard Power BI integrado com pipeline AWS S3 → Redshift, monitorando preços de materiais para decisões executivas.',
    detalhe: 'Pipeline completo: ingestão no S3 → transformação → Redshift (cloud DW). Protótipo complementar em R/Shiny para análise ad hoc.',
    status: 'producao',
    statusLabel: 'Em Produção',
    categoria: ['analytics'],
    techs: ['Power BI', 'AWS S3', 'AWS Redshift', 'SQL', 'R / Shiny'],
    destaque: 'Cloud Data Warehouse em produção',
  },
  {
    nome: 'OCR de PDFs — MTR e NF',
    descricao: 'Extração automática de dados de Manifestos de Transporte de Resíduos (MTR) e Notas Fiscais usando Docling + Python.',
    detalhe: 'Pipeline de leitura de PDFs com Docling. Dados extraídos e tratados para alimentar sistemas internos. ~95% de precisão no reconhecimento.',
    status: 'concluido',
    statusLabel: 'Concluído',
    categoria: ['analytics'],
    techs: ['Python', 'Docling', 'OCR', 'Pandas'],
    destaque: '~95% de eficiência',
  },
  {
    nome: 'Automação de Envio de E-mails',
    descricao: 'Ferramenta Python com interface gráfica que automatiza e-mails personalizados via Outlook API, lendo destinatários de planilha Excel.',
    detalhe: 'Arquitetura Ports & Adapters (hexagonal). Processamento de .xlsx com openpyxl. Compilado como .exe para uso sem Python instalado. Entregue em 6 dias.',
    status: 'concluido',
    statusLabel: 'Concluído · Jun 2026',
    categoria: ['analytics'],
    techs: ['Python', 'Ports & Adapters', 'Outlook API', 'openpyxl', 'PyInstaller'],
    destaque: 'Entregue em 6 dias · Distribuído como .exe',
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
  { key: 'api', label: 'APIs' },
  { key: 'console', label: 'Console / C#' },
];

export default projects;
