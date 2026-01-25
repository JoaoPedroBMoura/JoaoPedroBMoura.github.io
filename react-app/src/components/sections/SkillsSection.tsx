/**
 * Seção de Tecnologias e Skills
 * Usa classes CSS originais
 */

interface TechIcon {
  src: string;
  alt: string;
}

const backendTechs: TechIcon[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', alt: 'C#' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg', alt: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg', alt: 'Git' },
];

const frameworkTechs: TechIcon[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', alt: '.NET Core' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuget/nuget-original-wordmark.svg', alt: 'NuGet' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg', alt: 'Spring' },
];

const databaseTechs: TechIcon[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain-wordmark.svg', alt: 'SQLite' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg', alt: 'SQL Server' },
];

const frontendTechs: TechIcon[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg', alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg', alt: 'Bootstrap' },
];

const osTechs: TechIcon[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg', alt: 'jQuery' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', alt: 'Windows 11' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', alt: 'Linux' },
];

function TechRow({ techs }: { techs: TechIcon[] }) {
  return (
    <div className="row text-center margem-cima-30 margem-baixo-30">
      {techs.map((tech) => (
        <div key={tech.alt} className="col-3 col-sm-3 mb-3">
          <img src={tech.src} alt={tech.alt} className="img-fluid tech-icon" width="50" />
        </div>
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skillsTecnologias" className="row margem-0 background-laranja padding-acima">
      {/* Tecnologias */}
      <div className="margem-esquerda-30 col-md-12 col-lg-6" data-aos="fade-right">
        <h2 className="text-center letra-preta mb-4">Tecnologias</h2>
        
        <div className="container background-caramelo p-4 margem-baixo-30">
          <section className="mb-4">
            <TechRow techs={backendTechs} />
          </section>
          <hr />
          <section className="mb-4">
            <TechRow techs={frameworkTechs} />
          </section>
          <hr />
          <section className="mb-4">
            <TechRow techs={databaseTechs} />
          </section>
          <hr />
          <section className="mb-4">
            <TechRow techs={frontendTechs} />
          </section>
          <section className="mb-4">
            <div className="row text-center">
              {osTechs.map((tech) => (
                <div key={tech.alt} className="col-3 col-sm-3 mb-3">
                  <img src={tech.src} alt={tech.alt} className="img-fluid" width="50" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Skills */}
      <div className="margem-esquerda-30 col-md-12 col-lg-6 margem-baixo-30" data-aos="fade-left" data-aos-delay="100">
        <h2 className="text-center letra-preta mb-4">Skills</h2>
        <div className="container background-caramelo p-4">
          <h4 className="text-center">Soft Skill's</h4>
          <ul className="centroLista">
            <li>Visão Analítica</li>
            <li>Tomada de decisões</li>
            <li>Boa comunicação</li>
            <li>Inteligência emocional</li>
            <li>Fast Learning</li>
            <li>Trabalho em equipe</li>
            <li>Proatividade</li>
            <li>Resiliência</li>
            <li>Criatividade</li>
          </ul>
          <h4 className="centroLista">Hard Skill's</h4>
          <ul className="centroLista">
            <li>Desenvolvimento com Arquitetura MVC</li>
            <li>Modelagem de Bancos de Dados</li>
            <li>Criação e consumo de API's</li>
            <li>Persistência de dados com JSON Server e via API</li>
            <li>POO</li>
            <li>ORM com Entity Framework</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
