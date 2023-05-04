import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // useEffect(async () => {
  //   // Definimos el esquema de URL personalizado que se utiliza en la aplicación móvil
  //   const customScheme = "appnera";

  //   // Verificamos si la página web se está abriendo desde un dispositivo móvil
  //   const isOtherMobile = /BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );
  //   const isAndroid = /Android/i.test(navigator.userAgent);
  //   const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  //   alert("is", navigator.userAgent, isAndroid, isIOS, isOtherMobile);

  //   if (isAndroid) {
  //     alert("El dispositivo móvil es Android");
  //   }

  //   if (isIOS) {
  //     alert("El dispositivo móvil es iOS");
  //   }

  //   if (isOtherMobile || isAndroid || isIOS) {
  //     // Verificamos si la aplicación está instalada en el dispositivo
  //     const appInstalled = await fetch(`${customScheme}://`).then(
  //       (response) => response.ok,
  //       () => false
  //     );
  //     alert("appInstalled", appInstalled);

  //     if (appInstalled) {
  //       // Si la aplicación está instalada, abrimos el enlace personalizado en la aplicación móvil
  //       alert("La app está instalada");
  //       window.location.href = `${customScheme}://`;
  //     } else {
  //       // Si la aplicación no está instalada, redirigimos al usuario a la tienda de aplicaciones
  //       alert("La app no está instalada");
  //       if (isAndroid) {
  //         window.location.href =
  //           "https://play.google.com/store/apps/details?id=com.nera.neraagro";
  //       }
  //       if (isIOS) {
  //         window.location.href =
  //           "https://apps.apple.com/us/app/nera/id1667637863";
  //       }
  //       if (isOtherMobile) {
  //         // Si el dispositivo móvil no es Android ni iOS, no hacemos nada
  //         alert("El dispositivo móvil no es Android ni iOS");
  //         console.log("El dispositivo móvil no es Android ni iOS");
  //       }
  //     }
  //   } else {
  //     // Si la página web se está abriendo desde un ordenador, no hacemos nada
  //     alert("La página web se está abriendo desde un ordenador");
  //     console.log("La página web se está abriendo desde un ordenador");
  //   }
  // }, []);

  useEffect(() => {
    // Detectar si se está abriendo la página desde un dispositivo móvil
    const isMobile = /iPhone|Android/.test(navigator.userAgent);

    if (isMobile) {
      // Detectar si la aplicación "nera" está instalada
      const customScheme = "appnera://";
      const appInstalled = new Promise((resolve, reject) => {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = customScheme;
        document.body.appendChild(iframe);

        setTimeout(() => {
          document.body.removeChild(iframe);
          resolve(true);
        }, 100);

        setTimeout(() => {
          document.body.removeChild(iframe);
          reject(false);
        }, 200);
      });

      appInstalled
        .then(() => {
          // La aplicación "nera" está instalada, abrirla
          window.location.href = customScheme;
        })
        .catch(() => {
          // La aplicación "nera" no está instalada, redirigir a la tienda de aplicaciones correspondiente
          const isiOS = /iPhone/.test(navigator.userAgent);
          if (isiOS) {
            window.location.href =
              "https://apps.apple.com/us/app/nera/idxxxxxxxxx";
          } else {
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.nera";
          }
        });
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
      <h1>NERA DEEP LINKING v2</h1>
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
