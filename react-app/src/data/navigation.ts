/**
 * Itens do menu principal (Header).
 * Cada label é bilíngue — o Header resolve com L(item.label).
 */

import type { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: { en: 'About',         pt: 'Sobre' },          href: '#resumoProfissional' },
  { label: { en: 'Experience',    pt: 'Experiência' },    href: '#experienciaProfissional' },
  { label: { en: 'Academic Life', pt: 'Vida Acadêmica' }, href: '#vidaAcademica' },
  { label: { en: 'Technologies',  pt: 'Tecnologias' },    href: '#skillsTecnologias' },
  { label: { en: 'Projects',      pt: 'Projetos' },       href: '#projetosPessoais' },
  { label: { en: 'LinkedIn',      pt: 'LinkedIn' },       href: 'https://linkedin.com/in/joaopedrobmoura', isExternal: true },
  { label: { en: 'GitHub',        pt: 'GitHub' },         href: 'https://github.com/JoaoPedroBMoura', isExternal: true },
];

export default navItems;
