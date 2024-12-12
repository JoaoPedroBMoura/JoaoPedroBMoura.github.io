import { Projeto } from "./projects.js";
const body = document.querySelector('body')

function pegarOsItensDeOutroHTML() {
    
    body.innerHTML = ``

    body.append(Projeto)
    

    
}

const linkProjeto = document.getElementById('projeto-programacao')
console.log(linkProjeto)
console.log(Projeto)

    linkProjeto.addEventListener('click', (env) => {
        
        env.preventDefault()
        pegarOsItensDeOutroHTML()


    })
