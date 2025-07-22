async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const result = document.getElementById('weatherResult');

  if (!city) {
    result.innerHTML = "⚠️ Please enter a city.";
    return;
  }

  const apiKey = "47b9679512865ff70ee5a2795d29466e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = `❌ Error: ${error.message}`;
  }
}
