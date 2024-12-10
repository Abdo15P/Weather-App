
let searchInput = document.getElementById("searchInput");
let weatherResponse;
let day;
let date;
let month;
let lat;
let long;

async function getWeather(name) {

  if (long !== null && long !== undefined && lat !== null && lat !== undefined) {
    name = lat + "," + long;
  }
  else if (name === null || name === undefined) {
    name = "cairo";
  }


  try {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a11cd1713a5240e095252830240912&q=${name}&days=7`, { headers: { 'Content-Type': 'application/json' } });
    weatherResponse = await response.json();
  } catch (error) {
    console.log('There was an error', error);
  }


  let d = new Date(weatherResponse.location.localtime);
  day = d.getDay();
  nextDay = day + 1;
  afterDay = day + 2;
  date = d.getDate();
  month = d.getMonth();


  day = determineDay(day);
  nextDayName = determineDay(nextDay);
  afterDayName = determineDay(afterDay);

  month = determineMonth(month);

}


function determineMonth(month) {
  if (month === 0) {
    month = "January";
  }
  else if (month === 1) {
    month = "February";
  }
  else if (month === 2) {
    month = "March";
  }
  else if (month === 3) {
    month = "April";
  }
  else if (month === 4) {
    month = "May";
  }
  else if (month === 5) {
    month = "June";
  }
  else if (month === 6) {
    month = "July";
  }
  else if (month === 7) {
    month = "August";
  }
  else if (month === 8) {
    month = "September";
  }
  else if (month === 9) {
    month = "October";
  }
  else if (month === 10) {
    month = "November";
  }
  else if (month === 11) {
    month = "December";
  }
  return month;
}

function determineDay(day) {
  if (day === 0) {
    day = "Sunday";
  }
  else if (day === 1) {
    day = "Monday";
  }
  else if (day === 2) {
    day = "Tuesday";
  }
  else if (day === 3) {
    day = "Wednesday";
  }
  else if (day === 4) {
    day = "Thursday";
  }
  else if (day === 5) {
    day = "Friday";
  }
  else if (day === 6) {
    day = "Saturday";
  }
  return day;
}

async function searchWeather() {


  let term = searchInput.value;
  try {
    let response1 = await fetch(`https://api.weatherapi.com/v1/search.json?key=a11cd1713a5240e095252830240912&q=${term}`, { headers: { 'Content-Type': 'application/json' } });
    searchResponse = await response1.json();
  } catch (error) {
    console.log('There was an error', error);
  }

  if (searchResponse[0] !== null || searchResponse[0] !== undefined) {
    displayForecast(searchResponse[0].name)
  }


}

async function displayForecast(name) {
  await getWeather(name);
  document.getElementById("forecast").innerHTML = ` 
  <div class="row row1 gx-0  w-100 ">
        <div class="col-lg-4 col-12">
            <div class="w-100">
            <div class="cardtop currenttop d-flex  justify-content-between ">
                <span>${day}</span>
                <span class=""> ${date}${month}</span>
            </div>
            <div class="card1 current d-flex flex-column">
                <span class="currentcity ms-3 mt-4">${weatherResponse.location.name}</span>
                <span class="currenttemp ms-4 mt-2 text-white">${weatherResponse.current.temp_c} &degC</span>
                <span class="currenticon ms-4 mt-4"><img src="https:${weatherResponse.current.condition.icon}" alt=""></span>
                <span class="currentcond text-primary ms-4 mt-3">${weatherResponse.current.condition.text}</span>
                <div class="ms-4 mt-3">
                    
                    <i class="fa-solid fa-umbrella"></i>  ${weatherResponse.current.wind_degree}%
                    <i class="fa-solid fa-wind ms-2"></i>  ${weatherResponse.current.wind_kph}km/h
                    <i class="fa-regular fa-compass ms-2"></i>  ${weatherResponse.current.wind_dir}
                </div>
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="w-100">
            <div class="cardtop middletop text-center ">
                <span>${nextDayName}</span>
                
            </div>
            <div class="card1 middle d-flex flex-column text-center">
                <span class="weathericon mt-5"><img src="https:${weatherResponse.forecast.forecastday[nextDay].day.condition.icon}" alt=""></span>
                <span class="major mt-4 text-white">${weatherResponse.forecast.forecastday[nextDay].day.maxtemp_c} &degC</span>
                <span class="minor">${weatherResponse.forecast.forecastday[nextDay].day.mintemp_c} &degC</span>
                <span class="mt-4 text-primary condition">${weatherResponse.forecast.forecastday[nextDay].day.condition.text}</span>
                
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="w-100 h-100">
                <div class="cardtop righttop text-center">
                    <span>${afterDayName}</span>
                    
                </div>
                <div class="card1 right d-flex flex-column text-center">
                    <span class="weathericon mt-5"><img src="https:${weatherResponse.forecast.forecastday[afterDay].day.condition.icon}" alt=""></span>
                    <span class="major mt-4 text-white">${weatherResponse.forecast.forecastday[afterDay].day.maxtemp_c} &degC</span>
                    <span class="minor">${weatherResponse.forecast.forecastday[afterDay].day.mintemp_c} &degC</span>
                    <span class="mt-4 text-primary condition">${weatherResponse.forecast.forecastday[afterDay].day.condition.text}</span>
                    
                </div>
        </div>
    </div>

  `
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;

}
getLocation();
getWeather();
displayForecast();

