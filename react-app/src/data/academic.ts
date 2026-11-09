/**
 * Vida Acadêmica CEFET-RJ — usada em AcademicSection.
 * Dados baseados no fluxograma oficial do BSI - Campus Nova Friburgo (8 períodos).
 *
 * Textos bilíngues (I18n), resolvidos com L():
 *   - Subject: nome, descricao, observacao, projeto
 *   - Semester: label
 *   - statusStyle: label
 * cargaHoraria é número/texto neutro; skills ficam em português como CHAVE
 * do filtro (o glossário traduz só a exibição). projeto é sempre uma lista
 * nos dois idiomas (I18n<string[]>), simplificando o componente.
 */

import type { I18n } from '../i18n/config';

export interface Subject {
  nome: I18n;
  cargaHoraria?: string; // ex: "4/90"
  skills: string[];
  projeto?: I18n<string[]>;
  observacao?: I18n;
  descricao?: I18n; // texto expandido exibido no painel de detalhes
}

export interface Semester {
  periodo: string;
  label: I18n;
  status: 'concluido' | 'cursando' | 'futuro';
  subjects: Subject[];
}

export const semesters: Semester[] = [
  {
    periodo: '1º',
    label: { en: '1st Semester', pt: '1º Período' },
    status: 'cursando',
    subjects: [
      {
        nome: { en: 'Algorithm Construction', pt: 'Construção de Algoritmos' },
        cargaHoraria: '90/90',
        skills: ['Lógica de Programação', 'Pseudocódigo', 'Estruturas de Controle', 'Resolução de Problemas','Algoritmos de Ordenação'],
        descricao: {
          en: 'The opening course that teaches algorithmic reasoning through pseudocode, before any specific language. It covers control structures (conditionals, loops), problem decomposition and the shift from everyday to computational thinking. The goal isn’t to teach a language — it’s to teach you to think like a programmer.',
          pt: 'Disciplina inaugural que ensina raciocínio algorítmico através de pseudocódigo, antes de qualquer linguagem específica. Trabalha estruturas de controle (condicionais, laços), decomposição de problemas e a transição do pensamento cotidiano para o computacional. O objetivo não é ensinar uma linguagem — é ensinar a pensar como programador.',
        },
      },
      {
        nome: { en: 'Computer Architecture', pt: 'Arquitetura de Computadores' },
        cargaHoraria: '90/90',
        skills: ['Aritmética Binária', 'Memória Cache', 'Ciclo de Instrução', 'Linguagem de Montagem'],
        descricao: {
          en: 'Aims to understand how hardware really works: instruction pipeline, memory hierarchy (registers → cache → RAM → disk) and binary arithmetic. Fundamental to understanding performance, code optimization and what happens "under the hood" of any software abstraction.',
          pt: 'Busca compreender  como o hardware realmente funciona: pipeline de instruções, hierarquia de memória (registradores → cache → RAM → disco) e aritmética binária. Fundamental para entender performance, otimização de código e o que acontece "por baixo" de qualquer abstração de software.',
        },
      },
      {
        nome: { en: 'Information Systems Fundamentals', pt: 'Fundamentos de Sistemas de Informação' },
        cargaHoraria: '36/36',
        skills: ['Sistemas de Informação', 'Processos Organizacionais', 'TI nas Empresas'],
        descricao: {
          en: 'An overview of how IT fits into organizations. It covers types of systems (ERP, BI, transactional, decision-support) and how technology supports and transforms business processes. A first structured view of Information Systems as a field.',
          pt: 'Panorama de como TI se insere nas organizações. Aborda tipos de sistemas (ERP, BI, transacionais, de apoio à decisão) e como a tecnologia suporta e transforma processos de negócio. Primeira visão estruturada da área de Sistemas de Informação como disciplina.',
        },
      },
      {
        nome: { en: 'Management Fundamentals', pt: 'Fundamentos de Administração' },
        cargaHoraria: '36/36',
        skills: ['Gestão Organizacional', 'Planejamento', 'Tomada de Decisão'],
        descricao: {
          en: 'Aims to understand the classic concepts of systems theory, learn the different careers within computing and map out the IS bachelor’s program to better plan elective courses. We also analyze trends and new research in the IS field to bring fresh material into class.',
          pt: 'Objetiva compreender os conceitos clássicos da teoria de sistemas. Conhecer as diferentes carreiras dentro da computação e traçar um panorama do curso de bacharelado de SI para planejar melhor as disciplinas optativas. Também buscamos analisar as tendências e novas pesquisas na área de SI para pesquisar e trazer novos elementos para as aulas.',
        },
      },
      {
        nome: { en: 'Business Process Management', pt: 'Gestão de Processos de Negócios' },
        cargaHoraria: '54/54',
        skills: ['BPM', 'Mapeamento de Processos', 'Qualidade de Processos', 'Melhoria Contínua', 'BPMN','PMBOK'],
        observacao: {
          en: 'Basis for applying Lean Six Sigma and process automation in the workplace.',
          pt: 'Base para aplicação de Lean Six Sigma e automação de processos no ambiente de trabalho.',
        },
        descricao: {
          en: 'Mapping and modeling processes with BPMN notation. The basis for intelligent automation — the core idea is to understand the process before coding or optimizing it. Applied directly day to day with Lean Six Sigma Yellow Belt and in automation projects.',
          pt: 'Mapeamento e modelagem de processos com notação BPMN. A base para automação inteligente — a ideia central é entender o processo antes de codificá-lo ou otimizá-lo. Aplicado diretamente no dia a dia com o Lean Six Sigma Yellow Belt e nos projetos de automação',
        },
      },
      {
        nome: { en: 'Mathematics Fundamentals', pt: 'Fundamentos da Matemática' },
        cargaHoraria: '36/36',
        skills: ['Conjuntos', 'Funções', 'Lógica Matemática'],
        descricao: {
          en: 'Leveling in sets, functions and mathematical logic — essential preparation for Calculus and Discrete Mathematics. It reviews the fundamentals many reach higher education without consolidating, ensuring the basis for the formal reasoning required in later courses.',
          pt: 'Nivelamento em conjuntos, funções e lógica matemática — preparação essencial para Cálculo e Matemática Discreta. Revisa os fundamentos que muitos chegam ao ensino superior sem consolidar, garantindo a base para o raciocínio formal exigido nas disciplinas seguintes.',
        },
      },
      {
        nome: { en: 'Discrete Mathematics', pt: 'Matemática Discreta' },
        cargaHoraria: '108/108',
        skills: ['Teoria dos Conjuntos', 'Relações', 'Combinatória', 'Indução Matemática'],
        descricao: {
          en: 'The study of formal logic: inference, Boolean logic, set theory, truth tables and functions. One of the most mathematically dense courses of the early semesters.',
          pt: 'Estudo da lógica formal: Inferência, Lógica Booleana, Teoria de conjuntos, Tabela de verdade e Funções. Uma das matérias mais matematicamente densas dos períodos iniciais.',
        },
      },
    ],
  },
  {
    periodo: '2º',
    label: { en: '2nd Semester', pt: '2º Período' },
    status: 'cursando',
    subjects: [
      {
        nome: { en: 'Structured Programming', pt: 'Programação Estruturada' },
        cargaHoraria: '90/90',
        skills: ['C', 'Funções', 'Ponteiros', 'Modularização'],
        descricao: {
          en: 'C in practice — pointers, functions, modularization, memory allocation. C forces the programmer to think explicitly about memory, allocation and the life cycle of variables. It’s the most formative course technically in the early semesters: programming in C without a garbage collector changes how you think about performance and resources.',
          pt: 'C na prática — ponteiros, funções, modularização, alocação de memória. C obriga o programador a pensar explicitamente em memória, alocação e ciclo de vida de variáveis. É a disciplina mais formadora do ponto de vista técnico nos períodos iniciais: programar em C sem garbage collector muda como você pensa sobre performance e recursos.',
        },
      },
      {
        nome: { en: 'Networking Fundamentals', pt: 'Fundamentos de Redes' },
        cargaHoraria: '90/90',
        skills: ['Modelo OSI', 'TCP/IP', 'DNS', 'HTTP', 'Camadas de Rede'],
        descricao: {
          en: 'The OSI and TCP/IP models from protocol to application — how data leaves your code and reaches the other side. DNS, HTTP and the life cycle of a network request. Very enriching for a fuller understanding of APIs, distributed systems and the AWS infrastructure I use in projects.',
          pt: 'Modelo OSI e TCP/IP do protocolo ao aplicativo — como dados saem do seu código e chegam até o outro lado. DNS, HTTP e o ciclo de uma requisição de rede. Muito enriquecedor para compreender mais plenamento o funcionamento das APIs, sistemas distribuídos e a infraestrutura AWS que uso nos projetos.',
        },
      },
      {
        nome: { en: 'Data Modeling', pt: 'Modelagem de Dados' },
        cargaHoraria: '54/54',
        skills: ['Modelo ER', 'Normalização (1FN, 2FN, 3FN)', 'Diagrama Relacional', 'Cardinalidade', 'Entidades e Atributos'],
        observacao: {
          en: 'Direct foundation for the work with AWS Redshift and data-pipeline modeling.',
          pt: 'Fundamento direto para o trabalho com AWS Redshift e modelagem de pipelines de dados.',
        },
        descricao: {
          en: 'Creating ER diagrams, normalization up to 3NF and cardinality. The direct foundation for working with AWS Redshift, data-pipeline design and relational databases in production. How you model data at the start of a project determines how hard it will be to maintain and scale it later.',
          pt: 'Criação de diagramas ER, normalização até 3FN e cardinalidade. O fundamento direto para o trabalho com AWS Redshift, design de pipelines de dados e bancos relacionais em produção. A forma como você modela os dados no início de um projeto determina o quão difícil será mantê-lo e escaloná-lo depois.',
        },
      },
      {
        nome: { en: 'Requirements Engineering', pt: 'Engenharia de Requisitos' },
        cargaHoraria: '36/36',
        skills: ['Levantamento de Requisitos', 'Casos de Uso', 'Especificação de Software'],
        descricao: {
          en: 'Techniques to elicit and specify what a piece of software needs to do before coding it — use cases, user stories and acceptance criteria; stakeholder communication and systemic thinking are strongly encouraged. Most projects fail from poorly defined requirements, not bad code. This course teaches you to ask the right questions.',
          pt: 'Técnicas para levantar e especificar o que um software precisa fazer antes de começar a codá-lo — casos de uso, histórias de usuário e critérios de aceite, comunicação com stakeholders e visão sistêmica são muito incentivados. A maioria dos projetos falha por requisitos mal definidos, não por código ruim. Essa disciplina ensina a fazer as perguntas certas.',
        },
      },
      {
        nome: { en: 'Differential and Integral Calculus', pt: 'Cálculo Diferencial e Integral' },
        cargaHoraria: '0/80',
        skills: ['Limites', 'Derivadas', 'Integrais', 'Séries'],
        descricao: {
          en: 'Limits, derivatives and integrals with mathematical rigor. The basis for understanding gradient descent (backpropagation in neural networks), numerical optimization and Machine Learning models. Mathematically demanding, but essential to go beyond using tools without understanding how they work.',
          pt: 'Limites, derivadas e integrais com rigor matemático. A base para compreender gradiente descendente (backpropagation em redes neurais), otimizações numéricas e modelos de Machine Learning. Matematicamente exigente, mas essencial para ir além de usar ferramentas sem entender como funcionam.',
        },
      },
      {
        nome: { en: 'Scientific Research Methodology', pt: 'Metodologia da Pesquisa Científica' },
        cargaHoraria: '36/36',
        skills: ['Escrita Científica', 'Pesquisa Bibliográfica', 'Metodologia de Pesquisa'],
        descricao: {
          en: 'The structure of scientific papers, research methodology and technical writing. Preparation for the capstone work in the final semesters and for papers and project documentation. An underrated cross-cutting skill: communicating a technical solution well is as important as building it.',
          pt: 'Estrutura de artigos científicos, metodologia de pesquisa e escrita técnica. Preparação para os trabalhos de TCC nos períodos finais e para artigos e documentações de projetos. Habilidade transversal subestimada: comunicar bem uma solução técnica é tão importante quanto construí-la.',
        },
      },
    ],
  },
  {
    periodo: '3º',
    label: { en: '3rd Semester', pt: '3º Período' },
    status: 'cursando',
    subjects: [
      {
        nome: { en: 'Object-Oriented Programming', pt: 'Programação Orientada a Objetos' },
        cargaHoraria: '90/90',
        skills: ['Java', 'Classes e Objetos', 'Herança', 'Polimorfismo', 'Encapsulamento', 'Design Patterns','POO'],
        descricao: {
          en: 'Java as a vehicle for the four pillars of OOP (inheritance, polymorphism, encapsulation, abstraction) and the main GoF Design Patterns. A paradigm shift from structured programming — the way you organize code changes completely. The conceptual basis that later became Clean Architecture and Ports & Adapters in real projects.',
          pt: 'Java como veículo para os quatro pilares da OOP (herança, polimorfismo, encapsulamento, abstração) e principais Design Patterns do GoF. Mudança de paradigma em relação à programação estruturada — a forma de organizar código muda completamente. A base conceitual que depois virou Clean Architecture e Ports & Adapters nos projetos reais.',
        },
      },
      {
        nome: { en: 'Web Fundamentals', pt: 'Fundamentos da Web' },
        cargaHoraria: '90/90',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'Responsividade', 'Bootstrap'],
        projeto: {
          en: ['String lab and static site projects (hosted on GitHub Pages)', 'This portfolio — built applying the course concepts'],
          pt: ['Laboratório de Strings e projetos de sites estáticos (hospedados no GitHub Pages)','Este portfólio — desenvolvido aplicando os conceitos da disciplina'],
        },
        descricao: {
          en: 'HTML5, CSS3 and JavaScript — DOM, responsiveness and Bootstrap. The first structured exposure, in the degree, to web development. The projects were hosted on GitHub Pages (the same model this portfolio uses today). The course’s JavaScript was the basis for the TypeScript I use on the current site.',
          pt: 'HTML5, CSS3 e JavaScript — DOM, responsividade e Bootstrap. Primeira exposição, na graduação, estruturada ao desenvolvimento web. Os projetos foram hospedados no GitHub Pages (o mesmo modelo que este portfólio usa hoje). O JavaScript da disciplina foi a base para o TypeScript que uso no site atual.',
        },
      },
      {
        nome: { en: 'Databases I', pt: 'Banco de Dados I' },
        cargaHoraria: '90/90',
        skills: ['SQL', 'DDL/DML', 'Consultas e Junções', 'Transações', 'PostgreSQL'],
        descricao: {
          en: 'Complete SQL: DDL, DML, JOINs and transactions in PostgreSQL, with direct application in daily work with data. Probably the course with the greatest immediate impact in practice — SQL is the universal language of the data field and every Central de Custódia project goes through database queries.',
          pt: 'SQL completo: DDL, DML, JOINs e transações no PostgreSQL. Com aplicação direta no trabalho diário com dados. Provavelmente a disciplina com maior impacto imediato na prática — SQL é a linguagem universal da área de dados e todo projeto da Central de Custódia passa por consultas em banco.',
        },
      },
      {
        nome: { en: 'Linear Algebra', pt: 'Álgebra Linear' },
        cargaHoraria: '0/54',
        skills: ['Matrizes', 'Determinantes', 'Vetores', 'Transformações Lineares'],
        descricao: {
          en: 'Matrices, vectors and linear transformations — the mathematics of Machine Learning. Dot product, SVD decomposition, eigenvalues and linear systems are the basis of ML models, computer vision and natural language processing. Linear algebra is the language of multidimensional data.',
          pt: 'Matrizes, vetores e transformações lineares — a matemática do Machine Learning. Produto escalar, decomposição SVD, autovalores e sistemas lineares são a base de modelos de ML, visão computacional e processamento de linguagem natural. A álgebra linear é o idioma dos dados multidimensionais.',
        },
      },
      {
        nome: { en: 'Algorithms and Data Structures', pt: 'Algoritmos e Estruturas de Dados' },
        cargaHoraria: '90/90',
        skills: ['C','Listas', 'Pilhas', 'Filas', 'Árvores', 'Algoritmos de Ordenação', 'Complexidade'],
        descricao: {
          en: 'Lists, stacks, queues, trees and sorting algorithms with Big-O complexity analysis. One of the most critical courses of the program — both for technical interviews and for writing code that scales. Understanding an operation’s complexity is the difference between a system that holds up in production and one that collapses.',
          pt: 'Listas, pilhas, filas, árvores e algoritmos de ordenação com análise de complexidade Big-O. Uma das disciplinas mais críticas do curso — tanto para entrevistas técnicas quanto para escrever código que escala. Entender a complexidade de uma operação é a diferença entre um sistema que aguenta produção e um que cai.',
        },
      }
    ],
  },
  {
    periodo: '4º',
    label: { en: '4th Semester', pt: '4º Período' },
    status: 'cursando',
    subjects: [
      {
        nome: { en: 'Enterprise Application Programming', pt: 'Programação de Aplicações Corporativas' },
        cargaHoraria: '90/90',
        skills: ['Java EE', 'Padrões Corporativos', 'Persistência', 'Camadas de Aplicação','POO',"JWT","REST APIs"],
        projeto: {
          en: ['Bakery System — full modeling with a class diagram and domain flow (Excalidraw)', 'This portfolio — built applying the course concepts'],
          pt: ['Sistema de Padaria — modelagem completa com diagrama de classes e fluxo de domínio (Excalidraw)','Este portfólio — desenvolvido aplicando os conceitos da disciplina'],
        },
        descricao: {
          en: 'Java EE with enterprise patterns — persistence, application layers and the patterns large enterprise systems use. Hands-on project: a bakery system with full modeling in Excalidraw. The course that connects the 3rd-semester OOP with real enterprise architectures.',
          pt: 'Java EE com padrões corporativos — persistência, camadas de aplicação e os padrões que grandes sistemas empresariais usam. Projeto prático: sistema de padaria com modelagem completa em Excalidraw. A disciplina que conecta a OOP do 3º período com arquiteturas corporativas de verdade.',
        },
      },
      {
        nome: { en: 'Operating Systems', pt: 'Sistemas Operacionais' },
        cargaHoraria: '0/54',
        skills: ['Processos e Threads', 'Gerência de Memória', 'Sistemas de Arquivos', 'Linux'],
        descricao: {
          en: 'How the OS manages processes, threads, memory and file systems. Linux in practice — directly applied day to day with Docker, production scripts and Central de Custódia’s AWS infrastructure. Understanding the OS explains why parallel code is hard and how containerization works.',
          pt: 'Como o SO gerencia processos, threads, memória e sistemas de arquivos. Linux na prática — diretamente aplicado no dia a dia com Docker, scripts em produção e infraestrutura AWS da Central de Custódia. Entender o SO explica por que código paralelo é difícil e como containerização funciona.',
        },
      },
      {
        nome: { en: 'Databases II', pt: 'Banco de Dados II' },
        cargaHoraria: '54/54',
        skills: ['Big Data', 'Hadoop / HDFS', 'NoSQL', 'MapReduce', 'Hive & Impala', 'Sqoop', 'SQL para Big Data'],
        descricao: {
          en: 'Big Data in practice — the 5 Vs (Volume, Velocity, Variety, Veracity, Value) and the Hadoop ecosystem: HDFS for distributed storage, YARN for resource orchestration and MapReduce for parallel processing at scale. NoSQL in depth: key-value, columnar, document and graph databases — when to use each. Hive and Impala for SQL queries over distributed data; Sqoop for ingesting relational data into Hadoop. A direct basis for understanding data lakes and distributed pipelines.',
          pt: 'Big Data na prática — os 5 Vs (Volume, Velocidade, Variedade, Veracidade, Valor) e o ecossistema Hadoop: HDFS para armazenamento distribuído, YARN para orquestração de recursos e MapReduce para processamento paralelo em escala. NoSQL em profundidade: bancos chave-valor, colunares, orientados a documentos e a grafos — quando usar cada um. Hive e Impala para consultas SQL sobre dados distribuídos; Sqoop para ingestão de dados relacionais no Hadoop. Base direta para entender data lakes e pipelines distribuídos.',
        },
      },
      {
        nome: { en: 'Database Administration', pt: 'Administração de Banco de Dados' },
        cargaHoraria: '36/36',
        skills: ['MySQL', 'Stored Procedures', 'Triggers', 'Cursors', 'Backup & Recovery', 'Gerenciamento de Usuários', 'Views & Índices', 'Funções SQL'],
        descricao: {
          en: 'The DBA’s view in MySQL — server-side programmability: Stored Procedures with IN/OUT/INOUT parameters, BEFORE/AFTER Triggers to automate business rules, Cursors for row-by-row scanning and reusable Functions. Real administration: creating and managing users with GRANT/REVOKE, backup via mysqldump (by database, table or the whole server) and restore. The most critical production database problems — data loss, improper access and inconsistent rules — are exactly the ones this course addresses.',
          pt: 'A visão do DBA em MySQL — programabilidade no servidor: Stored Procedures com parâmetros IN/OUT/INOUT, Triggers BEFORE/AFTER para automação de regras de negócio, Cursors para varredura linha a linha e Functions reutilizáveis. Administração real: criação e gerenciamento de usuários com GRANT/REVOKE, backup via mysqldump (por banco, tabela ou servidor inteiro) e restore. Os problemas mais críticos de banco em produção — perda de dados, acesso indevido e regras inconsistentes — são exatamente os que essa disciplina endereça.',
        },
      },
      {
        nome: { en: 'Systems Analysis and Design', pt: 'Análise e Projeto de Sistemas' },
        cargaHoraria: '90/90',
        skills: ['UML', 'Diagrama de Casos de Uso', 'Diagrama de Classes', 'Modelagem de Sistemas'],
        descricao: {
          en: 'UML in practice: use-case and class diagrams to model systems before building them. The transition from requirements gathering to technical modeling — the link between what the client wants and what the developer will code. The basis for the DDD that appears in the 5th semester.',
          pt: 'UML na prática: diagramas de casos de uso e de classes para modelar sistemas antes de construí-los. Transição do levantamento de requisitos para a modelagem técnica — o elo entre o que o cliente quer e o que o desenvolvedor vai codificar. A base para o DDD que aparece no 5º período.',
        },
      },
      {
        nome: { en: 'Software Engineering', pt: 'Engenharia de Software' },
        cargaHoraria: '36/36',
        skills: ['Modelos de Processo', 'Scrum', 'Engenharia de Requisitos', 'Arquitetura de SW', 'Testes', 'Manutenção de Software', 'Qualidade & Métricas'],
        descricao: {
          en: 'Fundamentals of the development process: Waterfall, Prototyping, RAD and Spiral (incremental/evolutionary) models. The Agile Manifesto and Scrum in practice — Sprint, Daily, Review, Backlog, roles (PO, Scrum Master, Team). Requirements Engineering: elicitation, analysis, types (functional vs. non-functional) and documentation with UML. Layered architecture, componentization and structural patterns (MVC, 3-tier). Maintenance in four categories: corrective, adaptive, perfective and preventive. The course that explains why most projects fail before the first line of code is written.',
          pt: 'Fundamentos do processo de desenvolvimento: modelos Cascata, Prototipação, RAD e Espiral (incremental/evolutivo). Manifesto Ágil e Scrum na prática — Sprint, Daily, Review, Backlog, papéis (PO, Scrum Master, Time). Engenharia de Requisitos: elicitação, análise, tipos (funcionais vs. não-funcionais) e documentação com UML. Arquitetura em camadas, componentização e padrões estruturais (MVC, 3-tier). Manutenção nas quatro categorias: corretiva, adaptativa, perfectiva e preventiva. A disciplina que explica por que a maioria dos projetos falha antes de escrever a primeira linha de código.',
        },
      },
      {
        nome: { en: 'Graph Algorithms', pt: 'Algoritmos em Grafos' },
        cargaHoraria: '90/90',
        skills: ['Grafos e Digrafos', 'Busca em Largura/Profundidade', 'Caminho Mínimo (Dijkstra)', 'Árvores Geradoras Mínimas (Prim, Kruskal)', 'Árvores AVL e Rubro-Negras'],
        projeto: {
          en: ['Studies with Excalidraw diagrams: graph representation, incidence matrices, search algorithms'],
          pt: ['Estudos com diagramas Excalidraw: representação de grafos, matrizes de incidência, algoritmos de busca'],
        },
        descricao: {
          en: 'Classic graph algorithms (Dijkstra, Prim, Kruskal) and advanced structures like AVL and Red-Black trees. A mathematically rigorous course, with studies documented in Excalidraw diagrams. Graphs appear in real problems: data routing, social networks, dependencies between systems.',
          pt: 'Algoritmos clássicos de grafos (Dijkstra, Prim, Kruskal) e estruturas avançadas como AVL e Rubro-Negras. Disciplina matematicamente rigorosa, com estudos documentados em diagramas Excalidraw. Grafos aparecem em problemas reais: roteamento de dados, redes sociais, dependências entre sistemas.',
        },
      },
    ],
  },
  {
    periodo: '5º',
    label: { en: '5th Semester', pt: '5º Período' },
    status: 'cursando',
    subjects: [
      {
        nome: { en: 'Web Programming', pt: 'Programação para Web' },
        cargaHoraria: '0/90',
        skills: ['PHP', 'Laravel', 'REST APIs', 'Autenticação e Autorização', 'ORM Eloquent'],
        descricao: {
          en: 'React and TypeScript in practice — this portfolio was built as a project for this course. Components, state management, routing and API integration. The course formalized what I was already doing at work and opened the way to a more solid component architecture.',
          pt: 'React e TypeScript na prática — este portfólio foi desenvolvido como projeto desta disciplina. Componentes, gerenciamento de estado, roteamento e integração com APIs. A disciplina formalizou o que eu já fazia no trabalho e abriu o caminho para uma arquitetura de componentes mais sólida.',
        },
      },
      {
        nome: { en: 'Network Administration', pt: 'Administração de Redes' },
        cargaHoraria: '0/90',
        skills: ['Configuração de Redes', 'Protocolos Avançados', 'Segurança de Redes', 'VLANs'],
        descricao: {
          en: 'Advanced network configuration, VLANs and security. A direct connection to the AWS infrastructure used in Central de Custódia projects — understanding networks explains much of what happens when working with cloud services, S3 buckets and Redshift connections.',
          pt: 'Configuração avançada de redes, VLANs e segurança. Conexão direta com a infraestrutura AWS utilizada nos projetos da Central de Custódia — entender redes explica muito do que acontece quando se trabalha com serviços de nuvem, buckets S3 e conexões com Redshift.',
        },
      },
      {
        nome: { en: 'Probability and Statistics', pt: 'Probabilidade e Estatística' },
        cargaHoraria: '0/90',
        skills: ['Distribuições de Probabilidade', 'Inferência Estatística', 'Regressão', 'Análise de Dados'],
        descricao: {
          en: 'Probability distributions, statistical inference and regression — the mathematical basis of data analysis. With direct application in the field: hypothesis tests, confidence intervals and regression are everyday tools for any analyst who goes beyond building dashboards.',
          pt: 'Distribuições de probabilidade, inferência estatística e regressão — a base matemática da análise de dados. Com aplicação direta na área: testes de hipótese, intervalos de confiança e regressão são ferramentas do dia a dia de qualquer analista que vai além de montar dashboards.',
        },
      },
      {
        nome: { en: 'Information Knowledge Management', pt: 'Gestão do Conhecimento da Informação' },
        cargaHoraria: '0/36',
        skills: ['KM', 'Ontologias', 'Bases de Conhecimento', 'BI'],
        descricao: {
          en: 'Knowledge Management, ontologies and knowledge bases applied to BI. It connects organizational information management with decision-support systems. The course that formalized what my personal Second Brain tries to do at an individual scale.',
          pt: 'Knowledge Management, ontologias e bases de conhecimento aplicadas a BI. Conecta a gestão de informação organizacional com sistemas de apoio à decisão. A disciplina que formalizou o que o meu Second Brain pessoal tenta fazer em escala individual.',
        },
      },
      {
        nome: { en: 'Software Quality', pt: 'Qualidade de Software' },
        cargaHoraria: '0/54',
        skills: ['CMMI', 'Métricas de Qualidade', 'Testes de Software', 'ISO/IEC 25010'],
        descricao: {
          en: 'CMMI, ISO 25010, software testing and how to measure quality objectively. The correlation with Lean Six Sigma is direct — both seek continuous improvement and defect reduction based on data. A course that unites the process-quality mindset with product quality.',
          pt: 'CMMI, ISO 25010, testes de software e como medir qualidade de forma objetiva. A correlação com o Lean Six Sigma é direta — ambos buscam melhoria contínua e redução de defeitos com base em dados. Disciplina que une a mentalidade de qualidade do processo com a qualidade do produto.',
        },
      },
      {
        nome: { en: 'Software Design and Architecture', pt: 'Projeto e Arquitetura de Software' },
        cargaHoraria: '90/90',
        skills: ['Clean Architecture', 'Arquitetura em Camadas', 'DDD — Domain-Driven Design', 'Mapa de Contexto', 'Ports & Adapters (Hexagonal)', 'Padrões Arquiteturais'],
        projeto: {
          en: ['Architecture studies with diagrams: closed/open layers, context map (DDD), applied directly in Central de Custódia projects'],
          pt: ['Estudo de arquiteturas com diagramas: Camadas fechadas/abertas, Mapa de contexto (DDD), aplicado diretamente nos projetos da Central de Custódia'],
        },
        descricao: {
          en: 'Clean Architecture, DDD and Ports & Adapters (Hexagonal) — the concepts I use directly in Central de Custódia projects. The MMA report automation and the email system were built applying these patterns. It’s the course that most connects theory with what I do in production.',
          pt: 'Clean Architecture, DDD e Ports & Adapters (Hexagonal) — os conceitos que uso diretamente nos projetos da Central de Custódia. A automação de relatórios para o MMA e o sistema de e-mails foram construídos aplicando esses padrões. É a disciplina que mais conecta teoria com o que faço em produção.',
        },
      },
    ],
  },
  {
    periodo: '6º',
    label: { en: '6th Semester', pt: '6º Período' },
    status: 'cursando',
    subjects: [
      { nome: { en: 'Parallel and Concurrent Programming', pt: 'Programação Paralela e Concorrente' }, cargaHoraria: '0/90', skills: ['Threads', 'Concorrência', 'Paralelismo', 'Sincronização'] },
      { nome: { en: 'Systems Security and Auditing', pt: 'Segurança e Auditoria de Sistemas' }, cargaHoraria: '0/90', skills: ['Criptografia', 'Segurança da Informação', 'LGPD', 'Auditoria'] },
      { nome: { en: 'Web Client Programming', pt: 'Programação de Clientes Web' }, cargaHoraria: '0/90', skills: ['Frontend Avançado', 'PWA', 'Performance Web'] },
      { nome: { en: 'Software Testing and Maintenance', pt: 'Teste e Manutenção de Software' }, cargaHoraria: '0/90', skills: ['TDD', 'Testes Unitários', 'Testes de Integração', 'Manutenção'] },

      { nome: { en: 'Digital Entrepreneurship', pt: 'Empreendedorismo Digital' },
        cargaHoraria: '36/36',
        skills: ['MVP', 'PMOK', 'Startups', 'Validação de Produto','Processos de Negócio'],
        descricao: {
          en: 'Validating digital ideas and products — MVP, Canvas, Lean Startup. The course that connects the technical view with the business view. It teaches you to validate hypotheses before investing time and resources in development, reducing risk and increasing the chances of success. We also learn a lot about operational, management and business processes.',
          pt: 'Validação de ideias e produtos digitais — MVP, Canvas, Lean Startup. A disciplina que conecta a visão técnica com a visão de negócio. Ensina a validar hipóteses antes de investir tempo e recursos em desenvolvimento, reduzindo risco e aumentando chances de sucesso. Também aprendemos bastante sobre os processos operacionais, de gestão e de processos dos negócios',
        },
      },

      { nome: { en: 'Elective I', pt: 'Optativa I' }, cargaHoraria: '0/90', skills: ['A definir'] },
    ],
  },
  {
    periodo: '7º',
    label: { en: '7th Semester', pt: '7º Período' },
    status: 'cursando',
    subjects: [
      { nome: { en: 'IT Project Management', pt: 'Gestão de Projetos de TI' },
        cargaHoraria: '54/54',
        skills: ['PMI', 'Scrum', 'Kanban', 'Gestão de Riscos', 'Gestão de projetos','Diagramação'],
        descricao: {
          en: 'IT project management focused on agile methodologies (Scrum, Kanban) and traditional ones (PMI). Planning, execution, monitoring and closing of projects. The course that connects the technical view with the business view — essential to lead teams and deliver value consistently, and it reinforces the need to gather good requirements and manage resources efficiently.',
          pt: 'Gestão de projetos de TI com foco em metodologias ágeis (Scrum, Kanban) e tradicionais (PMI). Planejamento, execução, monitoramento e encerramento de projetos. A disciplina que conecta a visão técnica com a visão de negócio — essencial para liderar equipes e entregar valor de forma consistente, além de nos reforçar a necessidade de levantar bons requisitos e saber fazer uma gestão eficiente de recursos',
        },
       },
      { nome: { en: 'Human-Computer Interaction', pt: 'Interação Humano-Computador' }, cargaHoraria: '0/54', skills: ['UX/UI', 'Usabilidade', 'Prototipagem', 'Acessibilidade'] },
      {
        nome: { en: 'Sustainable Technologies', pt: 'Tecnologias Sustentáveis' },
        cargaHoraria: '36/36',
        skills: ['Docker','Claude Computer','Versionamento'],
        descricao: {
          en: 'A course that addresses sustainable technologies and practices in computing, focused on energy efficiency and environmental responsibility, thinking about technological advances and how they can benefit society and its progress.',
          pt: 'Disciplina que aborda as tecnologias e práticas sustentáveis no contexto da informática, com foco em eficiência energética e responsabilidade ambiental pensando nos avanços tecnológicos e como eles podem beneficiar a sociedade e seus avanços',
        },
       },
      { nome: { en: 'Ethics', pt: 'Ética' }, cargaHoraria: '0/36', skills: ['Ética Profissional', 'Deontologia', 'Responsabilidade Social'] },
      { nome: { en: 'Systems Integration Project', pt: 'Projeto Integrador de Sistemas' }, cargaHoraria: '0/90', skills: ['Integração de Sistemas', 'Projeto Prático'] },
      { nome: { en: 'Final Project I', pt: 'Projeto Final I' }, cargaHoraria: '0/90', skills: ['TCC — Pesquisa Aplicada', 'Metodologia Científica'] },
    ],
  },
  {
    periodo: '8º',
    label: { en: '8th Semester', pt: '8º Período' },
    status: 'cursando',
    subjects: [
      {
        nome: { en: 'IT Governance', pt: 'Governança de TI' },
        cargaHoraria: '90/90',
        skills: ['Governança Corporativa de TI'],
        descricao: {
          en: 'A course on the principles and practices of IT governance, focused on strategic alignment, risk management and corporate compliance. Here we are guided to position ourselves as Tech Leads and IT managers, understanding how governance impacts decision-making and value delivery to the organization.',
          pt: 'Disciplina que aborda os princípios e práticas de governança de TI, com foco em alinhamento estratégico, gestão de riscos e conformidade empresarial. Nessa matérias somos orientados a nos colocar como Tech Leads e gestores de TI, entendendo como a governança impacta a tomada de decisões e a entrega de valor para a organização. ',
        },
       },
      { nome: { en: 'Legislation and Intellectual Property', pt: 'Legislação e Propriedade Intelectual' }, cargaHoraria: '0/54', skills: ['Lei de Software', 'LGPD', 'Propriedade Intelectual', 'Marco Civil'] },
      { nome: { en: 'Economics', pt: 'Economia' }, cargaHoraria: '0/54', skills: ['Micro e Macroeconomia', 'Mercado de Trabalho'] },
      { nome: { en: 'Final Project II', pt: 'Projeto Final II' }, cargaHoraria: '0/90', skills: ['TCC — Desenvolvimento e Defesa'] },
      { nome: { en: 'Elective III', pt: 'Optativa III' }, cargaHoraria: '0/90', skills: ['A definir'] },
      { nome: { en: 'Elective IV', pt: 'Optativa IV' }, cargaHoraria: '0/90', skills: ['A definir'] },
    ],
  },
];

export const statusStyle: Record<Semester['status'], { dot: string; badge: string; label: I18n }> = {
  concluido: { dot: '#22c55e', badge: '#166534', label: { en: 'Completed',   pt: 'Concluído' } },
  cursando:  { dot: '#f59e0b', badge: '#92400e', label: { en: 'In progress', pt: 'Cursando' } },
  futuro:    { dot: '#6b7280', badge: '#1e3a5f', label: { en: 'Upcoming',    pt: 'Previsto' } },
};

export default semesters;
