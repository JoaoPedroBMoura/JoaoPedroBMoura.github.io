/**
 * Componente Back to Top Button
 * Usa classes CSS originais
 */

import { useState, useEffect } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      aria-label="Voltar ao topo"
    >
      <img src="https://joaopedrobmoura.github.io/assets/images/icons/seta_para_cima.svg" alt="seta para cima" />
    </button>
  );
}

export default BackToTop;
