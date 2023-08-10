// i18nConfig.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome_message: "Welcome",
      characters: "Characters",
      alive: "Alive",
      unknown: "Unknown",
    },
  },
  es: {
    translation: {
      welcome_message: "Bienvenido",
      characters: "Personajes",
      alive: "Vivo",
      unknown: "Desconocido",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
