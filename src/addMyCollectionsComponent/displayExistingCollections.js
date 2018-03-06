import {appState} from '../appState'
export function displayExistingCollections(){
  
  let myCollectionsList = appState["myCollections"]
  console.log(myCollectionsList)
  let template = ``;
  // myCollectionsList.forEach(list =>{
  //   template =`<h1>${}`
  //   list.forEach(movie=>{

  //   })
  // })
  // template += `<ul class="collapsible" data-collapsible="accordion">`
  // Object.keys(myCollectionsList).forEach(collectionName =>{
    // template +=`<h1>${collectionName}</h1>`
    // template += "<ul>"
    // template += `<li>`
    // template+= `<div class="collapsible-header"><i class="material-icons">filter_drama</i>${collectionName}</div>`
    // template += `<div class="collapsible-body">`
    // template += "heyyyy"
    // template += ` <ul class="collection">`
    // console.log(collectionName)
    // //console.log(myCollectionsList[collectionName][0])
    // myCollectionsList[collectionName].forEach(movie => {
    //     // template+=`<li>${movie}</li>`
    //     template += `<li class="collection-item">${movie}</li>`

    // })
    // // template +="</ul>"
    // template +="</ul>"
  //   template +="</div>"
  //   template +="</li>"
  // })
  // template +="</ul>"

//   template = `
  
//   <ul class="collapsible" data-collapsible="accordion" >
//     <li>
//       <div id="accordianCreateHead" class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
//       <div id="accordianCreate" class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
//     </li>
//     <li>
//       <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
//       <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
//     </li>
//     <li>
//       <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
//       <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
//     </li>
//   </ul>

  
//   `

//   $("#accordianCreateHead").on("click" , function(){
//     console.log("trying to expand")
//       $("#accordianCreate").trigger("expand")
//   });

//   template = `
//   <button type="button" data-icon="gear" data-theme="b" data-iconpos="right" data-mini="true" data-inline="true" id="add">Add</button>
//   <button type="button" data-icon="plus" data-theme="b" data-iconpos="right" data-mini="true" data-inline="true" id="expand">Expand last</button>
//   <button type="button" data-icon="minus" data-theme="b" data-iconpos="right" data-mini="true" data-inline="true" id="collapse">Collapse last</button>
//   <div data-role="collapsible-set" data-content-theme="d" id="set">
//       <div data-role="collapsible" id="set1" data-collapsed="true">
//           <h3>Section 1</h3>
//           <p>I'm the collapsible content.</p>
//       </div>
//   </div>
//   `
//   $("#add").click(function() {
    
//     var content = `hello`
//     $("#set").append( content ).collapsibleset('refresh');
// });
// $("#expand").click(function() {
//     $("#set").children(":last").trigger( "expand" );
// });
// $("#collapse").click(function() {
//     $("#set").children(":last").trigger( "collapse" );
// });

Object.keys(myCollectionsList).forEach(collectionName =>{
  template += `
  <ul class="collection with-header">
  <li class="collection-header">
  <div class="row">
    <h4 class="col s6 collectionNameToEdit" id=${collectionName}>${collectionName}</h4> 
    <div class="col s6 align-right">
    <a id=${collectionName} class="addToCollection btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>
      <a id=${collectionName} class="editCollectionName btn-floating btn-large waves-effect waves-light"><i class="material-icons">mode_edit</i></a>
      <a id=${collectionName} class="deleteCollectionName btn-floating btn-large waves-effect waves-light"><i class="material-icons">delete</i></a>
    </div>
    </div>
  `

  myCollectionsList[collectionName].forEach(movie =>{
    template += `<li class="collection-item">${movie}</li>`
  })

})

  console.log(template)
  return template
  // console.log("+++++++")
  //   for(let i in myCollectionsList){
  //     console.log(i)
  //     console.log(myCollectionsList[i])
  //   }

}