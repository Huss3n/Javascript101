const API_KEY = "";

const CITY_NAME = "Nairobi";

// Make a request to the OpenWeatherMap API
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=imperial`
)
  .then((response) => response.json())
  .then((data) => {
    // Extract the relevant information from the parsed data
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const wind_speed = data.wind.speed;

    // Log the data to the console
    console.log(`Temperature: ${temperature} K`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Wind speed: ${wind_speed} m/s`);
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
