import { all } from 'redux-saga/effects';
import fetchMovieList from './moviesList';
import searchMovie from './moviesList';

export default function* movieSagas() {
    yield all([
        fetchMovieList(),
        searchMovie(),
    ]);
}
