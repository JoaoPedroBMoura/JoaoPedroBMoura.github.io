import { Projeto } from "./projects.js";
import { skillAndCourses, criaPagina } from "./skills-and-courses.js";
const initialContent = document.getElementById("main-content");

function localSelecionado(local) {
    body = document.getElementById(local);
}

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

const linkProjetos = document.getElementById('projeto-programacao');

linkProjetos.addEventListener('click', (env) => {
        
    env.preventDefault();
    pegarOsItensDeOutroHTML(Projeto,"main-content");


});

const linkDotnet = document.getElementById('dotnet');

linkDotnet.addEventListener('click', async (env) => {
    env.preventDefault(); try {
        pegarOsItensDeOutroHTML("divCursos", criaPagina("dotnet")); 
    
    } catch (error) {
        console.error("Problema com o servidor:", error);
    }
});

const linkGitGitHub = document.getElementById('cursosGitGitHub');

linkGitGitHub.addEventListener('click', async (env) => {
    env.preventDefault();
    try {
        pegarOsItensDeOutroHTML("divCursos", criaPagina("gitGitHub")); 
        console.log(criaPagina("gitGitHub"));
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
