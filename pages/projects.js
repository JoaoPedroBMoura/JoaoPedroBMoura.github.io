import { Util } from "./utils.js";

export const Projeto = document.createElement('div')
Projeto.className = 'letra-branca'

const projetos = new Util("projetosProgramacao.json");

async function criaPagina() { 
    const titulo = document.createElement('h1')
    titulo.innerText = 'Projetos'
    titulo.className = 'centro letra-branca'

    const tituloProjetosProgramacao = document.createElement('h2')
    tituloProjetosProgramacao.innerText = 'Sites'
    tituloProjetosProgramacao.className = 'container letra-branca'
    
    const divProjetosProgramcao = document.createElement('div');
    divProjetosProgramcao.className = 'container col-md-6 col-xs-6 col-lg-6';

    const projetosProgramcao = await projetos.criaToggle("Fundamentos da Web", "sites");
    projetosProgramcao.className = 'padding-esquerda-20'

    // const projetosDeConsole = await projetos.criaToggle("Projetos de Console", "console");
    // projetosDeConsole.className = 'padding-esquerda-20'

    divProjetosProgramcao.append(tituloProjetosProgramacao, projetosProgramcao);
    Projeto.append(titulo, divProjetosProgramcao);
}

criaPagina();


