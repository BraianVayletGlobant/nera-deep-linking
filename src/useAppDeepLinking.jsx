import { useEffect } from "react";

// Verificamos si la página web se está abriendo desde un dispositivo móvil
const isOtherMobile = /BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

const useAppDeepLinking = ({ customScheme, androidLink, iosLink }) => {
  if (isAndroid) {
    alert("El dispositivo móvil es Android");
  }

  if (isIOS) {
    alert("El dispositivo móvil es iOS");
  }

  useEffect(async () => {
    if (isOtherMobile || isAndroid || isIOS) {
      // Verificamos si la aplicación está instalada en el dispositivo
      const appInstalled = await fetch(`${customScheme}://`).then(
        (response) => response.ok,
        () => false
      );

      if (appInstalled) {
        // Si la aplicación está instalada, abrimos el enlace personalizado en la aplicación móvil
        alert("La aplicación está instalada");
        window.location.href = `${customScheme}://`;
      } else {
        // Si la aplicación no está instalada, redirigimos al usuario a la tienda de aplicaciones
        alert("La aplicación no está instalada");
        if (isAndroid) {
          window.location.href = androidLink;
        }
        if (isIOS) {
          window.location.href = iosLink;
        }
        if (isOtherMobile) {
          // Si el dispositivo móvil no es Android ni iOS, no hacemos nada
          alert("El dispositivo móvil no es Android ni iOS");
          console.log("El dispositivo móvil no es Android ni iOS");
        }
      }
    }
  }, [customScheme, androidLink, iosLink]);
};

export default useAppDeepLinking;
