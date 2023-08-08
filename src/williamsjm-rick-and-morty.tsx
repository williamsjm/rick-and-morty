import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "../i18nConfig"; // Importa la configuración de i18n

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

// Esta función se llama una sola vez, al iniciar el microfrontend.
export async function bootstrap(props) {
  // Aquí puedes hacer cualquier inicialización adicional que tu microfrontend necesite.
  // La configuración de i18next ya ha sido importada, por lo que se ejecutará en este punto.
}

export const { mount, unmount } = lifecycles;
