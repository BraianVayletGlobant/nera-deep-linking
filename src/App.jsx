import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(async () => {
    // Definimos el esquema de URL personalizado que se utiliza en la aplicación móvil
    const customScheme = "appnera";

    // Verificamos si la página web se está abriendo desde un dispositivo móvil
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Verificamos si la aplicación está instalada en el dispositivo
      const appInstalled = await fetch(`${customScheme}://`).then(
        (response) => response.ok,
        () => false
      );

      if (appInstalled) {
        // Si la aplicación está instalada, abrimos el enlace personalizado en la aplicación móvil
        alert("La app está instalada");
        window.location.href = `${customScheme}://`;
      } else {
        // Si la aplicación no está instalada, redirigimos al usuario a la tienda de aplicaciones
        alert("La app no está instalada");
        window.location.href = "https://play.google.com/";
      }
    } else {
      // Si la página web se está abriendo desde un ordenador, no hacemos nada
      alert("La página web se está abriendo desde un ordenador");
      console.log("La página web se está abriendo desde un ordenador");
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
