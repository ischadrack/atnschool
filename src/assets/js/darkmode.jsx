import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`body ${isDarkMode ? "active-dark-mode" : ""}`}>
      <a
        href="javascript:void(0)"
        className="setColor"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <i className="fa-solid fa-lightbulb" />
        ) : (
          <i className="fa-solid fa-moon" />
        )}
      </a>
    </div>
  );
}
