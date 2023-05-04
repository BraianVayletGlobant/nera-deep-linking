import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(async () => {
    // Definimos el esquema de URL personalizado que se utiliza en la aplicación móvil
    const customScheme = "appnera";

    // Verificamos si la página web se está abriendo desde un dispositivo móvil
    const isOtherMobile = /BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    alert("is", navigator.userAgent, isAndroid, isIOS, isOtherMobile);

    if (isAndroid) {
      alert("El dispositivo móvil es Android");
    }

    if (isIOS) {
      alert("El dispositivo móvil es iOS");
    }

    if (isOtherMobile || isAndroid || isIOS) {
      // Verificamos si la aplicación está instalada en el dispositivo
      const appInstalled = await fetch(`${customScheme}://`).then(
        (response) => response.ok,
        () => false
      );
      alert("appInstalled", appInstalled);

      if (appInstalled) {
        // Si la aplicación está instalada, abrimos el enlace personalizado en la aplicación móvil
        alert("La app está instalada");
        window.location.href = `${customScheme}://`;
      } else {
        // Si la aplicación no está instalada, redirigimos al usuario a la tienda de aplicaciones
        alert("La app no está instalada");
        if (isAndroid) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.nera.neraagro";
        }
        if (isIOS) {
          window.location.href =
            "https://apps.apple.com/us/app/nera/id1667637863";
        }
        if (isOtherMobile) {
          // Si el dispositivo móvil no es Android ni iOS, no hacemos nada
          alert("El dispositivo móvil no es Android ni iOS");
          console.log("El dispositivo móvil no es Android ni iOS");
        }
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
      <h1>NERA DEEP LINKING v1</h1>
      <div className="card">
        <a href="appnera://test1" target="_blank">
          NERA APP TEST 3
        </a>
        <br />
        <a href="appnera://" target="_blank">
          NERA APP
        </a>
      </div>
    </>
  );
}

export default App;
