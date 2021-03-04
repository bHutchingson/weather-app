const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');

const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const uvi = document.querySelector('.uvi');


function fetchApi(event) {
    event.preventDefault();
    const location = searchBox.value;
    console.log(location);

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' +location+ '&units=imperial&appid=063552986ee031d6d3caec81e75eaa5b';
      
    fetch(apiUrl)
        .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
            console.log(data);
            cityName.textContent = data.name + ' ' + moment().format('L');
            temperature.textContent = 'Temperature: ' + data.main.temp;
            humidity.textContent = 'Humidity: ' + data.main.humidity;
            windSpeed.textContent = 'Wind Speed: ' + data.wind.speed;
            /* uvi.textContent = data. */
            });
        } /* else {
            alert('Error');
        } */
        })
        .catch(function (error) {
            alert('City Not Found');
        });

};

searchBtn.addEventListener('click', fetchApi);
