import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { researchProjects } from '../data/research';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isThai = i18n.language.startsWith('th');
  
  const project = researchProjects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container project-not-found">
        <h2>{t('project_detail.not_found_title')}</h2>
        <p>{t('project_detail.not_found_text')}</p>
        <Link to="/research" className="btn btn-primary">{t('project_detail.back')}</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page container">
      <Link to="/research" className="back-link">
        &larr; {t('project_detail.back')}
      </Link>
      
      <header className="project-header">
        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status === 'Ongoing' ? t('research.status.ongoing') : t('research.status.completed')}
        </span>
        <h1>{isThai ? project.title_th : project.title}</h1>
      </header>

      <div className="project-content">
        <div className="project-overview">
          <h3>{t('project_detail.overview')}</h3>
          <p className="lead">{isThai ? project.description_th : project.description}</p>
        </div>

        <div className="project-details">
          <h3>{t('project_detail.detailed_info')}</h3>
          <p>
            {isThai 
              ? (project.content_th || t('project_detail.fallback_content'))
              : (project.content || t('project_detail.fallback_content'))
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
