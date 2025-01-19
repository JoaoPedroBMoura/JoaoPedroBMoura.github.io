export class Util{
     DB = "https://joaopedrobmoura.github.io/data"
    entidades
    
    constructor(entidade) {
        
        this.entidades = entidade

    }

     criarLiCursos(nomeCurso,link) {
        const liCurso = document.createElement('li')
            liCurso.className ='margin-list-10 '
        const linkCurso = document.createElement("a")
        linkCurso.className = 'dropdown-item '

        linkCurso.className = 'herda-cor font-media'

        linkCurso.href = link
        linkCurso.innerText = nomeCurso
        liCurso.appendChild(linkCurso)
        
        return liCurso;
    }

     criarUl(arrayObj) {
        console.log(`Criando UL para cursos`)
        const ulCursos = document.createElement('ul')
        ulCursos.className = 'dropdown-menu navbar-nav'

        arrayObj.forEach(obj => {

            console.log(obj)
            
            const linkPronto = this.criarLiCursos(obj.nome, obj.link)
            ulCursos.append(linkPronto)
            
        });
        
        return ulCursos

    }

    async pegarDados(materia) {
        try {
            const response = await fetch(`${this.DB}/${this.entidades}`, { 
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

    async criaToggle(nomeToggle,curso) {
        try {
            const divBotao = document.createElement("div");
            divBotao.className = 'navbar-toggler dropdown no-break herda-cor';

            const toggleButton = document.createElement('button'); 
            toggleButton.className = 'bnt button-text font-media dropdown-toggle'; 
            toggleButton.setAttribute('data-toggle', 'collapse');
            toggleButton.setAttribute('data-target', `#${curso}`);
            toggleButton.setAttribute('type', 'button');
            toggleButton.setAttribute('aria-controls', `${curso}`);
            toggleButton.setAttribute('aria-expanded', 'true');
            toggleButton.innerText = nomeToggle;
            divBotao.append(toggleButton);
            
            const array = await this.pegarDados(curso)

            const ulDeProjetos = this.criarUl(array);
            ulDeProjetos.id = curso;
            ulDeProjetos.className = 'collapse show list-unstyled'
            divBotao.appendChild(ulDeProjetos);
        

            return divBotao;
        } catch(error){
            console.error("Problema com o servidor", error);
        }
        
    }

    async pegarDadosProjeto(projeto,  array) {
        try {
            const response = await fetch(`${this.DB}/${this.entidades}`, {
                method: "GET"
            });
            if (response.ok) {
                const json = await response.json();

                const projetoJson = json[array]

                const variavel = projetoJson.find(element => element.nome == projeto)

                return variavel;
            } else {
                console.error("Erro ao carregar os dados JSON");
            }
        } catch (error) {
            console.error("Erro na função pegarDados", error);
        }
    }

    async criaCard(nomeProjeto,array) {

        const dadoProjeto = await this.pegarDadosProjeto(nomeProjeto,array)

        const divSites = document.createElement('div');
        divSites.className = 'container col-md-2 col-lg-3 margem-baixo-30  text-center background-ferrugem p-4';
        
        const tituloCard = document.createElement('h4');
        tituloCard.innerText = `${dadoProjeto.nome}`;
        tituloCard.className = 'letra-branca mb-4';

        const imagemProjeto = document.createElement('img')
        imagemProjeto.className = 'img-fluid'
        imagemProjeto.src = `${dadoProjeto.linkImg}`
        imagemProjeto.alt =  `${dadoProjeto.textoAlt}`

        const descricaoProjeto = document.createElement('p')
        descricaoProjeto.innerText = `${dadoProjeto.descricao}`
        descricaoProjeto.className = 'letra-caramelo mb-4'

        const linkProjeto = document.createElement('a')
        linkProjeto.innerText = `${dadoProjeto.nome}`
        linkProjeto.href = `${dadoProjeto.link}`

        divSites.append(tituloCard, imagemProjeto, descricaoProjeto, linkProjeto)
        
        return divSites;
    }

}