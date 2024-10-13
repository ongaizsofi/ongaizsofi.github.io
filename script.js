// Az API kulcsod
const apiKey = 'cbbcef00cf069a4ddf42c13d6f000ace';
const city = 'Budapest'; // Változtasd meg a várost, ha szükséges

// Az API URL
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Lekérés az API-tól
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Hiba történt az időjárás adatainak lekérésekor');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    console.log(`Jelenlegi hőmérséklet: ${temperature}°C, időjárás: ${weatherDescription}`);
  })
  .catch(error => {
    console.error('Hiba:', error);
  });
