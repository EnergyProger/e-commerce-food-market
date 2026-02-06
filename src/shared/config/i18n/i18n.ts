import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";


import { ENGLISH_LANGUAGE, UKRAINIAN_LANGUAGE } from "./constants";

export const supportedLngs = [ENGLISH_LANGUAGE, UKRAINIAN_LANGUAGE] as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ENGLISH_LANGUAGE,
    debug: true,
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
