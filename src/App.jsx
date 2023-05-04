import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useAppDeepLinking from "./useAppDeepLinking";

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
          NERA APP TEST 2
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
