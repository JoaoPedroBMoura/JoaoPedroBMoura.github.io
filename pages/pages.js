import { criaPaginaProjeto } from "./projects.js";
import { criaPagina } from "./skills-and-courses.js";
import { criaPaginaProjetoDados } from "./dataAnalysisProjects.js";
const initialContent = document.getElementById("main-content");

async function pegarOsItensDeOutroHTML(paginaAntiga, novaPagina) {
    const body = document.getElementById(paginaAntiga);
    body.innerHTML = ``;
    body.append(novaPagina);
}

// páginas  
const linkDotnet = document.getElementById('dotnet');

    linkDotnet.addEventListener('click', async (env) => {
        env.preventDefault();
            await pegarOsItensDeOutroHTML("divCursos", await criaPagina("dotnet")); 
        });

const linkGitGitHub = document.getElementById('cursosGitGitHub');

    linkGitGitHub.addEventListener('click', async (env) => {
        env.preventDefault();
            await pegarOsItensDeOutroHTML("divCursos", await criaPagina("gitGitHub"));
    });

const linkAnaliseDeDados = document.getElementById('cursosAnaliseDeDados');

    linkAnaliseDeDados.addEventListener('click', async (env) => {
        env.preventDefault();
            pegarOsItensDeOutroHTML("divCursos", await criaPagina("analiseDeDados")); 
    });

const linkLeanSixSigma = document.getElementById('cursosLeanSixSigma');

    linkLeanSixSigma.addEventListener('click', async (env) => {
        env.preventDefault();
    
            pegarOsItensDeOutroHTML("divCursos", await criaPagina("leanSixSigma")); 
    });

const linkProjetoSite = document.getElementById('projetosDeSite');

    linkProjetoSite.addEventListener('click', async (env) => {
        env.preventDefault();

            pegarOsItensDeOutroHTML("divProjetos", await criaPaginaProjeto("site")); 
    });

    
const linkProjetosApi = document.getElementById('projetosApi');

    linkProjetosApi.addEventListener('click', async (env) => {
        env.preventDefault();

            pegarOsItensDeOutroHTML("divProjetos", await criaPaginaProjeto("api")); 
    });

const linkAnaliseDadosExcel = document.getElementById('projetoAnalises');

    linkAnaliseDadosExcel.addEventListener('click', async (env) => {
        env.preventDefault();

            pegarOsItensDeOutroHTML("divProjetos", await criaPaginaProjetoDados());
    });

const linkConsole = document.getElementById('projetosConsole');

    linkConsole.addEventListener('click', async (env) => {
        env.preventDefault();

            pegarOsItensDeOutroHTML("divProjetos", await criaPaginaProjeto("console")); 
    });


/*
const home = document.getElementById('home');
    home.addEventListener('click', (env) => {
        env.preventDefault();
        pegarOsItensDeOutroHTML("main-content", initialContent);
    });
*/