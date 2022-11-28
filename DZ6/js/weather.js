const APIKEY = 'f5555056adb66fa58ba405232fa72572';

let form = document.getElementById("form");
let city = document.getElementById("City");
let currentBlock = document.querySelector(".current");
let hourlyBlock = document.querySelector(".hourly-info");

window.onload = ()=> {
    let userCity = getCookie("_u-city");
    let life = getCookie("_life");
    let data = localStorage.getItem("_data");
    if(userCity && life) {
        if(life && data) {
            data = JSON.parse(data);            
            CurrentWeather(data.city.timezone, data.city.name, data.list[0]);
            for (let i = 1; i < 7; i++){
                getHourlyWeather(data.city.timezone, data.list[i])             
            }
            return; 
        }          
        getWeather(userCity);
        return;                      
    }
}

function getCity(city) {
    if (city.value !="") 
        return city.value;
    return "";
}

function getWeather(city) {
    if (city !="") {       
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric&limit=5`;    
        fetch(url, {
            method: "GET",
            })
            .then((responce) => responce.json())
            .then( (data) => { 
                if(data.cod == 200){                              
                    ClearWeather();
                    CurrentWeather(data.city.timezone, data.city.name, data.list[0]);
                    for (let i = 1; i < 7; i++){
                        getHourlyWeather(data.city.timezone, data.list[i]) 
                    }
                    setCookie('_u-city', data.city.name, {secure: true, 'max-age': 3600*24});
                    setCookie('_life', true, {secure: true, 'max-age': 3600*3});      
                    localStorage.setItem("_data", JSON.stringify(data));
                }
                if (data.cod == 404) {
                    get404();
                }
            })
            .catch((e)=> {
                console.log(e);
            })
    }
    return;
}

function CurrentWeather(timezone, city, list){
    let current = (parseInt(list.dt) + timezone) * 1000; 
    let currentDate = new Date(current);  

    currentBlock.innerHTML = "";    
    currentBlock.insertAdjacentHTML("beforeend", 
    `<div class="head-block">
        <div class="title">${city}</div>
        <div class="date">${currentDate.toDateString()}</div>
    </div>
    <div class="body-block">                
        <div class="info-block">
            <div class="img">
                <div class="info-title">${list.weather[0].main}</div>
                <img src="https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png" alt="" srcset="">
            </div>
            <div class="temp">${list.main.temp} &deg;C</div>
            <div class="temp-info">
                <div class="info-temp"><span>Min temperature:</span><span>${list.main.temp_min} &deg;C</span></div>
                <div class="info-temp"><span>Max temperature:</span><span>${list.main.temp_max} &deg;C</span></div>
                <div class="info-temp"><span>Wind speed(km/h):</span><span>${list.wind.speed}</span></div>
            </div>            
        </div>
    </div>`
    )
}

function getHourlyWeather(timezone, list) {
    let current = (parseInt(list.dt) + timezone) * 1000;    
    let currentDate = new Date(current);   
    hourlyBlock.insertAdjacentHTML("beforeend", 
    `<div class="hourly-weather">
        <div class="time">${currentDate.getUTCHours()}:00</div>
        <div class="img-h"><img src="https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png" alt="" srcset=""></div>
        <div class="h-weather">${list.weather[0].main}</div>
        <div class="h-temp">${list.main.temp} &deg;C</div>
    <div class="h-wind">${list.wind.speed}</div>
    </div> 
    `)
}

function ClearWeather() {
    let hourly = document.querySelectorAll('.hourly-weather');
    if(hourly) {
        hourly.forEach(h => {
            h.parentNode.removeChild(h);
        });
    }
}

function get404() {
    currentBlock.innerHTML = "";
    ClearWeather();
    currentBlock.insertAdjacentHTML("beforeend", 
        `<div style="text-align:center; font-size:8rem; color: #299ca4;">404</div>
        <p style="text-align:center; text-transform: uppercase;">City not found</p>
        <p style="text-align:center; font-size:2rem; padding-top:2rem">Please enter different city</p>
        `
    )
}

//https://learn.javascript.ru/cookie#prilozhenie-funktsii-dlya-raboty-s-kuki
function setCookie(name, value, options = {}) {
    options = {
      path: '/',      
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
  
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

form.onsubmit = (e) => {
    e.preventDefault();
    getWeather(getCity(city));    
}