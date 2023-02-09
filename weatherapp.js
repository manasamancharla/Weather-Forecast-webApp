
//https://rapidapi.com/weatherapi/api/weatherapi-com/
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ab08631b3fmsh8ee5eaa3522bc73p1f3a16jsn735750cbd5d0",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

// DIV ID's
const searchInput = document.getElementById("locInput")

const searchBtn = document.getElementById("searchBtn")

const resetBtn = document.getElementById("reset")


// used for fetching data and updating the DOM.
const getWeather = async (search,options) => {
  try {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`
    const response = await fetch(url, options)
    const json = await response.json()
    //console.log(json)
    document.querySelector('#country').innerHTML = `<p><h3>Country : ${json.location.country}</h3></p>`
    document.querySelector('#timezone').innerHTML = `<p><h3>Timezone : ${json.location.tz_id}</h3></p>`
    document.querySelector('#condition').innerHTML = `<p><h3>Condition : ${json.current.condition.text}</h3></p>`
    document.querySelector('#temperature').innerHTML = `<p><h3>Temperature : ${json.current.temp_c}°C </h3></p>`
    document.querySelector('#humidity').innerHTML = `<p><h3>Humidity : ${json.current.humidity}% </h3></p>`
    document.querySelector('#wind').innerHTML = `<p><h3>Wind : ${json.current.wind_kph}Kmph </h3></p>`
  } 
  catch (err) {
    console.error(err)
  }
};


const reset = () =>{
    document.querySelector('#country').innerHTML = `<p><h3>Country : -----</h3></p>`
    document.querySelector('#timezone').innerHTML = `<p><h3>Timezone : -----</h3></p>`
    document.querySelector('#condition').innerHTML = `<p><h3>Condition : -----</h3></p>`
    document.querySelector('#temperature').innerHTML = `<p><h3>Temperature : -----</h3></p>`
    document.querySelector('#humidity').innerHTML = `<p><h3>Humidity : -----</h3></p>`
    document.querySelector('#wind').innerHTML = `<p><h3>Wind : -----</h3></p>`
    searchInput.value = ""
}

searchBtn.onclick = () => getWeather(searchInput.value,options) 
resetBtn.onclick = () => reset()