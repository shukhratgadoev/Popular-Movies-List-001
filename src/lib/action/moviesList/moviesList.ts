import * as types from '../../actionTypes/moviesList';

export const fetchMovieList = () => ({
    type: types.FETCH_MOVIES_LIST,
});

export const fetchMovieListSuccess = (payload: string) => ({
    payload,
    type: types.FETCH_MOVIES_LIST_SUCCESS,
});

export const fetchMovieListFailure = (payload: string) => ({
    payload,
    type: types.FETCH_MOVIES_LIST_FAILURE,
});