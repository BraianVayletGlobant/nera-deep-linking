import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import useRedirectToApp from "./useRedirectToApp";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const token2 = sessionStorage.getItem("appNeraAuthToken");

  useEffect(() => {
    setToken(token2);
  }, [token2]);

  useEffect(() => {
    const data = { message: "Hola desde la página web", entity: "web" };
    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  }, []);

  // useRedirectToApp({ appScheme: "appnera", ask: true });

  const sendDataNeraWenView = () => {
    const data = {
      action: "webview-action",
      payload: {
        entity: "galicia-seguros",
        actionType: "closeWebview",
      },
    };
    console.log("data:web", data);
    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  };

  return (
    <>
      <div>
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
        <br />
        <button onClick={() => sendDataNeraWenView()}>Cerrar WebView</button>
        <br />
        <p>token: {token}</p>
      </div>
    </>
  );
}

export default App;
