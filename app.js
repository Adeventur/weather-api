// Init storage
const storage = new storage();
// get strored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMconstentLoaded', getweather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').Value;
  const state = document.getElementById('state').Value;
  
  // change location
  weather.changeLocation(city, state);

  // set location in LS
  storage.setLocationData(city, state);

  // get and display weather
  getweather();

  // close modal
  $('#locModal').modal('hide');
});

function getweather(){
weather.getWeather()
 .then(result => {
   Ui.paint(results);      
 })
 .catch(err => console.log(err));
}