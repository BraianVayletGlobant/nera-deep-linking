import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useRedirectToApp from "./useRedirectToApp";

function App() {
  useRedirectToApp({ appScheme: "appnera", ask: true });

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
