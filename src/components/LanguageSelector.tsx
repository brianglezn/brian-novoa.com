import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './LanguageSelector.scss';

export default function LanguageSelector() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        const i18nextLng = localStorage.getItem('i18nextLng') || 'en';
        return i18nextLng.startsWith('es') ? 'es' : 'en';
    });

    useEffect(() => {
        const handleLanguageChange = () => {
            const i18nextLng = localStorage.getItem('i18nextLng') || 'en';
            setCurrentLanguage(i18nextLng.startsWith('es') ? 'es' : 'en');
        };

        window.addEventListener('languagechange', handleLanguageChange);
        return () => window.removeEventListener('languagechange', handleLanguageChange);
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'es' : 'en';
        setCurrentLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="language-selector">
            <button 
                onClick={toggleLanguage}
                title={t(`home.header.language.${currentLanguage === 'en' ? 'es' : 'en'}`)}
            >
                <img
                    src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${currentLanguage === 'en' ? 'us' : 'es'}.svg`}
                    alt={t(`home.header.language.${currentLanguage}`)}
                />
            </button>
        </div>
    );
}