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
      select_status: "Select status",
      human: "Human",
      alien: "Alien",
      species: "Species",
      gender: "Gender",
      location: "Location",
      male: "Male",
      female: "Female",
    },
  },
  es: {
    translation: {
      welcome_message: "Bienvenido",
      characters: "Personajes",
      alive: "Vivo",
      unknown: "Desconocido",
      select_status: "Seleccionar estado",
      human: "Humano",
      species: "Especie",
      gender: "Genero",
      location: "Locación",
      alien: "Alien",
      male: "Hombre",
      female: "Mujer",
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
