

let wheather_data = document.querySelector(".wheatherinfo");

async function getWheather(input) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=bb1970edca621eaec570c9e3e45940c0`);
    let data = await response.json();

    console.log(data);
}


let enterButton = document.querySelector(".enter");

enterButton.addEventListener('click', () =>{

    let input = document.getElementById('input');
    let inputText = input.value;
    console.log(inputText);
    
    getWheather(inputText);

})