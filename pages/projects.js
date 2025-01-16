import { Util } from "./utils.js";

const projetos = new Util("projetosProgramacao.json");

export async function criaPaginaProjeto(projeto) { 
    const sectionSite = document.createElement('section');
    sectionSite.className = 'container row text-center col-md-12 col-lg-12';

    const projetoEmpresa = await projetos.criaCard("Site de Empresa","sites")
    const projetoNatureza = await projetos.criaCard("Reportagem", "sites")
    const projetoVendas = await projetos.criaCard("Site de Vendas","sites")

    sectionSite.append(projetoEmpresa, projetoNatureza, projetoVendas)
    
    const sectionAPI = document.createElement('section');
    sectionAPI.className = 'container row text-center col-md-12 col-lg-12';

    const projetoAPIContatos = await projetos.criaCard("API de cadastro de cliente - c#/.NET 6.0", "api");

    sectionAPI.append(projetoAPIContatos)

    if (projeto == "site") {
        return sectionSite;
    } else if (projeto == "api") {
        return sectionAPI;
    }
    
    
}


