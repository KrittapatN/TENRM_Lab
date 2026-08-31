import React from 'react';
import { useTranslation } from 'react-i18next';
import { publications } from '../data/publications';
import './Publications.css';

const Publications: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language.startsWith('th');

  return (
    <div className="publications-page container">
      <section>
        <h1>{t('publications.title')}</h1>
        <p className="section-intro">
          {t('publications.intro')}
        </p>

        <div className="publications-list">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-item">
              <div className="pub-year">{pub.year}</div>
              <div className="pub-content">
                <h3>{isThai ? pub.title_th : pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">
                  <em>{isThai ? pub.journal_th : pub.journal}</em>
                </p>
                {pub.doi && (
                  <p className="pub-doi">
                    DOI:{' '}
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.doi}
                    </a>
                  </p>
                )}
                {pub.link && (
                  <a href={pub.link} className="pub-link">{t('publications.view_pub')} &rarr;</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publications;
