import React from 'react';
import { useTranslation } from 'react-i18next';
import './ButtonLanguageSwitch.css';
import ESflag from '../assets/es_flag.png';
import ENflag from '../assets/en_flag.png';

const ButtonLanguageSwitch = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    };

    const flagImage = i18n.language === 'en'
        ? ENflag
        : ESflag

    return (
        <button onClick={toggleLanguage} className='language-switch'>
            <img src={flagImage} alt='Flag' className='flag-icon' />
            {i18n.language.toUpperCase()}
        </button>
    );
};

export default ButtonLanguageSwitch;
