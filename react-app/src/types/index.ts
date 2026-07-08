/**
 * Tipos e interfaces do portfólio
 * João Pedro Barcellos Moura
 *
 * Cada interface aqui é o "contrato" de uma estrutura de dados usada em
 * mais de um lugar (ou que representa um JSON importado). Tipos usados
 * dentro de um único componente ficam declarados no próprio componente.
 */

// ========================================
// CURSOS E CERTIFICAÇÕES
// ========================================

/** Categorias exibidas como filtro em CoursesSection */
export type CursoCategory =
  | 'dotnet'
  | 'gitGitHub'
  | 'analiseDeDados'
  | 'leanSixSigma'
  | 'gestao';

/** Formato de cada item nos JSONs em src/data/cursos*.json e certificacoes.json */
export interface Curso {
  nome: string;
  link: string;
  categoria: CursoCategory;
}

// ========================================
// NAVEGAÇÃO
// ========================================

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
