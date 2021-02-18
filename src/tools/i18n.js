import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import enTranslation from '../i18n/en.json';
import frTranslation from '../i18n/fr.json';
import esTranslation from '../i18n/es.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    es: {
        translation: esTranslation,
    },
    fr: {
        translation: frTranslation,
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
