let appStoreVar = require('./readFromLocalStore')
let getMovies = require('./getMovies')
function init(){
    console.log("in init");
    //console.log(appStoreVar);
    //readLocalStorage();
    //console.log("!!!")
    //console.log(appStoreVar());
    const apiKey = '4a9f640e502709dc6bcd23286de1426e';
    getMovies(apiKey)
      .then(data => console.log(data))
  }
 
  document.onload = init();