import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function WeatherDisplay({ city }) {
  const [weather, setWeather] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Free API: https://api.open-meteo.com/
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true`
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error("Error fetching weather", err);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div>
      <h2 style={{ color: theme === "light" ? "blue" : "orange" }}>
        Weather in {city}
      </h2>
      {weather ? (
        <p>
          🌡 Temperature: {weather.temperature}°C <br />
          💨 Wind Speed: {weather.windspeed} km/h
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherDisplay;