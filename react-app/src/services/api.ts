/**
 * Serviço de API para buscar dados do portfólio
 * Conecta com os JSONs hospedados no GitHub Pages
 */

const API_BASE_URL = 'https://joaopedrobmoura.github.io/data';

/**
 * Função genérica para buscar dados da API
 */
async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar ${endpoint}: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Erro na API: ${endpoint}`, error);
    throw error;
  }
}

/**
 * Busca cursos de programação
 */
export async function getCursosProgramacao() {
  return fetchData('cursosProgramacao.json');
}

/**
 * Busca cursos de análise de dados
 */
export async function getCursosAnaliseDados() {
  return fetchData('cursosAnaliseDados.json');
}

/**
 * Busca certificações
 */
export async function getCertificacoes() {
  return fetchData('certificacoes.json');
}

/**
 * Busca projetos de programação
 */
export async function getProjetosProgramacao() {
  return fetchData('projetosProgramacao.json');
}

/**
 * Busca projetos de análise de dados
 */
export async function getProjetosAnaliseDados() {
  return fetchData('projetosAnaliseDados.json');
}

export const apiService = {
  getCursosProgramacao,
  getCursosAnaliseDados,
  getCertificacoes,
  getProjetosProgramacao,
  getProjetosAnaliseDados,
};

export default apiService;
