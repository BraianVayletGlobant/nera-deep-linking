import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/.test(navigator.userAgent);

    if (isMobile) {
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

      console.log("appInstalled", appInstalled);
      setIsAppInstalled(appInstalled);

      appInstalled
        .then(() => {
          setMessage("La aplicación está instalada");
          window.location.href = customScheme;
        })
        .catch(() => {
          setMessage("La aplicación no está instalada");
          const isAndroid = /Android/.match(navigator.userAgent);
          if (isAndroid) {
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.nera.neraagro";
          } else {
            window.location.href =
              "https://apps.apple.com/us/app/nera/id1667637863";
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
      <h1>NERA DEEP LINKING v3</h1>
      <div className="card">
        <a href="appnera://test1" target="_blank">
          NERA APP TEST 3
        </a>
        <br />
        <a href="appnera://" target="_blank">
          NERA APP
        </a>

        <br />
        <p>isAppInstalled: {isAppInstalled}</p>
        <p>message: {message}</p>
      </div>
    </>
  );
}

export default App;
