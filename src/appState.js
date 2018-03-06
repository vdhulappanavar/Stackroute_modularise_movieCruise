import {renderCurrentView} from './render'
export var appState = {
  "currentView" : "",
  "dashboardMovieList" : [],
  "apiKey" : "4a9f640e502709dc6bcd23286de1426e",
  "addToCollectionId" : undefined,
  "myCollections" : []
}

export function chnageCurrentView(chnageViewState){
  appState["currentView"] = chnageViewState;
  //dispatch();
  renderCurrentView()
}

export function setApiKey(apiKey){
  appState["setApiKey"] = apiKey;
  return "Success";
}