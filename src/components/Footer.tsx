import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navItems, navPath } from '../lib/nav';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <h3>TENRM Lab</h3>
          <p>{t('footer.name')}</p>
          <p className="footer-address">{t('footer.address')}</p>
        </div>
        <nav aria-label={t('footer.sitemap')}>
          <h4>{t('footer.explore')}</h4>
          <ul>{navItems.map(item => <li key={item}><Link to={navPath(item)}>{t(`navbar.${item}`)}</Link></li>)}</ul>
        </nav>
        <nav aria-label={t('footer.projects')}>
          <h4>{t('footer.projects')}</h4>
          <ul>
            <li><Link to="/adapt">ADAPT-Nan</Link></li>
            <li><Link to="/games">{t('footer.games')}</Link></li>
            <li><a href="https://anyflip.com/homepage/tqmmg/" target="_blank" rel="noreferrer">{t('footer.books')} ↗</a></li>
          </ul>
        </nav>
      </div>
      <div className="container footer-copy">
        <p>&copy; {new Date().getFullYear()} TENRM Lab · {t('footer.university')}</p>
      </div>
    </footer>
  );
};

export default Footer;
