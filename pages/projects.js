import { Util } from "./utils.js";

const projetos = new Util("projetosProgramacao.json");

export async function criaPaginaProjeto(projeto) { 

    //sites
    const sectionSite = document.createElement('section');
    sectionSite.className = 'container row text-center col-md-12 col-lg-12';

    const projetoEmpresa = await projetos.criaCard("Site de Empresa","sites")
    const projetoNatureza = await projetos.criaCard("Reportagem", "sites")
    const projetoVendas = await projetos.criaCard("Site de Vendas","sites")

    sectionSite.append(projetoEmpresa, projetoNatureza, projetoVendas)
    
    //API'S
    const sectionAPI = document.createElement('section');
    sectionAPI.className = 'container row text-center col-md-12 col-lg-12';

    const projetoAPIContatos = await projetos.criaCard("API de cadastro de cliente - c#/.NET 6.0", "api");

    sectionAPI.append(projetoAPIContatos)

    //Projetos de Console
    const sectionConsole = document.createElement('section');
    sectionConsole.className = 'container row text-center col-md-12 col-lg-12';

    const projetoEstacionamento = await projetos.criaCard("Controle de Estacionamento - c#/.NET 9.0", "deConsole");
    const projetoHotel = await projetos.criaCard("Sistema de Hospedagem - c#/.NET 9.0", "deConsole");

    sectionConsole.append(projetoEstacionamento,projetoHotel)

    if (projeto == "site") {
        return sectionSite;
    } else if (projeto == "api") {
        return sectionAPI;
    } else if (projeto == "console") {
        return sectionConsole;
    }
    
    
}


