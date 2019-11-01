import { call, put, delay } from 'redux-saga/effects';
import MoviesListApi from '../../api/moviesList';
import SearchMoviesApi from '../../api/searchMovies';
import * as actions from '../../action/moviesList';
import * as searchActions from '../../action/searchMovies';

export function* fetchMoviesList() {
    try {
        const response = yield call(MoviesListApi);
        yield put(actions.fetchMovieListSuccess(response));
    }
   catch (error) {
       yield put(actions.fetchMovieListFailure(error));
   }
}


export function* searchMovie({meta}: { meta: {searchText: string} }) {
    try {
        if(meta.searchText.trim() === ''){
            const response = yield call(MoviesListApi);
            yield put(actions.fetchMovieListSuccess(response))
        }else {
            yield delay(500);
            const response = yield call(SearchMoviesApi, meta.searchText);
            yield put(searchActions.searchMoviesSuccess(response));
        }
    }
   catch (error) {
       yield put(searchActions.searchMoviesFailure(error));
   }
}