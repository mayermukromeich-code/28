// Weather Dashboard JavaScript

const apiKey = 'YOUR_API_KEY'; // OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

// Function to fetch current weather
async function fetchCurrentWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (response.ok) {
        const data = await response.json();
        displayCurrentWeather(data);
    } else {
        console.error('Error fetching current weather:', response.statusText);
    }
}

// Function to fetch 5-day forecast
async function fetchForecast(city) {
    const response = await fetch(`${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (response.ok) {
        const data = await response.json();
        displayForecast(data);
    } else {
        console.error('Error fetching forecast:', response.statusText);
    }
}

// Function to display current weather conditions
function displayCurrentWeather(data) {
    const { main, weather, name } = data;
    console.log(`Current weather in ${name}: ${weather[0].description}, Temperature: ${main.temp}°C`);
    // Here, you can also update the DOM to display the weather on the page
}

// Function to display 5-day forecast
function displayForecast(data) {
    const forecastList = data.list;
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        console.log(`Forecast for ${date.toLocaleDateString()}: ${forecast.weather[0].description}, Temperature: ${forecast.main.temp}°C`);
        // Here, you can also update the DOM to display the forecast on the page
    });
}

// Event listener for user input (e.g., a form or button to get weather for a specific city)
document.querySelector('#get-weather-btn').addEventListener('click', () => {
    const city = document.querySelector('#city-input').value;
    if (city) {
        fetchCurrentWeather(city);
        fetchForecast(city);
    }
});
