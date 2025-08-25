async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (city === '') return alert("Please enter a city name.");

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        const output = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        document.getElementById('weatherOutput').innerHTML = output;
    } catch (error) {
        document.getElementById('weatherOutput').textContent = error.message;
    }
}
