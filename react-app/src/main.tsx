/**
 * main.tsx — ponto de entrada do CLIENTE (navegador).
 *
 * Importa os estilos (inclui o CSS do AOS) e monta o App.
 * As páginas são pré-renderizadas no build (ver entry-server + scripts/
 * prerender.mjs), então aqui usamos createRoot normal: o HTML estático
 * serve para buscadores, e o cliente assume a página como SPA.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
