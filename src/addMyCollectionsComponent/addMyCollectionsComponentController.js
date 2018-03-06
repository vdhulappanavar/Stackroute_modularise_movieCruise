import {appState , chnageCurrentView} from '../appState'

function createNewCollection(){
  console.log("in createNewCollection")
  $("#app").before(`
  <div class="row">
    <div class="input-field col s6">
      <input  id="newCollectionName" type="text" class="validate">
      <label for="newCollectionName">Collection Name</label>
    </div>
    <a class="waves-effect waves-light btn-large col s3" id="addCollection">Add Collection</a>
  </div>
  
  `)

  $("#createElementButton").remove()
}
export function addMyCollectionsComponentController(){
  console.log("to add " + appState["addToCollectionId"])

  var createElementButton = $("#app").append(`<a class="waves-effect waves-light btn-large " id="createElementButton">Create New Collection</a>`)
  //console.log(createElementButton)
  //createElementButton.click(createNewCollection)
  $("#createElementButton").on("click" , createNewCollection )

  if(appState["myCollections"].length == 0){
    console.log("create collection")
  }
  else{
    console.log("display existing colletions")
    $("#app").append("Names OF existing collections")
    
  }
}