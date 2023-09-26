class wheather {
 constructor(city, state) {
    this.apikey = '99dfe35fcb7de1ee'
    this.city = city;
    this.state = state; 
 }      

 // fetch wheather from API
 async getWeather() {
  const response = await fetch ('http://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json');
 
const responseData = await response.json();

return responseData.current_observation
}

// change wheather location
changelocation(city, state){
 this.city = city;
 this.state = state;
}
}