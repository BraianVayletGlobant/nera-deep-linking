import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // El usuario está en un dispositivo móvil, se dirige a la aplicación utilizando el enlace "mi-app://"
      window.location.href = "appnera://";
    } else {
      // El usuario está en un ordenador, se mantiene en la página web "https://www.mipagina.com"
      alert("No es un dispositivo móvil");
    }
  }, []);

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
      <h1>Vite + React</h1>
      <div className="card">
        <a href="appnera://test1" target="_blank">
          NERA APP TEST 1
        </a>
        <a href="appnera://" target="_blank">
          NERA APP
        </a>
      </div>
    </>
  );
}

export default App;
