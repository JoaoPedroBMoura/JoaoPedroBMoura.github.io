/**
 * glossary — tradução de EXIBIÇÃO para tags técnicas e nomes de cursos.
 *
 * Por que isto existe (e não é um campo bilíngue como o resto)?
 *   As tags ('Python', 'Análise de Dados'...) são usadas como CHAVE pelo
 *   filtro de habilidades (utils/skillSearch.ts). Se elas virassem objetos
 *   { en, pt }, toda a lógica de busca teria que comparar objetos.
 *   Em vez disso, mantemos a chave sempre em português (como já está nos
 *   dados) e traduzimos APENAS na hora de mostrar na tela.
 *
 * Regra:
 *   - Tag que muda entre idiomas → coloque aqui a versão em inglês.
 *   - Tag que é nome próprio / já em inglês (Python, React, SQL, OCR...)
 *     → NÃO precisa de entrada. translateTag devolve o próprio texto.
 */

import type { Locale } from './config';

// Tags (chave em PT) → rótulo em inglês.
const tagEN: Record<string, string> = {
  // Dados & análise
  'Análise de Dados': 'Data Analysis',
  'Visualização de Dados': 'Data Visualization',
  'Modelagem de Dados': 'Data Modeling',
  'Dados Operacionais': 'Operational Data',
  'Banco de Dados Local': 'Local Database',
  'SQL para Big Data': 'SQL for Big Data',
  'IA': 'AI',
  // Processos & gestão
  'Gestão de Processos': 'Process Management',
  'Processos Internos': 'Internal Processes',
  'Mapeamento de Processos': 'Process Mapping',
  'Qualidade de Processos': 'Process Quality',
  'Melhoria Contínua': 'Continuous Improvement',
  'Gestão Organizacional': 'Organizational Management',
  'Processos Organizacionais': 'Organizational Processes',
  'TI nas Empresas': 'IT in Business',
  'Planejamento': 'Planning',
  'Tomada de Decisão': 'Decision Making',
  'Gestão de Riscos': 'Risk Management',
  'Gestão de projetos': 'Project Management',
  'Gestão de Projetos': 'Project Management',
  'Processos de Negócio': 'Business Processes',
  'Validação de Produto': 'Product Validation',
  'Diagramação': 'Diagramming',
  'Sistemas de Informação': 'Information Systems',
  // Arquitetura & engenharia de software
  'Arquitetura Limpa': 'Clean Architecture',
  'Arquitetura em Camadas': 'Layered Architecture',
  'Padrões Arquiteturais': 'Architectural Patterns',
  'Mapa de Contexto': 'Context Map',
  'Modelagem de Domínio': 'Domain Modeling',
  'Diagrama de Classes': 'Class Diagram',
  'Diagrama de Casos de Uso': 'Use Case Diagram',
  'Modelagem de Sistemas': 'Systems Modeling',
  'Padrões Corporativos': 'Enterprise Patterns',
  'Camadas de Aplicação': 'Application Layers',
  'Persistência': 'Persistence',
  'Engenharia de Requisitos': 'Requirements Engineering',
  'Levantamento de Requisitos': 'Requirements Gathering',
  'Casos de Uso': 'Use Cases',
  'Especificação de Software': 'Software Specification',
  'Modelos de Processo': 'Process Models',
  'Arquitetura de SW': 'Software Architecture',
  'Manutenção de Software': 'Software Maintenance',
  'Testes de Software': 'Software Testing',
  'Qualidade & Métricas': 'Quality & Metrics',
  'Métricas de Qualidade': 'Quality Metrics',
  'Testes': 'Testing',
  'Testes Unitários': 'Unit Testing',
  'Testes de Integração': 'Integration Testing',
  'Manutenção': 'Maintenance',
  'Projeto Prático': 'Practical Project',
  'Integração de Sistemas': 'Systems Integration',
  // Programação & fundamentos
  'Lógica de Programação': 'Programming Logic',
  'Pseudocódigo': 'Pseudocode',
  'Estruturas de Controle': 'Control Structures',
  'Resolução de Problemas': 'Problem Solving',
  'Algoritmos de Ordenação': 'Sorting Algorithms',
  'Funções': 'Functions',
  'Ponteiros': 'Pointers',
  'Modularização': 'Modularization',
  'Classes e Objetos': 'Classes and Objects',
  'Herança': 'Inheritance',
  'Polimorfismo': 'Polymorphism',
  'Encapsulamento': 'Encapsulation',
  'Listas': 'Lists',
  'Pilhas': 'Stacks',
  'Filas': 'Queues',
  'Árvores': 'Trees',
  'Complexidade': 'Complexity',
  'Responsividade': 'Responsive Design',
  'Concorrência': 'Concurrency',
  'Paralelismo': 'Parallelism',
  'Sincronização': 'Synchronization',
  'Frontend Avançado': 'Advanced Frontend',
  'Performance Web': 'Web Performance',
  'Autenticação e Autorização': 'Authentication & Authorization',
  'Versionamento': 'Version Control',
  // Hardware & sistemas
  'Aritmética Binária': 'Binary Arithmetic',
  'Memória Cache': 'Cache Memory',
  'Ciclo de Instrução': 'Instruction Cycle',
  'Linguagem de Montagem': 'Assembly Language',
  'Processos e Threads': 'Processes and Threads',
  'Gerência de Memória': 'Memory Management',
  'Sistemas de Arquivos': 'File Systems',
  // Redes
  'Modelo OSI': 'OSI Model',
  'Camadas de Rede': 'Network Layers',
  'Configuração de Redes': 'Network Configuration',
  'Protocolos Avançados': 'Advanced Protocols',
  'Segurança de Redes': 'Network Security',
  // Banco de dados
  'Modelo ER': 'ER Model',
  'Normalização (1FN, 2FN, 3FN)': 'Normalization (1NF, 2NF, 3NF)',
  'Diagrama Relacional': 'Relational Diagram',
  'Cardinalidade': 'Cardinality',
  'Entidades e Atributos': 'Entities and Attributes',
  'Consultas e Junções': 'Queries and Joins',
  'Transações': 'Transactions',
  'Gerenciamento de Usuários': 'User Management',
  'Views & Índices': 'Views & Indexes',
  'Funções SQL': 'SQL Functions',
  // Matemática
  'Conjuntos': 'Sets',
  'Lógica Matemática': 'Mathematical Logic',
  'Teoria dos Conjuntos': 'Set Theory',
  'Relações': 'Relations',
  'Combinatória': 'Combinatorics',
  'Indução Matemática': 'Mathematical Induction',
  'Limites': 'Limits',
  'Derivadas': 'Derivatives',
  'Integrais': 'Integrals',
  'Séries': 'Series',
  'Matrizes': 'Matrices',
  'Determinantes': 'Determinants',
  'Vetores': 'Vectors',
  'Transformações Lineares': 'Linear Transformations',
  'Distribuições de Probabilidade': 'Probability Distributions',
  'Inferência Estatística': 'Statistical Inference',
  'Regressão': 'Regression',
  // Grafos
  'Grafos e Digrafos': 'Graphs and Digraphs',
  'Busca em Largura/Profundidade': 'Breadth/Depth-First Search',
  'Caminho Mínimo (Dijkstra)': 'Shortest Path (Dijkstra)',
  'Árvores Geradoras Mínimas (Prim, Kruskal)': 'Minimum Spanning Trees (Prim, Kruskal)',
  'Árvores AVL e Rubro-Negras': 'AVL and Red-Black Trees',
  // Pesquisa & escrita
  'Escrita Científica': 'Scientific Writing',
  'Pesquisa Bibliográfica': 'Literature Review',
  'Metodologia de Pesquisa': 'Research Methodology',
  'Metodologia Científica': 'Scientific Methodology',
  // Segurança, ética e gestão
  'Criptografia': 'Cryptography',
  'Segurança da Informação': 'Information Security',
  'Auditoria': 'Auditing',
  'Ética Profissional': 'Professional Ethics',
  'Deontologia': 'Deontology',
  'Responsabilidade Social': 'Social Responsibility',
  'Governança Corporativa de TI': 'Corporate IT Governance',
  'Lei de Software': 'Software Law',
  'Propriedade Intelectual': 'Intellectual Property',
  'Marco Civil': 'Internet Civil Framework',
  'Micro e Macroeconomia': 'Micro and Macroeconomics',
  'Mercado de Trabalho': 'Job Market',
  // UX & outros
  'Usabilidade': 'Usability',
  'Prototipagem': 'Prototyping',
  'Acessibilidade': 'Accessibility',
  'Startups': 'Startups',
  'Ontologias': 'Ontologies',
  'Bases de Conhecimento': 'Knowledge Bases',
  // Siglas / termos de projeto
  'POO': 'OOP',
  'Console App': 'Console App',
  'TCC — Pesquisa Aplicada': 'Capstone — Applied Research',
  'TCC — Desenvolvimento e Defesa': 'Capstone — Development & Defense',
  'Projeto Prático ': 'Practical Project',
  'A definir': 'TBD',
};

/** Traduz o rótulo de uma tag para exibição. A chave interna continua em PT. */
export function translateTag(tag: string, lang: Locale): string {
  if (lang === 'pt') return tag;
  return tagEN[tag] ?? tag;
}

// Nomes de cursos/certificados (texto exato do JSON) → versão em inglês.
// Só os que têm parte em português. Os já em inglês caem no fallback.
const courseEN: Record<string, string> = {
  'Fundamentos em Gestão de Projetos - FM2S (06/2024)': 'Project Management Fundamentals - FM2S (06/2024)',
  'Fundamentos em Gestão de Pessoas - FM2S (05/2024)': 'People Management Fundamentals - FM2S (05/2024)',
  'Estatística para Análise de Dados - Comunidade DS (10/2024)': 'Statistics for Data Analysis - Comunidade DS (10/2024)',
  'Visualização de Dados com Power BI - Comunidade DS (09/2024)': 'Data Visualization with Power BI - Comunidade DS (09/2024)',
  'Excel para Análise de Dados - Comunidade DS (08/2024)': 'Excel for Data Analysis - Comunidade DS (08/2024)',
  'SQL do Básico ao Avançado - Comunidade DS (07/2024)': 'SQL from Basics to Advanced - Comunidade DS (07/2024)',
  'Métricas de Negócio - Comunidade DS (07/2024)': 'Business Metrics - Comunidade DS (07/2024)',
  'Introdução a Bancos de Dados Relacionais - Dio (11/2024)': 'Introduction to Relational Databases - Dio (11/2024)',
  'Fundamentos em .NET - Dio (12/2024)': '.NET Fundamentals - Dio (12/2024)',
  'Explorando linguagem C# - Dio (12/2024)': 'Exploring the C# Language - Dio (12/2024)',
  'POO com C# - Dio (12/2024)': 'OOP with C# - Dio (12/2024)',
  'BD relacionais e não relacionais - SQL Server e MongoDB - Dio (12/2024)': 'Relational & Non-Relational DBs - SQL Server and MongoDB - Dio (12/2024)',
  'Git e GitHub - Dio (01/2024)': 'Git and GitHub - Dio (01/2024)',
};

/** Traduz o nome de um curso/certificado para exibição. */
export function translateCourse(name: string, lang: Locale): string {
  if (lang === 'pt') return name;
  return courseEN[name] ?? name;
}
