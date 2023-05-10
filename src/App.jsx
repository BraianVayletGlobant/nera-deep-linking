import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // check if the browser is running in a mobile device
  const isAndroid = /Android/.test(navigator.userAgent);
  const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isMobile = isAndroid || isIos;

  useEffect(async () => {
    try {
      const customScheme = "appnera";
      const playStoreUrl =
        "https://play.google.com/store/apps/details?id=com.nera.neraagro";
      const appStoreUrl = "https://apps.apple.com/app/nera/id1667637863";

      console.log("isMobile", isMobile);
      console.log("isAndroid", isAndroid);
      console.log("isIos", isIos);
      if (isMobile) {
        if (confirm("Do you want to open the app?") === true) {
          console.log("true", true);
          window.location.href = `${customScheme}://`;
          setTimeout(function () {
            window.location.href = isAndroid ? playStoreUrl : appStoreUrl;
          }, 1000);
        } else {
          console.log("false", false);
          return;
        }
      }
    } catch (error) {
      console.error("error", error);
    }
  }, [isMobile]);

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
        <button
          onClick={() =>
            (window.location.href =
              "https://apps.apple.com/app/nera/id1667637863")
          }
        >
          APPSTORE
        </button>
        <br />
      </div>
    </>
  );
}

export default App;
