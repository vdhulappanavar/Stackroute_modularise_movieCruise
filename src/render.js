import {appState} from './appState'
import {dashboardComponentController} from './dashboardComponent/dashboardComponentController'
export function renderCurrentView(){
  console.log("render")
  console.log(appState)
  switch(appState['currentView']){
    case 'homeDashBoard' : 
      dashboardComponentController()
      break;
    case 'testHomeDashboard' :
    console.log("in testHomeDashboard case")
      dashboardComponentController()
      break;
  }

  //if()
}