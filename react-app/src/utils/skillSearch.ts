/**
 * Utilitário de busca por habilidade — agrega dados de projetos, matérias
 * e experiências para o SkillFilterPanel.
 */

import { projects } from '../data/projects';
import { semesters } from '../data/academic';
import { experiencias } from '../data/experience';

export interface SkillResult {
  tipo: 'projeto' | 'materia' | 'experiencia';
  titulo: string;
  subtitulo: string;
  descricao: string;
  tags: string[];
}

/** Retorna todas as habilidades únicas de todas as fontes, ordenadas. */
export function getAllSkills(): string[] {
  const set = new Set<string>();
  projects.forEach(p => p.techs.forEach(t => set.add(t)));
  semesters.forEach(s => s.subjects.forEach(sub => sub.skills.forEach(sk => set.add(sk))));
  experiencias.forEach(e => e.techs?.forEach(t => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

/**
 * Busca onde uma habilidade aparece em projetos, matérias e experiências.
 * Usa comparação case-insensitive para cobrir variações de capitalização.
 */
export function searchBySkill(skill: string): SkillResult[] {
  const lc = skill.toLowerCase();
  const results: SkillResult[] = [];

  projects.forEach(p => {
    if (p.techs.some(t => t.toLowerCase() === lc)) {
      results.push({
        tipo: 'projeto',
        titulo: p.nome,
        subtitulo: p.statusLabel,
        descricao: p.detalhe ?? p.descricao,
        tags: p.techs,
      });
    }
  });

  semesters.forEach(s => {
    s.subjects.forEach(sub => {
      if (sub.skills.some(sk => sk.toLowerCase() === lc)) {
        const statusLabel = s.status === 'concluido' ? 'Concluído' : s.status === 'cursando' ? 'Cursando' : 'Futuro';
        results.push({
          tipo: 'materia',
          titulo: sub.nome,
          subtitulo: `${s.label} · ${statusLabel}`,
          descricao: sub.descricao ?? sub.observacao ?? `Disciplina do ${s.label} do curso de Sistemas de Informação.`,
          tags: sub.skills,
        });
      }
    });
  });

  experiencias.forEach(e => {
    if (e.techs?.some(t => t.toLowerCase() === lc)) {
      results.push({
        tipo: 'experiencia',
        titulo: `${e.cargo} — ${e.empresa}`,
        subtitulo: e.periodo,
        descricao: e.descricao,
        tags: e.techs ?? [],
      });
    }
  });

  return results;
}
