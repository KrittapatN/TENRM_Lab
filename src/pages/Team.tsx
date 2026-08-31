import React from 'react';
import { useTranslation } from 'react-i18next';
import { teamMembers, type TeamMember } from '../data/team';
import './Team.css';

const Team: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language.startsWith('th');

  const categories: TeamMember['category'][] = ['Head', 'PhD', 'Master', 'Bachelor', 'Alumni'];

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'Head': return t('team.categories.head');
      case 'PhD': return t('team.categories.phd');
      case 'Master': return t('team.categories.master');
      case 'Bachelor': return t('team.categories.bachelor');
      case 'Alumni': return t('team.categories.alumni');
      default: return cat;
    }
  };

  return (
    <div className="team-page container">
      <section>
        <h1>{t('team.title')}</h1>
        <p className="section-intro">
          {t('team.intro')}
        </p>

        {categories.map((cat) => {
          const members = teamMembers.filter((m) => m.category === cat);
          if (members.length === 0) return null;

          return (
            <div key={cat} className="team-category">
              <h2>{getCategoryTitle(cat)}</h2>
              <div className="members-grid">
                {members.map((member) => (
                  <div key={member.id} className="member-card">
                    <div className="member-avatar">
                      {member.image ? (
                        <img src={member.image} alt={isThai ? member.name_th : member.name} />
                      ) : (
                        (isThai ? member.name_th : member.name).charAt(0)
                      )}
                    </div>
                    <h3>{isThai ? member.name_th : member.name}</h3>
                    <p className="member-role">{isThai ? member.role_th : member.role}</p>
                    <p className="member-bio">{isThai ? member.bio_th : member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Team;
