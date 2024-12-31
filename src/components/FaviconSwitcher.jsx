import { useEffect } from "react";

const FaviconSwitcher = () => {
  useEffect(() => {
    const updateFavicon = (theme) => {
      const link = document.querySelector("link[rel='icon']") || document.createElement("link");
      link.rel = "icon";
      link.href = theme === "dark" ? "/thewhiteg.svg" : "/theblackg.svg";
      document.head.appendChild(link);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => updateFavicon(e.matches ? "dark" : "light");

    updateFavicon(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return null;
};

export default FaviconSwitcher;
