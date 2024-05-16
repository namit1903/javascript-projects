document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('city-input').value;
  console.log(city)
  getWeatherData(city);
});
const apikey='98de6b49bc2dc3c4e3f3b1c5d3cc3c0a';
const geo_api='b71fa7ce165b422f9741a5d4b898b27f';
async function getWeatherData(city) {


  const geo_url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geo_api}`
 

  const res=await fetch(geo_url);
  const data=await res.json();
console.log(data.results[0].geometry.lng)
const lat=data.results[0].geometry.lat;
const lon=data.results[0].geometry.lng;
//lets get data
const apik=`ajHh9n0oX8JdjJT6Mtv9kudefy1VuYfO`
 const url=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apikey}`;
 const url2=`https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&apikey=${apik}`
 const response=await fetch(url2);
 const weatherData= await response.json();
 console.log(weatherData.timelines.hourly)


}
