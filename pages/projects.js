export const Projeto = document.createElement('main')
Projeto.className = 'letra-branca'

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

const arrayObj = []

const obj = {
    nome: "Natureza",
    link: "https://joaopedrobmoura.github.io/Reportagens/"
}

const obj2 = {
    nome: "Reportagem",
    link: "https://joaopedrobmoura.github.io/Web-Fundamentals-Project/"
}

const obj3 = {
    nome: "Site de Vendas",
    link: "https://joaopedrobmoura.github.io/Momentos-Perfeitos/"
}

arrayObj.push(obj, obj2, obj3)

const ul = criarUl(arrayObj)
ul.className = 'no-link-style'

Projeto.append(titulo, ul)

