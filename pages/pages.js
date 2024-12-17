import { Projeto } from "./projects.js";
import { skillAndCourses } from "./skills-and-courses.js";
const body = document.getElementById("main-content");

const initialContent = body.innerHTML;


function pegarOsItensDeOutroHTML(pagina) {   
    body.innerHTML = ``;
    body.append(pagina);
}

const linkProjetos = document.getElementById('projeto-programacao');

linkProjetos.addEventListener('click', (env) => {
        
    env.preventDefault();
    pegarOsItensDeOutroHTML(Projeto);


});

const linkSkillAndCourses = document.getElementById('cursos-e-certificacoes');
    
linkSkillAndCourses.addEventListener('click', (env) => {
            
    env.preventDefault();
    pegarOsItensDeOutroHTML(skillAndCourses);

});

const home = document.getElementById('home');
    home.addEventListener('click', (env) => {
                
        env.preventDefault();
        body.innerHTML = initialContent;

    });
