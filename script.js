function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'fd9be64169915e1ec1829b2249d89cb5'; // Replace with your API key
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15);
            const weatherDescription = data.weather[0].description;

            document.getElementById('weather').innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = 'Error fetching weather data.';
        });
}