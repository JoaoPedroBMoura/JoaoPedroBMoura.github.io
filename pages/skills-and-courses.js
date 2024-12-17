export const skillAndCourses = document.createElement('div')
            //  skillAndCourses.className = 'letra-branca'

const titulo = document.createElement('h1')
titulo.innerText = 'Skill e Cursos complementares'
titulo.className = 'centro letra-branca'

const tituloCarreiraProgramacao = document.createElement('h2')
tituloCarreiraProgramacao.innerText = 'Programação'
tituloCarreiraProgramacao.className = 'container letra-branca'

function criarLiCursos(nomeCurso,link) {
    const liCurso = document.createElement('li')
    const linkCurso = document.createElement("a")

    linkCurso.className = 'letra-branca font-media'

    linkCurso.href = link
    linkCurso.innerText = nomeCurso
    liCurso.appendChild(linkCurso)
    
    return liCurso;
}

function criarUl(arrayObj) {
    const ulCursos = document.createElement('ul')
    
    arrayObj.forEach(obj => {
        
        const linkPronto = criarLiCursos(obj.nome, obj.link)
         ulCursos.append(linkPronto)
        
    });
    
    return ulCursos

}

async function pegarDados() {
    
    const respose = await fetch("http://localhost:3000/cursos", {

        method: "GET"

    })
    return respose.json()

}


const ulCursosProgramacao = criarUl(await pegarDados())
ulCursosProgramacao.className = 'no-link-style container'

skillAndCourses.append(titulo, tituloCarreiraProgramacao, ulCursosProgramacao)