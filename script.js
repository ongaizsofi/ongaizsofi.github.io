document.getElementById('getWeather').addEventListener('click', function() {
  const city = document.getElementById('city').value;
  const apiKey = '72c560da35b01f7640efbe958b00ceb9'; // Cseréld le a saját API kulcsodra

  // API hívás az időjárás adatainak lekérdezésére
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
          if (!response.ok) {
              throw new Error('Hiba történt az adatok lekérdezésekor!');
          }
          return response.json();
      })
      .then(data => {
          const weatherInfo = `
              Város: ${data.name}
              Időjárás: ${data.weather[0].description}
              Hőmérséklet: ${data.main.temp.toFixed(1)} °C
              Szélsebesség: ${data.wind.speed.toFixed(1)} km/h
              Páratartalom: ${data.main.humidity} %
          `;
          document.getElementById('weatherResult').innerText = weatherInfo;
      })
      .catch(error => {
          console.error('Hiba történt:', error);
          document.getElementById('weatherResult').innerText = 'Város nem található vagy hiba történt.';
      });
});
