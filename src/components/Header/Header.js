import React from "react";
import "./Header.css";

export default function Header() {
  const root = document.documentElement;
  setTimeout(() => {
    const btn = document.getElementById("theme-switch");
    if (theme === "dark") {
      btn.classList.add("darkTheme");
    } else {
      btn.classList.add("lightTheme");
    }
  }, 1);
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);
  } else {
    root.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    const btn = document.getElementById("theme-switch");
    if (theme === darkTheme) {
      root.classList.replace(darkTheme, lightTheme);

      localStorage.setItem("theme", "light");
      theme = lightTheme;
      btn.classList.replace("darkTheme", "lightTheme");
    } else {
      root.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      btn.classList.replace("lightTheme", "darkTheme");
    }
  };

  return (
    <div className="header">
      <button id="theme-switch" onClick={(e) => switchTheme(e)}>
        <div className="theme-switch-item"></div>
      </button>
    </div>
  );
}
