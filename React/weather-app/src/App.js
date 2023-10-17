// src/App.js
import React from "react";
import "./App.css";

function App() {
  const getWeather = () => {
    const city = document.getElementById("cityInput").value.toLowerCase();
    let weatherInfo = document.getElementById("weatherInfo");
    let temperature = "";
    let weatherDescription = "";

    if (city === "algiers") {
      temperature = "30°C";
      weatherDescription = "Sunny";
    } else if (city === "paris") {
      temperature = "15°C";
      weatherDescription = "Cloudy";
    } else if (city === "new york") {
      temperature = "18°C";
      weatherDescription = "Partly cloudy";
    } else {
      weatherInfo.innerHTML =
        "Weather information not available for the specified city.";
      return;
    }

    const weatherOutput = `Weather: ${weatherDescription}, Temperature: ${temperature}`;
    weatherInfo.innerHTML = weatherOutput;
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input type="text" id="cityInput" placeholder="Enter city name" />
      <button onClick={getWeather}>Get Weather</button>
      <div id="weatherInfo"></div>
    </div>
  );
}

export default App;
