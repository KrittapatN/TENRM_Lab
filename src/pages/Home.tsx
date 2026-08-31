import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <header className="hero">
        <div className="container hero-content">
          <h1>{t('home.hero_title')}</h1>
          <p>{t('home.hero_subtitle')}</p>
          <div className="hero-cta">
            <Link to="/research" className="btn btn-primary">{t('navbar.research')}</Link>
            <Link to="/contact" className="btn btn-outline">{t('navbar.contact')}</Link>
          </div>
        </div>
      </header>

      <section className="about-us">
        <div className="container">
          <h2>{t('home.about_title')}</h2>
          <p>
            {t('home.about_text')}
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>10+</h3>
              <p>{t('home.stats.projects')}</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>{t('home.stats.publications')}</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>{t('home.stats.members')}</p>
            </div>
            <div className="stat-card">
              <h3>11</h3>
              <p>{t('home.stats.boardgames')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
