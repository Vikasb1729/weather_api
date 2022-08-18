var inputs = document.querySelector('.inputs')
var cityInput = document.querySelector(".city-input");
var cityName = document.querySelector(".city");
var Temp = document.querySelector('.temp');
var description = document.querySelector('.description');
var wrongInput = document.querySelector(".input-error");
var weatherContainer = document.querySelector('.weather-container')
var body = document.querySelector('body')
inputs.addEventListener('submit', function (e) {
    e.preventDefault();
    weatherUpdate(cityInput.value);
});
weatherUpdate = function (cityInput) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=967edc8db5ec05cefcf74ba83e7d5181`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            wrongInput.classList.add('hide')
            body.classList.add('black')
            weatherContainer.classList.remove('show')
        });
}

drawWeather = function (data) {
    wrongInput.classList.remove('hide')
    weatherContainer.classList.add('show')
    var name = data.name;
    var celcius = Math.round(data.main.temp - 273.15);
    var descriptions = data.weather[0].description;
    cityName.innerHTML = name
    Temp.innerHTML = celcius + `\u00B0C`
    console.log(celcius);
    description.innerHTML = descriptions
    console.log(descriptions);


    if (celcius > -10 && celcius < 20) {
        body.classList.add('snow')
    }
    else {
        body.classList.remove('snow')
    }
    if (celcius > 21 && celcius < 30) {
        body.classList.add('haze')
    }
    else {
        body.classList.remove('haze')
    }
    if (celcius > 31 && celcius < 40) {
        body.classList.add('cloudy')
    }
    else {
        body.classList.remove('cloudy')
    }
    if (celcius > 41 && celcius < 50) {
        body.classList.add('clear')
    }
    else {
        body.classList.remove('clear')
    }
    if (celcius > 51 && celcius < 60) {
        body.classList.add('sunny')
    }
    else {
        body.classList.remove('sunny')
    }
}

weatherUpdate("mumbai");



















  // if (descriptions == 'haze') {
    //     body.classList.add('haze')
    // }
    // else {
    //     body.classList.remove('haze')
    // }

    // if (descriptions == 'rain') {
    //     body.classList.add('rain')
    // }
    // else {
    //     body.classList.remove('rain')
    // }
    // if (descriptions == 'drizzle') {
    //     body.classList.add('drizzle')
    // }
    // else {
    //     body.classList.remove('drizzle')
    // }

    // if (descriptions == 'smoke' || descriptions == 'ash') {
    //     body.classList.add('smoke')
    // }
    // else {
    //     body.classList.remove('smoke')
    // }

    // if (descriptions == 'overcast clouds') {
    //     body.classList.add('cloudy')
    // }
    // else {
    //     body.classList.remove('cloudy')
    // }
    // if (descriptions == 'clear sky') {
    //     body.classList.add('clear')
    // }
    // else {
    //     body.classList.remove('clear')
    // }
    // // else if (descriptions == 'fog' || descriptions == 'tornado' || descriptions == 'haze') {
    // //     body.classList.add('fog')
    // // }
    // if (descriptions == 'snow' || descriptions == 'mist') {
    //     body.classList.add('snow')
    // }
    // else {
    //     body.classList.remove('snow')
    // }


















 // switch (descriptions) {
    //     case 'Thunderstorm':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Rain':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Drizzle':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Smoke':
    //     case 'ash':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Clouds':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Clear':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Fog':
    //     case 'Squall':
    //     case 'Tornado':
    //     case 'Haze':
    //         body.classList.add('sunny')
    //         break;
    //     case 'Snow':
    //     case 'Mist':
    //         body.classList.add('sunny')
    //         break;

    // }


// weatherUpdate = function(cityInput) {
//     const xhr = new XMLHttpRequest();
    // xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=cad7ec124945dcfff04e457e76760d90`, true);
//     xhr.send();
//     xhr.onload = function() {
//         if (xhr.status === 404) {
//             wrongInput.classList.toggle('hide')
//         } else {
//             var data = JSON.parse(xhr.response);
//             cityName.innerHTML = data.name;
//             Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
//             main.innerHTML = data.weather[0].main;
//             weatherContainer.classList.add('show')
//         }
//     };            

// };