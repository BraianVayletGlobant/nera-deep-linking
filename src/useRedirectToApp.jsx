import { useEffect } from "react";

const isAndroid = /Android/.test(navigator.userAgent);
const isMobile = /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
const customScheme = "appnera";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.nera.neraagro";
const appStoreUrl = "https://apps.apple.com/app/nera/id1667637863";

const handleAppScheme = (scheme) => {
  window.location.href = `${scheme}://`;
  setTimeout(function () {
    window.location.href = isAndroid ? playStoreUrl : appStoreUrl;
  }, 1000);
}

const useRedirectToApp = ({appScheme = customScheme, ask = true})  => {  
  useEffect(() => {
    const redirectToApp = async () => {
      try {
        if (isMobile && ask && window.confirm("Quieres usar la app de Nera?") === true) {            
          handleAppScheme(appScheme);
        }
        if ( isMobile && !ask) {
          handleAppScheme(appScheme);
        }                   
      } catch (error) {
        console.error("error", error);
      }
    };

    redirectToApp();
  }, []);
};

export default useRedirectToApp;

"agtech-lib": "git+https://github.com/AgTechHub/agtech-lib.git#main",