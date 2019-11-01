import axios from "axios";

const API_KEY = "c4b50bad048769fabdb6f46d0cca11cb";

const SearchMoviesApi = (searchValue: string) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?page=&language=en-US&api_key=${API_KEY}&query=${searchValue}`
    )
    .then(result => {
      return result.data.results;
    });

export default SearchMoviesApi;
