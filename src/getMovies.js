function getMovieList(apiKey){
  return fetch( `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
            .then(res => res.json())
}

module.exports = getMovieList;