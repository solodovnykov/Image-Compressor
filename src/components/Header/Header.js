import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("darkMode", "enabled");
    const switchBtn = document.getElementById("switch");
    switchBtn.style.transform = "translateX(25px)";
  };
  const disableDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("darkMode", null);
    const switchBtn = document.getElementById("switch");
    switchBtn.style.transform = "translateX(0)";
  };
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  const handler = () => {
    darkMode = localStorage.getItem("darkMode");

    // if it not current enabled, enable it
    if (darkMode !== "enabled") {
      enableDarkMode();
      // if it has been enabled, turn it off
    } else {
      disableDarkMode();
    }
  };

  return (
    <div className="header">
      <button onClick={() => handler()} className="theme-switch">
        <div id="switch" className="theme-switch-item"></div>
      </button>
    </div>
  );
}
