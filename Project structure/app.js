function getWeather() {
  const city = document.getElementById("cityInput").value;
  let weatherInfo = document.getElementById("weatherInfo");
  let temperature = "";
  let weatherDescription = "";

  if (city.toLowerCase() === "algiers") {
    temperature = "30°C";
    weatherDescription = "Sunny";
  } else if (city.toLowerCase() === "paris") {
    temperature = "15°C";
    weatherDescription = "Cloudy";
  } else if (city.toLowerCase() === "new york") {
    temperature = "18°C";
    weatherDescription = "Partly cloudy";
  } else {
    weatherInfo.innerHTML =
      "Weather information not available for the specified city.";
    return;
  }

  const weatherOutput = `Weather: ${weatherDescription}, Temperature: ${temperature}`;
  weatherInfo.innerHTML = weatherOutput;
}
