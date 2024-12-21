import { Util } from "./utils.js";

export const Projeto = document.createElement('div')
Projeto.className = 'container letra-branca lado-a-lado margem-cima-30'

const projetos = new Util("projetosProgramacao.json");

async function criaPagina() { 
    const divSites = document.createElement('div');
    divSites.className = 'container col-md-6 col-xs-6 col-lg-6';

    const divConsoles = document.createElement('div');
    divConsoles.className = 'container col-md-6 col-xs-6 col-lg-6';
    
    const titulo = document.createElement('h1')
    titulo.innerText = 'Projetos'
    titulo.className = 'centro letra-branca'

    const tituloProjetosSites = document.createElement('h2')
    tituloProjetosSites.innerText = 'Sites'
    tituloProjetosSites.className = 'container letra-branca'

    const tituloProjetosConsole = document.createElement('h2')
    tituloProjetosConsole.innerText = 'Projetos de Console'
    tituloProjetosConsole.className = 'container letra-branca'

    const proejtosDeSites = await projetos.criaToggle("Fundamentos da Web", "sites");
    proejtosDeSites.className = 'padding-esquerda-20'

    const projetosDeConsole = await projetos.criaToggle("Projetos de Console", "deConsole");
    projetosDeConsole.className = 'padding-esquerda-20'

    divSites.append(tituloProjetosSites, proejtosDeSites)
    divConsoles.append(tituloProjetosConsole,projetosDeConsole)
    Projeto.append(divSites,divConsoles);
}

criaPagina();


