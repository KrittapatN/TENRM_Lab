import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          TENRM Lab
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">{t('navbar.home')}</Link></li>
          <li><Link to="/research">{t('navbar.research')}</Link></li>
          <li><Link to="/team">{t('navbar.team')}</Link></li>
          <li><Link to="/publications">{t('navbar.publications')}</Link></li>
          <li><Link to="/contact">{t('navbar.contact')}</Link></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
