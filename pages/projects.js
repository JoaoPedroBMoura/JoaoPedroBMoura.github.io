import { Util } from "./utils.js";

const projetos = new Util("projetosProgramacao.json");

export async function criaPaginaProjeto() { 
    const sectionSite = document.createElement('section');
    sectionSite.className = 'container row text-center col-md-12 col-lg-12';

    const projetoEmpresa = await projetos.criaCard("Site de Empresa","sites")
    const projetoNatureza = await projetos.criaCard("Reportagem", "sites")
    const projetoVendas = await projetos.criaCard("Site de Vendas","sites")

    sectionSite.append(projetoEmpresa,projetoNatureza,projetoVendas)
    return sectionSite;
}


