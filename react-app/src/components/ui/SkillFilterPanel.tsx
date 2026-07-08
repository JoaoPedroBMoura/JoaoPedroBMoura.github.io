/**
 * SkillFilterPanel — painel de filtro de habilidades.
 * Lido via SkillFilterContext. Mostra lista de skills → clique mostra
 * onde a skill aparece (projetos, matérias, experiências).
 */

import { useState, useEffect, useRef } from 'react';
import { Drawer } from './Drawer';
import { useSkillFilter } from '../../context/SkillFilterContext';
import { getAllSkills, searchBySkill, type SkillResult } from '../../utils/skillSearch';

const TYPE_LABEL: Record<SkillResult['tipo'], string> = {
  projeto:    '📁 Projeto',
  materia:    '🎓 Matéria',
  experiencia: '💼 Experiência',
};

const TYPE_COLOR: Record<SkillResult['tipo'], string> = {
  projeto:    '#1e40af',
  materia:    '#166534',
  experiencia: '#7c3aed',
};

export function SkillFilterPanel() {
  const { filterOpen, preselectedSkill, closeFilter } = useSkillFilter();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const allSkills = getAllSkills();

  // Pré-seleciona skill quando vem de um tag externo
  useEffect(() => {
    if (filterOpen && preselectedSkill) {
      setSelected(preselectedSkill);
      setQuery('');
    } else if (filterOpen) {
      setSelected(null);
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [filterOpen, preselectedSkill]);

  const filteredSkills = query.trim()
    ? allSkills.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : allSkills;

  const results = selected ? searchBySkill(selected) : [];

  const grouped = results.reduce<Record<string, SkillResult[]>>((acc, r) => {
    if (!acc[r.tipo]) acc[r.tipo] = [];
    acc[r.tipo].push(r);
    return acc;
  }, {});

  return (
    <Drawer
      open={filterOpen}
      onClose={closeFilter}
      title={selected ? `"${selected}" — onde aparece` : 'Filtrar por Habilidade'}
    >
      {/* Input de busca */}
      {!selected && (
        <div style={{ marginBottom: '16px' }}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar habilidade..."
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(208,142,108,0.4)',
              color: 'var(--color-caramelo)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
          <p style={{ color: 'rgba(249,222,183,0.45)', fontSize: '0.75rem', marginTop: '8px' }}>
            {filteredSkills.length} habilidade{filteredSkills.length !== 1 ? 's' : ''} — clique para ver onde aparece
          </p>
        </div>
      )}

      {/* Botão voltar à lista */}
      {selected && (
        <button
          onClick={() => { setSelected(null); setQuery(''); }}
          style={{
            background: 'none',
            border: '1px solid rgba(208,142,108,0.35)',
            color: 'rgba(249,222,183,0.7)',
            padding: '6px 14px',
            borderRadius: '6px',
            fontSize: '0.78rem',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          ← Voltar à lista
        </button>
      )}

      {/* Lista de skills */}
      {!selected && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {filteredSkills.map(skill => (
            <button
              key={skill}
              onClick={() => setSelected(skill)}
              className="skill-tag"
              style={{ cursor: 'pointer', fontSize: '0.75rem' }}
            >
              {skill}
            </button>
          ))}
          {filteredSkills.length === 0 && (
            <p style={{ color: 'rgba(249,222,183,0.45)', fontSize: '0.85rem' }}>
              Nenhuma habilidade encontrada para "{query}".
            </p>
          )}
        </div>
      )}

      {/* Resultados agrupados */}
      {selected && (
        <div>
          {results.length === 0 && (
            <p style={{ color: 'rgba(249,222,183,0.5)', fontSize: '0.9rem' }}>
              Nenhuma ocorrência mapeada para esta habilidade ainda.
            </p>
          )}

          {(['projeto', 'materia', 'experiencia'] as const).map(tipo => {
            const items = grouped[tipo];
            if (!items?.length) return null;
            return (
              <div key={tipo} style={{ marginBottom: '28px' }}>
                <h3 style={{
                  color: 'var(--color-laranja)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}>
                  {TYPE_LABEL[tipo]} ({items.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(208,142,108,0.2)',
                        borderRadius: '10px',
                        padding: '14px 16px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                        <h4 style={{ color: 'var(--color-caramelo)', fontSize: '0.88rem', fontWeight: 600, margin: 0 }}>
                          {item.titulo}
                        </h4>
                        <span style={{
                          display: 'inline-block',
                          padding: '2px 10px',
                          borderRadius: '999px',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          background: TYPE_COLOR[tipo],
                          color: '#fff',
                          flexShrink: 0,
                        }}>
                          {item.subtitulo}
                        </span>
                      </div>
                      <p style={{ color: 'rgba(249,222,183,0.65)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>
                        {item.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Drawer>
  );
}

export default SkillFilterPanel;
