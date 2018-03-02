function getFromLocalStore(){
  //if(localStorage)
  //localStorage.setItem("appStore" , JSON.stringify(appStore))
  //console.log(localStorage["appStore"]);
  let appStore = {
    "collection" : {
      "Action" : {284054: "Black Panther" , 141052 : "Justice League"},
      "Comedy" : {214756 : "ted 2"}
    }
  }
  if(!localStorage.getItem("appStore")){
    localStorage.setItem("appStore" , JSON.stringify(appStore));
  }
  else{
    //console.log("in Else")
    appStore = JSON.parse(localStorage.getItem("appStore"))
  }
  return appStore;
}

module.exports = getFromLocalStore;

