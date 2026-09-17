import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const items = ['home', 'research', 'team', 'publications', 'games', 'adapt', 'contact'];

  return (
    <nav className="navbar" aria-label={t('navbar.navigation')}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          TENRM Lab
        </Link>
        <button type="button" className="navbar-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {t(menuOpen ? 'navbar.close' : 'navbar.menu')} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <ul id="main-navigation" className={`navbar-links${menuOpen ? ' is-open' : ''}`}>
          {items.map(item => <li key={item}><NavLink to={item === 'home' ? '/' : `/${item}`} end={item === 'home'} onClick={() => setMenuOpen(false)}>{t(`navbar.${item}`)}</NavLink></li>)}
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
