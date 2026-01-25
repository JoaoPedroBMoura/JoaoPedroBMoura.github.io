/**
 * Componente ProfilePhoto
 * Foto de perfil com borda rotacionada e card de dados pessoais no hover
 * Usa classes CSS originais
 */

import { useState } from 'react';

export function ProfilePhoto() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <div 
      className={`bloco ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className="borda-rotacionada">
        <div className="borda-arredondada"></div>
        <div className="imagem-container">
          <img 
            className="rounded-circle hover-image" 
            src="https://joaopedrobmoura.github.io/assets/images/profile/Foto_séria_quadrada-transformed.jpeg" 
            alt="Foto do autor" 
            width="200"
          />
        </div>
      </div>
      
      <div className="letra-preto font-20 hover-card">
        <div className="info-container">
          <div className="dados-pessoais">
            <h2 className="font-dados-pessoais">Dados Pessoais</h2>
            <ul className="no-break-line">
              <li className="letra-preta">Nova Friburgo, RJ</li>
              <li>
                <a className="letra-preta" href="https://wa.me/5521987421561">
                  <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" alt="whatsapp icon" width="18px" /> WhatsApp{' '}
                  <img src="https://img.icons8.com/?size=100&id=742&format=png&color=000000" alt="corrente link" width="12px" />
                </a>
              </li>
              <li>
                <a className="letra-preta" href="mailto:joaopedrobarcelllosmoura@gmail.com">
                  <img src="https://img.icons8.com/?size=100&id=1QejVTHLoV0g&format=png&color=000000" alt="e-mail icon" width="18px" /> E-mail{' '}
                  <img src="https://img.icons8.com/?size=100&id=742&format=png&color=000000" alt="corrente link" width="12px" />
                </a>
              </li>
              <li>
                <a className="letra-preta" href="https://www.linkedin.com/in/joaopedrobmoura/">
                  <img src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="linkedin icon" width="19px" /> LinkedIn{' '}
                  <img src="https://img.icons8.com/?size=100&id=742&format=png&color=000000" alt="corrente link" width="12px" />
                </a>
              </li>
              <li>
                <a className="letra-preta" href="https://github.com/JoaoPedroBMoura/JoaoPedroBMoura">
                  <img src="https://img.icons8.com/?size=100&id=48708&format=png&color=000000" alt="github icon" width="20px" /> GitHub{' '}
                  <img src="https://img.icons8.com/?size=100&id=742&format=png&color=000000" alt="corrente link" width="12px" />
                </a>
              </li>
            </ul>
          </div>

          <div className="idiomas">
            <h2>Idiomas</h2>
            <ul>
              <li className="letra-preta">Inglês, básico</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
