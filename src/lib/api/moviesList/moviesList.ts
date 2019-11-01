import axios from "axios";

const API_KEY = "c4b50bad048769fabdb6f46d0cca11cb";

const MoviesListApi = () =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?page=2&language=en-US&api_key=${API_KEY}`
    )
    .then(result => {
      return result.data.results;
    });

export default MoviesListApi;
