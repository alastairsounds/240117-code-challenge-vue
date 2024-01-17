export default {
  async searchMovies(search) {
    console.log(search)
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzdkYjViMWM2ZmQ0NDRkOWU5MTBlNTY2NWExYjY1ZCIsInN1YiI6IjY1YTgwMjY1NTI5NGU3MDEyZGQyZWUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqKK2rMTkD4E7fXnIs8HmSB2RsZg1FRTHvkfwMR-GW4'
      }
    }

    console.log(url)

    const response = await fetch(url, options)
    const json = await response.json()

    // reduce the number of movies to 10
    json.results = json.results.slice(0, 10)

    // redefine each movie in json.results to include only the properties we want:
    // movie_id, title, poster_image_url
    json.results = json.results.map((movie) => {
      return {
        movie_id: movie.id,
        title: movie.title,
        poster_image_url: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        popularity_summary: `Popularity score of ${movie.popularity} from ${movie.vote_count} votes`
      }
    })

    console.log(json.results)

    return json.results
  }
}
