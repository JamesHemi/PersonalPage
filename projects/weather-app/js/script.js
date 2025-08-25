async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (city === '') return alert("Please enter a city name.");

   const url = 'https://api.weatherstack.com/current?access_key={b4cad932ef8c1cf44d97b03517f59b71}&query=New York&forecast_days=7';
const options = {
	method: 'GET'
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


