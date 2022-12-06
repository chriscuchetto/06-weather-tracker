//Global Variables
let baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
let apiKey = "67282b5715a921433482ffda726b0a94";
let searchBtn = document.querySelector("#searchBtn");
let searchBar = document.querySelector("#searchBar");

//Functions
function init() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=67282b5715a921433482ffda726b0a94")
        .then(function (response) {
            return response.json();
        })
    }
//Event Listeners
init();