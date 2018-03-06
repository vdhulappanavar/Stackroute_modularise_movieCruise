import {appState , chnageCurrentView} from '../appState'
import {displayExistingCollections} from './displayExistingCollections' 


function render(){
  $("#myCollectionsList").html('')
  $("#myCollectionsList").append(displayExistingCollections())
  $(".editCollectionName").click(editCollectionName);
  $(".deleteCollectionName").click(deleteCollectionName)
  $(".addToExistingCollection").click(addToExistingCollection)
}

function addToExistingCollection(){
  console.log($(this).attr("id"))
  let toEditCollectionId = $(this).attr("id")
  appState["myCollections"][toEditCollectionId].push(appState["addToCollectionId"])
  render()
}

function deleteCollectionName(){
  console.log($(this).attr("id"))
  delete appState["myCollections"][$(this).attr("id")];
  render()
}



function editCollectionName(){
  console.log($(this).attr("id"))
  let toEditCollectionId = $(this).attr("id")
  $(`#${toEditCollectionId}`).html(`
  <div class="row">
  <div class="input-field col s5 offset-s2">
    <input  id="editCollectionName" type="text" value="${toEditCollectionId}">
    <label for="editCollectionName">Collection Name</label>
  </div>
  <a class="waves-effect waves-light btn-large col s2" id="changeNameOfCollection">Done</a>
</div>
  `)

  $("#changeNameOfCollection").click(function(){
    console.log("to change Name" + toEditCollectionId )
    // console.log(appState)
    // console.log(appState["myCollections"])
    // console.log(appState["myCollections"]["cd"])
    // console.log(appState["myCollections"][])
    appState["myCollections"][$("#editCollectionName").val()] = appState["myCollections"][toEditCollectionId].slice()
    delete appState["myCollections"][toEditCollectionId]

    render()
  })

}
function addNewCollection(){
  let serchTerm = $("#newCollectionName").attr('value')
  console.log(serchTerm)
  serchTerm = $("#newCollectionName").val()
  console.log(serchTerm)
  console.log("____")
  if(serchTerm != ""){
    if(!appState["myCollections"][serchTerm]){
        console.log("create The Ele")
        appState["myCollections"][serchTerm] = []
        
        
      }
    else{
      //$("#app").before("<div>Collections Already Exists Adding to it</div>")
      //$("#alreadyExistsInfo").html("Collections Already Exists Adding to it")
      $("#alreadyExistsInfo").html("Collections Already Exists Adding to it")
    }
    
    appState["myCollections"][serchTerm].push(appState["addToCollectionId"])
    //appState["myCollections"][]
    render()
    console.log("myCollections:::")
    console.log(appState)
    
  }
  //console.log(document.getElementById("newCollectionName").value)
}
function createNewCollection(){
  console.log("in createNewCollection")
  $("#app").before(`
  <div class="row">
    <div class="input-field col s6 offset-s2">
      <input  id="newCollectionName" type="text" class="validate">
      <label for="newCollectionName">Collection Name</label>
    </div>
    <a class="waves-effect waves-light btn-large col s3" id="addNewCollectionButon">Create Collection</a>
  </div>
  <div id="alreadyExistsInfo"></div>
  `)
  $("#app").addClass("container")
  $("#addNewCollectionButon").on("click" , addNewCollection )
  $("#app").append(`Your Collections
      <div id="myCollectionsList"></div>
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
    
    displayExistingCollections()
  }
}