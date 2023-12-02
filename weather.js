const apiKey= "c86f4ed7ee81b6f8cbe97e37b56d6dec";
        const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else {
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "weather/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "weather/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "weather/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "weather/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "weather/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }}

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
