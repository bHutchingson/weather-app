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

            //element id's for card 1
            const date1 = document.querySelector('.date1');
            const temp1 = document.querySelector('.temp1');
            const humidity1 = document.querySelector('.humidity1');

            //element id's for card 2
            const date2 = document.querySelector('.date2');
            const temp2 = document.querySelector('.temp2');
            const humidity2 = document.querySelector('.humidity2');

            //element id's for card 3
            const date3 = document.querySelector('.date3');
            const temp3 = document.querySelector('.temp3');
            const humidity3 = document.querySelector('.humidity3');

            //element id's for card 4
            const date4 = document.querySelector('.date4');
            const temp4 = document.querySelector('.temp4');
            const humidity4 = document.querySelector('.humidity4');

            //element id's for card 5
            const date5 = document.querySelector('.date5');
            const temp5 = document.querySelector('.temp5');
            const humidity5 = document.querySelector('.humidity5');
      
            fetch(fiveDayForecast)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // day one
                    date1.textContent = (moment().add(1, 'days').format('MM-DD-YYYY'));
                    temp1.textContent = ('Temperature: ' + data.list[0].main.temp + ' ℉')
                    humidity1.textContent = ('Humidity: ' + data.list[0].main.humidity + '%')

                    // day two
                    date2.textContent = (moment().add(1, 'days').format('MM-DD-YYYY'));
                    temp2.textContent = ('Temperature: ' + data.list[1].main.temp + ' ℉')
                    humidity2.textContent = ('Humidity: ' + data.list[1].main.humidity + '%')

                    // day three
                    date3.textContent = (moment().add(1, 'days').format('MM-DD-YYYY'));
                    temp3.textContent = ('Temperature: ' + data.list[2].main.temp + ' ℉')
                    humidity3.textContent = ('Humidity: ' + data.list[2].main.humidity + '%')

                    // day four
                    date4.textContent = (moment().add(1, 'days').format('MM-DD-YYYY'));
                    temp4.textContent = ('Temperature: ' + data.list[3].main.temp + ' ℉')
                    humidity4.textContent = ('Humidity: ' + data.list[3].main.humidity + '%')

                    // day five
                    date5.textContent = (moment().add(1, 'days').format('MM-DD-YYYY'));
                    temp5.textContent = ('Temperature: ' + data.list[4].main.temp + ' ℉')
                    humidity5.textContent = ('Humidity: ' + data.list[4].main.humidity + '%')
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
