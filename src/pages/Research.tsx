import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { researchProjects } from '../data/research';
import './Research.css';

const Research: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language.startsWith('th');

  return (
    <div className="research-page container">
      <section>
        <h1>{t('research.title')}</h1>
        <p className="section-intro">
          {t('research.intro')}
        </p>

        <div className="projects-grid">
          {researchProjects.map((project) => (
            <Link key={project.id} to={`/research/${project.id}`} className="project-card">
              <span className={`status-badge ${project.status.toLowerCase()}`}>
                {project.status === 'Ongoing' ? t('research.status.ongoing') : t('research.status.completed')}
              </span>
              <h3>{isThai ? project.title_th : project.title}</h3>
              <p>{isThai ? project.description_th : project.description}</p>
              <span className="read-more">{t('research.learn_more')} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
