/**
 * contactsConfig — array de contatos compartilhado.
 *
 * Separado de contactsData.tsx (ícones) para satisfazer a regra
 * react-refresh/only-export-components: arquivos .tsx só podem exportar
 * componentes React; dados ficam em arquivos .ts.
 *
 * Usado em: ProfilePhoto e Footer.
 *
 * label é bilíngue (I18n) — a maioria é nome próprio e repete nos dois
 * idiomas; "Inglês intermediário" é o único que muda de fato.
 * key estável nos componentes: use contact.label.en.
 */

import type { ComponentType } from 'react';
import type { I18n } from '../../i18n/config';
import {
  WhatsAppIcon,
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  GlobeIcon,
} from './contactsData';

export interface Contact {
  Icon: ComponentType;
  label: I18n;
  href: string | null; // null → item exibido como texto simples (sem link)
}

export const contacts: Contact[] = [
  { Icon: WhatsAppIcon, label: { en: 'WhatsApp', pt: 'WhatsApp' },                         href: 'https://wa.me/5521987421561' },
  { Icon: EmailIcon,    label: { en: 'Email',    pt: 'E-mail' },                            href: 'mailto:joaopedrobarcelllosmoura@gmail.com' },
  { Icon: LinkedInIcon, label: { en: 'LinkedIn', pt: 'LinkedIn' },                          href: 'https://www.linkedin.com/in/joaopedrobmoura/' },
  { Icon: GitHubIcon,   label: { en: 'GitHub',   pt: 'GitHub' },                            href: 'https://github.com/JoaoPedroBMoura' },
  { Icon: GlobeIcon,    label: { en: 'Intermediate English', pt: 'Inglês intermediário' }, href: null },
];
