import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState({});

  useEffect(async () => {
    try {
      // check if the browser is running in a mobile device
      const isAndroid = /Android/.test(navigator.userAgent);
      setMessage({ isAndroid, ...message });
      const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent);
      setMessage({ isIos, ...message });

      const customScheme = "appnera://";

      // check if the app is installed in the device
      const appInstalled = await fetch(`${customScheme}://`).then(
        (response) => response.ok,
        () => false
      );
      setMessage({ appInstalled, ...message });

      // if the app is installed, open it
      if (appInstalled) {
        setMessage({ message: "La aplicación está instalada", ...message });
        window.location.href = customScheme;
      }

      // if the app is not installed, redirect to the app store
      if (!appInstalled) {
        setMessage({ message: "La aplicación no está instalada", ...message });
        if (isAndroid) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.nera.neraagro";
        } else if (isIos) {
          window.location.href =
            "https://apps.apple.com/us/app/nera/id1667637863";
        }
      }

      // if the browser is not running in a mobile device, redirect to the web app
      if (!isAndroid && !isIos) {
        return;
      }
    } catch (error) {
      setMesage({ error, ...message });
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
          NERA APP TEST 4
        </a>
        <br />
        <a href="appnera://" target="_blank">
          NERA APP
        </a>

        <br />
        <p>message: {JSON.stringify(message)}</p>
      </div>
    </>
  );
}

export default App;
