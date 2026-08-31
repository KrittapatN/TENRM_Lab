import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'en';
    const newLang = currentLang.startsWith('th') ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="lang-switcher" onClick={toggleLanguage}>
      {i18n.language.startsWith('th') ? 'EN' : 'TH'}
    </button>
  );
};

export default LanguageSwitcher;
