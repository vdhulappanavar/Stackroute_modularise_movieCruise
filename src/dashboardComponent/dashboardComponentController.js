import {appState} from '../appState'
import {getMovieListData} from './getMovieListData'
export function dashboardComponentController(){
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
        .then(res => console.log(res.results[0]['title']))
    })
  }
  console.log("exit dashboardComponentController")
}