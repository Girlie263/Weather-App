function refreshData(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature= response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let desciptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    timeElement.innerHTML = formatDate(date);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    desciptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;

}


function formatDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes <10){
        minutes =`0${minutes}`
    }


    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

    let day =days[date.getDay()]
    return `${day} ${hours}:${minutes}`
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