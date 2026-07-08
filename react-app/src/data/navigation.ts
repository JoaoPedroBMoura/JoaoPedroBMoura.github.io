/**
 * Itens do menu principal (Header)
 */

import type { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#resumoProfissional' },
  { label: 'Experiência', href: '#experienciaProfissional' },
  { label: 'Vida Acadêmica', href: '#vidaAcademica' },
  { label: 'Tecnologias', href: '#skillsTecnologias' },
  { label: 'Projetos', href: '#projetosPessoais' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/joaopedrobmoura', isExternal: true },
  { label: 'GitHub', href: 'https://github.com/JoaoPedroBMoura', isExternal: true },
];

export default navItems;
