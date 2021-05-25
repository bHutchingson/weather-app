const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');

const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const uvi = document.querySelector('.uvi');
const recentSearchList = document.querySelector('.recent-cities');
const forecastContainer = document.querySelector('.forecast-container');

var recentSearches = [];

if(localStorage["recentSearches"]) {
    recentSearches = JSON.parse(localStorage["recentSearches"]);
    recentSearches.forEach(element => {
        const li = document.createElement('li');
        recentSearchList.append(li);
        li.textContent = element;
    });
}




async function fetchApi(event) {
    event.preventDefault();
    const location = searchBox.value;

    console.log(recentSearches);
    //create recent search buttons

    
    /* const li = document.createElement('li');
    recentSearchList.append(li);
    li.textContent = localStorage.getItem('recentSearches'); */

    var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=063552986ee031d6d3caec81e75eaa5b';

    
      
    //fetch current weather
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log(lat);
            console.log(lon);
            cityName.textContent = data.name + ' ' + moment().format('L');
            temperature.textContent = 'Temperature: ' + data.main.temp;
            humidity.textContent = 'Humidity: ' + data.main.humidity;
            windSpeed.textContent = 'Wind Speed: ' + data.wind.speed;
            

            var forecastUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&appid=063552986ee031d6d3caec81e75eaa5b'
        
            /* fetch(forecastUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    uvi.textContent = 'UV Index: ' + data.current.uvi;
                    for (var i = 0; i < 5; i++) {
                        var card = document.createElement('div');
                        forecastContainer.append(card);
                        var currentDate = '';

                        card.append(currentDate);

                        var icon = data.daily[i].weather.icon;
                        var iconUrl = 'http://openweathermap.org/img/wn/' + icon + '.png';

                        var forecastTemp = data.daily[i].temp.day;
                        card.append(forecastTemp);

                        


                    }
                }); */
            
                    
            });

            let fiveDayForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+location+'&units=imperial&appid=0ecab4d27a41d8e0ccd885f7bc5922d7'

            const date1 = document.querySelector('.date1');
            const temp1 = document.querySelector('.temp1');
            const humidity1 = document.querySelector('.humidity1');
      
            fetch(fiveDayForecast)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // day one of 5 day forecast
                    date1.textContent = (moment().add(1, 'days').format('MM-DD-YYYY'));
                    temp1.textContent = ('Temp: ' + data.list[0].main.temp + ' ℉')
                    humidity1.textContent = ('Humidity ' + data.list[0].main.humidity + '%')
                });



        


        /* .catch(function (error) {
            alert('City Not Found');
        }) */

        //fetch 5 day forecast
        /* fetch(forecastUrl)
        .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
            console.log(data);
           
            });
        }
        })
        .catch(function (error) {
            alert('City Not Found');
        }); */

        //set lat/lon in url for uv index from previous fetch
        /* var uvIndexUrl = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=063552986ee031d6d3caec81e75eaa5b'

        //fetch uv index by lat/lon
        fetch(uvIndexUrl)
        .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
            console.log(data);
           
            });
        }
        })
        .catch(function (error) {
            alert('City Not Found');
        }); */

};



searchBtn.addEventListener('click', fetchApi);
