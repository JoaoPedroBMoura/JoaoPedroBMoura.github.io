import { Util } from "./utils.js";

const projetos = new Util("projetosProgramacao.json");

export async function criaPaginaProjeto() { 
    const sectionSite = document.createElement('section');
    sectionSite.className = 'container row text-center col-md-12 col-lg-12';

    const projetoNatureza = projetos.criaCard("Reportagem","projetosProgramacao.json","sites")

    sectionSite.append(projetoNatureza)
    return sectionSite;
}


