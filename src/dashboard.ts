const insideTemp = document.getElementById('InsideTemp')!;
const speed = document.getElementById('speed')!;

const position = document.getElementById('Position')!;
const temperature = document.getElementById('Temperature')!;
const description = document.getElementById('Description')!;
const humidity = document.getElementById('Humidity')!;
const precipitation = document.getElementById('Precipitation')!;
const wind = document.getElementById('Wind')!;

async function getTemp() {
    const url = 'http://localhost:8000/getTemperature'

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      const data = await response.json();
      console.log(data);
      insideTemp.innerHTML = data.Temp;
    } catch (error) {
      console.error('Errore:', error);
    }
  }

  async function getSpeed() {
    const url = 'http://localhost:8000/getSpeed'

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      const data = await response.json();
      console.log(data);
      speed.innerHTML = data.Speed;
    } catch (error) {
      console.error('Errore:', error);
    }
  }


  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

async function getWeather() {
    const city = 'Palermo';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=646527f14f44766391172bb7f98e9210&units=metric&lang=it`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.error('Errore:', error);
    }
  }
  
  function displayWeather(data: any) {
    position.innerHTML = data.name + ", " + data.sys.country;
    temperature.innerHTML = data.main.feels_like;
    description.innerHTML = capitalizeFirstLetter(data.weather[0].description);
    humidity.innerHTML = data.main.humidity;
    precipitation.innerHTML = data.clouds.all; 
    wind.innerHTML = data.wind.speed;
  }

getWeather();

getTemp();
getSpeed();