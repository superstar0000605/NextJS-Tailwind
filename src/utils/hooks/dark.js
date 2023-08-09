"use client";
import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);
  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    }
  }, [colorTheme, theme]);
  return [colorTheme, setTheme];
}
