import { Util } from "./utils.js";

export const skillAndCourses = document.createElement('div')
skillAndCourses.className = 'letra-branca'

const cursosProgramacao = new Util("cursosProgramacao.json");

async function criaPagina() { 
    const titulo = document.createElement('h1')
    titulo.innerText = 'Skill e Cursos complementares'
    titulo.className = 'centro letra-branca'

    const tituloCarreiraProgramacao = document.createElement('h2')
    tituloCarreiraProgramacao.innerText = 'Programação'
    tituloCarreiraProgramacao.className = 'container letra-branca'
    
    const divProgramacao = document.createElement('div');
    divProgramacao.className = 'container col-md-6 col-xs-6 col-lg-6';

    const cursoDotNet = await cursosProgramacao.criaToggle(".Net", ".Net");
    cursoDotNet.className = 'padding-esquerda-20'

    const gitGitHub = await cursosProgramacao.criaToggle("Git e Git Hub", "gitGitHub");
    gitGitHub.className = 'padding-esquerda-20'

    divProgramacao.append(tituloCarreiraProgramacao, cursoDotNet, gitGitHub);
    skillAndCourses.append(titulo, divProgramacao);
}

criaPagina();