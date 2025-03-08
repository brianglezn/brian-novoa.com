// Importing necessary libraries for internationalization
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importing translation files for English and Spanish
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Defining resources for the supported languages
const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

// Initializing i18next with language detection and resources
i18n
    .use(LanguageDetector) // Using language detector to identify user language
    .use(initReactI18next) // Integrating i18next with React
    .init({
        resources,
        fallbackLng: 'en', // Default language if the user's language is not available
        interpolation: {
            escapeValue: false // React already escapes values to prevent XSS
        }
    });

// Exporting the configured i18n instance for use in the application
export default i18n;
