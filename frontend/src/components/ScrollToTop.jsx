import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kiedy zmienia się ścieżka (URL), przewiń na samą górę
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ten komponent nic nie wyświetla, działa tylko w tle
}
