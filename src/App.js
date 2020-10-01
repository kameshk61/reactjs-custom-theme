import React, { useState, useEffect } from "react";
import "./App.css";
import "./switcher.scss";

function App() {
  //initial state
  const [colorTheme, setColorTheme] = useState("theme-white");

  useEffect(() => {
    //check earlier applied theme in local storage
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  //handler to set the theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <div className="theme-options">
        <h4>Choose your theme color</h4>
        <div
          id="theme-white"
          className={colorTheme === "theme-white" ? "active" : null}
          onClick={() => handleClick("theme-white")}
        />
        <div
          id="theme-blue"
          className={colorTheme === "theme-blue" ? "active" : null}
          onClick={() => handleClick("theme-blue")}
        />
        <div
          id="theme-orange"
          className={colorTheme === "theme-orange" ? "active" : null}
          onClick={() => handleClick("theme-orange")}
        />
        <div
          id="theme-purple"
          className={colorTheme === "theme-purple" ? "active" : null}
          onClick={() => handleClick("theme-purple")}
        />
        <div
          id="theme-green"
          className={colorTheme === "theme-green" ? "active" : null}
          onClick={() => handleClick("theme-green")}
        />
        <div
          id="theme-black"
          className={colorTheme === "theme-black" ? "active" : null}
          onClick={() => handleClick("theme-black")}
        />
      </div>
      <div className="content-box">
        <h2>Kamesh Kumar Singh</h2>
        <h3>React Developer</h3>
        <p>
          Hi, I am Kamesh Kumar singh and I am a React developer. I built this
          using ReactJS, SCSS/CSS, Local Storage.
        </p>
        <p>
          Close your browser and reopen it to see the theme you chose being
          persistent.
        </p>
      </div>
    </div>
  );
}

export default App;
