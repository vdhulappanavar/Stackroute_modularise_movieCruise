import {appState , chnageCurrentView} from '../appState'
import {getMovieListData} from './getMovieListData'
import {createViewForMovieList} from './createViewForMovieList'
function dummyOnClick1(){
  console.log("in dummy on click1")
  console.log($(this).attr("id"))
  appState["addToCollectionId"] = $(this).attr("id")
  chnageCurrentView('AddTocollection')
}
export function dashboardComponentController(){
  let temporaryViewTemplate = "TESTING123"
  console.log("in dashboardComponentController")
  console.log(appState)
  if(appState['dashboardMovieList'].length == 0){
    console.log("dashboardMovieList is empty")
    console.log("populate data : make fetch call")
    const categorys = ['top_rated']
    // getMovieListData('top_rated')
    //   .then(res => {
        
    //   })
    // categorys.forEach(category => {
    //   getMovieListData(category)
    //     .then(res => {
    //       appState[dashboardMovieList].push({
    //         "movieCategory" : category,
    //         "movieList" : JSON.parse(res)
    //       })
    //       console.log(appState)
    //     })
    // })

    //categorys.forEach(category => console.log(category))

    categorys.forEach(category => {
      console.log(category)
      getMovieListData(category)
        .then(res => {
          console.log(res.results[0]['title'])
          temporaryViewTemplate +=res.results[0]['title']
          console.log("inside for each : " +  temporaryViewTemplate)
          createViewForMovieList(res.results)
          //return temporaryViewTemplate
          //$("#app").append(temporaryViewTemplate)
          
          $("#app").append(createViewForMovieList(res.results))
          $(".testClick").on("click" , dummyOnClick1)
        })
    })
  }
  console.log("exit dashboardComponentController")
  
}