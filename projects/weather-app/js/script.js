async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (city === '') return alert("Please enter a city name.");

    const Key = 'a9b036814e7d4efd9ee174846252508';
    const url = `https://api.weatherapi.com/v1/`;

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
