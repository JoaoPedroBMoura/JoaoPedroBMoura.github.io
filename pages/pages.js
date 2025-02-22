import { criaPaginaProjeto } from "./projects.js";
import { criaPagina } from "./skills-and-courses.js";
import { criaPaginaProjetoDados } from "./dataAnalysisProjects.js";
const initialContent = document.getElementById("main-content");

async function pegarOsItensDeOutroHTML(paginaAntiga, novaPagina) {
    const body = document.getElementById(paginaAntiga);
    body.innerHTML = ``;
    body.append(novaPagina);
}

// Course and project pages
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

   // Take care of my image with personal data
const bloco = document.querySelector('.bloco');

   
    bloco.addEventListener('click', (event) => {
        event.stopPropagation(); 
        bloco.classList.toggle('active');
    });

   
    document.addEventListener('click', (event) => {
        if (!bloco.contains(event.target)) {
            bloco.classList.remove('active'); 
        }
    });

    // Takes care of project collapses
        let clickCount = 0;
        const clickDelay = 500; 

        document.getElementById('projetosDeSite').addEventListener('click', function() {
            clickCount++;

            setTimeout(() => {
                if (clickCount === 1) {
                    
                    $('#divProjetos').collapse('show');
                } else if (clickCount === 2) {
                    
                    $('#divProjetos').collapse('hide');
                }
                clickCount = 0; 
            }, clickDelay);
        });

        document.getElementById('projetosApi').addEventListener('click', function() {
            clickCount++;

            setTimeout(() => {
                if (clickCount === 1) {
                    
                    $('#divProjetos').collapse('show');
                } else if (clickCount === 2) {
                    
                    $('#divProjetos').collapse('hide');
                }
                clickCount = 0; 
            }, clickDelay);
        });

        document.getElementById('projetosConsole').addEventListener('click', function() {
            clickCount++;

            setTimeout(() => {
                if (clickCount === 1) {
                    
                    $('#divProjetos').collapse('show');
                } else if (clickCount === 2) {
                    
                    $('#divProjetos').collapse('hide');
                }
                clickCount = 0; 
            }, clickDelay);
        });

        document.getElementById('projetoAnalises').addEventListener('click', function() {
            clickCount++;

            setTimeout(() => {
                if (clickCount === 1) {
                    
                    $('#divProjetos').collapse('show');
                } else if (clickCount === 2) {
                    
                    $('#divProjetos').collapse('hide');
                }
                clickCount = 0; 
            }, clickDelay);
        });

        document.addEventListener('DOMContentLoaded', () => {
            const backToTopButton = document.querySelector('.back-to-top');
        
            // Exibir botão ao rolar a página
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
        
            // Função para rolar suavemente para o topo
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
        