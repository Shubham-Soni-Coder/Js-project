const apikey = "297916dd6955858f6d6ca73d36f8da3d";
const apiurl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serchBox = document.querySelector(".search input");
const serchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherCondition = data.weather[0].main;
        const isNight = data.weather[0].icon.includes('n');

        if (weatherCondition == "Clouds") {
            weatherIcon.src = isNight ? "images/partly_clound(night).png" : "images/clound.png";
        }
        else if (weatherCondition == "Clear") {
            weatherIcon.src = isNight ? "images/clear_night.png" : "images/clear.png";
        }
        else if (weatherCondition == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (weatherCondition == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (weatherCondition == "Snow") {
            weatherIcon.src = "images/Snowy.png";
        }
        else if (weatherCondition == "Thunderstorm") {
            weatherIcon.src = "images/Thunderstorm.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.quaerySelector(".error").style.display = "None";
    }
}

serchBtn.addEventListener("click", () => {
    checkWeather(serchBox.value);
})
