const icon=document.getElementById('current-icon');
const place=document.getElementById('city-name');
const temp=document.getElementById('current-temperature');
const detail=document.getElementById('weather-description');
const humidity=document.querySelector('#humidity');
const wind=document.querySelector('#wind-speed');
const pressure=document.querySelector('#pressure');
document.getElementById('search-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const city = document.getElementById('city-input');
  console.log(city.value)
 const data= await getWeatherData(city.value);
  city.value="";
  printUi(data);
});
function printUi(data) {
  console.log(data, 'hai mila na data')
  icon.src=data.current.condition.icon;
  place.innerHTML=`${data.location.name},${data.location.region},${data.location.country}`;
  temp.innerHTML=`${data.current.temp_c}Celsius`;
  humidity.innerHTML=`Humidity:${data.current.humidity}`;
  wind.innerHTML=`Wind:${data.current.wind_kph}kph`;
  pressure.innerHTML=`Pressure:${data.current.pressure_in}`
}

// const geo_api='b71fa7ce165b422f9741a5d4b898b27f';
async function getWeatherData(city) {

 const {lat,lon}=await getLocation(city);
 console.log(`${city} lattitude:${lat} ; longitude:${lon}`);
return await fetchWeather(city);
//  console.log(data);

 /* const res=await fetch(geo_url);
  const data=await res.json();
console.log(data.results[0].geometry.lng)
// const lat=data.results[0].geometry.lat;
// const lon=data.results[0].geometry.lng;
*/
//lets get data from another api this will work fine but we'll try another api so commenting this for this time
/*
const apik=`ajHh9n0oX8JdjJT6Mtv9kudefy1VuYfO`

 const url=`https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&apikey=${apik}`
 const response=await fetch(url);
 const weatherData= await response.json();
 console.log(weatherData.timelines.hourly);
 */


}
// function to get latitute and longitude
async function getLocation(city){
  const geo_api='b71fa7ce165b422f9741a5d4b898b27f';
  const geo_url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geo_api}`;
  const res=await fetch(geo_url);
  const data=await res.json();
console.log(data.results[0].geometry.lng)
return{
  lat:data.results[0].geometry.lat,
  lon:data.results[0].geometry.lng
}
}
//api function to fetch data abot the weather of the city
async function fetchWeather(city){
 const apiKey=`78507f75299646c4979101434241605`
 const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
 const response= await fetch(url);
 const data= await response.json();
//  console.log(data)
return data;

}

 


