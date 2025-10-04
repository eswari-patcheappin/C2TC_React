import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [theme, setTheme] = useState("light");
  const [city, setCity] = useState("London");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1>🌦 Weather Dashboard</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <WeatherSearch onSearch={setCity} />
        <WeatherDisplay city={city} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;