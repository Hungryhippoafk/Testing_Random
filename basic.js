function generateWeatherApp() {
    const body = document.body;
    const weatherCard = document.createElement("div");
    console.log("weathercard created");
    const inputText = document.createElement("input");
    const buttonSearch = document.createElement("button");
    const buttonImg = document.createElement("button");
    const search = document.createElement("div");
    const weather = document.createElement("div");
    const imgWeather = document.createElement("img");
    const weatherIcon = document.createElement("weather-icon");
    const tempDegree = document.createElement("h1");
    const city = document.createElement("h2");
    const details = document.createElement("div");
    const col = document.createElement("div");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");

    weatherCard.className = "weatherCard";
    weatherCard.style.display = "none";
    inputText.className = "inputText";
    inputText.setAttribute("Placeholder", "Enter city name");
    buttonSearch.className = "buttonSearch";
    buttonImg.className = "buttonImg";
    search.className = "search";
    weather.className = "weather";
    imgWeather.className = "imgWeather";
    weatherIcon.className = "weatherIcon";
    tempDegree.className = "tempDegree";
    city.className = "city";
    details.className = "details";
    col.className = "col";
    humidity.className = "humidity";
    wind.className = "wind";

    weatherCard.appendChild(tempDegree);
    weatherCard.appendChild(city);
    details.appendChild(humidity);
    details.appendChild(wind);
    weatherCard.appendChild(details);

    search.appendChild(inputText);
    search.appendChild(buttonSearch);

    body.appendChild(search);
    body.appendChild(weatherCard);

    buttonSearch.textContent = "Search";

    // Add event listener for the button after it's created
    buttonSearch.addEventListener("click", () => {
        const cityName = inputText.value.trim();
        if (cityName) {
            getWeather(cityName);
        }
    });
}

async function getWeather(cityName) {
    const apiKey = "9e46242b6d1eb2ff4c69d8788b9e42dd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        updateWeatherCard(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function updateWeatherCard(data) {
    const weatherCard = document.querySelector(".weatherCard");
    const tempDegree = document.querySelector(".tempDegree");
    const city = document.querySelector(".city");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    // Correct use of template literals with backticks
    tempDegree.textContent = `${data.main.temp}°C`;
    city.textContent = data.name;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind: ${data.wind.speed} m/s`;

    weatherCard.style.display = "block";
}

generateWeatherApp();
