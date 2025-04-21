import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Importing styles
import './LanguageSelector.scss';

// Main component for language selection
export default function LanguageSelector() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        const i18nextLng = localStorage.getItem('i18nextLng') || 'en';
        // Determine the initial language based on local storage
        return i18nextLng.startsWith('es') ? 'es' : 'en';
    });

    useEffect(() => {
        const handleLanguageChange = () => {
            const i18nextLng = localStorage.getItem('i18nextLng') || 'en';
            // Update the current language when a language change event occurs
            setCurrentLanguage(i18nextLng.startsWith('es') ? 'es' : 'en');
        };

        window.addEventListener('languagechange', handleLanguageChange);
        return () => window.removeEventListener('languagechange', handleLanguageChange);
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'es' : 'en';
        // Change the language and update the state
        setCurrentLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    const nextLanguage = currentLanguage === 'en' ? 'es' : 'en';

    return (
        <div className="language-selector">
            <button 
                onClick={toggleLanguage}
                title={t(`home.header.language.${nextLanguage}`)}
                aria-label={t(`home.header.language.${nextLanguage}`)}
            >
                <img
                    src={`/assets/flags/${currentLanguage === 'en' ? 'us' : 'es'}.svg`}
                    alt={t(`home.header.language.${currentLanguage}`)}
                />
            </button>
        </div>
    );
}