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

   // Seleciona o elemento principal
const bloco = document.querySelector('.bloco');
const img = document.querySelector('.hover-image')

    // Adiciona o evento de clique
    bloco.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique fora feche imediatamente
        bloco.classList.toggle('active'); // Alterna a exibição do card
    });

    // Fecha o card ao clicar fora
    document.addEventListener('click', (event) => {
        if (!bloco.contains(event.target)) {
            bloco.classList.remove('active'); // Remove a classe active
        }
    });


/*
const home = document.getElementById('home');
    home.addEventListener('click', (env) => {
        env.preventDefault();
        pegarOsItensDeOutroHTML("main-content", initialContent);
    });
*/