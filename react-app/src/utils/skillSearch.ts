/**
 * Utilitário de busca por habilidade — agrega dados de projetos, matérias
 * e experiências para o SkillFilterPanel.
 *
 * As tags/skills continuam em português (são a CHAVE de busca). Já os
 * TÍTULOS e DESCRIÇÕES mostrados nos resultados são bilíngues, então
 * searchBySkill recebe o idioma atual (lang) e resolve cada texto.
 */

import { projects } from '../data/projects';
import { semesters, statusStyle } from '../data/academic';
import { experiencias } from '../data/experience';
import type { Locale } from '../i18n/config';

export interface SkillResult {
  tipo: 'projeto' | 'materia' | 'experiencia';
  titulo: string;
  subtitulo: string;
  descricao: string;
  tags: string[];
}

/** Retorna todas as habilidades únicas (chaves em PT) de todas as fontes, ordenadas. */
export function getAllSkills(): string[] {
  const set = new Set<string>();
  projects.forEach(p => p.techs.forEach(t => set.add(t)));
  semesters.forEach(s => s.subjects.forEach(sub => sub.skills.forEach(sk => set.add(sk))));
  experiencias.forEach(e => e.techs?.forEach(t => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

/**
 * Busca onde uma habilidade aparece em projetos, matérias e experiências.
 * Compara em case-insensitive para cobrir variações de capitalização.
 * `lang` escolhe o idioma dos títulos e descrições exibidos.
 */
export function searchBySkill(skill: string, lang: Locale): SkillResult[] {
  const lc = skill.toLowerCase();
  const results: SkillResult[] = [];

  projects.forEach(p => {
    if (p.techs.some(t => t.toLowerCase() === lc)) {
      results.push({
        tipo: 'projeto',
        titulo: p.nome[lang],
        subtitulo: p.statusLabel[lang],
        descricao: (p.detalhe ?? p.descricao)[lang],
        tags: p.techs,
      });
    }
  });

  semesters.forEach(s => {
    s.subjects.forEach(sub => {
      if (sub.skills.some(sk => sk.toLowerCase() === lc)) {
        const fallback = lang === 'en'
          ? `Course in the ${s.label.en} of the Information Systems program.`
          : `Disciplina do ${s.label.pt} do curso de Sistemas de Informação.`;
        results.push({
          tipo: 'materia',
          titulo: sub.nome[lang],
          subtitulo: `${s.label[lang]} · ${statusStyle[s.status].label[lang]}`,
          descricao: sub.descricao?.[lang] ?? sub.observacao?.[lang] ?? fallback,
          tags: sub.skills,
        });
      }
    });
  });

  experiencias.forEach(e => {
    if (e.techs?.some(t => t.toLowerCase() === lc)) {
      results.push({
        tipo: 'experiencia',
        titulo: `${e.cargo[lang]} — ${e.empresa}`,
        subtitulo: e.periodo[lang],
        descricao: e.descricao[lang],
        tags: e.techs ?? [],
      });
    }
  });

  return results;
}
