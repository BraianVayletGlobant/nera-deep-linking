import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useRedirectToApp from "./useRedirectToApp";

function App() {
  useRedirectToApp({ appScheme: "appnera", ask: true });

  const onClickShare = () => {
    console.log("navigator.share", navigator.share);
    console.log("window.navigator.share", window.navigator.share);
    if (navigator.share) {
      console.log("true", true);
      // La función navigator.share está disponible en navegadores compatibles
      navigator.share({
        title: "Compartir enlace",
        text: "¡Echa un vistazo a este enlace!",
        url: "https://ejemplo.com",
      });
    } else {
      console.log("false", false);
      // Envía un mensaje al WebView indicando que se debe compartir
      window.postMessage("nera-share");
    }
  };

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
        <button onClick={onClickShare}>SHARE</button>
        <br />
      </div>
    </>
  );
}

export default App;
