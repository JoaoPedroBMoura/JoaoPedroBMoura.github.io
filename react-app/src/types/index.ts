/**
 * Tipos e interfaces do portfólio
 * João Pedro Barcellos Moura
 */

// ========================================
// CURSOS E CERTIFICAÇÕES
// ========================================

export interface Curso {
  nome: string;
  link: string;
}

export interface CursosProgramacao {
  dotNet: Curso[];
  gitGitHub: Curso[];
}

export interface CursosAnaliseDados {
  ComunidadeDs: Curso[];
}

export interface Certificacoes {
  'gestao-projetos': Curso[];
  Administraçao: Curso[];
}

// ========================================
// PROJETOS
// ========================================

export interface Projeto {
  nome: string;
  linkImg: string;
  textoAlt: string;
  descricao: string;
  link: string;
}

export interface ProjetosProgramacao {
  sites: Projeto[];
  deConsole: Projeto[];
  api: Projeto[];
}

export interface ProjetosAnaliseDados {
  analisesExcel: Projeto[];
}

// ========================================
// DADOS PESSOAIS
// ========================================

export interface DadosPessoais {
  nome: string;
  localizacao: string;
  whatsapp: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Idioma {
  nome: string;
  nivel: string;
}

// ========================================
// NAVEGAÇÃO
// ========================================

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// ========================================
// TECNOLOGIAS
// ========================================

export interface Tecnologia {
  nome: string;
  icone: string;
  categoria: 'backend' | 'frontend' | 'database' | 'tools' | 'analytics';
}

// ========================================
// EXPERIÊNCIA
// ========================================

export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string[];
  conquistas?: string[];
}

export interface Formacao {
  instituicao: string;
  curso: string;
  periodo: string;
  descricao?: string;
}
