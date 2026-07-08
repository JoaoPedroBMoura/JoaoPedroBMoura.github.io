/**
 * SkillFilterContext — estado global para o painel de filtro de habilidades.
 * Permite que qualquer skill-tag clicável (projetos, matérias, experiências)
 * abra o painel de filtro com a habilidade pré-selecionada.
 */

import { createContext, useContext, useState, type ReactNode } from 'react';

interface SkillFilterContextType {
  filterOpen: boolean;
  preselectedSkill: string | null;
  openFilter: (skill?: string) => void;
  closeFilter: () => void;
}

const SkillFilterContext = createContext<SkillFilterContextType | null>(null);

export function SkillFilterProvider({ children }: { children: ReactNode }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [preselectedSkill, setPreselectedSkill] = useState<string | null>(null);

  const openFilter = (skill?: string) => {
    setPreselectedSkill(skill ?? null);
    setFilterOpen(true);
  };

  const closeFilter = () => {
    setFilterOpen(false);
    setPreselectedSkill(null);
  };

  return (
    <SkillFilterContext.Provider value={{ filterOpen, preselectedSkill, openFilter, closeFilter }}>
      {children}
    </SkillFilterContext.Provider>
  );
}

export function useSkillFilter() {
  const ctx = useContext(SkillFilterContext);
  if (!ctx) throw new Error('useSkillFilter deve ser usado dentro de SkillFilterProvider');
  return ctx;
}
