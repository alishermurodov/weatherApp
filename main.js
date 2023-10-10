const apikey = "e9454d3a9165f5b699096ec23198477d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".searchh input")
const searchBtn = document.querySelector(".searchh button")
const wIcon = document.querySelector(".wIcon")



async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    let data = await response.json()

    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°"
    document.querySelector(".humid").innerHTML = data.main.humidity + "%"
    document.querySelector(".windd").innerHTML = data.wind.speed + " km/h"

    // if(data.weather[0].main == "Clouds"){
    //     wIcon.src = "img/clouds.png"
    // }
    // else if(data.weather[0].main == "Clear"){
    //     wIcon.src = "img/clear.png"
    // }
    // else if(data.weather[0].main == "Rain"){
    //     wIcon.src = "img/rain.png"
    // }
    // else if(data.weather[0].main == "Drizzle"){
    //     wIcon.src = "img/drizzle.png"
    // }
    // else if(data.weather[0].main == "Misit"){
    //     wIcon.src = "img/misit.png"
    // }

}


searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value)
})





