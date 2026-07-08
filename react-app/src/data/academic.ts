/**
 * Vida Acadêmica CEFET-RJ — usada em AcademicSection
 * Dados baseados no fluxograma oficial do BSI - Campus Nova Friburgo
 * 8 períodos · desde 2023.1
 *
 * Status real (julho/2026):
 *   - 7º semestre em tempo
 *   - Cursando matérias do 4º e 5º período no fluxograma
 *   - Períodos 1–3: concluídos
 *   - Períodos 4–5: cursando (ativos em 2026.1)
 *   - Períodos 6–8: futuros
 */

export interface Subject {
  nome: string;
  cargaHoraria?: string; // ex: "4/90"
  skills: string[];
  projeto?: string | string[];
  observacao?: string;
  descricao?: string; // texto expandido exibido no painel de detalhes
}

export interface Semester {
  periodo: string;
  label: string;
  status: 'concluido' | 'cursando' | 'futuro';
  subjects: Subject[];
}

export const semesters: Semester[] = [
  {
    periodo: '1º',
    label: '1º Período',
    status: 'cursando',
    subjects: [
      {
        nome: 'Construção de Algoritmos',
        cargaHoraria: '90/90',
        skills: ['Lógica de Programação', 'Pseudocódigo', 'Estruturas de Controle', 'Resolução de Problemas','Algoritmos de Ordenação'],
        descricao: 'Disciplina inaugural que ensina raciocínio algorítmico através de pseudocódigo, antes de qualquer linguagem específica. Trabalha estruturas de controle (condicionais, laços), decomposição de problemas e a transição do pensamento cotidiano para o computacional. O objetivo não é ensinar uma linguagem — é ensinar a pensar como programador.',
      },
      {
        nome: 'Arquitetura de Computadores',
        cargaHoraria: '90/90',
        skills: ['Aritmética Binária', 'Memória Cache', 'Ciclo de Instrução', 'Linguagem de Montagem'],
        descricao: 'Busca compreender  como o hardware realmente funciona: pipeline de instruções, hierarquia de memória (registradores → cache → RAM → disco) e aritmética binária. Fundamental para entender performance, otimização de código e o que acontece "por baixo" de qualquer abstração de software.',
      },
      {
        nome: 'Fundamentos de Sistemas de Informação',
        cargaHoraria: '36/36',
        skills: ['Sistemas de Informação', 'Processos Organizacionais', 'TI nas Empresas'],
        descricao: 'Panorama de como TI se insere nas organizações. Aborda tipos de sistemas (ERP, BI, transacionais, de apoio à decisão) e como a tecnologia suporta e transforma processos de negócio. Primeira visão estruturada da área de Sistemas de Informação como disciplina.',
      },
      {
        nome: 'Fundamentos de Administração',
        cargaHoraria: '36/36',
        skills: ['Gestão Organizacional', 'Planejamento', 'Tomada de Decisão'],
        descricao: 'Objetiva compreender os conceitos clássicos da teoria de sistemas. Conhecer as diferentes carreiras dentro da computação e traçar um panorama do curso de bacharelado de SI para planejar melhor as disciplinas optativas.'+
                    'Também buscamos analisar as tendências e novas pesquisas na área de SI para pesquisar e trazer novos elementos para as aulas.',
      },
      {
        nome: 'Gestão de Processos de Negócios',
        cargaHoraria: '54/54',
        skills: ['BPM', 'Mapeamento de Processos', 'Qualidade de Processos', 'Melhoria Contínua', 'BPMN','PMBOK'],
        observacao:'Base para aplicação de Lean Six Sigma e automação de processos no ambiente de trabalho.',
        descricao: 'Mapeamento e modelagem de processos com notação BPMN. A base para automação inteligente — a ideia central é entender o processo antes de codificá-lo ou otimizá-lo. Aplicado diretamente no dia a dia com o Lean Six Sigma Yellow Belt e nos projetos de automação',
      },
      {
        nome: 'Fundamentos da Matemática',
        cargaHoraria: '36/36',
        skills: ['Conjuntos', 'Funções', 'Lógica Matemática'],
        descricao: 'Nivelamento em conjuntos, funções e lógica matemática — preparação essencial para Cálculo e Matemática Discreta. Revisa os fundamentos que muitos chegam ao ensino superior sem consolidar, garantindo a base para o raciocínio formal exigido nas disciplinas seguintes.',
      },
      {
        nome: 'Matemática Discreta',
        cargaHoraria: '108/108',
        skills: ['Teoria dos Conjuntos', 'Relações', 'Combinatória', 'Indução Matemática'],
        descricao: 'Estudo da lógica formal: Inferência, Lógica Booleana, Teoria de conjuntos, Tabela de verdade e Funções. Uma das matérias mais matematicamente densas dos períodos iniciais.',
      },
    ],
  },
  {
    periodo: '2º',
    label: '2º Período',
    status: 'cursando',
    subjects: [
      {
        nome: 'Programação Estruturada',
        cargaHoraria: '90/90',
        skills: ['C', 'Funções', 'Ponteiros', 'Modularização'],
        descricao: 'C na prática — ponteiros, funções, modularização, alocação de memória. C obriga o programador a pensar explicitamente em memória, alocação e ciclo de vida de variáveis. É a disciplina mais formadora do ponto de vista técnico nos períodos iniciais: programar em C sem garbage collector muda como você pensa sobre performance e recursos.',
      },
      {
        nome: 'Fundamentos de Redes',
        cargaHoraria: '90/90',
        skills: ['Modelo OSI', 'TCP/IP', 'DNS', 'HTTP', 'Camadas de Rede'],
        descricao: 'Modelo OSI e TCP/IP do protocolo ao aplicativo — como dados saem do seu código e chegam até o outro lado. DNS, HTTP e o ciclo de uma requisição de rede. Muito enriquecedor para compreender mais plenamento o funcionamento das APIs, sistemas distribuídos e a infraestrutura AWS que uso nos projetos.',
      },
      {
        nome: 'Modelagem de Dados',
        cargaHoraria: '54/54',
        skills: ['Modelo ER', 'Normalização (1FN, 2FN, 3FN)', 'Diagrama Relacional', 'Cardinalidade', 'Entidades e Atributos'],
        observacao: 'Fundamento direto para o trabalho com AWS Redshift e modelagem de pipelines de dados.',
        descricao: 'Criação de diagramas ER, normalização até 3FN e cardinalidade. O fundamento direto para o trabalho com AWS Redshift, design de pipelines de dados e bancos relacionais em produção. A forma como você modela os dados no início de um projeto determina o quão difícil será mantê-lo e escaloná-lo depois.',
      },
      {
        nome: 'Engenharia de Requisitos',
        cargaHoraria: '36/36',
        skills: ['Levantamento de Requisitos', 'Casos de Uso', 'Especificação de Software'],
        descricao: 'Técnicas para levantar e especificar o que um software precisa fazer antes de começar a codá-lo — casos de uso, histórias de usuário e critérios de aceite, comunicação com stakeholders e visão sistêmica são muito incentivados. A maioria dos projetos falha por requisitos mal definidos, não por código ruim. Essa disciplina ensina a fazer as perguntas certas.',
      },
      {
        nome: 'Cálculo Diferencial e Integral',
        cargaHoraria: '0/80',
        skills: ['Limites', 'Derivadas', 'Integrais', 'Séries'],
        descricao: 'Limites, derivadas e integrais com rigor matemático. A base para compreender gradiente descendente (backpropagation em redes neurais), otimizações numéricas e modelos de Machine Learning. Matematicamente exigente, mas essencial para ir além de usar ferramentas sem entender como funcionam.',
      },
      {
        nome: 'Metodologia da Pesquisa Científica',
        cargaHoraria: '36/36',
        skills: ['Escrita Científica', 'Pesquisa Bibliográfica', 'Metodologia de Pesquisa'],
        descricao: 'Estrutura de artigos científicos, metodologia de pesquisa e escrita técnica. Preparação para os trabalhos de TCC nos períodos finais e para artigos e documentações de projetos. Habilidade transversal subestimada: comunicar bem uma solução técnica é tão importante quanto construí-la.',
      },
    ],
  },
  {
    periodo: '3º',
    label: '3º Período',
    status: 'cursando',
    subjects: [
      {
        nome: 'Programação Orientada a Objetos',
        cargaHoraria: '90/90',
        skills: ['Java', 'Classes e Objetos', 'Herança', 'Polimorfismo', 'Encapsulamento', 'Design Patterns','POO'],
        descricao: 'Java como veículo para os quatro pilares da OOP (herança, polimorfismo, encapsulamento, abstração) e principais Design Patterns do GoF. Mudança de paradigma em relação à programação estruturada — a forma de organizar código muda completamente. A base conceitual que depois virou Clean Architecture e Ports & Adapters nos projetos reais.',
      },
      {
        nome: 'Fundamentos da Web',
        cargaHoraria: '90/90',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'Responsividade', 'Bootstrap'],
        projeto: ['Laboratório de Strings e projetos de sites estáticos (hospedados no GitHub Pages)','Este portfólio — desenvolvido aplicando os conceitos da disciplina'],
        descricao: 'HTML5, CSS3 e JavaScript — DOM, responsividade e Bootstrap. Primeira exposição, na graduação, estruturada ao desenvolvimento web. Os projetos foram hospedados no GitHub Pages (o mesmo modelo que este portfólio usa hoje). O JavaScript da disciplina foi a base para o TypeScript que uso no site atual.',
      },
      {
        nome: 'Banco de Dados I',
        cargaHoraria: '90/90',
        skills: ['SQL', 'DDL/DML', 'Consultas e Junções', 'Transações', 'PostgreSQL'],
        descricao: 'SQL completo: DDL, DML, JOINs e transações no PostgreSQL. Com aplicação direta no trabalho diário com dados. Provavelmente a disciplina com maior impacto imediato na prática — SQL é a linguagem universal da área de dados e todo projeto da Central de Custódia passa por consultas em banco.',
      },
      {
        nome: 'Álgebra Linear',
        cargaHoraria: '0/54',
        skills: ['Matrizes', 'Determinantes', 'Vetores', 'Transformações Lineares'],
        descricao: 'Matrizes, vetores e transformações lineares — a matemática do Machine Learning. Produto escalar, decomposição SVD, autovalores e sistemas lineares são a base de modelos de ML, visão computacional e processamento de linguagem natural. A álgebra linear é o idioma dos dados multidimensionais.',
      },
      {
        nome: 'Algoritmos e Estruturas de Dados',
        cargaHoraria: '90/90',
        skills: ['C','Listas', 'Pilhas', 'Filas', 'Árvores', 'Algoritmos de Ordenação', 'Complexidade'],
        descricao: 'Listas, pilhas, filas, árvores e algoritmos de ordenação com análise de complexidade Big-O. Uma das disciplinas mais críticas do curso — tanto para entrevistas técnicas quanto para escrever código que escala. Entender a complexidade de uma operação é a diferença entre um sistema que aguenta produção e um que cai.',
      }
    ],
  },
  {
    periodo: '4º',
    label: '4º Período',
    status: 'cursando',
    subjects: [
      {
        nome: 'Programação de Aplicações Corporativas',
        cargaHoraria: '90/90',
        skills: ['Java EE', 'Padrões Corporativos', 'Persistência', 'Camadas de Aplicação','POO'],
        projeto: ['Sistema de Padaria — modelagem completa com diagrama de classes e fluxo de domínio (Excalidraw)','Este portfólio — desenvolvido aplicando os conceitos da disciplina'],
        descricao: 'Java EE com padrões corporativos — persistência, camadas de aplicação e os padrões que grandes sistemas empresariais usam. Projeto prático: sistema de padaria com modelagem completa em Excalidraw. A disciplina que conecta a OOP do 3º período com arquiteturas corporativas de verdade.',
      },
      {
        nome: 'Sistemas Operacionais',
        cargaHoraria: '0/54',
        skills: ['Processos e Threads', 'Gerência de Memória', 'Sistemas de Arquivos', 'Linux'],
        descricao: 'Como o SO gerencia processos, threads, memória e sistemas de arquivos. Linux na prática — diretamente aplicado no dia a dia com Docker, scripts em produção e infraestrutura AWS da Central de Custódia. Entender o SO explica por que código paralelo é difícil e como containerização funciona.',
      },
      {
        nome: 'Banco de Dados II',
        cargaHoraria: '54/54',
        skills: ['Big Data', 'Hadoop / HDFS', 'NoSQL', 'MapReduce', 'Hive & Impala', 'Sqoop', 'SQL para Big Data'],
        descricao: 'Big Data na prática — os 5 Vs (Volume, Velocidade, Variedade, Veracidade, Valor) e o ecossistema Hadoop: HDFS para armazenamento distribuído, YARN para orquestração de recursos e MapReduce para processamento paralelo em escala. NoSQL em profundidade: bancos chave-valor, colunares, orientados a documentos e a grafos — quando usar cada um. Hive e Impala para consultas SQL sobre dados distribuídos; Sqoop para ingestão de dados relacionais no Hadoop. Base direta para entender data lakes e pipelines distribuídos.',
      },
      {
        nome: 'Administração de Banco de Dados',
        cargaHoraria: '36/36',
        skills: ['MySQL', 'Stored Procedures', 'Triggers', 'Cursors', 'Backup & Recovery', 'Gerenciamento de Usuários', 'Views & Índices', 'Funções SQL'],
        descricao: 'A visão do DBA em MySQL — programabilidade no servidor: Stored Procedures com parâmetros IN/OUT/INOUT, Triggers BEFORE/AFTER para automação de regras de negócio, Cursors para varredura linha a linha e Functions reutilizáveis. Administração real: criação e gerenciamento de usuários com GRANT/REVOKE, backup via mysqldump (por banco, tabela ou servidor inteiro) e restore. Os problemas mais críticos de banco em produção — perda de dados, acesso indevido e regras inconsistentes — são exatamente os que essa disciplina endereça.',
      },
      {
        nome: 'Análise e Projeto de Sistemas',
        cargaHoraria: '90/90',
        skills: ['UML', 'Diagrama de Casos de Uso', 'Diagrama de Classes', 'Modelagem de Sistemas'],
        descricao: 'UML na prática: diagramas de casos de uso e de classes para modelar sistemas antes de construí-los. Transição do levantamento de requisitos para a modelagem técnica — o elo entre o que o cliente quer e o que o desenvolvedor vai codificar. A base para o DDD que aparece no 5º período.',
      },
      {
        nome: 'Engenharia de Software',
        cargaHoraria: '36/36',
        skills: ['Modelos de Processo', 'Scrum', 'Engenharia de Requisitos', 'Arquitetura de SW', 'Testes', 'Manutenção de Software', 'Qualidade & Métricas'],
        descricao: 'Fundamentos do processo de desenvolvimento: modelos Cascata, Prototipação, RAD e Espiral (incremental/evolutivo). Manifesto Ágil e Scrum na prática — Sprint, Daily, Review, Backlog, papéis (PO, Scrum Master, Time). Engenharia de Requisitos: elicitação, análise, tipos (funcionais vs. não-funcionais) e documentação com UML. Arquitetura em camadas, componentização e padrões estruturais (MVC, 3-tier). Manutenção nas quatro categorias: corretiva, adaptativa, perfectiva e preventiva. A disciplina que explica por que a maioria dos projetos falha antes de escrever a primeira linha de código.',
      },
      {
        nome: 'Algoritmos em Grafos',
        cargaHoraria: '90/90',
        skills: ['Grafos e Digrafos', 'Busca em Largura/Profundidade', 'Caminho Mínimo (Dijkstra)', 'Árvores Geradoras Mínimas (Prim, Kruskal)', 'Árvores AVL e Rubro-Negras'],
        projeto: 'Estudos com diagramas Excalidraw: representação de grafos, matrizes de incidência, algoritmos de busca',
        descricao: 'Algoritmos clássicos de grafos (Dijkstra, Prim, Kruskal) e estruturas avançadas como AVL e Rubro-Negras. Disciplina matematicamente rigorosa, com estudos documentados em diagramas Excalidraw. Grafos aparecem em problemas reais: roteamento de dados, redes sociais, dependências entre sistemas.',
      },
    ],
  },
  {
    periodo: '5º',
    label: '5º Período',
    status: 'cursando',
    subjects: [
      {
        nome: 'Programação para Web',
        cargaHoraria: '0/90',
        skills: ['PHP', 'Laravel', 'REST APIs', 'Autenticação e Autorização', 'ORM Eloquent'],
        descricao: 'React e TypeScript na prática — este portfólio foi desenvolvido como projeto desta disciplina. Componentes, gerenciamento de estado, roteamento e integração com APIs. A disciplina formalizou o que eu já fazia no trabalho e abriu o caminho para uma arquitetura de componentes mais sólida.',
      },
      {
        nome: 'Administração de Redes',
        cargaHoraria: '0/90',
        skills: ['Configuração de Redes', 'Protocolos Avançados', 'Segurança de Redes', 'VLANs'],
        descricao: 'Configuração avançada de redes, VLANs e segurança. Conexão direta com a infraestrutura AWS utilizada nos projetos da Central de Custódia — entender redes explica muito do que acontece quando se trabalha com serviços de nuvem, buckets S3 e conexões com Redshift.',
      },
      {
        nome: 'Probabilidade e Estatística',
        cargaHoraria: '0/90',
        skills: ['Distribuições de Probabilidade', 'Inferência Estatística', 'Regressão', 'Análise de Dados'],
        descricao: 'Distribuições de probabilidade, inferência estatística e regressão — a base matemática da análise de dados. Com aplicação direta na área: testes de hipótese, intervalos de confiança e regressão são ferramentas do dia a dia de qualquer analista que vai além de montar dashboards.',
      },
      {
        nome: 'Gestão do Conhecimento da Informação',
        cargaHoraria: '0/36',
        skills: ['KM', 'Ontologias', 'Bases de Conhecimento', 'BI'],
        descricao: 'Knowledge Management, ontologias e bases de conhecimento aplicadas a BI. Conecta a gestão de informação organizacional com sistemas de apoio à decisão. A disciplina que formalizou o que o meu Second Brain pessoal tenta fazer em escala individual.',
      },
      {
        nome: 'Qualidade de Software',
        cargaHoraria: '0/54',
        skills: ['CMMI', 'Métricas de Qualidade', 'Testes de Software', 'ISO/IEC 25010'],
        descricao: 'CMMI, ISO 25010, testes de software e como medir qualidade de forma objetiva. A correlação com o Lean Six Sigma é direta — ambos buscam melhoria contínua e redução de defeitos com base em dados. Disciplina que une a mentalidade de qualidade do processo com a qualidade do produto.',
      },
      {
        nome: 'Projeto e Arquitetura de Software',
        cargaHoraria: '90/90',
        skills: ['Clean Architecture', 'Arquitetura em Camadas', 'DDD — Domain-Driven Design', 'Mapa de Contexto', 'Ports & Adapters (Hexagonal)', 'Padrões Arquiteturais'],
        projeto: 'Estudo de arquiteturas com diagramas: Camadas fechadas/abertas, Mapa de contexto (DDD), aplicado diretamente nos projetos da Central de Custódia',
        descricao: 'Clean Architecture, DDD e Ports & Adapters (Hexagonal) — os conceitos que uso diretamente nos projetos da Central de Custódia. A automação de relatórios para o MMA e o sistema de e-mails foram construídos aplicando esses padrões. É a disciplina que mais conecta teoria com o que faço em produção.',
      },
    ],
  },
  {
    periodo: '6º',
    label: '6º Período',
    status: 'cursando',
    subjects: [
      { nome: 'Programação Paralela e Concorrente', cargaHoraria: '0/90', skills: ['Threads', 'Concorrência', 'Paralelismo', 'Sincronização'] },
      { nome: 'Segurança e Auditoria de Sistemas', cargaHoraria: '0/90', skills: ['Criptografia', 'Segurança da Informação', 'LGPD', 'Auditoria'] },
      { nome: 'Programação de Clientes Web', cargaHoraria: '0/90', skills: ['Frontend Avançado', 'PWA', 'Performance Web'] },
      { nome: 'Teste e Manutenção de Software', cargaHoraria: '0/90', skills: ['TDD', 'Testes Unitários', 'Testes de Integração', 'Manutenção'] },
      
      { nome: 'Empreendedorismo Digital', 
        cargaHoraria: '36/36', 
        skills: ['MVP', 'PMOK', 'Startups', 'Validação de Produto','Processos de Negócio'],
        descricao: 'Validação de ideias e produtos digitais — MVP, Canvas, Lean Startup. A disciplina que conecta a visão técnica com a visão de negócio. Ensina a validar hipóteses antes de investir tempo e recursos em desenvolvimento, reduzindo risco e aumentando chances de sucesso. Também aprendemos bastante sobre os processos operacionais, de gestão e de processos dos negócios',
      },
      
        { nome: 'Optativa I', cargaHoraria: '0/90', skills: ['A definir'] },
    ],
  },
  {
    periodo: '7º',
    label: '7º Período',
    status: 'cursando',
    subjects: [
      { nome: 'Gestão de Projetos de TI', 
        cargaHoraria: '54/54', 
        skills: ['PMI', 'Scrum', 'Kanban', 'Gestão de Riscos', 'Gestão de projetos','Diagramação'],
        descricao: 'Gestão de projetos de TI com foco em metodologias ágeis (Scrum, Kanban) e tradicionais (PMI). Planejamento, execução, monitoramento e encerramento de projetos. A disciplina que conecta a visão técnica com a visão de negócio — essencial para liderar equipes e entregar valor de forma consistente, além de nos reforçar a necessidade de levantar bons requisitos e saber fazer uma gestão eficiente de recursos',
       },
      { nome: 'Interação Humano-Computador', cargaHoraria: '0/54', skills: ['UX/UI', 'Usabilidade', 'Prototipagem', 'Acessibilidade'] },
      { 
        nome: 'Tecnologias Sustentáveis', 
        cargaHoraria: '36/36', 
        skills: ['Docker','Claude Computer','Versionamento'],
        descricao: 'Disciplina que aborda as tecnologias e práticas sustentáveis no contexto da informática, com foco em eficiência energética e responsabilidade ambiental pensando nos avanços tecnológicos e como eles podem beneficiar a sociedade e seus avanços',
       },
      { nome: 'Ética', cargaHoraria: '0/36', skills: ['Ética Profissional', 'Deontologia', 'Responsabilidade Social'] },
      { nome: 'Projeto Integrador de Sistemas', cargaHoraria: '0/90', skills: ['Integração de Sistemas', 'Projeto Prático'] },
      { nome: 'Projeto Final I', cargaHoraria: '0/90', skills: ['TCC — Pesquisa Aplicada', 'Metodologia Científica'] },
    ],
  },
  {
    periodo: '8º',
    label: '8º Período',
    status: 'cursando',
    subjects: [
      { 
        nome: 'Governança de TI', 
        cargaHoraria: '90/90', 
        skills: ['Governança Corporativa de TI'],
        descricao: 'Disciplina que aborda os princípios e práticas de governança de TI, com foco em alinhamento estratégico, gestão de riscos e conformidade empresarial. Nessa matérias somos orientados a nos colocar como Tech Leads e gestores de TI, entendendo como a governança impacta a tomada de decisões e a entrega de valor para a organização. ',
       },
      { nome: 'Legislação e Propriedade Intelectual', cargaHoraria: '0/54', skills: ['Lei de Software', 'LGPD', 'Propriedade Intelectual', 'Marco Civil'] },
      { nome: 'Economia', cargaHoraria: '0/54', skills: ['Micro e Macroeconomia', 'Mercado de Trabalho'] },
      { nome: 'Projeto Final II', cargaHoraria: '0/90', skills: ['TCC — Desenvolvimento e Defesa'] },
      { nome: 'Optativa III', cargaHoraria: '0/90', skills: ['A definir'] },
      { nome: 'Optativa IV', cargaHoraria: '0/90', skills: ['A definir'] },
    ],
  },
];

export const statusStyle: Record<Semester['status'], { dot: string; badge: string; label: string }> = {
  concluido: { dot: '#22c55e', badge: '#166534', label: 'Concluído' },
  cursando:  { dot: '#f59e0b', badge: '#92400e', label: 'Cursando' },
  futuro:    { dot: '#6b7280', badge: '#1e3a5f', label: 'Previsto' },
};

export default semesters;
