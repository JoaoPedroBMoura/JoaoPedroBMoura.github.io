/**
 * contactsConfig — array de contatos compartilhado.
 *
 * Separado de contactsData.tsx (ícones) para satisfazer a regra
 * react-refresh/only-export-components: arquivos .tsx só podem exportar
 * componentes React; dados ficam em arquivos .ts.
 *
 * Usado em: ProfilePhoto e Footer.
 */

import {
  WhatsAppIcon,
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  GlobeIcon,
} from './contactsData';

// href: null → item exibido como texto simples (sem link)
export const contacts = [
  { Icon: WhatsAppIcon, label: 'WhatsApp',            href: 'https://wa.me/5521987421561' },
  { Icon: EmailIcon,    label: 'E-mail',               href: 'mailto:joaopedrobarcelllosmoura@gmail.com' },
  { Icon: LinkedInIcon, label: 'LinkedIn',             href: 'https://www.linkedin.com/in/joaopedrobmoura/' },
  { Icon: GitHubIcon,   label: 'GitHub',               href: 'https://github.com/JoaoPedroBMoura' },
  { Icon: GlobeIcon,    label: 'Inglês intermediário', href: null },
] as const;
