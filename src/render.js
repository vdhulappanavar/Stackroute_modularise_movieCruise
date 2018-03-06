import {appState} from './appState'
import {dashboardComponentController} from './dashboardComponent/dashboardComponentController'
import {addMyCollectionsComponentController} from './addMyCollectionsComponent/addMyCollectionsComponentController'
export function renderCurrentView(){
  console.log("render")
  $("#app").html('')
  console.log(appState)
  //let template = `hey`;
  switch(appState['currentView']){
    case 'homeDashBoard' : 
    //template=dashboardComponentController()
    dashboardComponentController()
      break;
    case 'testHomeDashboard' :
    console.log("in testHomeDashboard case")
    //template=dashboardComponentController()
    dashboardComponentController()
      break;
    case 'AddTocollection' :
      console.log("in AddTocollection case")
      console.log("To Add this movie ID " + appState["addToCollectionId"])
      addMyCollectionsComponentController()
      //template=dashboardComponentController()
      //dashboardComponentController()
        break;
  }
  //console.log("template : " + template)

  //if()
}