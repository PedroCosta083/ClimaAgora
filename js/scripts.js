const apiKey = "f629271334f82304007c2677e219606f";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

// Funções
const showWeatherData = (city) => {
    console.log(city);
}

// Eventos
searchBtn.addEventListener("click", (e) => {

    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})