import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    const thai = i18n.language.startsWith('th');
    document.documentElement.lang = thai ? 'th' : 'en';
    const section = pathname.startsWith('/adapt') ? 'ADAPT-Nan' : pathname.startsWith('/games') ? (thai ? 'คลังเกม' : 'Game Library') : '';
    document.title = section ? `${section} | TENRM Lab` : 'TENRM Lab — Tropical Ecology and Natural Resource Management Laboratory';
  }, [pathname, i18n.language]);
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
