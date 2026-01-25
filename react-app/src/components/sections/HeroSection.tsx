/**
 * Seção Hero - Banner principal com nome e foto
 * Usa classes CSS originais do Bootstrap + custom
 */

import { ProfilePhoto } from '../ui/ProfilePhoto';

export function HeroSection() {
  return (
    <section className="background-preto container padding-acima">
      {/* Nome */}
      <section className="col-md-12 col-xs-12 col-lg-12 margem-cima-30" data-aos="fade-down">
        <h1 className="letra-caramelo centralizaImg font-grande padding-esquerda-20">
          João Pedro Barcellos Moura
        </h1>
      </section>

      {/* Foto de perfil com dados */}
      <section 
        id="dadosPessoaisImg" 
        className="d-flex justify-content-center align-items-center padding-baixo-20 padding-acima"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <ProfilePhoto />
      </section>

      {/* Cards de atuação */}
      <section className="col-md-12 col-lg-12 padding-baixo-20 row justify-content-center">
        <div 
          className="col-md-6 col-lg-6 padding-baixo-20 centro justify-content-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img 
            src="https://joaopedrobmoura.github.io/assets/images/backgrounds/Homem No computador.png" 
            alt="Boneco em um computador" 
            width="400"
          />
          <h2 className="letra-caramelo text-center">Dev Full-Stack</h2>
        </div>

        <div 
          className="col-md-6 col-lg-6 padding-baixo-20 centro justify-content-center padding-esquerda"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img 
            src="https://joaopedrobmoura.github.io/assets/images/backgrounds/Homem Analista.png" 
            alt="Boneco em um computador" 
            width="400"
          />
          <h2 className="letra-caramelo text-center">Analista de Dados</h2>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
