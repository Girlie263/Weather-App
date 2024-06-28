function refreshData(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature= response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city){
    let apiKey ="0cb1t3949f347fc75ae8b7o36a1c0c57";
    let apiUrl =
     `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
     axios.get(apiUrl).then(refreshData);
}



function handleSubmit(event){
    event.preventDefault()
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSubmit);

searchCity("Florence")