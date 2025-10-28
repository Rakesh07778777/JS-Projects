const apiKey = 'f67163c9328bf9edd6d93bf630d846a8';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const input = document.querySelector('.search input');
const button = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(cityName) {
  if (!cityName) {
    alert("Please enter a city name!");
    return;
  }

  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  const data = await response.json();

  if (data.cod === '404') {
    alert("City not found!");
    return;
  }

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';

  if (data.weather[0].main === 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
  } else if (data.weather[0].main === 'Clear') {
    weatherIcon.src = 'images/clear.png';
  } else if (data.weather[0].main === 'Rain') {
    weatherIcon.src = 'images/rain.png';
  } else if (data.weather[0].main === 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
  } else if (data.weather[0].main === 'Mist') {
    weatherIcon.src = 'images/mist.png';
  }
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const city = input.value.trim();
    if (city) {
      checkWeather(city); // your function
    } else {
      alert("Please enter a city name");
    }
  }
});


button.addEventListener('click', () => {
    checkWeather(input.value);
});


 