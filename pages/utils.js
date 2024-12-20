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
        linkCurso.className = 'dropdown-item'

        linkCurso.className = 'letra-branca font-media'

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
            divBotao.className = 'navbar-toggler dropdown no-break letra-branca';

            const toggleButton = document.createElement('a'); 
            toggleButton.href = '#cursos';
            toggleButton.className = 'dropdown-toggle letra-branca font-media'; 
            toggleButton.setAttribute('data-toggle', 'collapse');
            toggleButton.innerText = nomeToggle;
            divBotao.append(toggleButton);
            
            const array = await this.pegarDados(curso)

            const ulDeProjetos = this.criarUl(array);
            ulDeProjetos.id = 'cursos';
            ulDeProjetos.className = 'collapse list-unstyled'
            divBotao.appendChild(ulDeProjetos);
        

            return divBotao;
        } catch(error){
            console.error("Problema com o servidor", error);
        }
        
    }

}