import { Util } from "./utils.js";

export const skillAndCourses = document.createElement('div')
skillAndCourses.className = 'letra-branca'

const cursosProgramacao = new Util("cursosProgramacao.json");
const cursosAnaliseDados = new Util("cursosAnaliseDados.json");
const certificacoes = new Util("certificacoes.json")

export async function criaPagina(botao) { 
    const divConteudoPagina = document.createElement("div")
    divConteudoPagina.className = 'letra-branca centraliza-cursos'

    const divProgramacao = document.createElement('div');
    divProgramacao.className = 'container col-md-4 col-xs-4 col-lg-4 ';
    
    
    const divAnalistaDados = document.createElement('div');
    divAnalistaDados.className = 'container col-md-4 col-xs-4 col-lg-4 ';

    const divCertificados = document.createElement('div');
    divCertificados.className = 'container col-md-4 col-xs-4 col-lg-4 ';
  

    const titulo = document.createElement('h1')
    titulo.innerText = 'Skill e Cursos complementares'
    titulo.className = 'centro letra-branca'

    const tituloCarreiraProgramacao = document.createElement('h2')
    tituloCarreiraProgramacao.innerText = 'Programação'
    tituloCarreiraProgramacao.className = 'container letra-branca'

    const tituloCarreiraAnaliseDados = document.createElement("h2");
    tituloCarreiraAnaliseDados.innerText = 'Analise de dados';
    tituloCarreiraAnaliseDados.className = 'container letra-branca';

    const tituloCertificados = document.createElement("h2");
    tituloCertificados.innerText = 'Certificados';
    tituloCertificados.className = 'container letra-branca';
    
    const cursoDotNet = await cursosProgramacao.criaToggle(".Net", "dotNet");
    cursoDotNet.className = 'padding-esquerda-20'

    const gitGitHub = await cursosProgramacao.criaToggle("Git e Git Hub", "gitGitHub");
    gitGitHub.className = 'padding-esquerda-20'
    
    const comunidadeDS = await cursosAnaliseDados.criaToggle("Comunidade DS", "ComunidadeDs");
    comunidadeDS.className = 'padding-esquerda-20';

    const LeanSixSigma = await certificacoes.criaToggle("Lean Six Sigma", "gestao-projetos");
    LeanSixSigma.className = 'padding-esquerda-20';

    divAnalistaDados.append(tituloCarreiraAnaliseDados,comunidadeDS);
    divProgramacao.append(tituloCarreiraProgramacao, cursoDotNet, gitGitHub);
    divCertificados.append(tituloCertificados,LeanSixSigma);

    divConteudoPagina.append(divProgramacao, divAnalistaDados,divCertificados)
    skillAndCourses.append(titulo, divConteudoPagina);
    
    if (botao == "dotnet") {
        return cursoDotNet;
    } else if (botao == "gitGitHub") {
        return gitGitHub;
    }
}
