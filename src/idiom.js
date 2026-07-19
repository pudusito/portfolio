import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    showSupportNotice: false,
    ns: [
      "landing", 
      "header", 
      "whoim",
      "about", 
      "sec1about", 
      "sec2about", 
      "technologies", 
      "work", 
      "personalProyects", 
      "gallery", 
      "topfooter"
    ], 
    defaultNS: "header",
    interpolation: { escapeValue: false },
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" }
  });

export default i18n;


/* npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector */