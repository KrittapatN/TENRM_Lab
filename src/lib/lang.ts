import { useTranslation } from 'react-i18next';

export type Lang = 'en' | 'th';
export type Bi = { en: string; th: string };

export function useLang() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language.startsWith('th') ? 'th' : 'en';
  const tr = (en: string, th: string) => (lang === 'th' ? th : en);
  return { lang, tr };
}

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
