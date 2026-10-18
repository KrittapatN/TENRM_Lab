import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { navItems, navPath } from '../lib/nav';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label={t('navbar.navigation')}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#2b5a3e" /><path d="M16 7c-5 4-6.5 9-4 14 1 2 2.5 3.4 4 4 1.5-.6 3-2 4-4 2.5-5 1-10-4-14Z" fill="#8aa65a" /><path d="M16 11v15" stroke="#f6f4ec" strokeWidth="1.4" strokeLinecap="round" /></svg>
          <span>TENRM <small>Lab</small></span>
        </Link>
        <button type="button" className="navbar-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {t(menuOpen ? 'navbar.close' : 'navbar.menu')} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <ul id="main-navigation" className={`navbar-links${menuOpen ? ' is-open' : ''}`}>
          {navItems.map(item => <li key={item}><NavLink to={navPath(item)} end={item === 'home'} onClick={() => setMenuOpen(false)}>{t(`navbar.${item}`)}</NavLink></li>)}
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
