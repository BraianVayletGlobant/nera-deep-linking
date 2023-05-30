import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useRedirectToApp from "./useRedirectToApp";

import React, { useEffect, useRef } from "react";
import html2pdf from "html2pdf.js";

const HtmlToPdfComponent = ({ htmlContent }) => {
  const pdfRef = useRef(null);

  const convertToPdf = async () => {
    await html2pdf()
      .from(htmlContent)
      .save()
      .then(() => {
        if (navigator.share) {
          navigator.share({
            title: "Compartir PDF",
            files: [
              new File(["pdf"], "archivo.pdf", { type: "application/pdf" }),
            ],
          });
        } else {
          console.log(
            "La API de Web Share no está disponible en este dispositivo."
          );
        }
      });
  };

  useEffect(() => {
    const token1 = sessionStorage.getItem("appNeraAuthToken");
    console.log("token::[]", token1);
    alert("token::[]", token1);
  }, []);

  const token2 = sessionStorage.getItem("appNeraAuthToken");
  useEffect(() => {
    console.log("token::[]", token2);
    alert("token::[token2]", token2);
  }, [token2]);

  return (
    <div>
      <div ref={pdfRef}>
        {/* Contenido HTML que se convertirá a PDF */}
        {htmlContent}
      </div>
      <button onClick={convertToPdf}>Convertir a PDF</button>
    </div>
  );
};

const HTML_TEST = (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
);

function App() {
  useRedirectToApp({ appScheme: "appnera", ask: true });

  const onClickShare = () => {
    console.log("navigator.share", navigator.share);
    console.log("window.navigator.share", window.navigator.share);
    if (navigator.share) {
      console.log("true", true);
      // La función navigator.share está disponible en navegadores compatibles
      navigator.share({
        title: "Compartir enlace",
        text: "¡Echa un vistazo a este enlace!",
        url: "https://ejemplo.com",
      });
    } else {
      console.log("false", false);
      // Envía un mensaje al WebView indicando que se debe compartir
      window.ReactNativeWebView.postMessage("nera-share");
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NERA DEEP LINKING v5</h1>
      <div className="card">
        <a href="appnera://test1" target="_blank">
          NERA APP TEST 4
        </a>
        <br />
        <a href="appnera://" target="_blank">
          NERA APP
        </a>
        <button onClick={onClickShare}>SHARE</button>
        <br />
        <HtmlToPdfComponent htmlContent={HTML_TEST} />
      </div>
    </>
  );
}

export default App;
