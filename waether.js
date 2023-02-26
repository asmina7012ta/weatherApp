function search() {
    weather = city.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data => data.json()).then(data => displayData(data))

}
function displayData(cityData){

cityName=cityData.name
humid=cityData.main.humidity
temperature=((cityData.main.temp)-273.15).toFixed()
windspeed=cityData.wind.speed
condition=cityData.weather[0].description
var today=new Date();
var day=today.getDay()
var dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
result.innerHTML=`
<h1 class="temp">${dayList[day]} </h1>
<h3 class="city"> Weather in ${cityName}<i class="fa-solid fa-cloud"></i></h3>
<h3 >${condition}</h3>
<h1 class="temp">${temperature}°C <i class="fa-solid fa-temperature-three-quarters"></i> </h1>
<h4 class="humid"> Humidity:<i class="fa-solid fa-arrow-right"></i> ${humid}% </h4>
<h4 class="wind">Wind speed:<i class="fa-solid fa-arrow-right"></i>${windspeed}km/h <i class="fa-solid fa-wind"></i></h4>
`

}
