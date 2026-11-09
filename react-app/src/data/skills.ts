/**
 * Tecnologias (marquee) + hard/soft skills — usados em SkillsSection.
 *
 * - techs: nomes de ferramentas (Python, React...) — iguais nos dois idiomas.
 * - hardSkills / softSkills: frases, então são bilíngues (I18n<string[]>);
 *   o componente resolve com L(hardSkills) / L(softSkills).
 */

import type { I18n } from '../i18n/config';

export interface Tech {
  name: string;
  icon: string;
}

// Stack real do João — analytics + dev + infra
export const techs: Tech[] = [
  // Analytics & Data
  { name: 'Python',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'SQL',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'PostgreSQL',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
  { name: 'AWS S3',        icon: '/assets/icons/awss3.svg' },
  { name: 'AWS Redshift',  icon: '/assets/icons/redshift.svg' },
  { name: 'Power BI',      icon: '/assets/icons/powerbi.svg' },
  // Dev
  { name: 'TypeScript',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
  { name: 'Node.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Prisma',        icon: '/assets/icons/prisma.svg' },
  { name: '.NET',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'Java',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Maven',         icon: '/assets/icons/maven.svg' },

  // Infra & Tools
  { name: 'GitHub',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg' },
  { name: 'Docker',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
  { name: 'Linux',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  ];

export const hardSkills: I18n<string[]> = {
  en: [
    'Process automation and data analysis with Python',
    'Web development',
    'Data visualization (Power BI / Matplotlib)',
    'Clean Architecture & architectural patterns',
    'Data extraction with OCR (Docling)',
    'REST API integration',
    'Relational database modeling',
    'AWS Redshift & S3 (cloud data warehouse)',
    'CI/CD with GitHub Actions',
  ],
  pt: [
    'Automação de Processos e Análise de dados com Python',
    'Desenvolvimento Web',
    'Visualização de Dados (Power BI / Matplotlib)',
    'Arquitetura Limpa & Padrões de Arquiteturais',
    'Extração de dados com OCR (Docling)',
    'Integração com APIs REST',
    'Modelagem de Banco de Dados Relacional',
    'AWS Redshift & S3 (Cloud Data Warehouse)',
    'CI/CD com GitHub Actions',
  ],
};

export const softSkills: I18n<string[]> = {
  en: [
    'Analytical & systemic thinking',
    'Autonomy & ownership',
    'Self-teaching & curiosity',
    'Clear communication',
    'Fast learning',
    'Proactivity',
    'Teamwork',
    'Resilience',
    'Priority management',
  ],
  pt: [
    'Visão Analítica e Sistêmica',
    'Autonomia e Protagonismo',
    'Autodidática e Curiosidade',
    'Comunicação Clara',
    'Aprendizado Rápido',
    'Proatividade',
    'Trabalho em Equipe',
    'Resiliência',
    'Gestão de Prioridades',
  ],
};
