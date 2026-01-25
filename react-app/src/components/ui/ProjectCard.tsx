/**
 * Componente Card de Projeto
 * Usa classes CSS originais
 */

import type { Projeto } from '../../types';

interface ProjectCardProps {
  projeto: Projeto;
}

export function ProjectCard({ projeto }: ProjectCardProps) {
  return (
    <div className="container col-md-6 col-lg-6 margem-baixo-30 margin-d-e-5 background-ferrugem p-4 imagem-ampliavel">
      <h4 className="letra-branca mb-4">{projeto.nome}</h4>
      
      <img
        className="img-fluid"
        src={projeto.linkImg}
        alt={projeto.textoAlt}
        loading="lazy"
      />
      
      <p className="letra-caramelo mb-4">{projeto.descricao}</p>
      
      <a
        href={projeto.link}
        target="_blank"
        rel="noopener noreferrer"
        className="borda-link"
      >
        {projeto.nome}
      </a>
    </div>
  );
}

export default ProjectCard;
