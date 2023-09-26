class storage {
 constructor(){
    this.city;
    this.state;
    this.defaultcity = 'miami';
    this.defaultstate = 'FL';
 }

 getlocationData() {
   if(localStorage.getItem('city') === null) {
      this.city = this.defaultcity; 
   } else {
     this.city = localStorage.getItem('city');
   }

   if(localStorage.getItem('state') === null) {
            this.state = this.defaultstate; 
         } else {
           this.state = localStorage.getItem('state');
         }

    return {
      city: this.city,
      state: this.state
    }
 }

 setlocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state)
 }
}