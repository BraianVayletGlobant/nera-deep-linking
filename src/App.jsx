import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import useRedirectToApp from "./useRedirectToApp";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const token2 = sessionStorage.getItem("appNeraAuthToken");

  useEffect(() => {
    const token1 = sessionStorage.getItem("appNeraAuthToken");
    setToken(token1);
    console.log("token::[]", token1);
    alert("token::[]", token1);
  }, []);

  useEffect(() => {
    setToken(token2);
    console.log("token::[]", token2);
    alert("token::[token2]", token2);
  }, [token2]);

  useRedirectToApp({ appScheme: "appnera", ask: true });

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
        <p>token: {token}</p>
      </div>
    </>
  );
}

export default App;
