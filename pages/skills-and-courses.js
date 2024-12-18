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
        liCurso.className ='margin-list-10'
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
    const response = await fetch("https://joaopedrobmoura.github.io/data/db.json", { 
        method: "GET"
    }); 
        if (response.ok) {
            const json = await response.json();
            return json.cursos; // Extrai e retorna o array específico 
    } else {
        console.error("Erro ao carregar os dados JSON");
    }
}


const ulCursosProgramacao = criarUl(await pegarDados())
ulCursosProgramacao.className = 'no-link-style container'

skillAndCourses.append(titulo, tituloCarreiraProgramacao, ulCursosProgramacao)