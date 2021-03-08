import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [switchTheme, setSwitchTheme] = useState(true);
  const main = document.getElementById("main");
  useEffect(() => {
      if (switchTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
  }, [switchTheme]);
  return (
    <div className="header">
      <button
        onClick={() => setSwitchTheme(!switchTheme)}
        className="theme-switch"
      >
        <div
          style={{ transform: `translateX(${switchTheme ? "25px" : "0"})` }}
          className="theme-switch-item"
        ></div>
      </button>
    </div>
  );
}
