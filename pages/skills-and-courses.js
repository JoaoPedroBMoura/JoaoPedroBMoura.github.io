export const skillAndCourses = document.createElement('div')
skillAndCourses.className = 'letra-branca'

const DB = "https://joaopedrobmoura.github.io/data"
const estrutura = "db.json"

function criarLiCursos(nomeCurso,link) {
    console.log(`Criando LI para: ${nomeCurso}`);
    const liCurso = document.createElement('li')
        liCurso.className ='margin-list-10 '
    const linkCurso = document.createElement("a")
    linkCurso.className = 'dropdown-item'

    linkCurso.className = 'letra-branca font-media'

    linkCurso.href = link
    linkCurso.innerText = nomeCurso
    liCurso.appendChild(linkCurso)
    
    return liCurso;
}

function criarUl(arrayObj) {
    console.log(`Criando UL para cursos`)
    const ulCursos = document.createElement('ul')
    ulCursos.className = 'dropdown-menu navbar-nav'

    arrayObj.forEach(obj => {

        console.log(obj)
        
        const linkPronto = criarLiCursos(obj.nome, obj.link)
         ulCursos.append(linkPronto)
        
    });
    
    return ulCursos

}

async function pegarDados(materia) {
    try {
        const response = await fetch(`${DB}/${estrutura}`, { 
            method: "GET"
        }); 
        if (response.ok) {
            const json = await response.json();
            console.log(json[materia])
            return json[materia]
        } else {
            console.error("Erro ao carregar os dados JSON");
        }
    } catch (error) {
        console.error("Erro na função pegarDados", error);
   }
   
}

async function criaToggle(nomeToggle,curso) {
    try {
        const divBotao = document.createElement("div");
        divBotao.className = 'navbar-toggler dropdown no-break letra-branca';

        const toggleButton = document.createElement('a'); 
        toggleButton.href = '#cursos';
        toggleButton.className = 'dropdown-toggle letra-branca font-media'; 
        toggleButton.setAttribute('data-toggle', 'collapse');
        toggleButton.innerText = nomeToggle;
        divBotao.append(toggleButton);
        
        const array = await pegarDados(curso)

        const ulDeProjetos = criarUl(array);
        ulDeProjetos.id = 'cursos';
        ulDeProjetos.className = 'collapse list-unstyled'
        divBotao.appendChild(ulDeProjetos);
       

        return divBotao;
    } catch(error){
        console.error("Problema com o servidor", error);
    }
    
}

async function criaPagina() { 
    const titulo = document.createElement('h1')
    titulo.innerText = 'Skill e Cursos complementares'
    titulo.className = 'centro letra-branca'

    const tituloCarreiraProgramacao = document.createElement('h2')
    tituloCarreiraProgramacao.innerText = 'Programação'
    tituloCarreiraProgramacao.className = 'container letra-branca'
    
    const divProgramacao = document.createElement('div');
    divProgramacao.className = 'container col-md-6 col-xs-6 col-lg-6';

    const cursoDotNet = await criaToggle(".Net", "cursos");
    cursoDotNet.className = 'padding-esquerda-20'

    divProgramacao.append(tituloCarreiraProgramacao, cursoDotNet)
    skillAndCourses.append(titulo, divProgramacao);
}

criaPagina();