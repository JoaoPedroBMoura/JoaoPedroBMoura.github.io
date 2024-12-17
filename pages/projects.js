export const Projeto = document.createElement('div')
Projeto.className = 'letra-branca   '

const titulo = document.createElement('h1')
titulo.innerText = 'Projetos'
titulo.className = 'centro'

function criarLi(nomeLink,link) {
    const liProjeto = document.createElement('li')
    const linkSiteNatureza = document.createElement("a")
    linkSiteNatureza.className = 'letra-branca font-media'
    linkSiteNatureza.href = link
    linkSiteNatureza.innerText = nomeLink
    liProjeto.appendChild(linkSiteNatureza)
    
    return liProjeto;
}

function criarUl(arrayObj) {
    const ulProjetos = document.createElement('ul')
    
    arrayObj.forEach(obj => {
        
        const linkPronto = criarLi(obj.nome, obj.link)
         ulProjetos.append(linkPronto)
        
    });
    
    return ulProjetos

}

async function pegarDados() {
    
    const respose = await fetch("http://localhost:3000/pages", {

        method: "GET"

    })
    return respose.json()

}

const ul = criarUl(await pegarDados())
ul.className = 'no-link-style'

Projeto.append(titulo, ul)