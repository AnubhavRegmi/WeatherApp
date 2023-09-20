const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "f74654e993a5ab1612845ef1ff18cc0a";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.abc button')
const icon = document.querySelector('.icon');
async function weatherCheck(city) {

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.windy').innerHTML = data.wind.speed + 'km/hr';

        if (data.weather[0].main == 'Clouds') {
            icon.src = 'images/cloudy.png';
        }
        else if (data.weather[0].main == 'Clear') {
            icon.src = 'images/sunny.png';
        }
        else if (data.weather[0].main == 'Rain') {
            icon.src = 'images/rainy.png';
        }
        else if (data.weather[0].main == 'Snow') {
            icon.src = 'images/snowy.png';
        }
        else if (data.weather[0].main == 'Mist') {
            icon.src = 'images/misty.png';
        }
        document.querySelector('.weather').style.display = 'block';
    }



}
searchBtn = addEventListener('click', () => {
    weatherCheck(searchBox.value);
})
