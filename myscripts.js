
let wheather_data = document.querySelector(".wheatherinfo");


let place = document.querySelector(".name");
let image = document.querySelector("img");
let cWeather = document.querySelector(".weather");
let cTemp = document.querySelector(".currentTemp");

let minTemp = document.querySelector(".minTemp");
let maxTemp = document.querySelector(".maxTemp");

let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

let returnError = document.querySelector(".error");



async function getWheather(input) {

    returnError.innerText = "";

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=bb1970edca621eaec570c9e3e45940c0`);
    let data = await response.json();

    if(data.name != undefined){
        console.log(data);
        renderWheather(data);
    }
    else{
        returnError.innerText = "Location Unknown";
    }
}

let enterButton = document.querySelector(".enter");

enterButton.addEventListener('click', () =>{

    let input = document.getElementById('input');
    let inputText = input.value;
    console.log(inputText);
    
    getWheather(inputText);
})



function renderWheather(data) {

    place.innerText = data.name;
    
    getPic(data);

    cWeather.innerText = (String(data.weather[0].description)).toUpperCase();
    cTemp.innerText = "Temperature: " + Math.floor(+data.main.temp - 273.15) + " \u00B0C";
    
    minTemp.innerText = "Min: " + Math.floor(+data.main.temp_min - 273.15) + " \u00B0C";
    maxTemp.innerText = "Max: " + Math.floor(+data.main.temp_max - 273.15) + " \u00B0C";

    humidity.innerText = "Humidity: " + data.main.humidity + "%";
    wind.innerText = "Wind Speed: " + data.wind.speed + " m/s";

}


async function getPic(info){

    let imgDescription = info.name + info.weather[0].description;

    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MBnLIaKTWifuoAMNwIY3dvrjz0CjHuPJ&s=${imgDescription}`,{mode:"cors"});

    let pic = await response.json();

    image.src = pic.data.images.original.url;
}
