import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    const thai = i18n.language.startsWith('th');
    document.documentElement.lang = thai ? 'th' : 'en';
    const titles: [string, string, string][] = [
      ['/adapt', 'ADAPT-Nan', 'ADAPT-Nan'],
      ['/games', 'Game Library', 'คลังเกม'],
      ['/academic', 'Academic', 'วิชาการ'],
      ['/dissemination', 'Dissemination', 'การเผยแพร่ผลงาน'],
      ['/engagement', 'Social Engagement', 'พันธกิจเพื่อสังคม'],
      ['/collaborators', 'Collaborators', 'เครือข่ายความร่วมมือ'],
      ['/team', 'Team', 'ทีมงาน'],
      ['/contact', 'Contact', 'ติดต่อเรา'],
    ];
    const match = titles.find(([prefix]) => pathname.startsWith(prefix));
    const section = match ? (thai ? match[2] : match[1]) : '';
    document.title = section ? `${section} | TENRM Lab` : 'TENRM Lab — Tropical Ecology and Natural Resource Management Laboratory';
  }, [pathname, i18n.language]);
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
