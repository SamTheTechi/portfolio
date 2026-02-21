import { useEffect, useRef } from "react";

const themes = ["green", "amber"];

export function useSecretThemeToggle<T extends HTMLElement>() {
  const targetRef = useRef<T | null>(null);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("crt-theme") || "green";
    document.documentElement.setAttribute("data-theme", saved);

    const handleSecretClick = () => {
      clickCount.current++;

      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }

      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000);

      if (clickCount.current === 2) {
        const currentTheme =
          document.documentElement.getAttribute("data-theme") || "green";

        const currentIndex = themes.indexOf(currentTheme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];

        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("crt-theme", nextTheme);

        clickCount.current = 0;
      }
    };

    const el = targetRef.current;
    if (!el) return;

    el.addEventListener("click", handleSecretClick);

    return () => {
      el.removeEventListener("click", handleSecretClick);
    };
  }, []);

  return targetRef;
}
