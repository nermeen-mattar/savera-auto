import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import nlTranslations from './locales/nl.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            nl: {
                translation: nlTranslations,
            },
        },
        fallbackLng: 'en',
        detection: {
            order: ['navigator'],
        },
    });

export default i18n;
