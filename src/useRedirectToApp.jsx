const isAndroid = /Android/.test(navigator.userAgent);
const isMobile = /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
const customScheme = "appnera";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.nera.neraagro";
const appStoreUrl = "https://apps.apple.com/app/nera/id1667637863";

const useRedirectToApp = () => {
  useEffect(() => {
    const redirectToApp = async () => {
      try {
        if (
          isMobile &&
          window.confirm("Quieres usar la app de Nera?") === true
        ) {
          window.location.href = `${customScheme}://`;
          setTimeout(function () {
            window.location.href = isAndroid ? playStoreUrl : appStoreUrl;
          }, 1000);
        }
      } catch (error) {
        console.error("error", error);
      }
    };

    redirectToApp();
  }, []);
};

export default useRedirectToApp;
