import {appState} from '../appState'
export function getMovieListData(category){
  console.log("get Movie List Data")
  console.log(appState["apiKey"])
  const apiKey = appState["apiKey"]
  //return fetch( `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  //          .then(res => res.json())
}