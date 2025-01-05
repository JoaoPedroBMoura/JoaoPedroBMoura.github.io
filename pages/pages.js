import { Projeto } from "./projects.js";
import { skillAndCourses, criaPagina } from "./skills-and-courses.js";
const initialContent = document.getElementById("main-content");

async function pegarOsItensDeOutroHTML(paginaAntiga, metodo) {
    const body = document.getElementById(paginaAntiga);
    if (body) {
        try {
            const elementoCriado = await metodo;
            body.innerHTML = ""; if (typeof elementoCriado === 'string') {
                body.innerHTML = elementoCriado;
            } else {
                body.appendChild(elementoCriado);
            }
        } catch (error) {
            console.error("Erro ao pegar os itens:", error);
        }
    } else {
        console.error(`Elemento com id ${paginaAntiga} não encontrado`);
    }
}

function customSmoothScrollTo(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutQuad = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const scrollAmount = startPosition + distance * easeInOutQuad;
        window.scrollTo(0, scrollAmount);

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

// páginas 
const linkProjetos = document.getElementById('projeto-programacao');

    linkProjetos.addEventListener('click', (env) => {
            
        env.preventDefault();
        pegarOsItensDeOutroHTML(Projeto,"main-content");


    });

const linkDotnet = document.getElementById('dotnet');

    linkDotnet.addEventListener('click', async (env) => {
        env.preventDefault(); try {
            await pegarOsItensDeOutroHTML("divCursos", criaPagina("dotnet")); 
        
            setTimeout(() => {
                const container = document.getElementById('divCursos');
                customSmoothScrollTo(container, 3500);
            }, 100); 

        } catch (error) {
            console.error("Problema com o servidor:", error);
        }
    });

const linkGitGitHub = document.getElementById('cursosGitGitHub');

    linkGitGitHub.addEventListener('click', async (env) => {
        env.preventDefault();
        try {
            await pegarOsItensDeOutroHTML("divCursos", criaPagina("gitGitHub"));
            
            setTimeout(() => {
                const container = document.getElementById('divCursos');
                customSmoothScrollTo(container, 3500);
            }, 100); 
        } catch (error) {
            console.error("Problema com o servidor:", error);
        }
    });

const linkAnaliseDeDados = document.getElementById('cursosAnaliseDeDados');

    linkAnaliseDeDados.addEventListener('click', async (env) => {
        env.preventDefault();
        try {
            pegarOsItensDeOutroHTML("divCursos", criaPagina("analiseDeDados")); 
            setTimeout(() => {
                const container = document.getElementById('divCursos');
                customSmoothScrollTo(container, 3500);
            }, 100); 
        } catch (error) {
            console.error("Problema com o servidor:", error);
        }
    });

const linkLeanSixSigma = document.getElementById('cursosLeanSixSigma');

    linkLeanSixSigma.addEventListener('click', async (env) => {
        env.preventDefault();
        try {
            pegarOsItensDeOutroHTML("divCursos", criaPagina("leanSixSigma")); 
            setTimeout(() => {
                const container = document.getElementById('divCursos');
                customSmoothScrollTo(container, 3500);
            }, 100); 
        } catch (error) {
            console.error("Problema com o servidor:", error);
        }
    });

const home = document.getElementById('home');
    home.addEventListener('click', (env) => {
                
        env.preventDefault();
        body.innerHTML = initialContent;

    });

console.log(await criaPagina("dotnet"))
