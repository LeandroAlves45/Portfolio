// Main- aplication entry point
// Interliga o react com o index.html

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// StrictMode é um recurso do React que ajuda a identificar problemas potenciais no aplicativo durante o desenvolvimento. Ele ativa verificações adicionais e avisos para ajudar os desenvolvedores a escrever código mais seguro e eficiente. O StrictMode não afeta o comportamento do aplicativo em produção, mas é uma ferramenta valiosa para garantir a qualidade do código durante o desenvolvimento e previne dupla invocação de métodos do ciclo de vida.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
