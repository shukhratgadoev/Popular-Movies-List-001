import { takeLatest } from 'redux-saga/effects';

import * as types from '../../actionTypes/moviesList';

import { fetchMoviesList, searchMovie } from './moviesList';

export default function*() {
    yield takeLatest(types.FETCH_MOVIES_LIST, fetchMoviesList);
    yield takeLatest<any>(types.SEARCH_MOVIES, searchMovie);
}