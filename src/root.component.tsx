import React, { useEffect } from "react";
import i18n from "../i18nConfig"; // Asegúrate de corregir la ruta
import { useTranslation } from "react-i18next";

export default function Root(props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    function updateLanguage(event) {
      console.log(event.detail, "event");
      i18n.changeLanguage(event.detail);
    }

    window.addEventListener("set-language", updateLanguage);
    console.log(i18n.t("welcome_message"), "sdasd");
    return () => {
      window.removeEventListener("set-language", updateLanguage);
    };
  }, [i18n.language]);

  return <section> {i18n.t("welcome_message")}</section>;
}
