/**
 * Tecnologias (marquee) + hard/soft skills — usados em SkillsSection
 */

export interface Tech {
  name: string;
  icon: string;
}

// Stack real do João — analytics + dev + infra
export const techs: Tech[] = [
  // Analytics & Data
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Pandas',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg' },
  { name: 'SQL',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
  { name: 'AWS',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Matplotlib',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg' },
  { name: 'Excel',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftoffice/microsoftoffice-original.svg' },
  // Dev
  { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
  { name: 'C#',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: '.NET',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  // Infra & Tools
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg' },
  { name: 'GitHub',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg' },
  { name: 'Docker',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
  { name: 'Linux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
];

export const hardSkills: string[] = [
  'Automação de Processos e Análise de dados com Python',
  'Desenvolvimento Web',
  'Visualização de Dados (Power BI / Matplotlib)',
  'Arquitetura Limpa & Padrões de Arquiteturais',
  'Extração de dados com OCR (Docling)',
  'Integração com APIs REST',
  'Modelagem de Banco de Dados Relacional',
  'AWS Redshift & S3 (Cloud Data Warehouse)',
  'CI/CD com GitHub Actions',
];

export const softSkills: string[] = [
  'Visão Analítica e Sistêmica',
  'Autonomia e Protagonismo',
  'Autodidática e Curiosidade',
  'Comunicação Clara',
  'Aprendizado Rápido',
  'Proatividade',
  'Trabalho em Equipe',
  'Resiliência',
  'Gestão de Prioridades',
];
