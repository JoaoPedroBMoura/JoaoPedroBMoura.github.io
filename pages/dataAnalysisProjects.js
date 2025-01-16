import { Util } from "./utils.js";

const projetos = new Util("projetosAnaliseDados.json");

export async function criaPaginaProjetoDados() { 
    const sectionExcel = document.createElement('section');
    sectionExcel.className = 'container row text-center col-md-12 col-lg-12';

    const analiseDesempenhoDiario = await projetos.criaCard("Analise de Desempenho diário","analisesExcel");

    sectionExcel.append(analiseDesempenhoDiario);

    return sectionExcel;
    
}