import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const useAppDeepLinking = ({ customScheme, androidLink, iosLink }) => {
  // Verificamos si la página web se está abriendo desde un dispositivo móvil
  const isOtherMobile = /BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAndroid) {
    alert("El dispositivo móvil es Android");
  }

  if (isIOS) {
    alert("El dispositivo móvil es iOS");
  }

  useEffect(async () => {
    if (isOtherMobile || isAndroid || isIOS) {
      // Verificamos si la aplicación está instalada en el dispositivo
      const appInstalled = await fetch(`${customScheme}://`).then(
        (response) => response.ok,
        () => false
      );

      if (appInstalled) {
        // Si la aplicación está instalada, abrimos el enlace personalizado en la aplicación móvil
        alert("La aplicación está instalada");
        window.location.href = `${customScheme}://`;
      } else {
        // Si la aplicación no está instalada, redirigimos al usuario a la tienda de aplicaciones
        alert("La aplicación no está instalada");
        if (isAndroid) {
          window.location.href = androidLink;
        }
        if (isIOS) {
          window.location.href = iosLink;
        }
        if (isOtherMobile) {
          // Si el dispositivo móvil no es Android ni iOS, no hacemos nada
          alert("El dispositivo móvil no es Android ni iOS");
          console.log("El dispositivo móvil no es Android ni iOS");
        }
      }
    }
  }, [customScheme, androidLink, iosLink]);
};

function App() {
  const customScheme = "appnera";
  const playStore =
    "https://play.google.com/store/apps/details?id=com.nera.neraagro&hl=en_US";
  const appStore = "https://apps.apple.com/us/app/nera/id1667637863";

  useAppDeepLinking({ customScheme, playStore, appStore });

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
        <br />
        <br />
        <a href="appnera://" target="_blank">
          NERA APP
        </a>
      </div>
    </>
  );
}

export default App;
