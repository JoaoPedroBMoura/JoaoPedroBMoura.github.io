/**
 * Tipos e interfaces do portfólio
 * João Pedro Barcellos Moura
 *
 * Cada interface aqui é o "contrato" de uma estrutura de dados usada em
 * mais de um lugar (ou que representa um JSON importado). Tipos usados
 * dentro de um único componente ficam declarados no próprio componente.
 *
 * Textos que mudam de idioma usam I18n<T> (ver src/i18n/config.ts):
 * um objeto { en, pt } resolvido em tempo de execução pelo idioma ativo.
 */

import type { I18n } from '../i18n/config';

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

/**
 * Formato de cada item nos JSONs em src/data/cursos*.json e certificacoes.json.
 * O `nome` fica em português no JSON; a tradução de exibição é feita pelo
 * glossário (translateCourse), para não precisar editar os três JSONs.
 */
export interface Curso {
  nome: string;
  link: string;
  categoria: CursoCategory;
}

// ========================================
// NAVEGAÇÃO
// ========================================

export interface NavItem {
  label: I18n;        // rótulo bilíngue do menu
  href: string;
  isExternal?: boolean;
}
