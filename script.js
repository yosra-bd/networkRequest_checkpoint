const apiKey = 'fe824cb856a37281c8c13e7a5fbbd488'

function getWeather(event){
    event.preventDefault ()
    const city = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url).then(response => response.json())
                .then(res => {
                    document.querySelector('.temp').innerHTML = res.main.temp +'°c'
                    document.querySelector('img').src = "https://openweathermap.org/img/wn/" + res.weather[0].icon+"@2x.png"
                })
}

